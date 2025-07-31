import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Logo from '../components/Common/Logo';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <Logo size="lg" showTagline={false} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have questions, feedback, or need support? We're here to help! 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-300 text-sm sm:text-base">+91 9876543210</p>
                    <p className="text-gray-400 text-xs sm:text-sm">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-300 text-sm sm:text-base">support@brocode.com</p>
                    <p className="text-gray-400 text-xs sm:text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Bangalore, Karnataka</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Serving across major cities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Delivery Hours</h3>
                    <p className="text-gray-300 text-sm sm:text-base">24/7 Available</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Fast delivery, anytime</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    📘 Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    📷 Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    🐦 Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="delivery">Delivery Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black font-semibold py-3 sm:py-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm sm:text-base">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">How fast is delivery?</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We deliver within 30 minutes in most areas. Our average delivery time is 20 minutes!
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">What are the delivery charges?</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Free delivery on orders above ₹300. Otherwise, ₹40 delivery fee applies.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">Do you deliver 24/7?</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Yes! We're available 24/7 to serve you whenever you need your favorite drinks and snacks.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We accept UPI, Credit/Debit cards, and Cash on Delivery for your convenience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;