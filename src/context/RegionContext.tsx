import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Region, Currency } from '../types/product';

const defaultCurrency: Currency = {
  code: 'USD',
  symbol: '$',
  rate: 1,
  name: 'US Dollar'
};

const defaultRegion: Region = {
  code: 'US',
  name: 'United States',
  currency: defaultCurrency,
  flag: '🇺🇸'
};

const regions: Region[] = [
  defaultRegion,
  {
    code: 'EU',
    name: 'European Union',
    currency: {
      code: 'EUR',
      symbol: '€',
      rate: 0.92,
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
      rate: 0.79,
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
      rate: 148.50,
      name: 'Japanese Yen'
    },
    flag: '🇯🇵'
  },
  {
    code: 'IN',
    name: 'India',
    currency: {
      code: 'INR',
      symbol: '₹',
      rate: 83.25,
      name: 'Indian Rupee'
    },
    flag: '🇮🇳'
  }
];

interface RegionContextType {
  currentRegion: Region;
  setCurrentRegion: (region: Region) => void;
  regions: Region[];
  formatPrice: (price: number) => string;
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

  const formatPrice = (price: number): string => {
    const convertedPrice = price * currentRegion.currency.rate;
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
        formatPrice
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};