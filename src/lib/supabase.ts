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

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const url = getEnvVariable('VITE_SUPABASE_URL', 'https://example.supabase.co');
  const key = getEnvVariable('VITE_SUPABASE_ANON_KEY', 'example-key');
  
  return (
    url !== undefined &&
    url !== 'https://example.supabase.co' &&
    key !== undefined &&
    key !== 'example-key'
  );
};