
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
              <div className="text-gray-700 leading-relaxed mb-6 select-none">
                Hi! I'm Sahin Enam, a passionate Full Stack Web Developer with 5+ years of experience 
                in building scalable, user-focused websites and web applications. My main stack includes 
                JavaScript, React, Node.js, and MongoDB. I help startups and businesses turn their ideas 
                into high-performing, elegant digital products.
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-3">My Mission</h4>
              <div className="text-gray-700 leading-relaxed select-none">
                I believe in writing clean, efficient, and scalable code. My goal is to build fast, 
                secure, and user-friendly web applications that solve real-world problems and create 
                meaningful digital experiences.
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-t-4 border-green-500">
                <div className="text-3xl font-bold text-primary mb-2 counter" data-target="50">0</div>
                <div className="text-gray-600">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-t-4 border-purple-500">
                <div className="text-3xl font-bold text-primary mb-2 counter" data-target="5">0</div>
                <div className="text-gray-600">Years Experience</div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <div className="relative group">
              {/* Animated background ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Inner ring for spacing */}
              <div className="absolute inset-2 rounded-full bg-white"></div>
              
              {/* Profile image container - Fixed cutoff issue */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl m-4 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/1cc13f08-eac5-4961-b9af-51a895706f7a.png"
                  alt="Sahin Enam - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    transform: 'translateY(0)',
                    animation: 'none'
                  }}
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Availability badge */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
                <span className="text-white font-bold text-sm text-center">Available<br/>for Work</span>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
              <div className="absolute bottom-20 left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
              <div className="absolute top-20 left-12 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
