
import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-gray-800 shadow-sm">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          {product.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/60 to-transparent">
          <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">
            {product.brand}
          </span>
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900 ml-2">${product.price}</span>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mt-auto">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
