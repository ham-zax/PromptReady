Of course. Here is a comprehensive, step-by-step migration plan designed to be so explicit and clear that even a basic AI assistant in an IDE can follow it to execute a perfect migration.

Each step is atomic, with precise file names, commands, and code blocks.

---

# **Comprehensive Migration Plan: Vite to Next.js 15 (App Router, Static Export)**

**Objective:** To migrate a Vite-based React application to a fully static Next.js 15 application using the App Router and `output: 'export'`. The final output will be a pure HTML/CSS/JS site suitable for any static hosting service.

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

**Step 2: Audit Your Vite Project**
Create a temporary text file and note the following from your Vite project:
1.  **Styling System:** Is it Tailwind CSS, CSS Modules (`*.module.css`), or just a global CSS file (`index.css`)?
2.  **Assets:** List the image files and fonts located in `src/assets/`.
3.  **Environment Variables:** List all variables in your `.env` file (they start with `VITE_`).
4.  **Components:** Confirm your components are `Features.tsx`, `Hero.tsx`, and `Pricing.tsx`.

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
    *   What is your project named? `my-nextjs-landing-page` (or your choice)
    *   Would you like to use TypeScript? **Yes**
    *   Would you like to use ESLint? **Yes**
    *   Would you like to use Tailwind CSS? **Yes** (Assuming you use it)
    *   Would you like to use `src/` directory? **No** (For simplicity in this plan)
    *   Would you like to use App Router? **Yes**
    *   Would you like to customize the default import alias? **No** (`@/*`)

