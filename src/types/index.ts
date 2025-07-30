export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  isAdmin?: boolean;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'beer' | 'whiskey' | 'wine' | 'chips' | 'peanuts' | 'chakna';
  brand: string;
  volume?: string;
  weight?: string;
  inStock: boolean;
  rating: number;
  reviews: Review[];
  tags: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  discount: number;
  deliveryFee: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  address: Address;
  paymentMethod: 'upi' | 'card' | 'cod';
  orderDate: string;
  estimatedDelivery: string;
}

export interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minOrder: number;
  maxDiscount?: number;
  validUntil: string;
}