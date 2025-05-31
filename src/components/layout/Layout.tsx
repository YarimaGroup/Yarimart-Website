import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToTop();
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main className="flex-grow dark:bg-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;