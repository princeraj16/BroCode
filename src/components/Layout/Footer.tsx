import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-gray-400 text-xs sm:text-sm">
              Your trusted partner for premium liquor and snacks delivery. 
              Fast, reliable, and always fresh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=beer" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  Beer
                </Link>
              </li>
              <li>
                <Link to="/products?category=whiskey" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  Whiskey
                </Link>
              </li>
              <li>
                <Link to="/products?category=snacks" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
            <div className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
              <p>📧 support@brocode.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Bangalore, Karnataka</p>
              <p>🕒 24/7 Delivery</p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
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

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 BroCode. All rights reserved. | Built with ❤️ for the LinuxWorld Challenge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;