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
    createdAt: '2024-01-15',
    stock: 35,
    colors: ['Blue', 'Black'],
    sizes: ['Standard']
  },
  {
    id: '11',
    name: 'Professional Router Tool',
    price: 18999,
    discount: 5,
    description: 'Variable speed router with soft start and precision depth adjustment.',
    category: 'Power Tools',
    subcategory: 'Routers',
    tags: ['router', 'woodworking', 'professional'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      power: '1600W',
      voltage: '230V',
      weight: '3.6kg',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 156,
    createdAt: '2024-01-28',
    stock: 45,
    colors: ['Blue', 'Black'],
    sizes: ['Standard']
  },
  {
    id: '12',
    name: 'Demolition Hammer',
    price: 32999,
    discount: 0,
    description: 'Heavy-duty demolition hammer with anti-vibration system.',
    category: 'Power Tools',
    subcategory: 'Hammers',
    tags: ['hammer', 'demolition', 'professional'],
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg'
    ],
    specifications: {
      power: '1500W',
      voltage: '230V',
      weight: '6.8kg',
      warranty: '3 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 89,
    createdAt: '2024-01-20',
    stock: 25,
    colors: ['Yellow', 'Black'],
    sizes: ['Standard']
  },

  // Hand Tools
  {
    id: '13',
    name: 'Professional Wrench Set',
    price: 4999,
    discount: 10,
    description: 'Complete set of professional-grade combination wrenches.',
    category: 'Hand Tools',
    subcategory: 'Wrenches',
    tags: ['wrench', 'hand tools', 'professional'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg'
    ],
    specifications: {
      material: 'Chrome Vanadium Steel',
      weight: '4.2kg',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 234,
    createdAt: '2024-01-15',
    stock: 100,
    colors: ['Silver'],
    sizes: ['8-32mm']
  },
  {
    id: '14',
    name: 'Premium Screwdriver Set',
    price: 2999,
    discount: 0,
    description: 'Professional screwdriver set with ergonomic handles.',
    category: 'Hand Tools',
    subcategory: 'Screwdrivers',
    tags: ['screwdriver', 'hand tools', 'professional'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
    ],
    specifications: {
      material: 'Chrome Vanadium Steel',
      weight: '1.2kg',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 178,
    createdAt: '2024-01-18',
    stock: 150,
    colors: ['Red', 'Blue'],
    sizes: ['Standard']
  },

  // Safety Equipment
  {
    id: '4',
    name: 'Safety Helmet with Face Shield',
    price: 2499,
    discount: 0,
    description: 'Premium safety helmet with integrated face shield and adjustable fitting.',
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
    createdAt: '2024-01-25',
    stock: 200,
    colors: ['White', 'Yellow', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '15',
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
    createdAt: '2024-01-22',
    stock: 300,
    colors: ['Gray', 'Black'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '16',
    name: 'Safety Harness Kit',
    price: 4999,
    discount: 0,
    description: 'Full-body safety harness with lanyard and anchor points.',
    category: 'Safety Equipment',
    subcategory: 'Fall Protection',
    tags: ['safety', 'harness', 'protection'],
    images: [
      'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
      'https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg'
    ],
    specifications: {
      material: 'High-strength Polyester',
      weight: '2.5kg',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 167,
    createdAt: '2024-01-20',
    stock: 100,
    colors: ['Orange', 'Yellow'],
    sizes: ['Universal']
  },

  // Industrial Equipment
  {
    id: '3',
    name: 'Industrial Air Compressor',
    price: 49999,
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
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 89,
    createdAt: '2024-01-20',
    stock: 15,
    colors: ['Gray'],
    sizes: ['Large']
  },
  {
    id: '17',
    name: 'Industrial Band Saw',
    price: 89999,
    discount: 10,
    description: 'Heavy-duty metal cutting band saw for industrial use.',
    category: 'Industrial',
    subcategory: 'Cutting Equipment',
    tags: ['saw', 'industrial', 'metal cutting'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      power: '2200W',
      voltage: '400V',
      weight: '125kg',
      warranty: '2 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 56,
    createdAt: '2024-01-25',
    stock: 10,
    colors: ['Blue'],
    sizes: ['Standard']
  },
  {
    id: '18',
    name: 'Industrial Dust Collector',
    price: 34999,
    discount: 5,
    description: 'High-capacity dust collection system for industrial workshops.',
    category: 'Industrial',
    subcategory: 'Ventilation',
    tags: ['dust collector', 'industrial', 'ventilation'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg'
    ],
    specifications: {
      power: '1500W',
      voltage: '230V',
      weight: '45kg',
      warranty: '2 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 78,
    createdAt: '2024-01-22',
    stock: 20,
    colors: ['Gray'],
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