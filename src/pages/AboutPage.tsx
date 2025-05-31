import React from 'react';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';
import { Building2, Users, Trophy, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '1995', title: 'Founded', description: 'Started as a small tool shop in Kerala' },
    { year: '2005', title: 'Expansion', description: 'Opened multiple branches across South India' },
    { year: '2015', title: 'Manufacturing', description: 'Started our own manufacturing unit' },
    { year: '2024', title: 'Digital Transformation', description: 'Launched our e-commerce platform' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in everything we do'
    },
    {
      icon: Trophy,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in our products and services'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously evolve and adapt to market needs'
    },
    {
      icon: Building2,
      title: 'Integrity',
      description: 'We conduct our business with honesty and transparency'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'About Us' }
        ]} 
      />

      {/* Hero Section */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Yarimart</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in professional tools and industrial equipment since 1995
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h2>
          <p className="text-primary-800">
            To provide high-quality industrial tools and equipment while delivering exceptional service and technical support to our customers.
          </p>
        </div>
        <div className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h2>
          <p className="text-primary-800">
            To be the leading provider of industrial tools and equipment in India, known for quality, innovation, and customer service.
          </p>
        </div>
      </div>

      {/* Company Values */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 z-10">
                  <div className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="flex-1 md:w-1/2 p-6 bg-white rounded-lg shadow-sm">
                  <span className="text-primary-600 font-bold">{milestone.year}</span>
                  <h3 className="text-xl font-bold mt-1">{milestone.title}</h3>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Our Journey</h2>
        <p className="text-xl text-gray-600 mb-8">
          Experience the difference of working with a company that puts quality and customer satisfaction first.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
            Contact Us
          </a>
          <a href="/careers" className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50">
            View Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;