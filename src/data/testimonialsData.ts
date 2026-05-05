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
      'Offline baseline first: build the local Markdown document before asking AI to polish it.',
    author: 'PromptReady engineering note',
    title: 'Capture contract',
  },
  {
    id: 2,
    stars: 5,
    quote:
      'Quality gates should reject pretty AI output when it drops headings, fences, or source structure.',
    author: 'PromptReady engineering note',
    title: 'AI cleanup boundary',
  },
  {
    id: 3,
    stars: 5,
    quote: 'Hard pages are not marketing proof. They are fixture candidates and diagnostics work.',
    author: 'PromptReady engineering note',
    title: 'Known limits',
  },
];
