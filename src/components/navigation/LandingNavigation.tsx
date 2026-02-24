import React from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import type { NavigationItem } from '../../types';

interface LandingNavigationProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const LandingNavigation: React.FC<LandingNavigationProps> = ({ onPrimaryAction }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled((prev) => (prev ? latest > 30 : latest > 80));
  });

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Demo', path: '/demo', id: 'demo' },
    { name: 'Pricing', path: '/pricing', id: 'pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={false}
      className={`fixed left-0 right-0 top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}
    >
      <div
        className={`mx-auto rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-black/40 px-4 py-2 shadow-2xl shadow-black/50 backdrop-blur-xl'
            : 'border-transparent bg-transparent px-4 py-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="lg" clickable textColor="light" />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/10"
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
              className="group relative inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-200"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 md:hidden"
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
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-2 border-t border-white/10 pt-4">
                  <button
                    onClick={() => {
                      onPrimaryAction('Navigation-Mobile');
                      setIsMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-indigo-400"
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
