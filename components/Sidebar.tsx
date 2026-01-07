
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, BRANDS } from '../constants';
import { Filter, RotateCcw } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategories = searchParams.get('cat')?.split(',').filter(Boolean) || [];
  const activeBrands = searchParams.get('brand')?.split(',').filter(Boolean) || [];

  const handleToggleFilter = (key: 'cat' | 'brand', value: string) => {
    const currentValues = searchParams.get(key)?.split(',').filter(Boolean) || [];
    let nextValues: string[];
    
    if (currentValues.includes(value)) {
      nextValues = currentValues.filter(v => v !== value);
    } else {
      nextValues = [...currentValues, value];
    }

    const nextParams = new URLSearchParams(searchParams);
    if (nextValues.length > 0) {
      nextParams.set(key, nextValues.join(','));
    } else {
      nextParams.delete(key);
    }
    
    setSearchParams(nextParams);
  };

  const handleClearAll = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <Filter size={18} />
          <span>Filters</span>
        </div>
        {(activeCategories.length > 0 || activeBrands.length > 0) && (
          <button 
            onClick={handleClearAll}
            className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            <RotateCcw size={12} />
            Reset All
          </button>
        )}
      </div>

      <div className="space-y-8">
        {/* Category Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Categories
          </h3>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <label 
                key={cat} 
                className="flex items-center group cursor-pointer"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent transition-all cursor-pointer"
                    checked={activeCategories.includes(cat)}
                    onChange={() => handleToggleFilter('cat', cat)}
                  />
                  <svg
                    className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className={`ml-3 text-sm transition-colors ${
                  activeCategories.includes(cat) 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Brands
          </h3>
          <div className="space-y-3">
            {BRANDS.map((brand) => (
              <label 
                key={brand} 
                className="flex items-center group cursor-pointer"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-indigo-600 checked:border-transparent transition-all cursor-pointer"
                    checked={activeBrands.includes(brand)}
                    onChange={() => handleToggleFilter('brand', brand)}
                  />
                  <svg
                    className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className={`ml-3 text-sm transition-colors ${
                  activeBrands.includes(brand) 
                    ? 'text-indigo-600 font-medium' 
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 md:hidden">
        <button
          onClick={onClose}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium"
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
