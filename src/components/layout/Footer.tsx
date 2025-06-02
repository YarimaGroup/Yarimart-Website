import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Yarimart</h3>
            <p className="text-gray-300 text-sm">
              Your trusted source for professional-grade tools and industrial equipment since 1995.
            </p>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone size={20} className="flex-shrink-0" />
              <div className="text-sm">
                <p>{t('footer.support')}:</p>
                <p>+917594888505</p>
                <p>+917594888504</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin size={20} className="flex-shrink-0" />
              <span className="text-sm">{t('footer.address')}</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yarima_business_group" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/yarimaind" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/YarimaTools" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:yarimaind@gmail.com" className="text-gray-300 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/power-tools" className="text-gray-300 hover:text-white transition text-sm">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link to="/catalog/hand-tools" className="text-gray-300 hover:text-white transition text-sm">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link to="/catalog/industrial" className="text-gray-300 hover:text-white transition text-sm">
                  Industrial Equipment
                </Link>
              </li>
              <li>
                <Link to="/catalog/safety" className="text-gray-300 hover:text-white transition text-sm">
                  Safety Equipment
                </Link>
              </li>
              <li>
                <Link to="/catalog/spare-parts" className="text-gray-300 hover:text-white transition text-sm">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-white transition text-sm">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400">{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;