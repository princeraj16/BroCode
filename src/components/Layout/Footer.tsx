import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-gray-400 text-sm">
              Your trusted partner for premium liquor and snacks delivery. 
              Fast, reliable, and always fresh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=beer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Beer
                </Link>
              </li>
              <li>
                <Link to="/products?category=whiskey" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Whiskey
                </Link>
              </li>
              <li>
                <Link to="/products?category=snacks" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📧 support@brocode.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Bangalore, Karnataka</p>
              <p>🕒 24/7 Delivery</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BroCode. All rights reserved. | Built with ❤️ for the LinuxWorld Challenge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;