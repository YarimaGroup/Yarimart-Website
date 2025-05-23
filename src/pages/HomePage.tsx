import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool as Tool, Truck, Wrench, Clock } from 'lucide-react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryPreview from '../components/home/CategoryPreview';
import Newsletter from '../components/shared/Newsletter';

const HomePage: React.FC = () => {
  const categories = [
    {
      id: 'power-tools',
      name: 'Power Tools',
      description: 'Professional-grade power tools for every job',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      link: '/catalog/power-tools',
    },
    {
      id: 'hand-tools',
      name: 'Hand Tools',
      description: 'Quality hand tools for precision work',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      link: '/catalog/hand-tools',
    },
    {
      id: 'industrial',
      name: 'Industrial Equipment',
      description: 'Heavy-duty machinery and industrial supplies',
      image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg',
      link: '/catalog/industrial',
    },
  ];

  const services = [
    {
      icon: Tool,
      title: 'Equipment Rental',
      description: 'Rent professional-grade tools and equipment for your projects',
      link: '/equipment-rental',
    },
    {
      icon: Wrench,
      title: 'Repair Services',
      description: 'Expert repair and maintenance for all types of tools',
      link: '/repair-service',
    },
    {
      icon: Truck,
      title: 'Bulk Orders',
      description: 'Special pricing and delivery for large quantity orders',
      link: '/bulk-orders',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      link: '/technical-support',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <Hero />

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
          <Link
            to="/catalog/new"
            className="flex items-center text-primary-600 hover:text-primary-700 transition"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedProducts category="new" />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryPreview key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete solutions for your industrial and professional needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-100 transition">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link
            to="/catalog/featured"
            className="flex items-center text-primary-600 hover:text-primary-700 transition"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedProducts category="featured" />
      </section>

      {/* Special Offers */}
      <section className="bg-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Tools Sale</h2>
              <p className="text-lg mb-6">Save up to 40% on professional-grade power tools and equipment. Limited time offer.</p>
              <Link
                to="/catalog/sale"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg"
                alt="Professional Tools Sale"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default HomePage;