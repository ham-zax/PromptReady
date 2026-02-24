import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from '@slorber/react-helmet-async';
import { ArrowLeft, Home, Search } from '@/components/ui/Icons';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Page Not Found - PromptReady</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to PromptReady homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-brand-bg">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <Logo size="lg" />
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-accent/10">
              <Search className="h-12 w-12 text-brand-accent" />
            </div>

            <h1 className="mb-4 text-6xl font-bold text-brand-ink">404</h1>
            <h2 className="mb-4 text-2xl font-semibold text-brand-ink">Page Not Found</h2>
            <p className="text-lg text-brand-muted">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-brand-accent-hover"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-6 py-3 text-base font-semibold text-brand-muted shadow-sm transition-colors hover:bg-brand-surface-soft"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </motion.div>

          <motion.div
            className="mt-12 text-sm text-brand-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Need help?{' '}
              <Link to="/" className="font-medium text-brand-accent hover:text-brand-accent-hover">
                Contact us
              </Link>{' '}
              or visit our{' '}
              <Link to="/" className="font-medium text-brand-accent hover:text-brand-accent-hover">
                homepage
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
};

export default NotFoundPage;
