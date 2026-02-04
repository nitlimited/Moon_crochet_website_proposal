import { useEffect, useState } from 'react';
import { Product, Category, supabase } from '../lib/supabase';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [priceRange, setPriceRange] = useState<string>('all');

  useEffect(() => {
    async function fetchData() {
      const [productsRes, categoriesRes] = await Promise.all([
        supabase.from('products').select('*').order('created_at', { ascending: false }),
        supabase.from('categories').select('*')
      ]);

      if (productsRes.data) setProducts(productsRes.data);
      if (categoriesRes.data) setCategories(categoriesRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) setSelectedCategory(category);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === 'all') return true;
      const category = categories.find(c => c.id === product.category_id);
      return category?.slug === selectedCategory;
    })
    .filter((product) => {
      if (priceRange === 'all') return true;
      if (priceRange === 'under-50') return product.price < 50;
      if (priceRange === '50-75') return product.price >= 50 && product.price < 75;
      if (priceRange === '75-plus') return product.price >= 75;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-neutral-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-[#273C33] py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="font-audrey text-5xl text-center text-white font-bold">Shop Collection</h1>
          <p className="text-center text-amber-100 mt-4 max-w-2xl mx-auto">
            Explore our handcrafted crochet bags and accessories. Each piece is unique and made with love.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal size={20} />
                <h3 className="font-semibold text-lg">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === 'all'}
                        onChange={() => setSelectedCategory('all')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">All Products</span>
                    </label>
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category.slug}
                          onChange={() => setSelectedCategory(category.slug)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === 'all'}
                        onChange={() => setPriceRange('all')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">All Prices</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === 'under-50'}
                        onChange={() => setPriceRange('under-50')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Under $50</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === '50-75'}
                        onChange={() => setPriceRange('50-75')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">$50 - $75</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === '75-plus'}
                        onChange={() => setPriceRange('75-plus')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">$75+</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-neutral-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-lg text-center">
                <p className="text-neutral-600">No products found matching your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
