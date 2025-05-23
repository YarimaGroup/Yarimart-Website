import { Product } from '../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Professional Impact Drill',
    price: 299.99,
    discount: 0,
    description: 'Heavy-duty impact drill with variable speed control and hammer function. Perfect for professional use.',
    category: 'Power Tools',
    subcategory: 'Drills',
    tags: ['drill', 'impact', 'professional'],
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg',
      'https://images.pexels.com/photos/4489731/pexels-photo-4489731.jpeg'
    ],
    specifications: {
      power: '1200W',
      voltage: '230V',
      weight: '2.9kg',
      dimensions: '362 x 102 x 114mm',
      warranty: '3 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'Germany'
    },
    rating: 4.8,
    reviews: 245,
    createdAt: '2024-02-01',
    stock: 50
  },
  {
    id: '2',
    name: 'Cordless Angle Grinder',
    price: 199.99,
    discount: 15,
    description: 'Powerful cordless angle grinder with brushless motor and variable speed control.',
    category: 'Power Tools',
    subcategory: 'Grinders',
    tags: ['grinder', 'cordless', 'professional'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
      'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg'
    ],
    specifications: {
      power: '18V',
      voltage: 'Battery powered',
      weight: '2.1kg',
      dimensions: '311 x 104 x 128mm',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'Japan'
    },
    rating: 4.6,
    reviews: 182,
    createdAt: '2024-01-15',
    stock: 35
  },
  {
    id: '3',
    name: 'Industrial Air Compressor',
    price: 599.99,
    discount: 0,
    description: 'High-capacity air compressor suitable for industrial applications with dual-stage compression.',
    category: 'Industrial',
    subcategory: 'Compressors',
    tags: ['compressor', 'industrial', 'heavy-duty'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
    ],
    specifications: {
      power: '3000W',
      voltage: '400V',
      weight: '85kg',
      dimensions: '1200 x 600 x 900mm',
      warranty: '5 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'Italy'
    },
    rating: 4.9,
    reviews: 89,
    createdAt: '2024-01-20',
    stock: 15
  }
];

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | null => {
  return products.find(product => product.id === id) || null;
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'new') {
    return products
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4);
  }

  if (category === 'featured') {
    return products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  }

  if (category === 'sale') {
    return products
      .filter(product => product.discount > 0)
      .slice(0, 4);
  }

  return products
    .filter(product => product.category.toLowerCase() === category.toLowerCase())
    .slice(0, 4);
};

export const getRelatedProducts = (productId: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === category)
    .slice(0, 4);
};