import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CopyCheck, MousePointerClick, Zap } from 'lucide-react';

const SketchyPointer = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 40 25 L 45 75 L 55 55 L 75 75 L 82 68 L 62 48 L 80 40 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 15 25 C 25 15 30 20 40 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const SketchyZap = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 55 10 L 25 55 L 50 60 L 40 90 L 75 40 L 45 35 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyCopy = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 30 30 C 40 25 60 25 70 30 L 70 80 C 60 85 40 85 30 80 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 20 20 L 20 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 20 20 L 60 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 40 55 L 50 65 L 65 45"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyNumberOne = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 45 30 L 55 20 L 55 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 40 80 L 70 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyNumberTwo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 35 35 C 35 20 65 20 65 35 C 65 50 35 60 35 80 L 70 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyNumberThree = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 35 30 C 65 20 65 45 50 50 C 70 50 70 80 35 75"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  doodleColor: string;
  doodlePath: string;
  bubbleClass: string;
  blobRadius: string;
  tiltClass: string;
};

const steps: Step[] = [
  {
    title: 'Select your source',
    description: 'Use the extension button or keyboard shortcut on any page.',
    icon: <MousePointerClick className="h-6 w-6 text-brand-accent" />,
    badge: '01',
    doodleColor: 'text-brand-accent/20',
    doodlePath: 'M12 62 C30 30 55 18 82 22 C96 25 97 43 77 47 C55 51 48 65 58 83',
    bubbleClass: 'bg-brand-accent/5',
    blobRadius: '58% 42% 62% 38% / 40% 50% 50% 60%',
    tiltClass: '-rotate-3',
  },
  {
    title: 'Clean in one pass',
    description: 'PromptReady strips clutter and keeps structure that LLMs can parse.',
    icon: <Zap className="h-6 w-6 text-brand-success" />,
    badge: '02',
    doodleColor: 'text-brand-success/20',
    doodlePath:
      'M16 28 C32 6 58 10 72 28 C84 42 76 58 58 66 C44 72 36 82 40 92 M22 44 C40 30 58 34 74 46',
    bubbleClass: 'bg-brand-success/5',
    blobRadius: '44% 56% 40% 60% / 52% 44% 56% 48%',
    tiltClass: 'rotate-2',
  },
  {
    title: 'Paste with confidence',
    description: 'Get citation-ready Markdown instantly in your clipboard.',
    icon: <CopyCheck className="h-6 w-6 text-brand-ink" />,
    badge: '03',
    doodleColor: 'text-brand-muted/25',
    doodlePath:
      'M10 24 C20 42 32 34 42 54 C50 70 68 66 84 48 M26 16 C38 28 46 22 58 36 C66 46 74 40 88 24',
    bubbleClass: 'bg-brand-muted/8',
    blobRadius: '50% 50% 66% 34% / 46% 62% 38% 54%',
    tiltClass: '',
  },
];

const AnimatedLine = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="absolute left-[10%] right-[10%] top-1/2 z-0 hidden h-32 -translate-y-1/2 md:block"
    >
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none">
        <path
          d="M0,52 C 160,22 320,80 500,48 C 680,16 840,72 1000,42"
          stroke="var(--brand-border)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="7 9"
          fill="none"
          className="opacity-50"
        />
        <motion.path
          d="M0,52 C 160,22 320,80 500,48 C 680,16 840,72 1000,42"
          stroke="var(--brand-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="relative py-20 sm:py-32">
    <motion.svg
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="pointer-events-none absolute left-[7%] top-[8%] h-12 w-56 text-brand-accent/20"
      viewBox="0 0 240 60"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M8 34 C 44 10, 82 50, 122 24 S 188 14, 232 42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="linear-display relative inline-block text-[clamp(2.5rem,6.8vw,4.2rem)] leading-[0.94] text-brand-ink"
        >
          From noisy page to useful prompt{' '}
          <span className="relative inline-block text-brand-accent sm:translate-x-2">
            in seconds
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
              className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-brand-accent/30"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <path
                d="M100 10 C 180 10 190 50 100 90 C 10 90 20 10 100 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </motion.svg>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl -translate-x-1 text-lg leading-relaxed text-brand-muted"
        >
          The flow is intentionally simple so you can stay in your research or coding context.
        </motion.p>
      </div>

      <div className="relative z-10">
        <AnimatedLine />

        <div className="relative z-10 grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-[2rem] border-2 border-brand-border bg-brand-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.16)] ${index === 0 ? 'md:translate-y-1' : index === 1 ? 'md:translate-y-3' : 'md:-translate-y-1'}`}
            >
              <div
                className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full ${step.bubbleClass}`}
              />
              <span className="linear-display absolute right-6 top-6 text-[3.8rem] font-bold leading-none text-brand-border/85 transition-colors duration-300 group-hover:text-brand-border">
                {step.badge}
              </span>

              <motion.svg
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
                className={`pointer-events-none absolute right-0 top-0 h-24 w-24 ${step.doodleColor}`}
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d={step.doodlePath}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              <div className="relative z-10 mb-8 flex items-center justify-between">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  style={{ borderRadius: step.blobRadius }}
                  className={`inline-flex h-16 w-16 items-center justify-center border-2 border-brand-border bg-brand-surface-soft shadow-sm transition-transform duration-500 ${step.tiltClass}`}
                >
                  {step.icon}
                </motion.div>
              </div>

              <h3 className="relative z-10 mb-3 text-2xl font-bold leading-tight tracking-tight text-brand-ink">
                {step.title}
              </h3>
              <p className="relative z-10 text-lg leading-relaxed text-brand-muted">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
