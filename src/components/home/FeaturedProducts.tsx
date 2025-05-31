import React from 'react';
import ProductCard from '../shared/ProductCard';
import { getProductsByCategory } from '../../utils/productUtils';
import { useLanguage } from '../../context/LanguageContext';

interface FeaturedProductsProps {
  category: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ category }) => {
  const products = getProductsByCategory(category);
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {products.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 col-span-full text-center py-12">
          {t('product.noProducts') || 'No products found in this category.'}
        </p>
      )}
    </div>
  );
};

export default FeaturedProducts;