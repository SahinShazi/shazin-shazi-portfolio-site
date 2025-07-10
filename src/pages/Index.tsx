
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import YouTubeSection from '@/components/YouTubeSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Index = () => {
  // Initialize scroll animations and counters
  useScrollAnimations();

  // Remove any unwanted shake/jiggle animations
  useEffect(() => {
    // Remove any CSS animations that might cause shaking
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      
      /* Remove any shake/jiggle animations */
      @keyframes shake, @keyframes jiggle, @keyframes wobble {
        to { transform: none; }
      }
      
      /* Profile image animation */
      @keyframes profile-entrance {
        0% {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.05) translateY(-5px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      .animate-profile-entrance {
        animation: profile-entrance 1.2s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-poppins">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <YouTubeSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
