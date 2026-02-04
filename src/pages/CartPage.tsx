import { Trash2 } from 'lucide-react';

export function CartPage() {
  const cartEmpty = true;

  if (cartEmpty) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛍️</div>
          <h1 className="font-serif text-3xl mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-8">Start adding some beautiful handcrafted pieces!</p>
          <a
            href="/shop"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/shop');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors inline-block"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl text-center">Shopping Cart</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6">
                <div className="space-y-6">
                  <div className="flex gap-6 pb-6 border-b border-neutral-200">
                    <img
                      src="https://images.pexels.com/photos/5705487/pexels-photo-5705487.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Product"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Classic Tote Bag</h3>
                      <p className="text-sm text-neutral-600 mb-3">Premium cotton yarn</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded">
                            -
                          </button>
                          <span>1</span>
                          <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded">
                            +
                          </button>
                        </div>
                        <button className="text-neutral-600 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$89.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <h2 className="font-semibold text-xl mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span>$89.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-3 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>$89.99</span>
                  </div>
                </div>
                <button className="w-full px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium mb-4">
                  Proceed to Checkout
                </button>
                <a
                  href="/shop"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/shop');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="block text-center text-neutral-600 hover:text-neutral-900"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
