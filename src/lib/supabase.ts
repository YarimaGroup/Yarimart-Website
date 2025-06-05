import { createClient } from '@supabase/supabase-js';

// Function to get environment variables that works in both Vite and Node.js environments
const getEnvVariable = (key: string, defaultValue: string): string => {
  if (typeof import.meta.env !== 'undefined') {
    return import.meta.env[key] || process.env[key] || defaultValue;
  }
  return process.env[key] || defaultValue;
};

// Get Supabase URL and anonymous key from environment variables
const supabaseUrl = getEnvVariable('VITE_SUPABASE_URL', 'https://example.supabase.co');
const supabaseAnonKey = getEnvVariable('VITE_SUPABASE_ANON_KEY', 'example-key');

// Log the configuration
console.log(`Initializing Supabase client with URL: ${supabaseUrl}`);
console.log(`Anon key exists: ${supabaseAnonKey !== 'example-key'}`);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
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
  
  console.log(`Supabase configured: ${isConfigured}`);
  return isConfigured;
};