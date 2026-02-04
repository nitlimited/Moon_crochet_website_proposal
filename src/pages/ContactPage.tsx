import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-[#273C33] py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-audrey text-5xl mb-4 text-white font-bold">Get in Touch</h1>
          <p className="text-amber-100 max-w-2xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#273C33] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-neutral-600 text-sm">info@mooncrochet.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#273C33] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-neutral-600 text-sm">+233 (0) 123 456 789</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#273C33] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-neutral-600 text-sm">Accra, Ghana</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/saveclip.app_619895719_18091710743284749_4850870245939109280_n.jpg"
                alt="Contact Moon Crochet"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="font-audrey text-3xl mb-6 font-bold">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273C33]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273C33]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273C33]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273C33]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#273C33] text-white rounded-lg hover:bg-[#1f2e28] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
