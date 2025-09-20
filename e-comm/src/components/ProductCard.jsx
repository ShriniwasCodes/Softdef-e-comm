import Badge from './Badge';
import Rating from './Rating';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col relative group hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gray-100 rounded mb-2 flex items-center justify-center relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="object-cover h-32 w-32 group-hover:scale-105 transition-transform"
        />
        {product.isHot && (
          <span className="absolute top-2 left-2">
            <Badge />
          </span>
        )}
      </div>
      
      <div className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</div>
      
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-600 font-bold">${product.discountPrice}</span>
        <span className="text-gray-400 line-through text-xs">${product.price}</span>
        <span className="text-red-500 text-xs">{product.discountPercent}% Off</span>
      </div>
      
      {/*Rating*/}
      <div className="flex flex-col items-center gap-2 mb-3 py-2">
        <div className="flex items-center gap-1">
          <Rating value={product.ratingValue} size="large" />
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-gray-800">{product.ratingValue}</span>
          <span className="text-sm text-gray-500 ml-1">({product.ratingCount} reviews)</span>
        </div>
      </div>
      
      {/* Color swatches */}
      <div className="flex gap-1 mb-3">
        {product.colors.slice(0, 3).map((color, index) => (
          <button
            key={index}
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            title={`Color ${index + 1}`}
          />
        ))}
        {product.colors.length > 3 && (
          <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
        )}
      </div>
    </div>
  );
}