
import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Scroll animations for sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Trigger counter animations
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            animateCounter(counter as HTMLElement, target);
          });

          // Trigger progress bar animations
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar) => {
            const target = parseInt(bar.getAttribute('data-target') || '0');
            animateProgressBar(bar as HTMLElement, target);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const animateCounter = (element: HTMLElement, target: number) => {
    let current = 0;
    const increment = target / 50; // 50 steps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toString() + (target > 10 ? '+' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 40); // Update every 40ms
  };

  const animateProgressBar = (element: HTMLElement, target: number) => {
    let current = 0;
    const increment = target / 100; // 100 steps for smooth animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.style.width = target + '%';
        clearInterval(timer);
      } else {
        element.style.width = Math.floor(current) + '%';
      }
    }, 20); // Update every 20ms for smooth animation
  };
};
