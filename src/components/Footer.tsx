
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sahin Enam</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Web Developer passionate about creating amazing digital experiences. 
              Let's build something great together!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Barisal, Bhola, Bangladesh</p>
              <p>rksahinrone@gmail.com</p>
              <p>+8801838040041</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 flex items-center gap-2">
            © {currentYear} Sahin Enam. Made with <Heart className="w-4 h-4 text-red-500" /> in Bangladesh
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

