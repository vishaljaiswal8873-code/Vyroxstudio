/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">Want More Customers for Your Business?</h2>
        <p className="text-white/60 mb-12 text-lg">Let us handle your online presence while you focus on running your business.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://wa.me/916209009255" className="px-10 py-5 rounded-full bg-emerald-600 text-white font-bold hover:scale-105 transition-all">Chat on WhatsApp 💬</a>
          <a href="tel:+916209009255" className="px-10 py-5 rounded-full glass font-bold text-white hover:bg-white/10 transition-all">Call Now 📞</a>
        </div>
      </div>
    </section>
  );
}
