import React from 'react';
import { Copy, Globe } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center items-center mb-6">
          <Copy className="w-8 h-8 text-blue-400 mr-3" />
          <span className="text-2xl font-bold text-white">PromptReady</span>
        </div>
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
            <Globe className="w-4 h-4 mr-2 text-blue-400" />
            Available in 10+ Languages
          </div>
        </div>
        <p className="text-gray-400 mb-6">
          © 2025 PromptReady - Making web content extraction simple and powerful
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <div className="text-sm text-gray-500">
          Follow us on X/Twitter and Reddit for updates • Open-Source on GitHub for Transparency
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;