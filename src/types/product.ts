export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  category: string;
  subcategory?: string;
  tags: string[];
  images: string[];
  specifications: {
    power?: string;
    voltage?: string;
    weight?: string;
    dimensions?: string;
    warranty?: string;
    manufacturer?: string;
    countryOfOrigin?: string;
  };
  rating: number;
  reviews: number;
  createdAt: string;
  stock: number;
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
  name: string;
}

export type Region = {
  code: string;
  name: string;
  currency: Currency;
  flag: string;
};