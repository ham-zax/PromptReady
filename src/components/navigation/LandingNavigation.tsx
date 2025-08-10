import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import type { NavigationItem } from '../../types';

interface LandingNavigationProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const LandingNavigation: React.FC<LandingNavigationProps> = ({ onPrimaryAction }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Demo', path: '/demo', id: 'demo' },
    { name: 'Pricing', path: '/pricing', id: 'pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="lg" clickable />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onPrimaryAction('Navigation')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  onPrimaryAction('Navigation-Mobile');
                  setIsMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:from-blue-700 hover:to-blue-800"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavigation;
