import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Link';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-luxury-stone/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            className="lg:hidden p-2 hover:bg-luxury-cream transition-all duration-300 group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} className="text-luxury-charcoal group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="text-luxury-charcoal group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          <Link href="/" className="flex items-center group">
            <img
              src="/moon_crochet_logo-01-01.svg"
              alt="Moon Crochet"
              className="h-14 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-4 py-2 text-luxury-charcoal font-medium text-sm tracking-wide group overflow-hidden"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luxury-taupe transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <div className="group relative">
              <button className="relative px-4 py-2 text-luxury-charcoal font-medium text-sm tracking-wide overflow-hidden">
                <span className="relative z-10">Shop</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luxury-taupe transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl border border-luxury-stone/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                <Link
                  href="/shop"
                  className="block px-6 py-3 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe font-medium text-sm"
                >
                  All Products
                </Link>
                <Link
                  href="/shop?category=bags"
                  className="block px-6 py-3 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe font-medium text-sm"
                >
                  Bags
                </Link>
                <Link
                  href="/shop?category=accessories"
                  className="block px-6 py-3 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe font-medium text-sm"
                >
                  Accessories
                </Link>
                <Link
                  href="/shop?category=new-arrivals"
                  className="block px-6 py-3 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe font-medium text-sm"
                >
                  New Arrivals
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="relative px-4 py-2 text-luxury-charcoal font-medium text-sm tracking-wide group overflow-hidden"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luxury-taupe transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link
              href="/custom-orders"
              className="relative px-4 py-2 text-luxury-charcoal font-medium text-sm tracking-wide group overflow-hidden"
            >
              <span className="relative z-10">Custom Orders</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luxury-taupe transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link
              href="/contact"
              className="relative px-4 py-2 text-luxury-charcoal font-medium text-sm tracking-wide group overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luxury-taupe transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 hover:bg-luxury-cream transition-all duration-300 text-luxury-charcoal group"
            >
              <Search size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </button>
            <Link
              href="/account"
              className="p-2.5 hover:bg-luxury-cream transition-all duration-300 text-luxury-charcoal group"
            >
              <User size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              href="/cart"
              className="p-2.5 hover:bg-luxury-cream transition-all duration-300 relative text-luxury-charcoal group"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute top-0.5 right-0.5 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-md" style={{ backgroundColor: '#273C33' }}>
                0
              </span>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-slideIn">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full px-5 py-3 border border-luxury-stone/30 focus:outline-none focus:border-luxury-taupe transition-all duration-300 text-luxury-charcoal placeholder:text-luxury-taupe/50"
            />
          </div>
        )}

        {menuOpen && (
          <nav className="lg:hidden pb-4 space-y-1 animate-slideIn border-t border-luxury-stone/20 pt-4">
            <Link
              href="/"
              className="block py-3 px-4 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe font-medium transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block py-3 px-4 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe font-medium transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe"
            >
              Shop
            </Link>
            <Link
              href="/shop?category=bags"
              className="block py-2 px-8 text-luxury-taupe hover:bg-luxury-cream hover:text-luxury-charcoal transition-all duration-200"
            >
              Bags
            </Link>
            <Link
              href="/shop?category=accessories"
              className="block py-2 px-8 text-luxury-taupe hover:bg-luxury-cream hover:text-luxury-charcoal transition-all duration-200"
            >
              Accessories
            </Link>
            <Link
              href="/about"
              className="block py-3 px-4 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe font-medium transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe"
            >
              About
            </Link>
            <Link
              href="/custom-orders"
              className="block py-3 px-4 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe font-medium transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe"
            >
              Custom Orders
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-taupe font-medium transition-all duration-200 border-l-2 border-transparent hover:border-luxury-taupe"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
