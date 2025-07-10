
import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const YouTubeSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Your actual YouTube videos - Replace these with your real video IDs from your channel
  const videos = [
    {
      id: 'YOUR_VIDEO_ID_1', // Replace with actual video ID from your channel
      title: 'Web Development Tutorial - Getting Started',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_1/maxresdefault.jpg',
      description: 'Learn the basics of web development in this comprehensive tutorial.'
    },
    {
      id: 'YOUR_VIDEO_ID_2', // Replace with actual video ID from your channel
      title: 'React.js Complete Guide',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg',
      description: 'Master React.js with this step-by-step guide for beginners.'
    },
    {
      id: 'YOUR_VIDEO_ID_3', // Replace with actual video ID from your channel
      title: 'JavaScript ES6 Features',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg',
      description: 'Explore the latest JavaScript ES6 features and best practices.'
    },
    {
      id: 'YOUR_VIDEO_ID_4', // Replace with actual video ID from your channel
      title: 'Node.js Backend Development',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_4/maxresdefault.jpg',
      description: 'Build scalable backend applications with Node.js and Express.'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
  };

  const openYouTubeChannel = () => {
    window.open('https://youtube.com/@sahintechnology?si=bzvvcSh_YYe7i95p', '_blank');
  };

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="youtube" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-pink-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-8 h-8 sm:w-12 sm:h-12 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">My YouTube Channel</h2>
          </div>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to my channel for the latest web development tutorials, tips, and tech insights
          </p>
          <Button 
            onClick={openYouTubeChannel}
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Youtube className="mr-2 h-5 w-5" />
            Visit My Channel
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Featured Video Display */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative group cursor-pointer" onClick={() => openVideo(videos[currentVideo].id)}>
                  <img 
                    src={videos[currentVideo].thumbnail} 
                    alt={videos[currentVideo].title}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {videos[currentVideo].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {videos[currentVideo].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideo 
                      ? 'bg-red-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Video Thumbnails List */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Latest Videos</h3>
            {videos.map((video, index) => (
              <div 
                key={index}
                className={`flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  index === currentVideo 
                    ? 'bg-red-50 border-2 border-red-200 shadow-md' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => goToVideo(index)}
              >
                <div className="relative flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium mb-1 text-sm sm:text-base line-clamp-2 ${
                    index === currentVideo ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {video.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
