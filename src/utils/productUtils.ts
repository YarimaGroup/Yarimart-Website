import { Product } from '../types/product';

const products: Product[] = [
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
      countryOfOrigin: 'Germany'
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
      countryOfOrigin: 'Japan'
    },
    rating: 4.6,
    reviews: 182,
    createdAt: '2024-01-15',
    stock: 35,
    colors: ['Blue', 'Black'],
    sizes: ['Standard']
  },
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
      countryOfOrigin: 'Italy'
    },
    rating: 4.9,
    reviews: 89,
    createdAt: '2024-01-20',
    stock: 15,
    colors: ['Gray'],
    sizes: ['Large']
  },
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
    id: '5',
    name: 'Industrial Welding Machine',
    price: 34999,
    discount: 20,
    description: 'Professional inverter welding machine with IGBT technology.',
    category: 'Industrial',
    subcategory: 'Welding',
    tags: ['welding', 'industrial', 'professional'],
    images: [
      'https://images.pexels.com/photos/2918997/pexels-photo-2918997.jpeg',
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg'
    ],
    specifications: {
      power: '5000W',
      voltage: '230V',
      weight: '12kg',
      dimensions: '500 x 300 x 400mm',
      warranty: '2 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 92,
    createdAt: '2024-01-18',
    stock: 25,
    colors: ['Blue'],
    sizes: ['Standard']
  },
  {
    id: '6',
    name: 'Laser Level Tool',
    price: 12999,
    discount: 5,
    description: 'Professional laser level with cross-line projection and self-leveling.',
    category: 'Power Tools',
    subcategory: 'Measuring Tools',
    tags: ['laser', 'level', 'measuring'],
    images: [
      'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
      'https://images.pexels.com/photos/834893/pexels-photo-834893.jpeg'
    ],
    specifications: {
      power: 'Battery powered',
      weight: '500g',
      dimensions: '150 x 80 x 120mm',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'Japan'
    },
    rating: 4.7,
    reviews: 143,
    createdAt: '2024-01-22',
    stock: 45,
    colors: ['Green'],
    sizes: ['Standard']
  },
  {
    id: '7',
    name: 'Safety Work Boots',
    price: 3999,
    discount: 10,
    description: 'Steel-toed safety boots with anti-slip sole and water resistance.',
    category: 'Safety Equipment',
    subcategory: 'Footwear',
    tags: ['safety', 'boots', 'protection'],
    images: [
      'https://images.pexels.com/photos/1619149/pexels-photo-1619149.jpeg',
      'https://images.pexels.com/photos/1619150/pexels-photo-1619150.jpeg'
    ],
    specifications: {
      material: 'Genuine leather',
      weight: '1.2kg/pair',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 278,
    createdAt: '2024-01-15',
    stock: 150,
    colors: ['Brown', 'Black'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
  },
  {
    id: '8',
    name: 'Industrial Generator',
    price: 89999,
    discount: 15,
    description: 'Heavy-duty diesel generator for industrial backup power.',
    category: 'Industrial',
    subcategory: 'Power Generation',
    tags: ['generator', 'power', 'industrial'],
    images: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
      'https://images.pexels.com/photos/257737/pexels-photo-257737.jpeg'
    ],
    specifications: {
      power: '10kVA',
      voltage: '230V/400V',
      weight: '180kg',
      dimensions: '1200 x 800 x 900mm',
      warranty: '3 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 45,
    createdAt: '2024-01-10',
    stock: 8,
    colors: ['Yellow'],
    sizes: ['Standard']
  },
  {
    id: '9',
    name: 'Safety Goggles Pack',
    price: 1499,
    discount: 0,
    description: 'Anti-fog safety goggles with UV protection and adjustable strap.',
    category: 'Safety Equipment',
    subcategory: 'Eye Protection',
    tags: ['safety', 'goggles', 'protection'],
    images: [
      'https://images.pexels.com/photos/3846076/pexels-photo-3846076.jpeg',
      'https://images.pexels.com/photos/3846077/pexels-photo-3846077.jpeg'
    ],
    specifications: {
      material: 'Polycarbonate',
      weight: '120g',
      warranty: '6 months',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.5,
    reviews: 312,
    createdAt: '2024-01-28',
    stock: 300,
    colors: ['Clear', 'Tinted'],
    sizes: ['Universal']
  },
  {
    id: '10',
    name: 'Circular Saw',
    price: 19999,
    discount: 25,
    description: 'Professional circular saw with laser guide and dust collection.',
    category: 'Power Tools',
    subcategory: 'Saws',
    tags: ['saw', 'cutting', 'professional'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3846160/pexels-photo-3846160.jpeg'
    ],
    specifications: {
      power: '2000W',
      voltage: '230V',
      weight: '4.2kg',
      dimensions: '400 x 250 x 300mm',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 167,
    createdAt: '2024-01-12',
    stock: 40,
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

  return products
    .filter(product => product.category.toLowerCase() === category.toLowerCase())
    .slice(0, 4);
};

export const getRelatedProducts = (productId: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === category)
    .slice(0, 4);
};