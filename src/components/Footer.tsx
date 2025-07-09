
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 flex items-center gap-2">
            © {currentYear} Sahin Enam. Made with <Heart className="w-4 h-4 text-red-500" />
          </p>
          <p className="text-gray-300 mt-4 md:mt-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
