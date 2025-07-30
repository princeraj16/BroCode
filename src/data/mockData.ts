import { Product, User, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Kingfisher Premium',
    description: 'Premium lager beer with crisp taste and smooth finish',
    price: 65,
    originalPrice: 70,
    image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beer',
    brand: 'Kingfisher',
    volume: '650ml',
    inStock: true,
    rating: 4.2,
    reviews: [],
    tags: ['premium', 'lager', 'cold']
  },
  {
    id: '2',
    name: 'Royal Challenge Whisky',
    description: 'Smooth blended Scotch whisky with rich flavor',
    price: 1200,
    originalPrice: 1350,
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'whiskey',
    brand: 'Royal Challenge',
    volume: '750ml',
    inStock: true,
    rating: 4.5,
    reviews: [],
    tags: ['premium', 'blended', 'smooth']
  },
  {
    id: '3',
    name: 'Sula Sauvignon Blanc',
    description: 'Fresh and crisp white wine with citrus notes',
    price: 850,
    originalPrice: 900,
    image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'wine',
    brand: 'Sula',
    volume: '750ml',
    inStock: true,
    rating: 4.3,
    reviews: [],
    tags: ['white wine', 'crisp', 'citrus']
  },
  {
    id: '4',
    name: 'Lays Classic Salted',
    description: 'Classic potato chips with perfect salt seasoning',
    price: 20,
    originalPrice: 25,
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chips',
    brand: 'Lays',
    weight: '50g',
    inStock: true,
    rating: 4.1,
    reviews: [],
    tags: ['classic', 'salted', 'crispy']
  },
  {
    id: '5',
    name: 'Haldirams Namkeen Mix',
    description: 'Traditional Indian snack mix with spices',
    price: 45,
    originalPrice: 50,
    image: 'https://images.pexels.com/photos/4397913/pexels-photo-4397913.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chakna',
    brand: 'Haldirams',
    weight: '200g',
    inStock: true,
    rating: 4.4,
    reviews: [],
    tags: ['spicy', 'traditional', 'mix']
  },
  {
    id: '6',
    name: 'Roasted Peanuts',
    description: 'Premium roasted peanuts with perfect crunch',
    price: 35,
    originalPrice: 40,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'peanuts',
    brand: 'Farm Fresh',
    weight: '100g',
    inStock: true,
    rating: 4.0,
    reviews: [],
    tags: ['roasted', 'crunchy', 'premium']
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Rahul Sharma',
  email: 'rahul@example.com',
  phone: '+91 9876543210',
  addresses: [
    {
      id: '1',
      type: 'home',
      street: '123 MG Road',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      landmark: 'Near Metro Station'
    }
  ]
};

export const categories = [
  { id: 'beer', name: 'Beer', icon: '🍺', color: 'bg-amber-500' },
  { id: 'whiskey', name: 'Whiskey', icon: '🥃', color: 'bg-orange-600' },
  { id: 'wine', name: 'Wine', icon: '🍷', color: 'bg-red-600' },
  { id: 'chips', name: 'Chips', icon: '🥔', color: 'bg-yellow-500' },
  { id: 'peanuts', name: 'Peanuts', icon: '🥜', color: 'bg-amber-700' },
  { id: 'chakna', name: 'Chakna', icon: '🍿', color: 'bg-orange-500' }
];