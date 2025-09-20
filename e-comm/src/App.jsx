import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Sidebar from './components/Sidebar';
import FilterPanel from './components/FilterPanel';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import products from './data/products';

import { filterProducts, sortProducts, paginateProducts } from './utils/helpers';

function App() {
  const [filters, setFilters] = useState({
    category: '',
    colors: [],
    priceRange: [1.00, 25.99],
    sortBy: 'name',
    sortOrder: 'asc',
    hotDealsOnly: false
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { filteredProducts, currentProducts, totalPages } = useMemo(() => {
  
    let result = filterProducts(products, filters);

    result = sortProducts(result, filters.sortBy, filters.sortOrder);

    const totalPages = Math.ceil(result.length / itemsPerPage);
    const currentProducts = paginateProducts(result, currentPage, itemsPerPage);

    return { filteredProducts: result, currentProducts, totalPages };
  }, [filters, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4 border-b">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="ml-auto block p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto h-full pb-20">
              <Sidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
        <Sidebar filters={filters} setFilters={setFilters} />

        <main className="flex-1 p-4 md:p-8">
          <PromoBanner />
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Filters
            </span>
          </button>
          
          <FilterPanel 
            filters={filters} 
            setFilters={setFilters}
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469.732-6.217 1.981L5.172 16.5M14.5 10a4.5 4.5 0 00-9 0M5.5 6.3V5a3.5 3.5 0 117 0v1.3" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
              <div className="mt-6">
                <button 
                  onClick={() => setFilters({
                    category: '',
                    colors: [],
                    priceRange: [1.00, 25.99],
                    sortBy: 'name',
                    sortOrder: 'asc',
                    hotDealsOnly: false
                  })}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
