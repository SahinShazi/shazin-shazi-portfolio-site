
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full Stack Web Developer | JavaScript Specialist';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden animate-on-scroll">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-primary whitespace-nowrap">Sahin Enam</span>
          </h1>
          
          <div className="h-16 sm:h-20 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with 5+ years of experience creating scalable, 
            user-focused web applications. Let's build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - properly centered */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-primary transition-colors flex flex-col items-center"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
