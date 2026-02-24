const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldLenis = `    // Use requestAnimationFrame instead of gsap.ticker for better performance
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger using throttled updates
    let scrollTimeout: NodeJS.Timeout;
    lenis.on('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        ScrollTrigger.update();
      }, 16); // ~60fps throttling
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
      lenis.destroy();
    };`;

const newLenis = `    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };`;

content = content.replace(oldLenis, newLenis);
fs.writeFileSync('src/App.tsx', content);
