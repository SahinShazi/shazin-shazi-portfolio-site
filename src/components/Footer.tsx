
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Sahin Enam</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full Stack Web Developer specializing in modern web technologies 
              and creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm">About</a>
              <a href="#projects" className="text-gray-300 hover:text-primary transition-colors text-sm">Projects</a>
              <a href="#services" className="text-gray-300 hover:text-primary transition-colors text-sm">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">MongoDB</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 flex items-center gap-2 text-sm">
            © {currentYear} Sahin Enam. Made with <Heart className="w-4 h-4 text-red-500" />
          </p>
          <p className="text-gray-300 mt-4 md:mt-0 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
