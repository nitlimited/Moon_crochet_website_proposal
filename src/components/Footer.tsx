import { Instagram, Mail } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from './Link';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (!error) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-neutral-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}moon_crochet_logo-01-01.svg`}
              alt="Moon Crochet"
              className="h-14 mb-4"
              style={{ filter: 'invert(23%) sepia(8%) saturate(1806%) hue-rotate(113deg) brightness(95%) contrast(92%)' }}
            />
            <p className="text-sm leading-relaxed text-neutral-600">
              Handcrafted crochet bags and accessories. Stylish, unique, made for you.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4" style={{ color: '#273C33' }}>Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bags" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  Bags
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?category=new-arrivals" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4" style={{ color: '#273C33' }}>About</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-all duration-200 inline-block hover:translate-x-1" style={{ color: '#273C33' }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4" style={{ color: '#273C33' }}>Newsletter</h3>
            <p className="text-sm mb-4 text-neutral-600">Subscribe for exclusive offers and updates.</p>
            {subscribed ? (
              <p className="text-sm" style={{ color: '#273C33' }}>Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-neutral-50 border border-neutral-200 focus:outline-none text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-300"
                  style={{
                    borderColor: email ? '#273C33' : undefined,
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#273C33'}
                  onBlur={(e) => e.target.style.borderColor = email ? '#273C33' : '#e5e5e5'}
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#273C33' }}
                >
                  <Mail size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-600">&copy; {new Date().getFullYear()} Moon Crochet. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/moon.crochet.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 transform"
              style={{ color: '#273C33' }}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 text-sm"
              style={{ color: '#273C33' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
