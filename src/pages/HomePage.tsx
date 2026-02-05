import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { getFullPath } from '../lib/navigation';
import { Instagram, Heart, Shield, Sparkles, Package, Palette, Scissors, Star, Award, Clock, Truck, MessageCircle } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      <Hero />

      <section className="py-32 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-1 lg:order-1">
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}moon_bag_3_crochet.png`}
                  alt="Moon Crochet Handmade Bag"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="mb-6">
                <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest">
                  WELCOME TO MOON CROCHET
                </span>
              </div>
              <h2 className="font-audrey text-5xl md:text-7xl mb-8 text-neutral-900 leading-tight font-bold">
                Where Every Bag <span className="text-amber-800">Tells a Story</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6">
                Moon Crochet is more than just accessories – we're a celebration of artisan craftsmanship,
                sustainable fashion, and individuality. Every bag we create represents hours of meticulous work,
                passion for the craft, and a commitment to quality that you can see and feel.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                Founded on the principles of slow fashion and mindful creation, we believe that the things we carry
                should be as unique and special as the moments they accompany us through. Each stitch is a testament
                to traditional crochet techniques passed down through generations, reimagined for the modern woman.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6">
                    <Star className="text-white" size={36} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-amber-900 mb-2">100+</h3>
                  <p className="text-neutral-600 font-medium">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
                    <Award className="text-white" size={36} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-amber-900 mb-2">100%</h3>
                  <p className="text-neutral-600 font-medium">Handmade with Love</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mb-6">
                    <Heart className="text-white" size={36} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-amber-900 mb-2">4.9★</h3>
                  <p className="text-neutral-600 font-medium">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                    <img
                      src={`${import.meta.env.BASE_URL}saveclip.app_601312496_18088356986284749_7210417344144102615_n.jpg`}
                      alt="Handcrafted Pink Crochet Bag"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                    <img
                      src={`${import.meta.env.BASE_URL}saveclip.app_615326109_18090960752284749_6238513706493903424_n.jpg`}
                      alt="Brown Fringe Bag Detail"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-16">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                    <img
                      src={`${import.meta.env.BASE_URL}saveclip.app_510917458_18069502838284749_4538163862315075870_n.jpg`}
                      alt="Gradient Green Bag"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                    <img
                      src={`${import.meta.env.BASE_URL}saveclip.app_621406596_18091979729284749_172721588806796614_n.jpg`}
                      alt="Red Statement Bag"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest">
                  OUR SIGNATURE STYLE
                </span>
              </div>
              <h2 className="font-audrey text-5xl md:text-6xl text-neutral-900 leading-tight font-bold">
                Crafted for the
                <span className="block text-amber-800">Modern Woman</span>
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Our bags are designed to be conversation starters. Whether you're heading to brunch,
                a gallery opening, or a casual day out, Moon Crochet bags add that perfect touch of
                artisan elegance to any outfit.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <Palette className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">Vibrant Color Palettes</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      From bold statement reds to soft pastels and earthy neutrals, our color selection
                      ensures there's a perfect bag for every personality and occasion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <Package className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">Functional Design</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Beautiful doesn't mean impractical. Each bag is designed with spacious interiors,
                      sturdy chain straps, and secure closures to carry your essentials with ease.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">Unique Textures</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      The chunky crochet texture creates visual interest and tactile appeal that sets
                      our bags apart from mass-produced accessories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#273C33' }}>
        <div className="absolute inset-0 opacity-15">
          <img
            src={`${import.meta.env.BASE_URL}color_pallete.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-5 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 rounded-full text-sm font-bold tracking-widest">
                THE MOON CROCHET DIFFERENCE
              </span>
            </div>
            <h2 className="font-audrey text-5xl md:text-7xl mb-8 leading-tight font-bold">
              The Making of an Icon
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Behind every Moon Crochet bag lies a commitment to excellence that goes beyond aesthetics.
              From selecting materials to the final quality check, we ensure perfection at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Scissors className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Material Selection</h3>
              <p className="text-neutral-400 leading-relaxed">
                We source only the finest premium yarn, choosing materials that offer both durability and luxurious feel. Each color is carefully selected for vibrancy and colorfastness.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Artisan Crafting</h3>
              <p className="text-neutral-400 leading-relaxed">
                Each bag takes 15-20 hours of dedicated handwork. Our artisans use traditional crochet techniques, ensuring every stitch is perfect and the structure is sound.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Quality Control</h3>
              <p className="text-neutral-400 leading-relaxed">
                Before any bag reaches you, it undergoes rigorous quality checks. We inspect every detail to ensure it meets our exacting standards of excellence.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Package className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Thoughtful Packaging</h3>
              <p className="text-neutral-400 leading-relaxed">
                Your Moon Crochet piece arrives beautifully packaged, ready to gift or treasure. We use eco-friendly materials that reflect our commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div>
                <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest">
                  PRODUCT HIGHLIGHTS
                </span>
              </div>
              <h2 className="font-audrey text-5xl md:text-6xl text-neutral-900 leading-tight font-bold">
                Features That Make a
                <span className="block text-amber-800">Difference</span>
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Every detail is intentional. From the weight of the chain to the closure mechanism,
                we've thoughtfully designed each element to enhance both beauty and functionality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-2">Timeless Design</h4>
                  <p className="text-neutral-600 text-sm">
                    Classic styles that never go out of fashion, designed to be treasured for years.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Package className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-2">Spacious Interior</h4>
                  <p className="text-neutral-600 text-sm">
                    Roomy enough for your phone, wallet, keys, and more without compromising style.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-2">Durable Construction</h4>
                  <p className="text-neutral-600 text-sm">
                    Reinforced stitching and quality hardware ensure long-lasting use.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-700 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-2">Luxury Chains</h4>
                  <p className="text-neutral-600 text-sm">
                    High-quality gold-tone chain straps add elegance and can be adjusted for comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_605285730_18089109158284749_7653781410563467721_n.jpg`}
                    alt="Brown Crochet Bag Detail"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_622804914_18092175278284749_1495286607420056218_n.jpg`}
                    alt="Bag Detail Showcase"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-16">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_601312496_18088356986284749_7210417344144102615_n.jpg`}
                    alt="Pink Crochet Bag"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_615326109_18090960752284749_6238513706493903424_n.jpg`}
                    alt="Craftsmanship Detail"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-5 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest">
                DISCOVER YOUR PERFECT BAG
              </span>
            </div>
            <h2 className="font-audrey text-5xl md:text-7xl mb-6 text-neutral-900 font-bold">Featured Collection</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Explore our handpicked selection of signature pieces. Each bag represents the pinnacle of our
              craftsmanship and design philosophy, ready to become your new favorite accessory.
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 rounded-full text-sm font-bold tracking-widest">
                FOLLOW OUR JOURNEY
              </span>
            </div>
            <h2 className="font-audrey text-5xl md:text-7xl mb-8 text-neutral-900 font-bold">Join Our Creative Community</h2>
            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
              Be part of the Moon Crochet family on Instagram. Get exclusive behind-the-scenes content,
              style inspiration, early access to new releases, and connect with a community that celebrates
              handmade artistry and individual expression.
            </p>
            <a
              href="https://www.instagram.com/moon.crochet.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold text-xl"
            >
              <Instagram size={28} />
              Follow @moon.crochet.gh
            </a>
            <p className="mt-8 text-neutral-500 text-sm">
              Join 10,000+ followers who love handcrafted accessories
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-100" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-8">
              <span className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-200 rounded-full text-sm font-bold tracking-widest">
                START YOUR JOURNEY
              </span>
            </div>
            <h2 className="font-audrey text-5xl md:text-7xl mb-8 leading-tight font-bold">
              Your Perfect Bag is Waiting
            </h2>
            <p className="text-2xl text-amber-100 mb-6 leading-relaxed max-w-3xl mx-auto">
              Discover our curated collection or design something uniquely yours
            </p>
            <p className="text-lg text-amber-200/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you choose from our ready-made pieces or collaborate with us on a custom creation,
              you're investing in quality craftsmanship that celebrates your individual style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={getFullPath('/shop')}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', getFullPath('/shop'));
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="px-12 py-6 bg-white text-amber-900 rounded-full hover:bg-amber-50 transition-all font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Shop Collection
              </a>
              <a
                href={getFullPath('/custom-orders')}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', getFullPath('/custom-orders'));
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="px-12 py-6 border-2 border-white text-white rounded-full hover:bg-white hover:text-amber-900 transition-all font-bold text-xl backdrop-blur-sm transform hover:scale-105"
              >
                Design Your Own
              </a>
            </div>
            <div className="mt-16 flex items-center justify-center gap-12 flex-wrap">
              <div className="flex items-center gap-3">
                <Truck className="text-amber-400" size={24} />
                <span className="text-amber-100 font-medium">Free Shipping Available</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-amber-400" size={24} />
                <span className="text-amber-100 font-medium">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-amber-400" size={24} />
                <span className="text-amber-100 font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
