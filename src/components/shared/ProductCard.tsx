import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useRegion } from '../../context/RegionContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useRegion();
  
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group"
    >
      <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-square mb-4">
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            {product.discount}% OFF
          </span>
        )}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full z-10 transition
            ${isWishlisted 
              ? 'bg-primary-100 text-accent-500' 
              : 'bg-white text-gray-400 hover:text-accent-500'}`}
        >
          <Heart className={isWishlisted ? 'fill-accent-500' : ''} size={20} />
        </button>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="mx-auto block bg-white text-primary-900 text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition">{product.name}</h3>
      <div className="mt-1 flex items-center">
        {product.discount > 0 ? (
          <>
            <span className="text-accent-600 font-medium">
              {formatPrice(product.price * (1 - product.discount / 100))}
            </span>
            <span className="ml-2 text-gray-500 text-sm line-through">
              {formatPrice(product.price)}
            </span>
          </>
        ) : (
          <span className="text-gray-900 font-medium">{formatPrice(product.price)}</span>
        )}
      </div>
      {product.stock < 10 && (
        <p className="text-sm text-accent-600 mt-1">
          Only {product.stock} left in stock
        </p>
      )}
    </Link>
  );
};

export default ProductCard;