
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { PackageSearch, SlidersHorizontal } from 'lucide-react';

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const activeCategories = useMemo(() => {
    return searchParams.get('cat')?.split(',').filter(Boolean) || [];
  }, [searchParams]);

  const activeBrands = useMemo(() => {
    return searchParams.get('brand')?.split(',').filter(Boolean) || [];
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category);
      const matchesBrand = activeBrands.length === 0 || activeBrands.includes(product.brand);
      
      return matchesCategory && matchesBrand;
    });
  }, [activeCategories, activeBrands]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
          <div className="flex flex-wrap gap-x-2 text-gray-500 text-sm mt-1">
            <span>Showing {filteredProducts.length} results</span>
            {activeCategories.length > 0 && (
              <span className="before:content-['|'] before:mr-2">
                Categories: <span className="text-blue-600 font-medium">{activeCategories.join(', ')}</span>
              </span>
            )}
            {activeBrands.length > 0 && (
              <span className="before:content-['|'] before:mr-2">
                Brands: <span className="text-indigo-600 font-medium">{activeBrands.join(', ')}</span>
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 text-gray-600">
            <SlidersHorizontal size={14} />
            <span>Sort by: Featured</span>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400 text-center">
          <PackageSearch size={64} strokeWidth={1} className="mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900">No matches found</h3>
          <p className="max-w-xs mt-1">Try relaxing your category or brand filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
