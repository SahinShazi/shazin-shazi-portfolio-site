
import React from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' },
    { number: 30, label: 'Happy Clients', suffix: '+' },
    { number: 10, label: 'Technologies', suffix: '+' }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times'
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'User-Focused',
      description: 'Creating intuitive interfaces that users love to interact with'
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Quality Assured',
      description: 'Thoroughly tested code with attention to every detail'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Animation */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/1cc13f08-eac5-4961-b9af-51a895706f7a.png" 
                alt="Sahin Enam - Full Stack Developer" 
                className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl border-8 border-white animate-profile-entrance"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 select-none">
                Hello! I'm Sahin Enam, a passionate Full Stack Web Developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in building scalable web applications 
                using modern technologies like React, Node.js, and MongoDB.
              </p>
              
              <p className="text-gray-600 mb-6 select-none">
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a career where I get to solve complex problems and create user-friendly experiences every day. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>

              <p className="text-gray-600 mb-8 select-none">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through my YouTube channel where I create tutorials and tech content.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary counter" data-target={stat.number}>
                    0{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
