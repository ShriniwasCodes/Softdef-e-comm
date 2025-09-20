export function sortProducts(products, sortBy, sortOrder = "asc") {
  if (!products) return [];

  return [...products].sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case "name":
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      case "price":
        valueA = Number(a.discountPrice ?? a.price);
        valueB = Number(b.discountPrice ?? b.price);
        break;
      case "popularity":
        valueA = Number(a.ratingCount ?? 0);
        valueB = Number(b.ratingCount ?? 0);
        break;
      default:
        return 0;
    }

    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
}

export function filterProducts(products, filters) {
  return products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category;

    const matchesColor = !filters.colors?.length || product.colors.some(c => filters.colors.includes(c));

    const price = product.discountPrice ?? product.price;
    const matchesPrice = !filters.priceRange?.length
      || (price >= filters.priceRange[0] && price <= filters.priceRange[1]);

    const matchesHotDeal = !filters.hotDealsOnly || product.isHot === true;

    return matchesCategory && matchesColor && matchesPrice && matchesHotDeal;
  });
}

export function paginateProducts(products, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const safePage = Math.min(Math.max(currentPage, 1), totalPages || 1);
  const startIndex = (safePage - 1) * itemsPerPage;
  return products.slice(startIndex, startIndex + itemsPerPage);
}
