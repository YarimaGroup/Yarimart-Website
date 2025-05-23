import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/shared/ProductCard';
import { getProducts } from '../utils/productUtils';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';
import { Product } from '../types/product';

const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Fetch products based on category
    const allProducts = getProducts();
    let filtered = allProducts;

    if (category) {
      filtered = allProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase());
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query));
    }

    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [category, searchQuery]);

  useEffect(() => {
    // Apply filters and sorting
    let filtered = [...products];
    
    // Price filter
    filtered = filtered.filter(product => {
      const finalPrice = product.discount > 0 
        ? product.price * (1 - product.discount / 100) 
        : product.price;
      return finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
    });
    
    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors?.some(color => selectedColors.includes(color)));
    }
    
    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes?.some(size => selectedSizes.includes(size)));
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high-low':
        filtered.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'popular':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // newest
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    
    setFilteredProducts(filtered);
  }, [products, priceRange, selectedColors, selectedSizes, sortBy]);

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 500]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSortBy('newest');
  };

  // Get all unique colors and sizes for filters
  const availableColors = Array.from(new Set(
    products.flatMap(product => product.colors || [])
  )).sort();

  const availableSizes = Array.from(new Set(
    products.flatMap(product => product.sizes || [])
  )).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products' }
        ]} 
      />

      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          {searchQuery 
            ? `Search results for "${searchQuery}"` 
            : category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}` 
              : 'All Products'}
        </h1>
        
        <button 
          onClick={toggleFilterMenu}
          className="md:hidden flex items-center text-gray-700 hover:text-primary-600 transition"
        >
          <Filter className="h-5 w-5 mr-1" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter sidebar - desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Filters</h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-primary-600 hover:text-primary-700 transition"
              >
                Reset
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {availableColors.map(color => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColors.includes(color) 
                        ? 'border-primary-500' 
                        : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`h-8 px-3 flex items-center justify-center rounded-md border ${
                      selectedSizes.includes(size)
                        ? 'bg-primary-100 border-primary-500 text-primary-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile filter menu */}
        {isFilterMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex md:hidden">
            <div className="bg-white w-80 max-w-full h-full overflow-y-auto ml-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Filters</h2>
                <button onClick={toggleFilterMenu}>
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm text-gray-500">Filtered Products: {filteredProducts.length}</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 transition"
                >
                  Reset All
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`h-8 w-8 rounded-full border-2 ${
                        selectedColors.includes(color) 
                          ? 'border-primary-500' 
                          : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`h-8 px-3 flex items-center justify-center rounded-md border ${
                        selectedSizes.includes(size)
                          ? 'bg-primary-100 border-primary-500 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button 
                  onClick={toggleFilterMenu}
                  className="flex-1 bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 transition"
                >
                  Show Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-grow">
          {/* Sorting and results count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-500 mr-2">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Active filters */}
          {(selectedColors.length > 0 || selectedSizes.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedColors.map(color => (
                <span 
                  key={color} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {color}
                  <button 
                    onClick={() => toggleColor(color)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              
              {selectedSizes.map(size => (
                <span 
                  key={size} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  Size: {size}
                  <button 
                    onClick={() => toggleSize(size)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              
              <button 
                onClick={resetFilters}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-700 hover:bg-primary-200 transition"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No products found.</p>
              <button 
                onClick={resetFilters}
                className="mt-4 text-primary-600 hover:text-primary-700 transition"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;