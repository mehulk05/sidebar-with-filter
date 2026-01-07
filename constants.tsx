
import { Product } from './types';

export const CATEGORIES = [
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Sports',
  'Books',
  'Beauty'
];

export const BRANDS = [
  'TechCore',
  'UrbanStyle',
  'GreenLife',
  'SwiftRun',
  'ChefMaster',
  'GlowUp'
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Pro Wireless Headphones',
    category: 'Electronics',
    brand: 'TechCore',
    price: 299,
    description: 'High-fidelity audio with active noise cancellation.',
    image: 'https://picsum.photos/400/300?random=1',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Minimalist Leather Watch',
    category: 'Fashion',
    brand: 'UrbanStyle',
    price: 120,
    description: 'Timeless design with premium Italian leather strap.',
    image: 'https://picsum.photos/400/300?random=2',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Smart Garden Kit',
    category: 'Home & Garden',
    brand: 'GreenLife',
    price: 85,
    description: 'Automated indoor herb garden for the urban chef.',
    image: 'https://picsum.photos/400/300?random=3',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Performance Running Shoes',
    category: 'Sports',
    brand: 'SwiftRun',
    price: 150,
    description: 'Lightweight and responsive for long-distance comfort.',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.9
  },
  {
    id: 5,
    name: 'The Art of Cooking',
    category: 'Books',
    brand: 'ChefMaster',
    price: 45,
    description: 'A comprehensive guide to modern culinary techniques.',
    image: 'https://picsum.photos/400/300?random=5',
    rating: 4.7
  },
  {
    id: 6,
    name: 'Organic Face Serum',
    category: 'Beauty',
    brand: 'GlowUp',
    price: 65,
    description: 'Revitalize your skin with natural botanical extracts.',
    image: 'https://picsum.photos/400/300?random=6',
    rating: 4.6
  },
  {
    id: 7,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    brand: 'TechCore',
    price: 180,
    description: 'Tactile typing experience with RGB backlighting.',
    image: 'https://picsum.photos/400/300?random=7',
    rating: 4.8
  },
  {
    id: 8,
    name: 'Yoga Mat Pro',
    category: 'Sports',
    brand: 'SwiftRun',
    price: 90,
    description: 'Extra thick and non-slip for the ultimate practice.',
    image: 'https://picsum.photos/400/300?random=8',
    rating: 4.4
  },
  {
    id: 9,
    name: 'Smart Coffee Brewer',
    category: 'Electronics',
    brand: 'TechCore',
    price: 220,
    description: 'Precision temperature control for the perfect cup.',
    image: 'https://picsum.photos/400/300?random=9',
    rating: 4.9
  },
  {
    id: 10,
    name: 'Cotton Oxford Shirt',
    category: 'Fashion',
    brand: 'UrbanStyle',
    price: 55,
    description: 'Classic fit, breathable cotton for daily wear.',
    image: 'https://picsum.photos/400/300?random=10',
    rating: 4.3
  }
];
