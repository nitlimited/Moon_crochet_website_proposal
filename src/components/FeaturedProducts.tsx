import { useEffect, useState } from 'react';
import { Category, supabase } from '../lib/supabase';
import { CategoryCard } from './CategoryCard';

type CategoryWithImage = Category & { imageUrl: string };

export function FeaturedProducts() {
  const [categories, setCategories] = useState<CategoryWithImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedCategories() {
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('*')
        .in('slug', ['clutch-bag', 'shell-bags', 'fringe-bag', 'noodle-bag'])
        .order('created_at', { ascending: true });

      if (categoriesData) {
        const categoriesWithImages = await Promise.all(
          categoriesData.map(async (category) => {
            const { data: productData } = await supabase
              .from('products')
              .select('id')
              .eq('category_id', category.id)
              .limit(1)
              .single();

            let imageUrl = `${import.meta.env.BASE_URL}moon_bag_2.png`;

            if (productData) {
              const { data: imageData } = await supabase
                .from('product_images')
                .select('image_url')
                .eq('product_id', productData.id)
                .eq('is_primary', true)
                .maybeSingle();

              if (imageData) {
                imageUrl = imageData.image_url;
              }
            }

            return { ...category, imageUrl };
          })
        );

        setCategories(categoriesWithImages);
      }
      setLoading(false);
    }
    fetchFeaturedCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-neutral-600">Loading our handpicked favorites...</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`${index % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              <CategoryCard category={category} imageUrl={category.imageUrl} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-20">
        <a
          href="/shop"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/shop');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="group inline-flex items-center gap-3 px-12 py-5 text-white rounded-full hover:opacity-90 transition-all font-bold text-lg transform hover:scale-105 shadow-2xl"
          style={{ backgroundColor: '#273C33' }}
        >
          View All Collections
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
        <a
          href="/custom-orders"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/custom-orders');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="group inline-flex items-center gap-3 px-12 py-5 bg-white border-2 rounded-full hover:text-white transition-all font-bold text-lg transform hover:scale-105 shadow-xl"
          style={{ borderColor: '#273C33', color: '#273C33' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#273C33'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
          Design Your Own
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </>
  );
}
