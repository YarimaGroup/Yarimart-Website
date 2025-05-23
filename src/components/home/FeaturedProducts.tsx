import React from 'react';
import ProductCard from '../shared/ProductCard';
import { getProductsByCategory } from '../../utils/productUtils';

interface FeaturedProductsProps {
  category: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ category }) => {
  const products = getProductsByCategory(category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;