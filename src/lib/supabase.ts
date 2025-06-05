import { createClient } from '@supabase/supabase-js';

// Function to get environment variables that works in both Vite and Node.js environments
const getEnvVariable = (key: string, defaultValue: string): string => {
  if (typeof import.meta.env !== 'undefined') {
    return import.meta.env[key] || process.env[key] || defaultValue;
  }
  return process.env[key] || defaultValue;
};

// Default values for development to prevent crashes
const supabaseUrl = getEnvVariable('VITE_SUPABASE_URL', 'https://example.supabase.co');
const supabaseAnonKey = getEnvVariable('VITE_SUPABASE_ANON_KEY', 'example-key');

// Enhanced logging for debugging
if (supabaseUrl === 'https://example.supabase.co' || supabaseAnonKey === 'example-key') {
  console.error('⚠️ CRITICAL ERROR: Supabase environment variables are not properly configured!');
  console.error('Make sure you have created a .env file with the following variables:');
  console.error('VITE_SUPABASE_URL=your_actual_supabase_url');
  console.error('VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key');
  console.error('You can find these values in your Supabase dashboard under Project Settings > API');
} else {
  console.log(`✅ Supabase URL configured: ${supabaseUrl.substring(0, 20)}...`);
  console.log(`✅ Supabase Anon Key provided: ${supabaseAnonKey ? 'Yes' : 'No'}`);
}

// Create the Supabase client with explicit auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
  }
});

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const url = getEnvVariable('VITE_SUPABASE_URL', 'https://example.supabase.co');
  const key = getEnvVariable('VITE_SUPABASE_ANON_KEY', 'example-key');
  
  const isConfigured = (
    url !== undefined &&
    url !== 'https://example.supabase.co' &&
    key !== undefined &&
    key !== 'example-key'
  );
  
  return isConfigured;
};

// Helper function to test the Supabase connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('products').select('id').limit(1);
    if (error) {
      console.error('Supabase connection test failed:', error.message);
      return { success: false, message: error.message };
    }
    console.log('Supabase connection successful!', data);
    return { success: true };
  } catch (err) {
    console.error('Failed to connect to Supabase:', err);
    return { 
      success: false, 
      message: err instanceof Error ? err.message : 'Unknown error connecting to Supabase'
    };
  }
};