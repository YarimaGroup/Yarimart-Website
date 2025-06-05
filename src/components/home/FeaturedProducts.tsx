import { useState, useEffect } from 'react';
import ProductCard from '../shared/ProductCard';
import { getFeaturedProducts } from '../../utils/productUtils';
import type { Product } from '../../types/product';
import { isSupabaseConfigured } from '../../lib/supabase';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // First check if Supabase is properly configured
        if (!isSupabaseConfigured()) {
          setError('Supabase connection is not properly configured. Please check your .env file and restart the server.');
          setLoading(false);
          return;
        }

        const fetchedProducts = await getFeaturedProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError(`Error fetching featured products: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show instructions if there's a configuration error
  if (error && error.includes('not properly configured')) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
            <h3 className="text-lg font-semibold text-red-800">Configuration Error</h3>
            <p className="text-red-700">{error}</p>
            <div className="mt-4 bg-white p-4 rounded border border-red-100">
              <h4 className="font-semibold">How to fix this issue:</h4>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Create a <code className="bg-gray-100 px-1 rounded">.env</code> file in your project root (or edit if it exists)</li>
                <li>Add your Supabase URL: <code className="bg-gray-100 px-1 rounded">VITE_SUPABASE_URL=your_supabase_project_url</code></li>
                <li>Add your Supabase Anon Key: <code className="bg-gray-100 px-1 rounded">VITE_SUPABASE_ANON_KEY=your_supabase_anon_key</code></li>
                <li>Find these values in your Supabase dashboard under Project Settings &gt; API</li>
                <li>Restart your development server</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg"></div>
                <div className="h-4 bg-gray-200 rounded mt-4"></div>
                <div className="h-3 bg-gray-200 rounded mt-2 w-2/3"></div>
                <div className="h-5 bg-gray-200 rounded mt-4 w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="text-center text-red-600 py-8">
            <p>{error}</p>
            <button 
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <p className="text-center text-gray-600">No featured products found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a 
            href="/catalog"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;