
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'StartupOne Landing Page',
      description: 'High-converting SaaS landing page with modern design and animations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'EmailJS'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'WeatherWave App',
      description: 'Real-time weather application using OpenWeather API with beautiful UI.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'Axios', 'Tailwind CSS', 'OpenWeather API'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'ChatNexa – Realtime Chat App',
      description: 'Real-time private chat rooms with Socket.IO and secure authentication.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Node.js', 'Socket.IO', 'Express', 'MongoDB'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'DevBlog Platform',
      description: 'Full-featured blogging platform with admin dashboard and JWT auth.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tech: ['Next.js', 'MongoDB', 'Tailwind', 'JWT'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Comprehensive admin dashboard for e-commerce management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
