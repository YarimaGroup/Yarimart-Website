import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Package, MapPin, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';

const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.user_metadata?.full_name || '',
    phone: user?.user_metadata?.phone || '',
    addressLine1: user?.user_metadata?.addressLine1 || '',
    addressLine2: user?.user_metadata?.addressLine2 || '',
    city: user?.user_metadata?.city || '',
    state: user?.user_metadata?.state || '',
    pincode: user?.user_metadata?.pincode || ''
  });

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would update the user metadata here
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Profile' }
        ]} 
      />

      <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{user?.email}</h1>
              <p className="text-gray-600">Member since {new Date(user?.created_at || '').toLocaleDateString()}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-2">
              <Package className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Orders</h3>
            </div>
            <p className="text-2xl font-bold">0</p>
            <button
              onClick={() => navigate('/profile/orders')}
              className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              View Orders
            </button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Shipping Address</h3>
            </div>
            <p className="text-sm text-gray-600">
              {formData.addressLine1 ? `${formData.addressLine1}, ${formData.city}` : 'Not set'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-2">
              <Phone className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Contact</h3>
            </div>
            <p className="text-sm text-gray-600">
              {formData.phone || 'Not set'}
            </p>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Profile Settings
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{formData.fullName || 'Not set'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <p className="mt-1 text-gray-900">{user?.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{formData.phone || 'Not set'}</p>
                )}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
                
                {isEditing ? (
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address Line 2 (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.addressLine2}
                        onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        pattern="[0-9]{6}"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-900">{formData.addressLine1 || 'Not set'}</p>
                    {formData.addressLine2 && (
                      <p className="text-gray-900">{formData.addressLine2}</p>
                    )}
                    {(formData.city || formData.state) && (
                      <p className="text-gray-900">
                        {[formData.city, formData.state].filter(Boolean).join(', ')}
                      </p>
                    )}
                    {formData.pincode && (
                      <p className="text-gray-900">PIN: {formData.pincode}</p>
                    )}
                  </div>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;