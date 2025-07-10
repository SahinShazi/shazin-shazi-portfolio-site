
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission with EmailJS or similar service
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'rksahinrone@gmail.com',
      href: 'mailto:rksahinrone@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+8801838040041',
      href: 'tel:+8801838040041'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Barisal, Bhola, Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/SahinShazi',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/sahin-shazi',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/Sahin_Tech_1',
      label: 'Twitter'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: 'https://www.facebook.com/share/1GACBZn449/',
      label: 'Facebook'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/sahinenam',
      label: 'Instagram'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white animate-on-scroll">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Centered and properly sized */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 text-center">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 w-full max-w-xs"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.label}</div>
                      {info.href !== '#' ? (
                        <a href={info.href} className="text-primary hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links & Resume */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-all transform hover:scale-110 shadow-md"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 w-full max-w-xs">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
