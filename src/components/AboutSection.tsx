
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hi! I'm Sahin Enam, a passionate Full Stack Web Developer with 5+ years of experience 
                in building scalable, user-focused websites and web applications. My main stack includes 
                JavaScript, React, Node.js, and MongoDB. I help startups and businesses turn their ideas 
                into high-performing, elegant digital products.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-3">My Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing clean, efficient, and scalable code. My goal is to build fast, 
                secure, and user-friendly web applications that solve real-world problems and create 
                meaningful digital experiences.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sahin Enam - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
