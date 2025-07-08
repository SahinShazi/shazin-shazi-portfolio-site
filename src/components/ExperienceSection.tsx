
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'CreativeByte Agency',
      period: '2021 – Present',
      icon: <Building className="w-6 h-6 text-primary" />,
      achievements: [
        'Led a team of 5 developers to deliver SaaS projects',
        'Built full-stack MERN applications for enterprise clients',
        'Converted UI designs from Figma to responsive websites',
        'Improved application performance by 40% through optimization'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Upwork & Fiverr',
      period: '2019 – Present',
      icon: <Users className="w-6 h-6 text-primary" />,
      achievements: [
        '50+ client projects with 100% satisfaction rate',
        'Built custom dashboards, eCommerce, and landing pages',
        'Specialized in React, Node.js, and WordPress development',
        'Maintained long-term relationships with recurring clients'
      ]
    },
    {
      title: 'Intern Developer',
      company: 'TechPath Limited',
      period: '2018 – 2019',
      icon: <Award className="w-6 h-6 text-primary" />,
      achievements: [
        'Worked with real-world APIs and third-party integrations',
        'Gained production-level backend experience',
        'Collaborated with senior developers on complex projects',
        'Contributed to code reviews and best practices implementation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in web development and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        {experience.icon}
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {experience.period}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {experience.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-primary">{experience.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
