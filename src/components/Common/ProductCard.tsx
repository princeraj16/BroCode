import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { StarIcon, PlusIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
            {discount}% OFF
          </div>
        )}
        <button className="absolute top-2 right-2 p-1.5 sm:p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
          <HeartIcon className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-xs sm:text-sm font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-gray-300 text-xs sm:text-sm">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm sm:text-base">{product.name}</h3>
        
        <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-base sm:text-lg">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 text-xs sm:text-sm line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <span className="text-gray-400 text-xs sm:text-sm">
            {product.volume || product.weight}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-yellow-400 text-black font-semibold py-2 px-3 sm:px-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
        >
          <PlusIcon className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;