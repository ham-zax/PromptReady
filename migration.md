---

# **Definitive Migration Plan: Migrating `PromptReady` to Next.js 15**

**Objective:** To migrate the `PromptReady` Vite application to a fully static Next.js 15 application using the App Router and `output: 'export'`. The final output will be a pure HTML/CSS/JS site suitable for any static hosting service, with all existing pages, assets, and logic correctly ported.

---

### **Phase 0: Pre-Flight Check & Environment Setup**

*   **Goal:** Ensure your system is ready and you have inventoried the Vite project.

**Step 1: Verify Node.js Version (Critical Requirement)**
Next.js 15 requires Node.js version 18.18.0 or newer.
1.  Open your terminal.
2.  Run the command:
    ```bash
    node -v
    ```
3.  **Confirm** the output is `v18.18.0` or higher. If not, update Node.js before proceeding.

**Step 2: Acknowledged Project Structure (from Codebase Analysis)**
*   **Routes:** `/`, `/demo`, `/pricing`, `/thank-you`, and a 404 page, all handled by `react-router-dom`.
*   **Styling:** Tailwind CSS configured via `tailwind.config.js` and `src/index.css`.
*   **Assets:** SVGs are imported as modules from `src/assets/`. Other static files are in `public/`.
*   **Metadata:** Handled by `react-helmet-async` and static tags in `index.html`.
*   **Analytics:** A custom `useAnalytics` hook integrates with Vercel and PostHog.

---

### **Phase 1: New Project Scaffolding & Configuration**

*   **Goal:** Create a new, correctly configured Next.js 15 project.

**Step 3: Create the Next.js 15 Application**
1.  Navigate to the directory where you want your new project to live.
2.  Run this exact command in your terminal:
    ```bash
    npx create-next-app@latest
    ```
3.  When prompted, answer as follows:
    *   What is your project named? `promptready-nextjs`
    *   Would you like to use TypeScript? **Yes**
    *   Would you like to use ESLint? **Yes**
    *   Would you like to use Tailwind CSS? **Yes**
    *   Would you like to use `src/` directory? **No**
    *   Would you like to use App Router? **Yes**
    *   Would you like to customize the default import alias? **No** (`@/*`)

