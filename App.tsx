
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MarketFlow
            </h1>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Discover Premium Products
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        {/* Sidebar Overlay (Mobile) */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </aside>

        {/* Main Panel */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <ProductList />
        </main>
      </div>
      
      <footer className="w-full bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2024 MarketFlow Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
