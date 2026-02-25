interface WaitlistEnv {
  RESEND_API_KEY?: string;
  WAITLIST_NOTIFY_EMAIL?: string;
  WAITLIST_FROM_EMAIL?: string;
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
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    const resendResponse = await fetch('https://api.resend.com/emails', {
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

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return json({ error: 'Failed to process waitlist signup' }, 500);
    }

    return json({ success: true, message: 'Added to waitlist' }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Function error:', message);
    return json({ error: 'Internal server error' }, 500);
  }
}
