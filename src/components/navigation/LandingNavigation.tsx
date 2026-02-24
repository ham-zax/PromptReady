import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from '@/components/ui/Icons';
import Logo from '../ui/Logo';
import type { NavigationItem } from '../../types';

interface LandingNavigationProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const LandingNavigation: React.FC<LandingNavigationProps> = ({ onPrimaryAction }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  const forceScrollTop = React.useCallback(() => {
    const win = window as Window & {
      __appLenis?: {
        scrollTo: (
          target: number | string | Element,
          options?: { immediate?: boolean; force?: boolean },
        ) => void;
      };
    };
    if (win.__appLenis?.scrollTo) {
      win.__appLenis.scrollTo(0, { immediate: true, force: true });
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  React.useEffect(() => {
    let ticking = false;
    let latestScrollY = 0;

    const updateScrolledState = () => {
      setIsScrolled((prev) => {
        const next = prev ? latestScrollY > 30 : latestScrollY > 80;
        return next === prev ? prev : next;
      });
      ticking = false;
    };

    const onScroll = () => {
      // Defer reading layout properties from scroll handler
      if (ticking) return;
      latestScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      ticking = true;
      window.requestAnimationFrame(updateScrolledState);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Demo', path: '/demo', id: 'demo' },
    { name: 'Pricing', path: '/pricing', id: 'pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={false}
      className="fixed top-3 right-0 left-0 z-50 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`mx-auto rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-brand-border bg-brand-surface/95 px-4 py-2 shadow-[0_14px_34px_-28px_rgba(0,0,0,0.3)]'
            : 'border-brand-border/70 bg-brand-surface/90 px-4 py-2 shadow-[0_10px_24px_-22px_rgba(0,0,0,0.25)]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="lg" clickable textColor="dark" logoColor="dark" className="items-center" />

          {/* Desktop Navigation */}
          <div className="border-brand-border bg-brand-surface-soft hidden items-center gap-1 rounded-full border p-1 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={forceScrollTop}
                className={`linear-kicker relative rounded-full px-4 py-1.5 text-[1.35rem] transition-colors ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-brand-muted hover:bg-brand-surface hover:text-brand-ink'
                }`}
              >
                {isActive(item.path) && (
                  <motion.div
                    className="bg-brand-ink absolute inset-0 rounded-full"
                    layoutId="activeNavBackground"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center md:flex">
            <button
              onClick={() => onPrimaryAction('Navigation')}
              className="group linear-kicker border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover relative inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[1.25rem] font-normal text-white transition-colors duration-300"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-muted hover:bg-brand-surface-soft rounded-full p-2 transition-colors md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden md:hidden"
            >
              <div className="border-brand-border bg-brand-surface flex flex-col gap-2 rounded-2xl border p-4 shadow-lg">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => {
                      forceScrollTop();
                      setIsMenuOpen(false);
                    }}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-brand-ink text-white'
                        : 'text-brand-muted hover:bg-brand-surface-soft hover:text-brand-ink'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-brand-border mt-2 border-t pt-4">
                  <button
                    onClick={() => {
                      onPrimaryAction('Navigation-Mobile');
                      setIsMenuOpen(false);
                    }}
                    className="linear-kicker bg-brand-accent hover:bg-brand-accent-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-[1.35rem] font-normal text-white transition-colors"
                  >
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default LandingNavigation;
