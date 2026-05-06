import React from 'react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';

import aiModeScreenshot from '@/assets/raw-images/Screenshot 2026-05-06 211207.png';
import captureScreenshot from '@/assets/raw-images/Screenshot 2026-05-06 211133.png';
import processingScreenshot from '@/assets/raw-images/Screenshot 2026-05-06 211147.png';
import providerScreenshot from '@/assets/raw-images/Screenshot 2026-05-06 212637.png';
import { ArrowLeft } from '@/components/ui/Icons';

const AUTO_ADVANCE_MS = 5200;

const productScreens = [
  {
    label: 'Capture',
    title: 'One popup, clear next action',
    description: 'Offline capture, AI mode, and deep capture stay visible beside the main action.',
    image: captureScreenshot,
    width: 419,
    height: 477,
    alt: 'PromptReady popup showing capture content, offline mode, AI mode, and deep capture.',
  },
  {
    label: 'Progress',
    title: 'Progress stays visible',
    description: 'The queue state makes extraction and fallback stages legible while work runs.',
    image: processingScreenshot,
    width: 419,
    height: 516,
    alt: 'PromptReady processing state showing queued capture and progress steps.',
  },
  {
    label: 'Cleanup',
    title: 'Cleanup stays close',
    description: 'AI mode keeps strategy and Markdown output controls near the capture flow.',
    image: aiModeScreenshot,
    width: 414,
    height: 657,
    alt: 'PromptReady AI mode settings showing content strategy and output format controls.',
  },
  {
    label: 'BYOK',
    title: 'Provider setup is explicit',
    description: 'OpenRouter, API key, base URL, and model selection stay clear in one panel.',
    image: providerScreenshot,
    width: 420,
    height: 658,
    alt: 'PromptReady provider settings showing OpenRouter API configuration and model selection.',
  },
];

const ProductScreenshots: React.FC = () => {
  const [[activeIndex, direction], setActiveSlide] = React.useState<[number, number]>([0, 1]);

  const goToIndex = React.useCallback((index: number) => {
    setActiveSlide(([currentIndex]) => {
      const nextIndex = (index + productScreens.length) % productScreens.length;

      if (nextIndex === currentIndex) {
        return [currentIndex, 0];
      }

      return [nextIndex, nextIndex > currentIndex ? 1 : -1];
    });
  }, []);

  const goNext = React.useCallback(() => {
    setActiveSlide(([currentIndex]) => [(currentIndex + 1) % productScreens.length, 1]);
  }, []);

  const goPrevious = React.useCallback(() => {
    setActiveSlide(([currentIndex]) => [
      (currentIndex - 1 + productScreens.length) % productScreens.length,
      -1,
    ]);
  }, []);

  React.useEffect(() => {
    const timer = window.setTimeout(goNext, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, goNext]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -64) {
      goNext();
      return;
    }

    if (info.offset.x >= 64) {
      goPrevious();
    }
  };

  const activeScreen = productScreens[activeIndex];

  return (
    <section id="product-screenshots" className="relative -mt-10 pb-12 sm:-mt-14 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="border-brand-border bg-brand-surface overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_-52px_rgba(0,0,0,0.32)]"
        >
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="border-brand-border bg-brand-surface-soft border-b px-5 py-6 sm:px-7 lg:border-r lg:border-b-0 lg:py-7">
              <div className="linear-kicker text-brand-muted text-[0.9rem]">Actual extension UI</div>
              <h2 className="linear-display text-brand-ink mt-3 text-[clamp(2.25rem,4.6vw,3.35rem)] leading-[0.92]">
                The popup flow, without the noise.
              </h2>
              <p className="text-brand-muted mt-4 max-w-md text-sm leading-relaxed">
                The clean raw captures show the real product path: capture, wait, tune cleanup, and
                connect your own key.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {productScreens.map((screen, index) => (
                  <button
                    type="button"
                    key={screen.label}
                    onClick={() => goToIndex(index)}
                    className={`border-brand-border rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                      index === activeIndex
                        ? 'bg-brand-accent text-white'
                        : 'bg-brand-surface text-brand-ink hover:border-brand-accent/40'
                    }`}
                    aria-pressed={index === activeIndex}
                    aria-label={`Show ${screen.label} screenshot`}
                  >
                    {screen.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#f7f7f5] p-3 sm:p-4">
              <figure className="border-brand-border bg-brand-surface mx-auto flex min-h-[330px] max-w-2xl flex-col overflow-hidden rounded-[1.5rem] border sm:min-h-[430px]">
                <figcaption className="border-brand-border h-[9.25rem] border-b px-4 py-2.5 sm:h-[7rem]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="linear-kicker text-brand-accent text-[0.75rem]">
                        {activeScreen.label}
                      </div>
                      <div className="text-brand-ink text-base font-semibold sm:text-lg">
                        {activeScreen.title}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="linear-mono text-brand-muted text-xs">
                        {String(activeIndex + 1).padStart(2, '0')} /{' '}
                        {String(productScreens.length).padStart(2, '0')}
                      </span>
                      <span className="bg-brand-accent h-2 w-2 rounded-full" />
                    </div>
                  </div>
                  <p className="text-brand-muted mt-2 text-sm leading-relaxed">
                    {activeScreen.description}
                  </p>
                  <div className="bg-brand-border mt-2.5 h-1 overflow-hidden rounded-full">
                    <motion.div
                      key={activeIndex}
                      className="bg-brand-accent h-full rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                    />
                  </div>
                </figcaption>
                <div className="relative flex flex-1 flex-col items-center justify-start overflow-hidden px-4 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-4">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="border-brand-border bg-brand-surface/92 text-brand-ink hover:border-brand-accent/50 hover:bg-brand-surface absolute top-1/2 left-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_12px_28px_-20px_rgba(0,0,0,0.5)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:flex"
                    aria-label="Show previous screenshot"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={handleDragEnd}
                    className="relative flex h-[300px] w-full touch-pan-y cursor-grab justify-center overflow-hidden active:cursor-grabbing sm:h-[390px] md:cursor-default"
                  >
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={activeScreen.label}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 22, scale: 0.985 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction * -18, scale: 0.985 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-none absolute inset-0 flex justify-center"
                      >
                        <img
                          src={activeScreen.image}
                          alt={activeScreen.alt}
                          width={activeScreen.width}
                          height={activeScreen.height}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="h-auto max-h-[300px] w-auto max-w-full select-none drop-shadow-[0_18px_24px_rgba(0,0,0,0.12)] sm:max-h-[390px]"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                  <div
                    className="linear-mono text-brand-muted mt-2 flex items-center justify-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase md:hidden"
                    aria-hidden="true"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Swipe</span>
                    <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    className="border-brand-border bg-brand-surface/92 text-brand-ink hover:border-brand-accent/50 hover:bg-brand-surface absolute top-1/2 right-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_12px_28px_-20px_rgba(0,0,0,0.5)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:flex"
                    aria-label="Show next screenshot"
                  >
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </button>
                </div>
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductScreenshots;
