// src/data/testimonialsData.ts

export interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  author: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "Saves me hours weekly on research! The offline mode is incredibly fast and the AI features are game-changing for content creation.",
    author: "Alex Chen",
    title: "Senior Developer, Reddit",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "Privacy-first approach is exactly what our team needed. No more worrying about sensitive data being processed externally.",
    author: "Sarah Mitchell",
    title: "IT Security Manager, Enterprise Corp",
  },
  {
    id: 3,
    stars: 4.5,
    quote:
      "Finally, clean copies without the junk! Perfect for feeding content to ChatGPT and Claude. This is a must-have tool.",
    author: "Marcus Johnson",
    title: "Content Creator, YouTube",
  },
];