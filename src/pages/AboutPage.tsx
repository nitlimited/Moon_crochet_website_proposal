import { getFullPath } from '../lib/navigation';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}saveclip.app_573133521_18084027116284749_4838689241047013363_n.jpg`}
          alt="About Moon Crochet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-audrey text-6xl md:text-8xl text-white mb-4 font-bold">Our Story</h1>
            <p className="text-xl md:text-2xl text-amber-100 font-light max-w-2xl mx-auto">
              Crafting timeless beauty, one stitch at a time
            </p>
          </div>
        </div>
      </div>

      {/* Opening Statement */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-neutral-800 leading-relaxed font-light">
            Moon Crochet was born from a passion for creating beautiful, sustainable accessories that tell a story. Each piece we craft represents hours of dedication, skill, and artistic vision.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest inline-block mb-4">
                FOUNDER & CEO
              </span>
              <h2 className="font-audrey text-4xl md:text-5xl text-neutral-900 mb-6 font-bold">Jane Ama Fosuwah</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p className="text-lg">
                  With over a decade of experience in textile arts, Jane founded Moon Crochet with a vision to bridge traditional craftsmanship with contemporary design. Her journey began in her grandmother's living room, learning the intricate art of crochet at age seven.
                </p>
                <p>
                  Today, Jane leads a team of skilled artisans who share her commitment to excellence and sustainability. Her designs have been featured in numerous fashion publications and worn by style influencers around the world.
                </p>
                <p>
                  "I believe that every piece we create should tell a story—not just of our craft, but of the person who will carry it. That's what makes Moon Crochet special."
                </p>
                <p className="text-sm italic text-neutral-600 pt-4">
                  — Jane Ama Fosuwah
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}saveclip.app_518188967_18071242190284749_4858771051938695875_n.jpg`}
                  alt="Jane Ama Fosuwah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section with Image */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}saveclip.app_526528248_18073449989284749_2336818491889026781_n_(1).jpg`}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest inline-block mb-4">
                OUR VISION
              </span>
              <h2 className="font-audrey text-4xl md:text-5xl text-neutral-900 mb-6 font-bold">Our Vision</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
                <p>
                  We believe that fashion should be both beautiful and meaningful. In a world of mass production, we're committed to the art of slow fashion—creating timeless pieces that are made to last, not just for a season, but for years to come.
                </p>
                <p>
                  Every Moon Crochet bag and accessory is handcrafted with premium, sustainably-sourced materials. We take pride in our meticulous attention to detail, ensuring that each stitch is perfect and every piece meets our high standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Craft Section - Green Background */}
      <div className="text-white py-20" style={{ backgroundColor: '#273C33' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-bold tracking-widest inline-block mb-4">
                THE CRAFT
              </span>
              <h2 className="font-audrey text-4xl md:text-5xl mb-6 font-bold">The Craft</h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-lg">
                <p>
                  Crochet is more than just a technique—it's an art form passed down through generations. Our artisans bring years of experience and expertise to every creation, blending traditional methods with contemporary design sensibilities.
                </p>
                <p>
                  From selecting the perfect yarn to the final finishing touches, we oversee every step of the process. This hands-on approach ensures that when you receive a Moon Crochet piece, you're getting something truly special.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}color_pallete.jpg`}
                alt="The Craft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest inline-block mb-4">
                WHAT WE STAND FOR
              </span>
              <h2 className="font-audrey text-4xl md:text-5xl text-neutral-900 font-bold">What We Stand For</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_510917458_18069502838284749_4538163862315075870_n.jpg`}
                    alt="Handcrafted"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="font-serif text-3xl text-white">Handcrafted</h3>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Every piece is made by hand with care and attention to detail. We believe in the power of human touch and the beauty of imperfection.
                </p>
              </div>

              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_621406596_18091979729284749_172721588806796614_n.jpg`}
                    alt="Sustainable"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="font-serif text-3xl text-white">Sustainable</h3>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Premium, eco-friendly materials sourced responsibly. We're committed to choices that are good for both you and the planet.
                </p>
              </div>

              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}saveclip.app_605285730_18089109158284749_7653781410563467721_n.jpg`}
                    alt="Timeless"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="font-serif text-3xl text-white">Timeless</h3>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Designs that transcend trends and last for years. Each piece is created to be cherished and passed down through generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Creations CTA */}
      <div className="bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-bold tracking-widest inline-block mb-4">
              GET STARTED
            </span>
            <h2 className="font-audrey text-4xl md:text-5xl text-neutral-900 mb-6 font-bold">Custom Creations</h2>
            <p className="text-xl text-neutral-700 leading-relaxed mb-12">
              We love bringing your vision to life. Whether you have a specific color palette in mind, need a particular size, or want to create something entirely unique, our custom consultation service is here to help. Let's work together to craft your perfect accessory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getFullPath('/shop')}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', getFullPath('/shop'));
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors text-lg font-medium"
              >
                Browse Collection
              </a>
              <a
                href={getFullPath('/custom-orders')}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', getFullPath('/custom-orders'));
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="px-8 py-4 bg-white border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors text-lg font-medium"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
