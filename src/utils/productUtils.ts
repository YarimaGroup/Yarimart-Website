import { supabase } from '../lib/supabase';
import { Product } from '../types/product';

// This function now fetches products from Supabase instead of using local data
export const getProducts = async (): Promise<Product[]> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');
      
    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }
    
    return data as Product[];
  } catch (error) {
    console.error('Error in getProducts:', error);
    return [];
  }
};

// Get a product by ID from Supabase
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }
    
    return data as Product;
  } catch (error) {
    console.error('Error in getProductById:', error);
    return null;
  }
};

// Get products by category from Supabase
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    if (category === 'new') {
      // Get products from the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .gte('created_at', thirtyDaysAgo.toISOString())
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error('Error fetching new products:', error);
        return [];
      }
      
      return data as Product[];
    }

    if (category === 'featured') {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('rating', { ascending: false })
        .limit(8);
        
      if (error) {
        console.error('Error fetching featured products:', error);
        return [];
      }
      
      return data as Product[];
    }

    if (category === 'sale') {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .gt('discount', 0)
        .order('discount', { ascending: false });
        
      if (error) {
        console.error('Error fetching sale products:', error);
        return [];
      }
      
      return data as Product[];
    }

    // If no specific category or empty string, return all products
    if (!category || category === '') {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error('Error fetching all products:', error);
        return [];
      }
      
      return data as Product[];
    }

    // Convert category to lowercase and replace hyphens with spaces for comparison
    const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .ilike('category', `%${normalizedCategory}%`);
      
    if (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }
    
    return data as Product[];
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    return [];
  }
};

// Get related products from Supabase
export const getRelatedProducts = async (productId: string, category: string): Promise<Product[]> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .neq('id', productId)
      .limit(4);
      
    if (error) {
      console.error('Error fetching related products:', error);
      return [];
    }
    
    return data as Product[];
  } catch (error) {
    console.error('Error in getRelatedProducts:', error);
    return [];
  }
};