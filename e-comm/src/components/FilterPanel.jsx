export default function FilterPanel({ filters, setFilters, totalItems, itemsPerPage, setItemsPerPage }) {
  const handleSortChange = (e) => {
    const [sortBy, sortOrder] = e.target.value.split('-');
    setFilters(prev => ({ ...prev, sortBy, sortOrder }));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
      <div className="flex gap-2 text-sm text-gray-500 items-center">
        <span>{totalItems} Items</span>
        <span>|</span>
        <span>Sort By</span>
        <select 
          className="border rounded px-2 py-1 ml-1 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={`${filters.sortBy}-${filters.sortOrder}`}
          onChange={handleSortChange}
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="popularity-desc">Popularity</option>
        </select>
        <span>|</span>
        <span>Show</span>
        <select 
          className="border rounded px-2 py-1 ml-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={48}>48</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button className="p-2 border rounded bg-blue-50 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-2 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}