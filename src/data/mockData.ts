import { Product, User, Order } from '../types';
import { collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
    name: 'Bacardi White Rum',
    description: 'Premium white rum with smooth Caribbean taste',
    price: 950,
    originalPrice: 1100,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'rum',
    brand: 'Bacardi',
    volume: '750ml',
    inStock: true,
    rating: 4.4,
    reviews: [],
    tags: ['premium', 'white rum', 'caribbean']
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
    name: 'Marlboro Red',
    description: 'Classic tobacco cigarettes with rich flavor',
    price: 25,
    originalPrice: 30,
    image: 'https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tobacco',
    brand: 'Marlboro',
    weight: '20 sticks',
    inStock: true,
    rating: 4.1,
    reviews: [],
    tags: ['classic', 'tobacco', 'premium']
  },
  {
    id: '7',
    name: 'Heineken Lager',
    description: 'Premium Dutch lager with distinctive taste',
    price: 85,
    originalPrice: 95,
    image: 'https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beer',
    brand: 'Heineken',
    volume: '650ml',
    inStock: true,
    rating: 4.3,
    reviews: [],
    tags: ['premium', 'lager', 'dutch']
  },
  {
    id: '8',
    name: 'Jack Daniel\'s Tennessee Whiskey',
    description: 'Smooth Tennessee whiskey with charcoal mellowing',
    price: 1800,
    originalPrice: 2000,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'whiskey',
    brand: 'Jack Daniel\'s',
    volume: '750ml',
    inStock: true,
    rating: 4.7,
    reviews: [],
    tags: ['premium', 'tennessee', 'charcoal']
  },
  {
    id: '9',
    name: 'Captain Morgan Spiced Rum',
    description: 'Spiced rum with Caribbean flavors and smooth finish',
    price: 1100,
    originalPrice: 1250,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'rum',
    brand: 'Captain Morgan',
    volume: '750ml',
    inStock: true,
    rating: 4.5,
    reviews: [],
    tags: ['spiced', 'caribbean', 'smooth']
  },
  {
    id: '10',
    name: 'Gold Flake Kings',
    description: 'Premium tobacco cigarettes with rich aroma',
    price: 22,
    originalPrice: 28,
    image: 'https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tobacco',
    brand: 'Gold Flake',
    weight: '20 sticks',
    inStock: true,
    rating: 4.2,
    reviews: [],
    tags: ['premium', 'tobacco', 'rich']
  }
];

// Initialize products in Firestore
export const initializeProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    
    if (snapshot.empty) {
      // Add products to Firestore if collection is empty
      for (const product of mockProducts) {
        await setDoc(doc(db, 'products', product.id), product);
      }
      console.log('Products initialized in Firestore');
    }
  } catch (error) {
    console.error('Error initializing products:', error);
  }
};

// Load products from Firestore
export const loadProductsFromFirestore = async (): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const products: Product[] = [];
    
    snapshot.forEach((doc) => {
      products.push(doc.data() as Product);
    });
    
    return products;
  } catch (error) {
    console.error('Error loading products from Firestore:', error);
    return mockProducts; // Fallback to mock data
  }
};

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
  { id: 'champagne', name: 'Champagne', icon: '🍾', color: 'bg-yellow-400' },
  { id: 'rum', name: 'Rum', icon: '🏴‍☠️', color: 'bg-amber-700' },
  { id: 'tobacco', name: 'Tobacco', icon: '🚬', color: 'bg-gray-600' },
  { id: 'chakna', name: 'Chakna', icon: '🍿', color: 'bg-orange-500' }
];