import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

// List of admin emails
const ADMIN_EMAILS = [
  'pamacomkb@gmail.com',
  'yarimaind@gmail.com', 
  'pamacospares@gmail.com', 
  'fortunemillstores@gmail.com'
];

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run auth checks if Supabase is configured
    if (isSupabaseConfigured()) {
      // Check active sessions and sets the user
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        
        // Check if user is an admin
        if (session?.user) {
          const userIsAdmin = ADMIN_EMAILS.includes(session.user.email || '');
          setIsAdmin(userIsAdmin);
          console.log("User authenticated, admin status:", userIsAdmin);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      });

      // Listen for changes on auth state
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        
        // Check if user is an admin
        if (session?.user) {
          const userIsAdmin = ADMIN_EMAILS.includes(session.user.email || '');
          setIsAdmin(userIsAdmin);
          console.log("Auth state changed, admin status:", userIsAdmin);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      // If Supabase is not configured, just set loading to false
      setLoading(false);
    }
  }, []);

  const signUp = async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      console.error('Supabase is not properly configured');
      throw new Error('Authentication service is not available');
    }
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  };

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      console.error('Supabase is not properly configured');
      throw new Error('Authentication service is not available');
    }
    
    console.log(`Attempting to sign in: ${email}`);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error("Sign in error:", error.message);
      throw error;
    }
    
    console.log("Sign in successful:", data.user?.email);
    
    // Check if user is admin
    const userIsAdmin = ADMIN_EMAILS.includes(email);
    setIsAdmin(userIsAdmin);
  };

  const signOut = async () => {
    if (!isSupabaseConfigured()) {
      console.error('Supabase is not properly configured');
      throw new Error('Authentication service is not available');
    }
    
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};