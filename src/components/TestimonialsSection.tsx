
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Hossain',
      role: 'CEO of TechFlow',
      content: 'Sahin is one of the most reliable developers I\'ve worked with. He delivers clean code and never misses a deadline.',
      rating: 5
    },
    {
      name: 'Rafiq Islam',
      role: 'Startup Founder',
      content: 'He built my startup site from scratch. Professional and skilled!',
      rating: 5
    },
    {
      name: 'Roman Iqbal',
      role: 'SoftNova',
      content: 'Sahin improved our UX beyond what we imagined.',
      rating: 5
    },
    {
      name: 'Omar Siddique',
      role: 'Freelancer & Content Strategist',
      content: 'Exceptional service! I gave Sahin a rough idea, and he transformed it into a beautiful website with flawless code. Communication was top-notch.',
      rating: 5
    },
    {
      name: 'Mehnaz Karim',
      role: 'CEO at EduLaunch',
      content: 'If you\'re looking for someone who meets deadlines, writes clean code, and knows both frontend and backend — Sahin is your guy. Would definitely hire again.',
      rating: 5
    },
    {
      name: 'Roman Iqbal',
      role: 'Product Manager at SoftNova',
      content: 'I worked with Sahin on a SaaS dashboard UI and he absolutely nailed the design-to-code process. He even improved some UX decisions we hadn\'t considered.',
      rating: 5
    },
    {
      name: 'Nabil Khan',
      role: 'CTO at GreenBox Labs',
      content: 'We needed a React developer on short notice and Sahin jumped in without hesitation. Within days, our project was live. Reliable, knowledgeable, and calm under pressure.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl">
            <CardContent className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-primary font-medium">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
