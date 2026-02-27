import React from 'react';

interface DeferredSectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  placeholderClassName?: string;
}

const DeferredSection: React.FC<DeferredSectionProps> = ({
  children,
  rootMargin = '720px 0px',
  placeholderClassName = 'min-h-[320px]',
}) => {
  const [isVisible, setIsVisible] = React.useState(() => {
    if (typeof navigator === 'undefined') return true;
    const ua = navigator.userAgent.toLowerCase();
    return /(bot|crawler|spider|googlebot|bingbot|duckduckbot|baiduspider|yandex)/.test(ua);
  });
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return <div ref={ref}>{isVisible ? children : <div aria-hidden className={placeholderClassName} />}</div>;
};

export default DeferredSection;
