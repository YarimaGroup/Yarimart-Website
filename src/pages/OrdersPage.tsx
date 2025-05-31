import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useRegion } from '../context/RegionContext';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';
import { Order } from '../types/product';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { formatPrice } = useRegion();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOrders(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Profile', href: '/profile' },
          { name: 'My Orders' }
        ]} 
      />

      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-8">My Orders</h1>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
            <p className="mt-1 text-sm text-gray-500">
              You haven't placed any orders yet.
            </p>
            <div className="mt-6">
              <Link
                to="/catalog"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        Order placed on {new Date(order.created_at).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Order #{order.id.slice(0, 8)}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {order.items.map((item, index) => (
                          <li key={index} className="py-6 flex">
                            <div className="flex-1 ml-4">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Quantity: {item.quantity}
                                  </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  {formatPrice(item.price * item.quantity)}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(order.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">{formatPrice(order.shipping)}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">{formatPrice(order.tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
                      <span>Total</span>
                      <span>{formatPrice(order.total)}</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Shipping Address
                        </h4>
                        <div className="mt-1 text-sm text-gray-500">
                          <p>{order.shipping_address.fullName}</p>
                          <p>{order.shipping_address.addressLine1}</p>
                          {order.shipping_address.addressLine2 && (
                            <p>{order.shipping_address.addressLine2}</p>
                          )}
                          <p>
                            {order.shipping_address.city}, {order.shipping_address.state}{' '}
                            {order.shipping_address.pincode}
                          </p>
                          <p>Phone: {order.shipping_address.phone}</p>
                        </div>
                      </div>
                      <Link
                        to={`/order/${order.id}`}
                        className="flex items-center text-primary-600 hover:text-primary-700"
                      >
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;