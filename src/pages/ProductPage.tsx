import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Heart, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../utils/productUtils';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';
import ProductCard from '../components/shared/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types/product';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Set default selections
        if (foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
        
        if (foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
        
        setRelatedProducts(getRelatedProducts(foundProduct.id, foundProduct.category));
        setIsWishlisted(isInWishlist(foundProduct.id));
      }
    }
  }, [id, isInWishlist]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart({
        ...product,
        selectedSize,
        selectedColor
      }, quantity);
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      toggleWishlist(product);
      setIsWishlisted(!isWishlisted);
    }
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-xl text-gray-500">Product not found.</p>
        <Link 
          to="/catalog"
          className="inline-block mt-4 text-primary-600 hover:text-primary-700 transition"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  const finalPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: product.category, href: `/catalog/${product.category.toLowerCase()}` },
          { name: product.name }
        ]} 
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-primary-500' : 'ring-1 ring-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Rating */}
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-4">
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-accent-600">${finalPrice.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="ml-2 bg-accent-100 text-accent-800 text-xs font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            )}
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Colors */}
          {product.colors.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-primary-500' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <Link to="/size-guide" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                  Size guide
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-center text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-l-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <Minus size={16} />
              </button>
              <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-200">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-r-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md flex items-center justify-center font-medium transition"
              disabled={!selectedSize || !selectedColor}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button
              onClick={handleToggleWishlist}
              className={`w-12 h-12 rounded-md flex items-center justify-center border ${
                isWishlisted 
                  ? 'bg-primary-50 text-accent-500 border-accent-500' 
                  : 'text-gray-400 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Heart className={isWishlisted ? 'fill-accent-500' : ''} size={20} />
            </button>
          </div>

          {/* Additional information */}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Free shipping</span> on orders over $50
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Easy returns</span> within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button className="border-primary-500 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Details
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Reviews ({product.reviews})
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Shipping & Returns
            </button>
          </nav>
        </div>
        <div className="py-8 prose max-w-none">
          <h3>Product Details</h3>
          <p>{product.description}</p>
          <ul>
            <li>Material: {product.details?.material || 'Not specified'}</li>
            <li>Country of Origin: {product.details?.origin || 'Not specified'}</li>
            <li>Care: Hand wash or machine wash cold</li>
          </ul>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;