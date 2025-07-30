import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Common/Logo';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Full Stack Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Frontend specialist with expertise in React and modern web technologies.'
    },
    {
      name: 'Priya Patel',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Backend expert focused on scalable architecture and database optimization.'
    },
    {
      name: 'Rohit Kumar',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Creative designer passionate about user experience and visual storytelling.'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Logo size="lg" showTagline={false} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">BroCode</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from a 72-hour coding challenge at LinuxWorld, BroCode represents the perfect 
            blend of innovation, friendship, and the simple joy of great drinks and snacks.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  It all started during a marathon coding session at LinuxWorld. Three friends, 
                  fueled by caffeine and determination, found themselves constantly ordering 
                  drinks and snacks to keep the energy flowing during their 72-hour challenge.
                </p>
                <p>
                  "Why isn't there a platform that gets it?" we asked ourselves. "Something that 
                  understands the perfect pairing of code and comfort food, of debugging and drinks?"
                </p>
                <p>
                  That's when BroCode was born. We built it not just as a delivery platform, 
                  but as a companion for everyone who believes that the best ideas come with 
                  the right refreshments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team coding"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8"
          >
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To deliver premium quality drinks and snacks at lightning speed, ensuring that 
              every celebration, coding session, or casual hangout is perfectly fueled with 
              the finest refreshments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8"
          >
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">🔮</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To become India's most trusted and beloved platform for instant gratification, 
              where every order brings friends together and every delivery creates lasting memories.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-gray-400 text-lg">The trio behind the magic</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-8 text-center group hover:bg-gray-800 transition-colors"
            >
              <div className="relative inline-block mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition-colors"></div>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Speed</h3>
              <p className="text-gray-300 text-sm">Lightning-fast delivery that beats your expectations</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-white font-bold text-lg mb-2">Trust</h3>
              <p className="text-gray-300 text-sm">Reliable service you can count on, every single time</p>
            </div>
            <div>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-white font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-300 text-sm">Building connections one delivery at a time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;