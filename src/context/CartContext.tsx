import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { CartItem, Product } from '../types';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  applyCoupon: (code: string) => boolean;
  couponDiscount: number;
  appliedCoupon: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const { user } = useAuth();

  // Load cart from Firestore when user changes
  useEffect(() => {
    if (!user) {
      setItems([]);
      return;
    }

    const cartRef = doc(db, 'carts', user.id);
    const unsubscribe = onSnapshot(cartRef, (doc) => {
      if (doc.exists()) {
        const cartData = doc.data();
        setItems(cartData.items || []);
        setCouponDiscount(cartData.couponDiscount || 0);
        setAppliedCoupon(cartData.appliedCoupon || null);
      } else {
        setItems([]);
        setCouponDiscount(0);
        setAppliedCoupon(null);
      }
    });

    return unsubscribe;
  }, [user]);

  // Save cart to Firestore whenever items change
  useEffect(() => {
    if (!user) return;

    const cartRef = doc(db, 'carts', user.id);
    setDoc(cartRef, {
      items,
      couponDiscount,
      appliedCoupon,
      updatedAt: new Date()
    }, { merge: true });
  }, [items, couponDiscount, appliedCoupon, user]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        toast.success('Quantity updated in cart');
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success('Added to cart');
        return [...prev, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
    toast.success('Removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setCouponDiscount(0);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string): boolean => {
    const validCoupons = {
      'BROCODE10': { discount: 10, type: 'percentage' as const, minOrder: 500 },
      'NEW50': { discount: 50, type: 'fixed' as const, minOrder: 200 },
      'WEEKEND20': { discount: 20, type: 'percentage' as const, minOrder: 300 }
    };

    const coupon = validCoupons[code as keyof typeof validCoupons];
    if (coupon && totalAmount >= coupon.minOrder) {
      const discount = coupon.type === 'percentage' 
        ? (totalAmount * coupon.discount) / 100
        : coupon.discount;
      
      setCouponDiscount(discount);
      setAppliedCoupon(code);
      toast.success(`Coupon applied! ₹${discount} discount`);
      return true;
    }
    
    toast.error('Invalid coupon or minimum order not met');
    return false;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalAmount,
      applyCoupon,
      couponDiscount,
      appliedCoupon
    }}>
      {children}
    </CartContext.Provider>
  );
};