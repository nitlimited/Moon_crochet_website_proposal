import { Product } from '../lib/supabase';
import { Link } from './Link';

type ProductCardProps = {
  product: Product;
};

const placeholderImages = [
  'https://images.pexels.com/photos/5705487/pexels-photo-5705487.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6069351/pexels-photo-6069351.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5705464/pexels-photo-5705464.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7679466/pexels-photo-7679466.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6069357/pexels-photo-6069357.jpeg?auto=compress&cs=tinysrgb&w=800'
];

export function ProductCard({ product }: ProductCardProps) {
  const imageIndex = Math.abs(product.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % placeholderImages.length;
  const imageUrl = placeholderImages[imageIndex];

  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="relative overflow-hidden rounded-xl bg-neutral-100 mb-4 aspect-square shadow-md hover:shadow-2xl transition-all">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.stock_quantity === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            View
          </div>
        </div>
      </div>
      <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-teal-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-neutral-600 text-sm mb-2">{product.materials}</p>
      <p className="font-bold text-teal-700 text-lg">${product.price.toFixed(2)}</p>
    </Link>
  );
}
