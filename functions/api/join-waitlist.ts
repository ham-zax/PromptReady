interface WaitlistEnv {
  RESEND_API_KEY?: string;
  WAITLIST_NOTIFY_EMAIL?: string;
  WAITLIST_FROM_EMAIL?: string;
  WAITLIST_AUTOREPLY_FROM_EMAIL?: string;
  WAITLIST_AUTOREPLY_REPLY_TO?: string;
  WAITLIST_AUTOREPLY_SUBJECT?: string;
}

interface JoinWaitlistContext {
  request: Request;
  env: WaitlistEnv;
}

interface JoinWaitlistBody {
  name?: string;
  email?: string;
}

const JSON_HEADERS = { 'Content-Type': 'application/json' };

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const json = (payload: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(payload), { status, headers: JSON_HEADERS });

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export async function onRequestPost(context: JoinWaitlistContext): Promise<Response> {
  try {
    const { request, env } = context;

    let body: JoinWaitlistBody;
    try {
      body = (await request.json()) as JoinWaitlistBody;
    } catch {
      return json({ error: 'Invalid request body' }, 400);
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim().toLowerCase();

    if (!name || !email) {
      return json({ error: 'Name and email are required' }, 400);
    }

    if (!isValidEmail(email)) {
      return json({ error: 'Please provide a valid email address' }, 400);
    }

    if (name.length > 120 || email.length > 254) {
      return json({ error: 'Input is too long' }, 400);
    }

    const resendApiKey = env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return json({ error: 'Server configuration error' }, 500);
    }

    const notifyEmail = env.WAITLIST_NOTIFY_EMAIL || 'ceo@promptready.app';
    const fromEmail = env.WAITLIST_FROM_EMAIL || 'Waitlist Bot <ceo@promptready.app>';
    const autoReplyFromEmail = env.WAITLIST_AUTOREPLY_FROM_EMAIL || fromEmail;
    const autoReplyReplyTo = env.WAITLIST_AUTOREPLY_REPLY_TO || notifyEmail;
    const autoReplySubject =
      env.WAITLIST_AUTOREPLY_SUBJECT || `You're on the list, ${firstName} — PromptReady`;
    const firstName = name.split(/\s+/)[0] || 'there';
    const safeName = escapeHtml(name);
    const safeFirstName = escapeHtml(firstName);
    const safeEmail = escapeHtml(email);

    // 1. Notification email for internal team.
    const notifyResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail,
        reply_to: email,
        subject: `New Waitlist Signup: ${name}`,
        html: [
          '<h2>New Waitlist Signup!</h2>',
          `<p><strong>Name:</strong> ${safeName}</p>`,
          `<p><strong>Email:</strong> ${safeEmail}</p>`,
          '<br/>',
          '<p><em>Sent from the PromptReady waitlist function.</em></p>',
        ].join('\n'),
      }),
    });

    if (!notifyResponse.ok) {
      const errorText = await notifyResponse.text();
      console.error('Resend API error (Notify):', errorText);
      return json({ error: 'Failed to process waitlist signup' }, 500);
    }

    // 2. Best-effort auto-reply email for the user.
    const autoReplyResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: autoReplyFromEmail,
        to: email,
        reply_to: autoReplyReplyTo,
        subject: autoReplySubject,
        html: [
          `<p>Hi ${safeFirstName},</p>`,
          '<p>Thanks for joining PromptReady. You are officially on the early-access list.</p>',
          '<p>What happens next:</p>',
          '<ul>',
          '<li>We are finalizing onboarding for the next cohort.</li>',
          '<li>You will get an invite email as soon as your slot opens.</li>',
          '</ul>',
          '<p>If you want priority, reply with your workflow (coding, research, content, etc.) and where cleanup slows you down most.</p>',
          `<br/>`,
          '<p>Best,<br/>Hamza<br/>CEO, PromptReady</p>',
          '<p><em>This email is from Hamza, CEO at PromptReady.</em></p>',
        ].join('\n'),
      }),
    });

    if (!autoReplyResponse.ok) {
      const errorText = await autoReplyResponse.text();
      console.error('Resend API error (Auto-Reply):', errorText);
    }

    return json({ success: true, message: 'Added to waitlist' }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Function error:', message);
    return json({ error: 'Internal server error' }, 500);
  }
}
