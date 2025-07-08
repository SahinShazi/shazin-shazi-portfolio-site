
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Wordpress, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Custom Website Design & Development',
      description: 'Building responsive, modern websites from scratch using the latest technologies and best practices for optimal performance and user experience.'
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: 'Frontend UI Development (React/Tailwind)',
      description: 'Creating beautiful, interactive user interfaces with React.js and Tailwind CSS, ensuring pixel-perfect designs and smooth user interactions.'
    },
    {
      icon: <Wordpress className="w-12 h-12 text-primary" />,
      title: 'WordPress Website & Landing Page',
      description: 'Developing custom WordPress themes and high-converting landing pages tailored to your business needs and brand identity.'
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: 'Website Speed Optimization & SEO',
      description: 'Improving website performance, Core Web Vitals, and search engine rankings through technical optimization and SEO best practices.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(service.icon, {
                      className: "w-12 h-12 group-hover:text-white transition-colors duration-300"
                    })}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
            ✅ 100% Client Satisfaction Guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
