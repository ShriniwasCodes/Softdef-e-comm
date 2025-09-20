import { useState } from 'react';

export default function Sidebar({ filters, setFilters }) {
  const [expandedSections, setExpandedSections] = useState({
    hotDeals: true,
    brands: true
  });

  const categories = [
    { name: 'Nike', count: 48, active: filters?.category === 'Nike' },
    { name: 'Adidas', count: 16, active: filters?.category === 'Adidas' },
    { name: 'Vans', count: 23, active: filters?.category === 'Vans' },
    { name: 'Converse', count: 12, active: filters?.category === 'Converse' },
    { name: 'Puma', count: 18, active: filters?.category === 'Puma' },
    { name: 'Jordan', count: 15, active: filters?.category === 'Jordan' },
    { name: 'New Balance', count: 9, active: filters?.category === 'New Balance' },
  ];

  const brands = [
    { name: 'Nike', count: 99, active: filters?.category === 'Nike' },
    { name: 'Adidas', count: 99, active: filters?.category === 'Adidas' },
    { name: 'Vans', count: 52, active: filters?.category === 'Vans' },
    { name: 'Converse', count: 38, active: filters?.category === 'Converse' },
    { name: 'Puma', count: 64, active: filters?.category === 'Puma' },
    { name: 'Jordan', count: 45, active: filters?.category === 'Jordan' },
  ];

  const colors = [
    '#2563eb', '#dc2626', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleHotDealsClick = () => {
    if (setFilters) {
      setFilters(prev => ({
        ...prev,
        hotDealsOnly: !prev.hotDealsOnly
      }));
    }
  };

  const handleCategoryClick = (category) => {
    if (setFilters) {
      setFilters(prev => ({
        ...prev,
        category: prev.category === category ? '' : category
      }));
    }
  };

  const handleColorClick = (color) => {
    if (setFilters) {
      setFilters(prev => ({
        ...prev,
        colors: prev.colors?.includes(color) 
          ? prev.colors.filter(c => c !== color)
          : [...(prev.colors || []), color]
      }));
    }
  };

  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value);
    if (setFilters) {
      setFilters(prev => ({
        ...prev,
        priceRange: [prev.priceRange?.[0] || 13.99, value]
      }));
    }
  };

  const handleBrandClick = (brand) => {
    if (setFilters) {
      setFilters(prev => ({
        ...prev,
        category: prev.category === brand ? '' : brand
      }));
    }
  };

  return (
    <aside className="hidden md:block w-64 bg-white border-r p-4 text-sm">
      {/* Hot Deals Section */}
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('hotDeals')}
          className="flex items-center justify-between w-full font-semibold mb-2 focus:outline-none hover:text-current"
          aria-expanded={expandedSections.hotDeals}
        >
          <span>Hot Deals</span>
          <svg 
            className={`w-4 h-4 transform transition-transform ${expandedSections.hotDeals ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {expandedSections.hotDeals && (
          <div>
            {/* Hot Deals Only Filter */}
            <div className="mb-3">
              <button
                onClick={handleHotDealsClick}
                className={`flex justify-between w-full text-left px-2 py-1 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                  filters?.hotDealsOnly ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                <span>🔥 Hot Deals Only</span>
                <span>{filters?.hotDealsOnly ? '✓' : ''}</span>
              </button>
            </div>
            
            {/* Category filters */}
            <ul className="space-y-1">
              {categories.map(category => (
                <li key={category.name}>
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className={`flex justify-between w-full text-left px-2 py-1 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                      category.active ? 'text-blue-600 bg-blue-50' : ''
                    }`}
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="mb-8">
        <div className="font-semibold mb-2">PRICES</div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span>$10.00</span>
          <span>${filters?.priceRange?.[1] || 25.99}</span>
        </div>
        <input 
          type="range" 
          min="10.00" 
          max="25.99" 
          step="0.01"
          value={filters?.priceRange?.[1] || 25.99}
          onChange={handlePriceChange}
          className="w-full accent-blue-600 focus:outline-none"
        />
      </div>

      {/* Color Section */}
      <div className="mb-8">
        <div className="font-semibold mb-2">COLOR</div>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorClick(color)}
              className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                filters?.colors?.includes(color) 
                  ? 'border-gray-800 ring-2 ring-gray-800' 
                  : 'border-white shadow-md'
              }`}
              style={{ backgroundColor: color }}
              title={`Color ${index + 1}`}
              aria-label={`Select color ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Brand Section */}
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full font-semibold mb-2 focus:outline-none"
          aria-expanded={expandedSections.brands}
        >
          <span>BRAND</span>
          <svg 
            className={`w-4 h-4 transform transition-transform ${expandedSections.brands ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {expandedSections.brands && (
          <ul className="space-y-1">
            {brands.map(brand => (
              <li key={brand.name}>
                <button
                  onClick={() => handleBrandClick(brand.name)}
                  className={`flex justify-between w-full text-left px-2 py-1 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                    filters?.category === brand.name ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                >
                  <span>{brand.name}</span>
                  <span>{brand.count}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="w-full py-2 bg-gray-100 rounded mt-4 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
        MORE
      </button>
    </aside>
  );
}