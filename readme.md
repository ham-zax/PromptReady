# PromptReady Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074C1.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This repository contains the source code for the official landing page of **PromptReady**, a one-click browser extension that turns any web page into perfectly formatted, private context for your LLM.

### ✨ [Live Demo Link](https://your-live-url.com)



---

## ✅ Core Features

This project is a fully responsive landing page built with a focus on modern design and performance. Key sections include:

*   **Hero Section:** Engaging headline with a call-to-action and animated globe background.
*   **Problem/Solution Showcase:** A clear "Before & After" comparison demonstrating the product's value.
*   **Features Overview:** A breakdown of the key benefits of using PromptReady.
*   **How It Works:** A visual demonstration of the product in action.
*   **Social Proof:** A section designed for testimonials and trust-building badges.
*   **Pricing / Final CTA:** A clear, final call-to-action to join the waitlist.

## 🛠️ Tech Stack

*   **Framework:** [React](https://reactjs.org/) (v18)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Deployment:** (e.g., Vercel, Netlify)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   `npm` or `yarn`

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

---

## 📜 Available Scripts

In the project directory, you can run:

*   **`npm run dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

*   **`npm run build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm run lint`**: Lints the codebase using ESLint to identify and fix stylistic and programmatic errors.

*   **`npm run preview`**: Serves the production build locally to preview before deployment.

## 🏗️ Architectural Notes

*   **Design Blueprint:** The visual design and color scheme are governed by the `color-system-analysis.md` file, which serves as the architectural "source of truth."
*   **Component-Based:** The UI is broken down into reusable React components located in `src/components/`.
*   **Centralized CTA Handler:** All primary "Join Waitlist" actions are routed through a single `handlePrimaryAction` function in `src/App.tsx` for consistent analytics tracking.