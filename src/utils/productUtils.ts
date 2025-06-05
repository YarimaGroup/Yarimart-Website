import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { Product } from '../types/product';

/**
 * Fetches all products from the database
 */
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    // Check if Supabase is configured properly
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured. Please check your .env file.');
    }

    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
      throw new Error(`Failed to fetch products: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw error;
  }
};

/**
 * Fetches a specific product by ID
 */
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    // Check if Supabase is configured properly
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured. Please check your .env file.');
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw new Error(`Failed to fetch product: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error(`Error in getProductById for ID ${id}:`, error);
    throw error;
  }
};

/**
 * Fetches products by category
 */
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    // Check if Supabase is configured properly
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured. Please check your .env file.');
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category);

    if (error) {
      console.error(`Error fetching products in category ${category}:`, error);
      throw new Error(`Failed to fetch products by category: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error(`Error in getProductsByCategory for category ${category}:`, error);
    throw error;
  }
};

/**
 * Fetches featured products (can be customized based on your business logic)
 */
export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    // Check if Supabase is configured properly
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured. Please check your .env file.');
    }

    // Logic to fetch featured products - adjust as needed for your application
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('rating', { ascending: false })
      .limit(8);

    if (error) {
      console.error('Error fetching featured products:', error);
      throw new Error(`Failed to fetch featured products: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in getFeaturedProducts:', error);
    throw error;
  }
};