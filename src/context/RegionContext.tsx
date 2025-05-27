import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Region, Currency } from '../types/product';

const defaultCurrency: Currency = {
  code: 'INR',
  symbol: '₹',
  rate: 1,
  name: 'Indian Rupee'
};

const defaultRegion: Region = {
  code: 'IN',
  name: 'India',
  currency: defaultCurrency,
  flag: '🇮🇳'
};

const regions: Region[] = [
  defaultRegion,
  {
    code: 'US',
    name: 'United States',
    currency: {
      code: 'USD',
      symbol: '$',
      rate: 0.012,
      name: 'US Dollar'
    },
    flag: '🇺🇸'
  },
  {
    code: 'EU',
    name: 'European Union',
    currency: {
      code: 'EUR',
      symbol: '€',
      rate: 0.011,
      name: 'Euro'
    },
    flag: '🇪🇺'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    currency: {
      code: 'GBP',
      symbol: '£',
      rate: 0.0095,
      name: 'British Pound'
    },
    flag: '🇬🇧'
  },
  {
    code: 'JP',
    name: 'Japan',
    currency: {
      code: 'JPY',
      symbol: '¥',
      rate: 1.78,
      name: 'Japanese Yen'
    },
    flag: '🇯🇵'
  }
];

interface RegionContextType {
  currentRegion: Region;
  setCurrentRegion: (region: Region) => void;
  regions: Region[];
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};

interface RegionProviderProps {
  children: ReactNode;
}

export const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [currentRegion, setCurrentRegion] = useState<Region>(defaultRegion);

  const convertPrice = (price: number): number => {
    return price * currentRegion.currency.rate;
  };

  const formatPrice = (price: number): string => {
    const convertedPrice = convertPrice(price);
    return new Intl.NumberFormat(currentRegion.code, {
      style: 'currency',
      currency: currentRegion.currency.code
    }).format(convertedPrice);
  };

  return (
    <RegionContext.Provider
      value={{
        currentRegion,
        setCurrentRegion,
        regions,
        formatPrice,
        convertPrice
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};