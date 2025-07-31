import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { categories, mockProducts } from '../data/mockData';
import ProductCard from '../components/Common/ProductCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredProducts = mockProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-black">
      {/* Scrolling Offers Banner */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap text-sm"
        >
          🎉 Code: BROCODE20 • ⚡ Free delivery on orders above ₹300 • 🎊 New user? Get ₹50 OFF on first order | Code: NEW50 • 🎉 Code: BROCODE20 • ⚡ Free delivery on orders above ₹300 • 🎊 New user? Get ₹50 OFF on first order | Code: NEW50
        </motion.div>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8) contrast(1.2) saturate(1.3)' }}
          >
            <source src="/9535-220799447.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-br from-amber-900 via-orange-800 to-red-900"></div>
          </video>
          
          {/* Lighter overlay for better video visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
          
          {/* Minimal overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-4 sm:pt-6">
          <div>
            {/* Professional Badge - Moved Higher */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 text-yellow-400 text-sm font-medium shadow-lg shadow-yellow-400/20">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Premium Beverage Delivery</span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              </div>
            </div>

            {/* Main Title */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                  BROCODE
                </span>
              </h1>
            </div>
            
            <p className="text-white text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 font-medium drop-shadow-lg">
              Daaru Aur Chakna, Ek Click Mein Apna
            </p>

            {/* Professional Stats */}
            <div className="flex justify-center space-x-8 sm:space-x-12 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 drop-shadow-lg">10K+</div>
                <div className="text-white/70 text-sm sm:text-base">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 drop-shadow-lg">500+</div>
                <div className="text-white/70 text-sm sm:text-base">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 drop-shadow-lg">30min</div>
                <div className="text-white/70 text-sm sm:text-base">Fast Delivery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/products')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:scale-105"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Order Now</span>
              </button>
              
              <button
                onClick={() => navigate('/products?category=beer')}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2 shadow-2xl shadow-white/10 hover:bg-white/20 hover:shadow-white/20 hover:scale-105"
              >
                <span className="text-xl">🍺</span>
                <span>Browse Drinks</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-12 flex justify-center items-center space-x-6 sm:space-x-8">
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-400">BROCODE</span>?
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
              Experience the best in online beverage and snack delivery with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Get your drinks delivered within 30 minutes'
              },
              {
                icon: '🛡️',
                title: 'Quality Assured',
                description: 'Premium quality beverages and snacks'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive prices with great discounts'
              },
              {
                icon: '🎉',
                title: '24/7 Service',
                description: 'Order anytime, day or night'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-800 transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-yellow-400">Categories</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
              Discover a wide variety of beverages and snacks for every occasion
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <Link to={`/products?category=${category.id}`}>
                  <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 border border-transparent hover:border-yellow-400/30 hover:scale-105">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                      {category.id === 'beer' && (
                        <span className="text-2xl sm:text-3xl">🍺</span>
                      )}
                      {category.id === 'whiskey' && (
                        <span className="text-2xl sm:text-3xl">🥃</span>
                      )}
                      {category.id === 'champagne' && (
                        <span className="text-2xl sm:text-3xl">🍾</span>
                      )}
                      {category.id === 'rum' && (
                        <span className="text-2xl sm:text-3xl">🏴‍☠️</span>
                      )}
                      {category.id === 'tobacco' && (
                        <span className="text-2xl sm:text-3xl">🚬</span>
                      )}
                      {category.id === 'chakna' && (
                        <span className="text-2xl sm:text-3xl">🍿</span>
                      )}
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg group-hover:text-yellow-400 transition-colors duration-300">{category.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-yellow-400">Products</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
              Handpicked premium beverages and snacks for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;