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
  {
    id: '11',
    name: 'Professional Circular Saw',
    price: 18999,
    discount: 8,
    description: 'High-performance circular saw with 1800W motor and laser guide for precision cutting.',
    category: 'Power Tools',
    subcategory: 'Saws',
    tags: ['saw', 'circular', 'professional'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/1409221/pexels-photo-1409221.jpeg'
    ],
    specifications: {
      power: '1800W',
      voltage: '230V',
      weight: '4.2kg',
      dimensions: '420 x 280 x 250mm',
      warranty: '3 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 176,
    createdAt: '2024-04-15',
    stock: 42
  },
  {
    id: '12',
    name: 'Cordless Rotary Hammer Drill',
    price: 28999,
    discount: 12,
    description: 'Versatile cordless rotary hammer drill with 3 operation modes: drilling, hammer drilling, and chiseling.',
    category: 'Power Tools',
    subcategory: 'Drills',
    tags: ['drill', 'hammer', 'cordless'],
    images: [
      'https://images.pexels.com/photos/4489815/pexels-photo-4489815.jpeg',
      'https://images.pexels.com/photos/4489782/pexels-photo-4489782.jpeg'
    ],
    specifications: {
      power: '36V',
      voltage: 'Battery powered',
      weight: '3.6kg',
      dimensions: '400 x 115 x 220mm',
      warranty: '3 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 134,
    createdAt: '2024-04-22',
    stock: 28
  },
  {
    id: '13',
    name: 'Electric Orbital Sander',
    price: 9999,
    discount: 5,
    description: 'Efficient orbital sander with dust collection system and variable speed control for smooth finishing.',
    category: 'Power Tools',
    subcategory: 'Sanders',
    tags: ['sander', 'orbital', 'electric'],
    images: [
      'https://images.pexels.com/photos/3846477/pexels-photo-3846477.jpeg',
      'https://images.pexels.com/photos/3846284/pexels-photo-3846284.jpeg'
    ],
    specifications: {
      power: '300W',
      voltage: '230V',
      weight: '1.7kg',
      dimensions: '280 x 120 x 135mm',
      warranty: '2 years',
      manufacturer: 'YariTools Pro',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 208,
    createdAt: '2024-05-08',
    stock: 65
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
  {
    id: '14',
    name: 'Full-Face Respirator Mask',
    price: 5999,
    discount: 10,
    description: 'Professional full-face respirator that provides comprehensive protection against dust, fumes, and chemicals.',
    category: 'Safety Equipment',
    subcategory: 'Respiratory Protection',
    tags: ['safety', 'respirator', 'mask'],
    images: [
      'https://images.pexels.com/photos/3951368/pexels-photo-3951368.jpeg',
      'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg'
    ],
    specifications: {
      material: 'Silicone and polycarbonate',
      weight: '650g',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 123,
    createdAt: '2024-04-30',
    stock: 85
  },
  {
    id: '15',
    name: 'Safety Harness Kit',
    price: 6999,
    discount: 0,
    description: 'Complete fall protection harness kit with lanyard and anchor point for working at heights.',
    category: 'Safety Equipment',
    subcategory: 'Fall Protection',
    tags: ['safety', 'harness', 'fall protection'],
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg'
    ],
    specifications: {
      material: 'High-strength polyester',
      weight: '1.8kg',
      warranty: '2 years',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 87,
    createdAt: '2024-05-12',
    stock: 45
  },
  {
    id: '16',
    name: 'Industrial Safety Goggles',
    price: 1299,
    discount: 15,
    description: 'Impact-resistant safety goggles with anti-fog coating and UV protection.',
    category: 'Safety Equipment',
    subcategory: 'Eye Protection',
    tags: ['safety', 'goggles', 'eye protection'],
    images: [
      'https://images.pexels.com/photos/3846118/pexels-photo-3846118.jpeg',
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg'
    ],
    specifications: {
      material: 'Polycarbonate',
      weight: '85g',
      warranty: '1 year',
      manufacturer: 'YariSafety',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 198,
    createdAt: '2024-05-18',
    stock: 150
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
  {
    id: '17',
    name: 'Industrial Hydraulic Press',
    price: 249999,
    discount: 8,
    description: 'Powerful 50-ton hydraulic press for heavy-duty industrial applications and fabrication.',
    category: 'Industrial Equipment',
    subcategory: 'Pressing Equipment',
    tags: ['hydraulic', 'press', 'industrial'],
    images: [
      'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg',
      'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg'
    ],
    specifications: {
      power: '3000W',
      voltage: '400V',
      weight: '560kg',
      warranty: '3 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 32,
    createdAt: '2024-04-20',
    stock: 5
  },
  {
    id: '18',
    name: 'CNC Plasma Cutting Table',
    price: 499999,
    discount: 0,
    description: 'Precision CNC plasma cutting table for metal fabrication with computerized control system.',
    category: 'Industrial Equipment',
    subcategory: 'Cutting Equipment',
    tags: ['cnc', 'plasma', 'cutting'],
    images: [
      'https://images.pexels.com/photos/3846159/pexels-photo-3846159.jpeg',
      'https://images.pexels.com/photos/3912419/pexels-photo-3912419.jpeg'
    ],
    specifications: {
      power: '12000W',
      voltage: '400V',
      weight: '1200kg',
      warranty: '3 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.9,
    reviews: 18,
    createdAt: '2024-05-05',
    stock: 3
  },
  {
    id: '19',
    name: 'Industrial Floor Grinder',
    price: 199999,
    discount: 12,
    description: 'Heavy-duty concrete floor grinder with diamond tooling for surface preparation and polishing.',
    category: 'Industrial Equipment',
    subcategory: 'Surface Treatment',
    tags: ['grinder', 'floor', 'concrete'],
    images: [
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      'https://images.pexels.com/photos/3912428/pexels-photo-3912428.jpeg'
    ],
    specifications: {
      power: '7500W',
      voltage: '400V',
      weight: '285kg',
      warranty: '2 years',
      manufacturer: 'YariIndustrial',
      countryOfOrigin: 'India'
    },
    rating: 4.7,
    reviews: 26,
    createdAt: '2024-04-28',
    stock: 7
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
  },
  {
    id: '20',
    name: 'Circular Saw Blade Set',
    price: 2999,
    discount: 5,
    description: 'Set of 3 premium circular saw blades for cutting wood, metal, and plastic materials.',
    category: 'Spare Parts',
    subcategory: 'Saw Parts',
    tags: ['spare parts', 'circular saw', 'blades'],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg'
    ],
    specifications: {
      material: 'Tungsten Carbide Tipped',
      diameter: '185mm',
      teeth: '24/40/60',
      warranty: '6 months',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.6,
    reviews: 112,
    createdAt: '2024-05-16',
    stock: 70
  },
  {
    id: '21',
    name: 'Hydraulic Cylinder Seal Kit',
    price: 5999,
    discount: 0,
    description: 'Complete seal kit for industrial hydraulic cylinders to prevent leakage and maintain pressure.',
    category: 'Spare Parts',
    subcategory: 'Hydraulic Parts',
    tags: ['spare parts', 'hydraulic', 'seals'],
    images: [
      'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
    ],
    specifications: {
      material: 'Polyurethane and NBR',
      sizes: 'Multiple',
      warranty: '1 year',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.8,
    reviews: 56,
    createdAt: '2024-05-10',
    stock: 40
  },
  {
    id: '22',
    name: 'Drill Bit Set',
    price: 1799,
    discount: 20,
    description: 'Professional 29-piece titanium-coated drill bit set for drilling in metal, wood, and plastic.',
    category: 'Spare Parts',
    subcategory: 'Drill Parts',
    tags: ['spare parts', 'drill', 'bits'],
    images: [
      'https://images.pexels.com/photos/1409221/pexels-photo-1409221.jpeg',
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg'
    ],
    specifications: {
      material: 'HSS with Titanium coating',
      sizes: '1-13mm',
      pieces: '29',
      warranty: '6 months',
      manufacturer: 'YariParts',
      countryOfOrigin: 'India'
    },
    rating: 4.5,
    reviews: 234,
    createdAt: '2024-05-22',
    stock: 180
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