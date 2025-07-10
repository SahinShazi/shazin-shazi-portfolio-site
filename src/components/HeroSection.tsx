
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fixed Background Image - Professional Developer Coding */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center")',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
      </div>

      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400 whitespace-nowrap">Sahin Enam</span>
          </h1>
          
          <div className="h-16 sm:h-20 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-medium">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with 5+ years of experience creating scalable, 
            user-focused web applications. Let's build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-purple-400 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-blue-400 transition-colors flex flex-col items-center"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