**Step 4: Configure for Static Export (Critical for SSG)**
1.  In your new Next.js project, open the file `next.config.mjs`.
2.  **Delete** all its content and **replace** it with this exact code:
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      // This is the most important line: it enables static export.
      output: 'export',

      // Required for static export with next/image.
      // Or you can use standard <img> tags.
      images: {
        unoptimized: true,
      },
    };

    export default nextConfig;
    ```
3.  Save the file. This configuration forces `next build` to produce a static `out/` directory.

---

### **Phase 2: Migrating Components & Assets**

*   **Goal:** Move all visual elements from the Vite project to the Next.js project.

**Step 5: Migrate Global Styles**
1.  In your **Vite** project, open `src/index.css` (or your main global stylesheet).
2.  Copy all the CSS content.
3.  In your **Next.js** project, open `app/globals.css`.
4.  Delete all its default content and paste the CSS you copied.
5.  Save the file.

**Step 6: Migrate Components**
1.  In your **Next.js** project, create a new folder named `components` at the root level.
2.  Copy `Features.tsx`, `Hero.tsx`, and `Pricing.tsx` from your Vite project's `src/components/` folder.
3.  Paste them into the new `components/` folder in your Next.js project.

**Step 7: Migrate Static Assets (Images, Icons)**
1.  Locate the `src/assets/` folder in your **Vite** project.
2.  Copy all files from within that folder.
3.  In your **Next.js** project, open the `public/` folder.
4.  Paste the copied files directly into `public/`.
5.  **Action Required:** You must now update all image paths in your components. Change paths like `import logo from '../assets/logo.svg'` and `<img src={logo} />` to a simple string path from the public root: `<img src="/logo.svg" />`.

---

### **Phase 3: Integration & Logic**

*   **Goal:** Assemble the migrated parts into working pages and add the waitlist form logic using modern Next.js 15 patterns.

**Step 8: Assemble the Homepage**
1.  In your **Next.js** project, open `app/page.tsx`.
2.  **Delete** all its content and **replace** it with this code to build your page:
    ```tsx
    import { Hero } from '@/components/Hero';
    import { Features } from '@/components/Features';
    import { Pricing } from '@/components/Pricing';
    import { WaitlistForm } from '@/components/WaitlistForm'; // We will create this next

    // CRITICAL: This line forces Next.js 15 to treat this page as fully static.
    export const dynamic = 'force-static';

    export default function HomePage() {
      return (
        <main>
          <Hero />
          <Features />
          <WaitlistForm /> {/* Add the form component where you want it */}
          <Pricing />
        </main>
      );
    }
    ```

**Step 9: Create the Waitlist Form Server Logic (Server Action)**
1.  In your **Next.js** project, create a new file at `app/actions.ts`.
2.  Paste the following code into it. This code runs securely on the server.
    ```typescript
    // This directive marks this entire file as Server-Only code.
    'use server';

    import { z } from 'zod'; // A popular library for validation

    // Define the shape of our form data
    const schema = z.object({
      email: z.string().email({ message: 'Invalid email address.' }),
    });

    // This is the function that will be called by our form
    export async function subscribeUser(prevState: any, formData: FormData) {
      const validatedFields = schema.safeParse({
        email: formData.get('email'),
      });

      // If validation fails, return the error message
      if (!validatedFields.success) {
        return {
          message: validatedFields.error.flatten().fieldErrors.email?.[0],
        };
      }
      
      const email = validatedFields.data.email;

      // --- TODO: YOUR DATABASE LOGIC HERE ---
      // Replace this with your actual Supabase call.
      try {
        console.log(`Subscribing email to Supabase: ${email}`);
        // await supabase.from('waitlist').insert({ email });
        return { message: 'Success! Thank you for joining.' };
      } catch (e) {
        return { message: 'Error: Could not subscribe. Please try again.' };
      }
      // ------------------------------------
    }
    ```

**Step 10: Create the Interactive Waitlist Form Component**
1.  In your **Next.js** project, create a new file at `components/WaitlistForm.tsx`.
2.  Paste this code into the file. This component uses React 19 hooks for a great UX.
    ```tsx
    // This directive marks this as a Client Component, allowing it to use state and hooks.
    'use client';

    import { useActionState } from 'react';
    import { useFormStatus } from 'react-dom';
    import { subscribeUser } from '@/app/actions'; // Import the server action

    // A small component to show a loading state on the button
    function SubmitButton() {
      const { pending } = useFormStatus();
      return (
        <button type="submit" disabled={pending} className="your-button-styles">
          {pending ? 'Subscribing...' : 'Join Waitlist'}
        </button>
      );
    }

    export function WaitlistForm() {
      const [state, formAction] = useActionState(subscribeUser, { message: '' });

      return (
        <div>
          <form action={formAction}>
            <input type="email" name="email" placeholder="your@email.com" required className="your-input-styles" />
            <SubmitButton />
          </form>
          {state.message && <p>{state.message}</p>}
        </div>
      );
    }
    ```

**Step 11: Set Up Environment Variables**
1.  In the root of your **Next.js** project, create a new file named `.env.local`.
2.  Open your old Vite `.env` file.
3.  For every variable like `VITE_SUPABASE_URL`, copy it into `.env.local` but rename it to `NEXT_PUBLIC_SUPABASE_URL`.
    ```env
    # Example .env.local file
    NEXT_PUBLIC_SUPABASE_URL=...
    NEXT_PUBLIC_SUPABASE_ANON_KEY=...
    ```

---

### **Phase 4: Final Build & Verification**

*   **Goal:** Build the static site and confirm it works as expected.

**Step 12: Build the Static Site**
1.  Open your terminal in the Next.js project root.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This command will generate a folder named `out/` containing your complete static website.

**Step 13: Verify the Static Site Locally**
1.  To preview the final site, you can use a simple local server.
2.  Run this command in your terminal:
    ```bash
    npx serve out
    ```
3.  Open your browser to the URL provided (usually `http://localhost:3000`).
4.  Click around and test the form to ensure everything works perfectly.

**Step 14: Deploy**
1.  You are now ready to deploy.
2.  Upload the **contents of the `out/` directory** to any static web hosting provider (e.g., Netlify, Cloudflare Pages, GitHub Pages).

---

### **Summary Checklist**

- [ ] Node.js version is >= 18.18.0.
- [ ] `next.config.mjs` is configured with `output: 'export'`.
- [ ] Global styles have been migrated to `app/globals.css`.
- [ ] All components (`Hero`, `Features`, `Pricing`) are in the `components/` folder.
- [ ] All assets (images, etc.) are in the `public/` folder, and `<img>` paths are updated.
- [ ] `app/page.tsx` imports the components and includes `export const dynamic = 'force-static';`.
- [ ] The waitlist form is implemented using `app/actions.ts` and `components/WaitlistForm.tsx`.
- [ ] Environment variables are in `.env.local` and prefixed with `NEXT_PUBLIC_`.
- [ ] `npm run build` completes without errors.
- [ ] The site in the `out/` folder has been verified and works correctly.