**Step 4: Configure for Static Export (Critical for SSG)**
1.  In your new `promptready-nextjs` project, open the file `next.config.mjs`.
2.  **Delete** all its content and **replace** it with this exact code:
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      // This is the most important line: it enables static export.
      output: 'export',

      // This is required for static export when using next/image.
      // Alternatively, you can use standard <img> tags.
      images: {
        unoptimized: true,
      },
    };

    export default nextConfig;
    ```
3.  Save the file. This configuration forces `next build` to produce a static `out/` directory.

---

### **Phase 2: Migrating Code & Assets**

*   **Goal:** Move all source code and static assets to the new project.

**Step 5: Migrate All Components, Hooks, Data, and Utils**
1.  **Copy** the entire contents of the `src/components/` directory from your Vite project into the `components/` directory of your Next.js project.
2.  **Create** a `hooks/` directory in your Next.js project. Copy the contents of your old `src/hooks/` into this new directory.
3.  **Create** a `data/` directory in your Next.js project. Copy `src/data/testimonialsData.ts` into it.
4.  **Create** a `lib/` directory in your Next.js project. Copy `src/lib/utils.ts` into it.

**Step 6: Migrate Global Styles**
1.  Open `src/index.css` from your Vite project and copy all of its content.
2.  In your Next.js project, open `app/globals.css`, delete all its default content, and paste the CSS you copied.
3.  Save the file.

**Step 7: Unify and Migrate Public Assets**
1.  Copy all files from your Vite project's `public/` directory (e.g., `robots.txt`, `sitemap.xml`, etc.) into the `public/` directory of your Next.js project.
2.  Copy the SVG files from your Vite project's `src/assets/` folder (`logo.svg`, `logo-white.svg`) into the Next.js project's `public/` directory as well. All static assets will now be served from one location.

**Step 8: Refactor SVG Imports (Critical)**
This is a required change because Next.js handles static assets differently than Vite.
1.  Open `components/ui/Logo.tsx` in your new Next.js project.
2.  **Delete** these two import lines from the top of the file:
    ```typescript
    // DELETE THESE LINES
    import logoSvg from '../../assets/logo.svg';
    import logoWhiteSvg from '../../assets/logo-white.svg';
    ```
3.  Find the `<img>` tag within the `Logo` component.
4.  **Modify** the `src` attribute to use a simple string path pointing to the file in the `public/` directory.
    *   **Old Code:** `src={finalLogoColor === 'dark' ? logoSvg : logoWhiteSvg}`
    *   **New Code:** `src={finalLogoColor === 'dark' ? '/logo.svg' : '/logo-white.svg'}`
5.  Save the file.

---

### **Phase 3: Integration, Routing & Logic**

*   **Goal:** Reconstruct the application structure, pages, and core logic within the Next.js framework.

**Step 9: Create the Root Layout & Migrate Metadata**
This step replaces `index.html` and `react-helmet-async` with Next.js's superior, server-rendered metadata API.
1.  Open `app/layout.tsx`.
2.  **Replace** its entire contents with this code:
    ```tsx
    import type { Metadata } from 'next';
    import { Inter } from 'next/font/google';
    import './globals.css';
    import { Analytics } from '@vercel/analytics/react';

    const inter = Inter({ subsets: ['latin'] });

    // Translates all your SEO tags into the Next.js metadata object
    export const metadata: Metadata = {
      title: 'PromptReady: Get Instantly AI-Ready Content',
      description: 'Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM.',
      metadataBase: new URL('https://promptready.vercel.app'), // Your production URL
      alternates: {
        canonical: '/',
      },
      openGraph: {
        type: 'website',
        siteName: 'PromptReady',
        url: '/',
        locale: 'en_US',
        title: 'Get Instantly AI-Ready Content with PromptReady',
        description: 'Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM.',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'PromptReady Logo and Headline: Skip the Manual Cleanup. Get Instantly AI-Ready Content.',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@YourActualTwitterHandle', // TODO: Replace with your handle
        title: 'Get Instantly AI-Ready Content with PromptReady',
        description: 'Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM.',
        images: ['/og-image.png'],
      },
    };

    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Analytics />
          </body>
        </html>
      );
    }
    ```

**Step 10: Recreate Page Structure via App Router**
You will now map your `react-router-dom` routes to Next.js's file-based routing system.
1.  **Homepage (`/`):**
    *   Open `app/page.tsx`.
    *   Replace its content with the following to render your old `HomePage` component. Note we are adding `'use client'` because `HomePage` uses Framer Motion, which requires browser APIs.
        ```tsx
        'use client';
        import HomePage from '@/components/pages/HomePage'; // Assuming you moved HomePage to components/pages

        export default function Page() {
          const handleAction = (source: string) => console.log(`Action from ${source}`);
          return <HomePage onPrimaryAction={handleAction} />;
        }
        ```
    *(Note: You will need to move your old `src/pages/HomePage.tsx` to `components/pages/HomePage.tsx` and refactor it to remove the `<Helmet>` component).*

2.  **Demo Page (`/demo`):**
    *   Create a new folder: `app/demo`.
    *   Inside it, create a new file: `page.tsx`.
    *   Add this content:
        ```tsx
        'use client';
        import DemoPage from '@/components/pages/DemoPage'; // Assuming you moved DemoPage

        export default function Page() {
          const handleAction = (source: string) => console.log(`Action from ${source}`);
          return <DemoPage onPrimaryAction={handleAction} />;
        }
        ```
    *(Repeat the refactoring for `DemoPage` as you did for `HomePage`)*.

3.  **Pricing Page (`/pricing`):**
    *   Create a new folder: `app/pricing`.
    *   Inside it, create `page.tsx`.
    *   Add this content:
        ```tsx
        'use client';
        import PricingPage from '@/components/pages/PricingPage'; // Assuming you moved PricingPage

        export default function Page() {
          const handleAction = (source: string) => console.log(`Action from ${source}`);
          return <PricingPage onPrimaryAction={handleAction} />;
        }
        ```
    *(Repeat the refactoring for `PricingPage`)*.

4.  **Thank You Page (`/thank-you`):**
    *   Create a folder: `app/thank-you`.
    *   Inside it, create `page.tsx`.
    *   Add this content:
        ```tsx
        'use client';
        import ThankYou from '@/components/pages/ThankYou'; // Assuming you moved ThankYou page

        export default function Page() {
          return <ThankYou />;
        }
        ```
    *(Repeat the refactoring for `ThankYou`)*.

5.  **404 Page:**
    *   Next.js uses a special file for this. Create `app/not-found.tsx`.
    *   Populate it with the JSX from your `NotFoundPage.tsx`. Make sure it's a client component if it uses hooks or interactivity.
        ```tsx
        'use client';
        import NotFoundPage from '@/components/pages/NotFoundPage'; // Assuming you moved NotFoundPage

        export default function NotFound() {
            return <NotFoundPage />;
        }
        ```

6.  **Update All Links:**
    *   Search your entire `components/` directory for any `<Link>` component imported from `react-router-dom`.
    *   Replace every instance with `<Link>` imported from `'next/link'`.
    *   Change the `to` prop to `href`. Example: `<Link to="/demo">` becomes `<Link href="/demo">`.

**Step 11: Create the Waitlist Form with Server Actions**
This replaces your old `SignupForm.tsx` with a more secure and modern implementation.
1.  **Create the Server Action file at `app/actions.ts`:**
    ```typescript
    // This directive marks this entire file as Server-Only code.
    'use server';

    import { z } from 'zod'; // You will need to `npm install zod`

    const schema = z.object({
      email: z.string().email({ message: 'Invalid email address.' }),
    });

    export async function subscribeUser(prevState: any, formData: FormData) {
      const validatedFields = schema.safeParse({
        email: formData.get('email'),
      });

      if (!validatedFields.success) {
        return {
          message: validatedFields.error.flatten().fieldErrors.email?.[0] ?? 'Validation failed.',
        };
      }
      
      const email = validatedFields.data.email;

      // --- TODO: YOUR DATABASE & EMAIL LOGIC HERE ---
      // This is where you would call Supabase and Resend.
      // For this migration, we'll simulate success.
      try {
        console.log(`Subscribing email via external service: ${email}`);
        // await supabase.from('waitlist').insert({ email });
        // await resend.emails.send({...});
        return { message: 'Success! Thank you for joining.' };
      } catch (e) {
        console.error(e);
        return { message: 'Error: Could not subscribe. Please try again.' };
      }
      // ---------------------------------------------
    }
    ```

2.  **Replace `components/SignupForm.tsx` with this new content:**
    ```tsx
    // This directive marks this as a Client Component, allowing it to use state and hooks.
    'use client';

    import { useActionState, useEffect } from 'react';
    import { useFormStatus } from 'react-dom';
    import { subscribeUser } from '@/app/actions'; // Import the server action

    function SubmitButton() {
      const { pending } = useFormStatus();
      return (
        <button type="submit" disabled={pending} className="your-button-styles">
          {pending ? 'Submitting...' : 'Join Waitlist'}
        </button>
      );
    }

    export function SignupForm() {
      const [state, formAction] = useActionState(subscribeUser, { message: '' });

      useEffect(() => {
        if (state.message?.startsWith('Success')) {
          // Use Next.js's router to navigate
          window.location.href = '/thank-you'; 
        }
      }, [state]);

      return (
        <div>
          <form action={formAction}>
            <input type="email" name="email" placeholder="your@email.com" required className="your-input-styles" />
            <SubmitButton />
          </form>
          {state.message && !state.message.startsWith('Success') && <p className="text-red-500 mt-2">{state.message}</p>}
        </div>
      );
    }
    ```

**Step 12: Set Up Environment Variables**
1.  In the root of your Next.js project, create a new file named `.env.local`.
2.  Copy your variables from the old `.env` file, but rename them from `VITE_...` to `NEXT_PUBLIC_...` for client-side variables, or just the name for server-side secrets.
    ```env
    # Example .env.local file

    # Available on the client
    NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key

    # Only available on the server (e.g., in app/actions.ts)
    SUPABASE_URL=...
    SUPABASE_ANON_KEY=...
    RESEND_API_KEY=...
    ```

---

### **Phase 4: Finalizing & Cleaning Up**

*   **Goal:** Build the static site, verify it, and remove obsolete code.

**Step 13: Cleanup Dependencies**
1.  Open `package.json` in your new Next.js project.
2.  Run `npm uninstall react-router-dom @types/react-router-dom react-helmet-async`. This removes the now-obsolete packages.
3.  Run `npm install zod`.

**Step 14: Build the Static Site**
1.  Open your terminal in the Next.js project root.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This command will generate a folder named `out/` containing your complete static website.

**Step 15: Verify the Static Site Locally**
1.  To preview the final site, run this command in your terminal:
    ```bash
    npx serve out
    ```
2.  Open your browser to the URL provided (usually `http://localhost:3000`).
3.  Thoroughly test all pages, links, and the waitlist form.

**Step 16: Deploy**
1.  You are now ready to deploy.
2.  Upload the **contents of the `out/` directory** to any static web hosting provider (e.g., Netlify, Cloudflare Pages, Vercel).