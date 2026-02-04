import { useState } from 'react';
import { Palette, Ruler, Sparkles, Clock, CheckCircle, Heart } from 'lucide-react';
import { supabase, CustomBooking } from '../lib/supabase';

export function CustomOrdersPage() {
  const [formData, setFormData] = useState<CustomBooking>({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    message: '',
    design_preferences: '',
    reference_images: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('custom_bookings')
      .insert([formData]);

    if (!error) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        message: '',
        design_preferences: '',
        reference_images: []
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#273C33] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-audrey text-5xl md:text-7xl mb-6 text-white font-bold">Create Your Dream Bag</h1>
          <p className="text-amber-100 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
            Bring your vision to life with a one-of-a-kind handcrafted crochet bag, tailored precisely to your style
          </p>
          <div className="mt-8 inline-block bg-amber-400 text-[#273C33] px-6 py-3 rounded-full font-semibold text-lg">
            <Clock className="inline-block mr-2" size={20} />
            Ready in 3-5 Days
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/saveclip.app_491439312_18063237902284749_8207353838394312841_n.jpg"
              alt="Beautiful crochet bags"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#273C33] to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-serif mb-1">Unique Designs</h3>
              <p className="text-amber-100 text-sm">Crafted exclusively for you</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/saveclip.app_491443100_18063237890284749_4887961127801087615_n.jpg"
              alt="Quality materials"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#273C33] to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-serif mb-1">Premium Quality</h3>
              <p className="text-amber-100 text-sm">Handcrafted with care</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-audrey text-3xl mb-2 text-[#273C33] font-bold">Choose Your Perfect Palette</h2>
            <p className="text-neutral-700">From vibrant hues to subtle tones, select from our extensive color collection</p>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/color_pallete.jpg"
              alt="Rainbow of yarn colors"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="font-audrey text-3xl text-center mb-2 text-[#273C33] font-bold">Why Choose Custom?</h2>
          <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
            Experience the luxury of owning a bag that's perfectly suited to you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#273C33] rounded-xl flex items-center justify-center mb-4">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2 text-[#273C33]">Color Freedom</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Mix and match from dozens of vibrant colors to create your perfect combination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#273C33] rounded-xl flex items-center justify-center mb-4">
                <Ruler className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2 text-[#273C33]">Perfect Sizing</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                From compact clutches to spacious totes, crafted to your exact dimensions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#273C33] rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2 text-[#273C33]">Style Variations</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Choose strap length, hardware finish, and decorative details perfectly tailored to you.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-audrey text-3xl mb-2 text-[#273C33] font-bold">Book Your Custom Order</h2>
            <p className="text-neutral-600">Tell us about your dream bag and we'll make it a reality</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-[#273C33] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h3 className="font-audrey text-3xl mb-4 text-[#273C33] font-bold">Request Received!</h3>
              <p className="text-neutral-600 mb-8 text-lg">
                Thank you for choosing Moon Crochet! We'll be in touch within 24 hours to bring your custom bag to life.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-[#273C33] text-white rounded-lg hover:bg-[#1f2e28] transition-all font-semibold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="bg-[#273C33] rounded-2xl p-8 text-white">
                <h3 className="font-audrey text-2xl mb-6 font-bold">How It Works</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-white text-[#273C33] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Submit Your Request</h4>
                      <p className="text-amber-100 text-sm">Fill out the form with your design ideas and preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-[#273C33] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">We'll Confirm Details</h4>
                      <p className="text-amber-100 text-sm">We'll reach out within 24 hours to finalize all details.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-[#273C33] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Crafting Begins</h4>
                      <p className="text-amber-100 text-sm">Your bag will be handcrafted over 3-5 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-[#273C33] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Receive Your Masterpiece</h4>
                      <p className="text-amber-100 text-sm">Your one-of-a-kind bag arrives ready to use!</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-amber-100/20 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-white mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">100% Handcrafted</h4>
                      <p className="text-amber-100 text-xs">Every stitch made with love</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="text-white mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Satisfaction Guaranteed</h4>
                      <p className="text-amber-100 text-xs">Until you absolutely love it</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-white mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Fast Turnaround</h4>
                      <p className="text-amber-100 text-xs">Ready in just 3-5 days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#273C33] rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 text-white placeholder-amber-100/50 rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 text-white placeholder-amber-100/50 rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 text-white placeholder-amber-100/50 rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                      placeholder="+233 (0) 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Preferred Date</label>
                    <input
                      type="datetime-local"
                      value={formData.preferred_date}
                      onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 text-white rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Design Preferences *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.design_preferences}
                      onChange={(e) => setFormData({ ...formData, design_preferences: e.target.value })}
                      placeholder="Colors, size, style, strap type, features..."
                      className="w-full px-4 py-2.5 bg-white/10 text-white placeholder-amber-100/50 rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Additional Notes</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any other details or questions..."
                      className="w-full px-4 py-2.5 bg-white/10 text-white placeholder-amber-100/50 rounded-lg focus:outline-none focus:bg-white/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-3.5 bg-white text-[#273C33] rounded-lg hover:bg-amber-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    {loading ? 'Submitting...' : 'Book My Custom Bag'}
                  </button>
                  <p className="text-center text-xs text-amber-100">
                    We'll contact you within 24 hours
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
