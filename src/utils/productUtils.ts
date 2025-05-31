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
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg'
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
    createdAt: '2024-05-01',
    stock: 50
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
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg'
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
    stock: 35
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
    stock: 200
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
    stock: 300
  },

  // Industrial Equipment
  {
    id: '5',
    name: 'Industrial Air Compressor',
    price: 89999,
    discount: 0,
    description: 'High-capacity industrial air compressor with dual-stage compression.',
    category: 'Industrial Equipment',
    subcategory: 'Compressors',
    tags: ['compressor', 'industrial', 'heavy-duty'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg'
    ],
    specifications: {
      power: '5500W',
      voltage: '400V',
      weight: '125kg',
      warranty: '3 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 78,
    createdAt: '2024-05-10',
    stock: 15
  },
  {
    id: '6',
    name: 'Industrial Band Saw',
    price: 149999,
    discount: 5,
    description: 'Heavy-duty metal cutting band saw for industrial applications.',
    category: 'Industrial Equipment',
    subcategory: 'Cutting Equipment',
    tags: ['saw', 'industrial', 'metal cutting'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      power: '2200W',
      voltage: '400V',
      weight: '320kg',
      warranty: '2 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 45,
    createdAt: '2024-05-12',
    stock: 8
  },

  // Spare Parts
  {
    id: '7',
    name: 'Drill Chuck Assembly',
    price: 1999,
    discount: 0,
    description: 'Replacement drill chuck assembly compatible with most professional drill models.',
    category: 'Spare Parts',
    subcategory: 'Drill Parts',
    tags: ['spare parts', 'drill', 'chuck'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg'
    ],
    specifications: {
      material: 'Hardened Steel',
      weight: '350g',
      warranty: '6 months',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 89,
    createdAt: '2024-05-25',
    stock: 150
  },
  {
    id: '8',
    name: 'Grinder Carbon Brushes',
    price: 499,
    discount: 10,
    description: 'High-quality carbon brushes for angle grinders. Pack of 2.',
    category: 'Spare Parts',
    subcategory: 'Grinder Parts',
    tags: ['spare parts', 'grinder', 'brushes'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg'
    ],
    specifications: {
      material: 'Carbon',
      weight: '50g',
      warranty: '3 months',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.4,
    reviews: 156,
    createdAt: '2024-05-26',
    stock: 300
  },
  {
    id: '9',
    name: 'Compressor Pressure Switch',
    price: 2499,
    discount: 5,
    description: 'Replacement pressure switch for air compressors with adjustable cut-in/cut-out pressure.',
    category: 'Spare Parts',
    subcategory: 'Compressor Parts',
    tags: ['spare parts', 'compressor', 'switch'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg'
    ],
    specifications: {
      pressure: '90-120 PSI',
      weight: '200g',
      warranty: '1 year',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 67,
    createdAt: '2024-05-27',
    stock: 80
  },
  {
    id: '10',
    name: 'Band Saw Blade Set',
    price: 3999,
    discount: 15,
    description: 'Set of 3 high-speed steel band saw blades for metal cutting.',
    category: 'Spare Parts',
    subcategory: 'Saw Parts',
    tags: ['spare parts', 'band saw', 'blades'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      material: 'HSS',
      length: '1425mm',
      width: '13mm',
      warranty: '3 months',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 92,
    createdAt: '2024-05-28',
    stock: 45
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
      .sort((a, b) => b.discount - a.discount);
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