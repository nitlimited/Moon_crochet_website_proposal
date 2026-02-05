import { Category } from '../lib/supabase';
import { getFullPath } from '../lib/navigation';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  imageUrl: string;
}

export function CategoryCard({ category, imageUrl }: CategoryCardProps) {
  const path = `/shop?category=${category.slug}`;
  const fullPath = getFullPath(path);

  return (
    <a
      href={fullPath}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, '', fullPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }}
      className="group block relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="absolute inset-x-0 bottom-0 p-8 text-white transform translate-y-0 transition-transform duration-700">
          <div className="mb-3">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase">
              Collection
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl mb-3 leading-tight">{category.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-2">{category.description}</p>

          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide group-hover:gap-4 transition-all duration-500">
            <span>Explore Collection</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </a>
  );
}
