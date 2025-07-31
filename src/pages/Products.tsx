import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/Common/ProductCard';
import Logo from '../components/Common/Logo';
import { mockProducts, categories } from '../data/mockData';
import { Product } from '../types';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    brand: '',
    sortBy: 'name'
  });

  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, filters]);

  const brands = [...new Set(mockProducts.map(p => p.brand))];
  const priceRanges = [
    { label: 'Under ₹50', value: '0-50' },
    { label: '₹50 - ₹200', value: '50-200' },
    { label: '₹200 - ₹500', value: '200-500' },
    { label: '₹500 - ₹1000', value: '500-1000' },
    { label: 'Above ₹1000', value: '1000' }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      brand: '',
      sortBy: 'name'
    });
  };

  return (
    <div className="min-h-screen bg-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Logo size="md" showTagline={false} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2 text-sm sm:text-base"
          >
            <FunnelIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={false}
            animate={{
              x: showFilters ? 0 : -300,
              opacity: showFilters ? 1 : 0
            }}
            className={`lg:w-64 lg:block ${
              showFilters ? 'fixed inset-0 z-50 bg-black/50' : 'hidden'
            } lg:relative lg:bg-transparent`}
          >
            <div className="bg-gray-900 h-full lg:h-auto lg:rounded-lg p-4 sm:p-6 overflow-y-auto">
              {/* Mobile Filter Header */}
              <div className="lg:hidden flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-white font-semibold text-lg">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-white hover:text-gray-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Sort By */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Sort By</h3>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 outline-none text-sm"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={filters.category === ''}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="text-yellow-400 focus:ring-yellow-400"
                    />
                    <span className="text-white ml-2 text-sm">All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={filters.category === category.id}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="text-yellow-400 focus:ring-yellow-400"
                      />
                      <span className="text-white ml-2 text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value=""
                      checked={filters.priceRange === ''}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                      className="text-yellow-400 focus:ring-yellow-400"
                    />
                    <span className="text-white ml-2 text-sm">Any Price</span>
                  </label>
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={filters.priceRange === range.value}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="text-yellow-400 focus:ring-yellow-400"
                      />
                      <span className="text-white ml-2 text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Brand</h3>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 outline-none text-sm"
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;