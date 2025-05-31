import React from 'react';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terms & Conditions' }
        ]} 
      />

      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: May 23, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Products and Services</h2>
          <p className="mb-4">
            All products and services are subject to availability. We reserve the right to discontinue any product or service at any time. Prices for our products are subject to change without notice.
          </p>
          <p>
            We reserve the right to refuse service to anyone for any reason at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Ordering and Payment</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Orders are subject to acceptance and availability</li>
            <li className="mb-2">All prices are in Indian Rupees (INR)</li>
            <li className="mb-2">Payment must be received prior to shipment</li>
            <li className="mb-2">We accept major credit cards and UPI payments</li>
            <li>Prices may change without prior notice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Shipping and Delivery</h2>
          <p className="mb-4">
            We aim to deliver products within the estimated delivery time. However, delays may occur due to unforeseen circumstances. We are not liable for any delays caused by shipping carriers or events beyond our control.
          </p>
          <p>
            Free shipping is available on orders above ₹5000. Standard shipping charges apply to all other orders.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
          <p className="mb-4">Our return policy allows you to return items within:</p>
          <ul className="list-disc pl-6">
            <li>30 days for unused products</li>
            <li>7 days for defective products</li>
            <li>Shipping costs are non-refundable</li>
            <li>Items must be in original packaging</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Warranty</h2>
          <p>
            Products are covered by manufacturer warranty. Warranty periods vary by product. Please refer to the product documentation for specific warranty terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Yarimart and is protected by copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <p>
            Yarimart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kerala, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
          <p>
            For any questions regarding these terms, please contact us at:
          </p>
          <ul className="list-none pl-6 mt-4">
            <li>Email: legal@yarimart.com</li>
            <li>Phone: +91 759 488 8505</li>
            <li>Address: 123 Industrial Area, Kochi, Kerala 682021</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;