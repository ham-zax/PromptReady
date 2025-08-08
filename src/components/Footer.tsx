import React from 'react';
import { Copy, Globe } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 py-12 text-gray-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-6 flex items-center justify-center">
          <Copy className="mr-3 h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">PromptReady</span>
        </div>
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm font-medium">
            <Globe className="mr-2 h-4 w-4 text-blue-400" />
            Available in 10+ Languages
          </div>
        </div>
        <p className="mb-6 text-gray-400">
          © 2025 PromptReady - Making web content extraction simple and powerful
        </p>
        <div className="mb-6 flex justify-center space-x-6">
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Contact
          </a>
          <a href="#" className="transition-colors hover:text-white">
            GitHub
          </a>
        </div>
        <div className="text-sm text-gray-500">
          Follow us on X/Twitter and Reddit for updates • Open-Source on GitHub for Transparency
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
