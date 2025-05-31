import { Product } from '../types/product';

const products: Product[] = [
  // Power Tools
  {
    id: '1',
    name: 'Professional Impact Drill',
    price: 24999,
    discount: 10,
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
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 245,
    createdAt: '2024-02-01',
    stock: 50,
    colors: ['Red', 'Black'],
    sizes: ['Standard']
  },
  {
    id: '2',
    name: 'Cordless Angle Grinder',
    price: 15999,
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
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 182,
    createdAt: '2024-05-15',
    stock: 35,
    colors: ['Blue', 'Black'],
    sizes: ['Standard']
  },

  // Safety Equipment
  {
    id: '3',
    name: 'Premium Safety Helmet',
    price: 2499,
    discount: 0,
    description: 'High-quality safety helmet with adjustable fitting and ventilation.',
    category: 'Safety Equipment',
    subcategory: 'Head Protection',
    tags: ['safety', 'helmet', 'protection'],
    images: [
      'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
      'https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg'
    ],
    specifications: {
      material: 'High-impact ABS',
      weight: '450g',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 156,
    createdAt: '2024-05-20',
    stock: 200,
    colors: ['White', 'Yellow', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Cut Resistant Gloves',
    price: 999,
    discount: 5,
    description: 'High-performance cut-resistant gloves for industrial use.',
    category: 'Safety Equipment',
    subcategory: 'Hand Protection',
    tags: ['safety', 'gloves', 'protection'],
    images: [
      'https://images.pexels.com/photos/3846076/pexels-photo-3846076.jpeg',
      'https://images.pexels.com/photos/3846077/pexels-photo-3846077.jpeg'
    ],
    specifications: {
      material: 'HPPE + Steel Fiber',
      weight: '120g',
      warranty: '6 months',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.5,
    reviews: 245,
    createdAt: '2024-05-22',
    stock: 300,
    colors: ['Gray', 'Black'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'Safety Goggles',
    price: 599,
    discount: 0,
    description: 'Impact-resistant safety goggles with anti-fog coating.',
    category: 'Safety Equipment',
    subcategory: 'Eye Protection',
    tags: ['safety', 'goggles', 'protection'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      material: 'Polycarbonate',
      weight: '85g',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 178,
    createdAt: '2024-05-23',
    stock: 250,
    colors: ['Clear', 'Yellow'],
    sizes: ['Universal']
  },

  // New Arrivals (last 30 days)
  {
    id: '6',
    name: 'Advanced Power Drill Set',
    price: 29999,
    discount: 0,
    description: 'Complete professional drill set with multiple attachments and carrying case.',
    category: 'Power Tools',
    subcategory: 'Power Tools',
    tags: ['drill', 'professional', 'set'],
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg'
    ],
    specifications: {
      power: '1500W',
      voltage: '230V',
      weight: '3.2kg',
      warranty: '3 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 45,
    createdAt: '2024-05-25',
    stock: 30,
    colors: ['Red', 'Black'],
    sizes: ['Standard']
  },
  {
    id: '7',
    name: 'Professional Tool Kit',
    price: 19999,
    discount: 10,
    description: 'Comprehensive tool kit for professional mechanics and technicians.',
    category: 'Hand Tools',
    subcategory: 'Hand Tools',
    tags: ['tools', 'professional', 'kit'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg'
    ],
    specifications: {
      weight: '12kg',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 32,
    createdAt: '2024-05-24',
    stock: 25,
    colors: ['Red', 'Black'],
    sizes: ['Standard']
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
    // Get products from the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    return products
      .filter(product => new Date(product.createdAt) >= thirtyDaysAgo)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  if (category === 'featured') {
    return products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  }

  if (category === 'sale') {
    return products
      .filter(product => product.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 4);
  }

  // Convert category to lowercase and replace hyphens with spaces for comparison
  const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
  
  return products.filter(product => 
    product.category.toLowerCase() === normalizedCategory
  );
};

export const getRelatedProducts = (productId: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === category)
    .slice(0, 4);
};