import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrashIcon, MinusIcon, PlusIcon, TagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Common/Logo';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const { 
    items, 
    updateQuantity, 
    removeFromCart, 
    totalAmount, 
    applyCoupon, 
    couponDiscount, 
    appliedCoupon 
  } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  const deliveryFee = totalAmount >= 300 ? 0 : 40;
  const finalAmount = totalAmount - couponDiscount + deliveryFee;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      const success = applyCoupon(couponCode.trim().toUpperCase());
      if (success) {
        setCouponCode('');
      }
    }
  };

  const handleCheckout = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/cart' } } });
      return;
    }
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-xl sm:rounded-2xl p-8 sm:p-12"
          >
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🛒</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block text-sm sm:text-base"
            >
              Start Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <Logo size="md" showTagline={false} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-400 text-sm sm:text-base">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{item.product.brand}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.product.volume || item.product.weight}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-800 rounded-lg p-2">
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="text-white font-medium px-2 sm:px-3 text-sm sm:text-base">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-center sm:text-right">
                    <p className="text-white font-semibold text-base sm:text-lg">
                      ₹{item.product.price * item.quantity}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-gray-500 text-xs sm:text-sm line-through">
                        ₹{item.product.originalPrice * item.quantity}
                      </p>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-400 hover:text-red-500 transition-colors p-1.5 sm:p-2"
                  >
                    <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 h-fit lg:sticky lg:top-24"
          >
            <h2 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Order Summary</h2>

            {/* Coupon Code */}
            {!appliedCoupon && (
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="w-full bg-gray-800 text-white px-3 sm:px-4 py-2 sm:py-3 pl-8 sm:pl-10 rounded-lg border border-gray-700 focus:border-yellow-400 outline-none text-sm"
                    />
                    <TagIcon className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3.5 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <button
                    onClick={handleApplyCoupon}
                    disabled={!couponCode.trim()}
                    className="bg-yellow-400 text-black px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Apply
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Try: BROCODE10, NEW50, WEEKEND20
                </div>
              </div>
            )}

            {/* Applied Coupon */}
            {appliedCoupon && (
              <div className="mb-4 sm:mb-6 bg-green-900/20 border border-green-700 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">Coupon Applied: {appliedCoupon}</span>
                  <span className="text-green-400 text-sm">-₹{couponDiscount}</span>
                </div>
              </div>
            )}

            {/* Price Breakdown */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              
              {couponDiscount > 0 && (
                <div className="flex justify-between text-green-400 text-sm sm:text-base">
                  <span>Discount</span>
                  <span>-₹{couponDiscount}</span>
                </div>
              )}
              
              <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                <span>Delivery Fee</span>
                {deliveryFee === 0 ? (
                  <span className="text-green-400">FREE</span>
                ) : (
                  <span>₹{deliveryFee}</span>
                )}
              </div>
              
              {deliveryFee > 0 && (
                <p className="text-xs text-gray-400">
                  Add ₹{300 - totalAmount} more for free delivery
                </p>
              )}
              
              <div className="border-t border-gray-700 pt-2 sm:pt-3">
                <div className="flex justify-between text-white font-semibold text-base sm:text-lg">
                  <span>Total</span>
                  <span>₹{finalAmount}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-yellow-400 text-black font-semibold py-3 sm:py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm sm:text-base"
            >
              {user ? 'Proceed to Checkout' : 'Login to Checkout'}
            </button>

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="block text-center text-yellow-400 hover:text-yellow-500 transition-colors mt-3 sm:mt-4 text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;