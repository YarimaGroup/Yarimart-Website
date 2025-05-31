import { Product } from '../types/product';

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

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: 'cod' | 'bank';
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}