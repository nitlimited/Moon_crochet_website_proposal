import { useEffect, useState } from 'react';
import { Product, Review, supabase } from '../lib/supabase';
import { getFullPath } from '../lib/navigation';
import { ShoppingCart, Star, Heart, Share2 } from 'lucide-react';

const placeholderImages = [
  'https://images.pexels.com/photos/5705487/pexels-photo-5705487.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6069351/pexels-photo-6069351.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/5705464/pexels-photo-5705464.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

export function ProductDetailPage({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const { data: productData } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (productData) {
        setProduct(productData);

        const [reviewsRes, relatedRes] = await Promise.all([
          supabase.from('reviews').select('*').eq('product_id', productData.id),
          supabase
            .from('products')
            .select('*')
            .eq('category_id', productData.category_id)
            .neq('id', productData.id)
            .limit(4)
        ]);

        if (reviewsRes.data) setReviews(reviewsRes.data);
        if (relatedRes.data) setRelatedProducts(relatedRes.data);
      }

      setLoading(false);
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-neutral-600">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <a
            href={getFullPath('/shop')}
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', getFullPath('/shop'));
              window.dispatchEvent(new Event('popstate'));
            }}
            className="text-neutral-600 hover:text-neutral-900"
          >
            Return to Shop
          </a>
        </div>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4 rounded-lg overflow-hidden bg-neutral-100 aspect-square">
              <img
                src={placeholderImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {placeholderImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden aspect-square ${
                    selectedImage === index ? 'ring-2 ring-neutral-900' : ''
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-audrey text-4xl mb-4 font-bold">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < averageRating ? 'fill-neutral-900 text-neutral-900' : 'text-neutral-300'}
                  />
                ))}
              </div>
              <span className="text-neutral-600">
                ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            </div>

            <p className="text-3xl font-semibold mb-6">${product.price.toFixed(2)}</p>

            <div className="mb-6">
              <p className="text-neutral-700 leading-relaxed mb-4">{product.description}</p>
              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm text-neutral-600">
                  <span className="font-medium">Materials:</span> {product.materials}
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  <span className="font-medium">SKU:</span> {product.sku}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                disabled={product.stock_quantity === 0}
              >
                <ShoppingCart size={20} />
                {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button className="p-4 border-2 border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-4 border-2 border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            {product.stock_quantity > 0 && product.stock_quantity < 5 && (
              <p className="text-sm text-amber-600">
                Only {product.stock_quantity} left in stock
              </p>
            )}
          </div>
        </div>

        {reviews.length > 0 && (
          <div className="mb-16">
            <h2 className="font-audrey text-3xl mb-8 font-bold">Customer Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-neutral-900 text-neutral-900' : 'text-neutral-300'}
                      />
                    ))}
                  </div>
                  {review.title && <h3 className="font-semibold mb-2">{review.title}</h3>}
                  <p className="text-neutral-700">{review.comment}</p>
                  <p className="text-sm text-neutral-500 mt-2">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-audrey text-3xl mb-8 font-bold">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => {
                const imageIndex = Math.abs(relatedProduct.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % placeholderImages.length;
                return (
                  <a
                    key={relatedProduct.id}
                    href={getFullPath(`/product/${relatedProduct.slug}`)}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', getFullPath(`/product/${relatedProduct.slug}`));
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-neutral-100 mb-4 aspect-square">
                      <img
                        src={placeholderImages[imageIndex]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
                    <p className="font-semibold">${relatedProduct.price.toFixed(2)}</p>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
