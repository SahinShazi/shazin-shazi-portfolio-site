
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email',
      info: 'hello@sahinenam.com',
      link: 'mailto:hello@sahinenam.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Location',
      info: 'New York, USA',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Response Time',
      info: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {contactDetails.map((detail, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {detail.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{detail.title}</h3>
            {detail.link ? (
              <a
                href={detail.link}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {detail.info}
              </a>
            ) : (
              <p className="text-gray-600">{detail.info}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
