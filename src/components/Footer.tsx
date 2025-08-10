import React from 'react';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import Logo from './ui/Logo';
import gradientFooterBg from '../assets/gradient-footer.png';

const Footer: React.FC = () => (
  <footer className="relative py-16 text-slate-700 overflow-hidden bg-slate-100">
    {/* Background image with specific styling */}
    <div
      className="gradient-footer absolute inset-0"
      style={{
        backgroundImage: `url(${gradientFooterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.45,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
    ></div>

    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        {/* Logo, tagline, and testimonial section */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <Logo size="lg" textColor="dark" theme="light" />
          </div>
          <p className="mb-4 text-sm text-slate-600 leading-relaxed">
            Making web content extraction simple and powerful
          </p>

          {/* Trust-building testimonial - Enhanced */}
          <div className="mb-6">
            <p className="text-base italic text-slate-800 font-medium">
              "A must-have tool for developers."
            </p>
            <p className="text-sm text-slate-600 mt-1">
              — Senior Developer
            </p>
          </div>

          {/* Organized navigation links */}
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Product</h4>
              <div className="space-y-2">
                <a href="/pricing" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  Pricing
                </a>
                <a href="/demo" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  Demo
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-slate-700 hover:text-slate-900 transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started section - Primary CTA */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-bold text-slate-900">Get Started</h3>
          <p className="mb-6 text-sm text-slate-600">
            Available as browser extension
          </p>
          <div className="space-y-3 mb-6">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border-2 border-slate-400 bg-transparent px-4 py-3 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-medium">Chrome Extension</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border-2 border-slate-400 bg-transparent px-4 py-3 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-medium">Firefox Add-on</span>
            </a>
          </div>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-800">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Privacy-First by Design
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 flex flex-col items-center justify-between  pt-8 sm:flex-row">
        <div className="mb-4 flex space-x-6 sm:mb-0">
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        <div className="mb-4 text-center sm:mb-0">
          <p className="text-sm text-slate-500">
            © 2025 PromptReady - Making web content extraction simple and powerful
          </p>
        </div>

        {/* Social icons with tooltips */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            title="Follow on Twitter"
            aria-label="Follow PromptReady on Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            title="Connect on LinkedIn"
            aria-label="Connect with PromptReady on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            title="Contribute on GitHub"
            aria-label="Contribute to PromptReady on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            title="Join our Discord"
            aria-label="Join PromptReady Discord community"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
