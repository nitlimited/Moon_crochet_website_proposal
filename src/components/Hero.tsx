import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from './Link';

const heroSlides = [
  {
    image: `${import.meta.env.BASE_URL}saveclip.app_601312496_18088356986284749_7210417344144102615_n.jpg`,
    badge: 'HANDCRAFTED LUXURY',
    title: 'Artisan Crochet Bags',
    subtitle: 'Where Traditional Craftsmanship Meets Contemporary Style',
    description: 'Each piece is meticulously handcrafted with premium materials, creating accessories as unique as you are.'
  },
  {
    image: `${import.meta.env.BASE_URL}saveclip.app_621406596_18091979729284749_172721588806796614_n.jpg`,
    badge: 'STATEMENT PIECES',
    title: 'Bold & Beautiful',
    subtitle: 'Express Your Individual Style',
    description: 'Stand out with vibrant colors and unique designs that turn heads and start conversations.'
  },
  {
    image: `${import.meta.env.BASE_URL}saveclip.app_622804914_18092175278284749_1495286607420056218_n.jpg`,
    badge: 'PREMIUM QUALITY',
    title: 'Made to Last',
    subtitle: 'Durability Meets Design',
    description: 'Premium yarn, expert techniques, and countless hours of dedication in every bag we create.'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[90vh] min-h-[700px] overflow-hidden bg-neutral-900">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          </div>

          <div className="relative h-full flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="space-y-6 animate-fadeIn">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 rounded-full text-sm font-bold tracking-widest">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="font-audrey text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-bold">
                    {slide.title}
                  </h1>

                  <p className="text-2xl md:text-3xl text-amber-100 font-light">
                    {slide.subtitle}
                  </p>

                  <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/shop"
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
                    >
                      Explore Collection
                    </Link>
                    <Link
                      href="/custom-orders"
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all duration-300 font-bold text-lg backdrop-blur-sm"
                    >
                      Create Custom Bag
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/20 group"
        aria-label="Next slide"
      >
        <ChevronRight size={32} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-amber-500 w-12'
                : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
