
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Socket.IO', level: 80 }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Git & GitHub', level: 90 }
      ]
    },
    {
      title: 'Design & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'Figma to HTML', level: 90 },
        { name: 'Responsive Design', level: 95 }
      ]
    }
  ];

  const tools = [
    'Docker', 'CI/CD', 'GitHub Actions', 'WordPress', 'PSD to React', 'PWA Development'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 text-center mb-6">
              Additional Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
