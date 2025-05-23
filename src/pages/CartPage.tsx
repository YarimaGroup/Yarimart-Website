import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => {
    const price = item.discount > 0 
      ? item.price * (1 - item.discount / 100) 
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Shopping Cart' }
        ]} 
      />

      <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-8">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-6">
          <div className="flex justify-center">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
          </div>
          <p className="text-xl text-gray-500">Your cart is empty</p>
          <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/catalog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => {
                  const finalPrice = item.discount > 0 
                    ? item.price * (1 - item.discount / 100) 
                    : item.price;
                    
                  return (
                    <li key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        {/* Product image */}
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>

                        {/* Product details */}
                        <div className="sm:ml-6 sm:flex-1 mt-4 sm:mt-0">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                <Link to={`/product/${item.id}`} className="hover:text-primary-600">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.selectedColor}, {item.selectedSize}
                              </p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                              ${finalPrice.toFixed(2)}
                              {item.discount > 0 && (
                                <span className="ml-2 text-gray-500 line-through text-xs">
                                  ${item.price.toFixed(2)}
                                </span>
                              )}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-500 hover:text-accent-500 transition"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link
                to="/catalog"
                className="text-primary-600 hover:text-primary-700 transition flex items-center"
              >
                <ArrowRight className="h-4 w-4 mr-1 transform rotate-180" />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium">Order Summary</h2>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="text-gray-900 font-medium">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="text-gray-900 font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax (8%)</p>
                  <p className="text-gray-900 font-medium">${tax.toFixed(2)}</p>
                </div>
                <div className="border-t pt-4 mt-4 flex justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-lg font-bold text-gray-900">${total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 transition">
                  Proceed to Checkout
                </button>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 text-center">
                  Free shipping on orders over $50
                </p>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <img 
                    src="https://cdn.pixabay.com/photo/2021/09/22/22/46/credit-card-6648229_960_720.png" 
                    alt="Payment Options" 
                    className="h-6 w-auto"
                  />
                  <p className="text-xs text-gray-500 ml-2">
                    All major credit cards accepted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;