import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Common/Logo';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Logo size="md" showTagline={false} />
          </div>

          {/* Center Section - Search & Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-xl mx-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for drinks & snacks..."
                  className="w-full bg-gray-900 text-white px-4 py-2.5 pl-10 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Right Section - Navigation & Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <Link to="/products" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                Products
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                Contact
              </Link>
            </nav>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-white hover:text-yellow-400 transition-colors"
            >
              <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* User Menu - Hidden on mobile */}
            {user ? (
              <div className="hidden sm:relative sm:group">
                <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors">
                  <UserIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="hidden lg:block text-sm font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors text-sm"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors text-sm"
                    >
                      Orders
                    </Link>
                    {user.isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors text-sm"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors text-sm"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  to="/signup"
                  className="bg-white/10 text-white px-3 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20 text-sm"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-sm"
                >
                  Login
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - Always visible on mobile */}
        <div className="lg:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for drinks & snacks..."
              className="w-full bg-gray-900 text-white px-4 py-2.5 pl-10 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Navigation Links */}
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2.5 text-white hover:text-yellow-400 transition-colors text-base font-medium"
              >
                Products
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2.5 text-white hover:text-yellow-400 transition-colors text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2.5 text-white hover:text-yellow-400 transition-colors text-base font-medium"
              >
                Contact
              </Link>
              
              {/* User Section */}
              {user ? (
                <div className="border-t border-gray-700 pt-4 space-y-3">
                  <div className="flex items-center space-x-3 py-2">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-white font-medium">{user.name}</span>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Orders
                  </Link>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-4 space-y-3">
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 text-white hover:text-yellow-400 transition-colors text-base font-medium"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 text-yellow-400 font-medium text-base"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;