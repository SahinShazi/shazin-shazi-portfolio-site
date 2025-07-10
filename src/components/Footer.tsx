
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, centered footer layout */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-300 flex items-center gap-2 text-sm">
              © {currentYear} Sahin Enam. Made with <Heart className="w-4 h-4 text-red-500" />
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
