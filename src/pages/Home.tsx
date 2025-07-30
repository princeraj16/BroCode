import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, TruckIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/Common/ProductCard';
import Logo from '../components/Common/Logo';
import { mockProducts, categories } from '../data/mockData';

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

  const offers = [
    "🔥 Get 20% OFF on orders above ₹500 | Code: BROCODE20",
    "⚡ Free delivery on orders above ₹300",
    "🎉 New user? Get ₹50 OFF on first order | Code: NEW50"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Scrolling Offers Banner */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
        >
          {offers.join(' • ')}
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/681847/pexels-photo-681847.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 text-center">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">BROCODE</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 text-center">
                Daaru Aur Chakna, Ek Click Mein Apna
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for your favorite drinks & snacks..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white px-6 py-4 pl-12 rounded-2xl border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none text-lg placeholder-gray-300"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-4 h-6 w-6 text-gray-300" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Search
                </button>
              </div>
            </motion.form>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/products"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
              >
                🛒 Order Now
              </Link>
              <Link
                to="/products?category=beer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                🍺 Browse Drinks
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Get your order delivered in 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">24/7 Available</h3>
              <p className="text-gray-400">Order anytime, anywhere. We're always open</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-gray-400">Only the finest selection of drinks and snacks</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-gray-400 text-lg">Discover our premium collection</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Link to={`/products?category=${category.id}`}>
                  <div className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 transition-colors">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}>
                      {category.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 text-lg">Handpicked favorites just for you</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;