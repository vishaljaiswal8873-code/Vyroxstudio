/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Loader2, Instagram, Linkedin, Dribbble, Palette, ExternalLink, ArrowUp } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: "", business: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-white/60 mb-12">Have questions or want to get started? Reach out and we’ll help you grow your business.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input aria-label="Full Name" required type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10" />
          <input required type="text" placeholder="Business Name" value={formData.business} onChange={(e) => setFormData({...formData, business: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10" />
          <textarea required rows={4} placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10" />
          <button type="submit" disabled={formState === 'loading'} className="w-full px-12 py-5 rounded-full bg-brand-600 font-bold flex items-center justify-center gap-2">
            {formState === 'loading' ? <Loader2 className="animate-spin" /> : <>Send Message <Send className="size-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 md:px-12 border-t border-white/5 bg-black/80 backdrop-blur-md relative overflow-hidden">
      {/* Footer background "form" layer */}
      <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="size-10 rounded-full overflow-hidden border border-brand-400/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="/logo.png" 
                  alt="Vyroxa" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('bg-brand-600');
                  }}
                />
              </div>
              <span className="font-display text-white font-bold tracking-tight text-2xl">Vyroxa Studio</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 text-lg leading-relaxed">
              Digital Growth for Local Businesses
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="size-5" />, label: 'Instagram', href: 'https://www.instagram.com/vyroxastudio?igsh=dTJya2NsMms0YnR3' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-brand-600 hover:text-white text-white/60 transition-all border-white/5 active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.2em] text-[10px] uppercase opacity-50">Company</h3>
            <ul className="space-y-5">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Portfolio', href: '#work' },
                { name: 'Pricing', href: '#' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/40 hover:text-brand-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all text-sm group">
                    {link.name}
                    <ArrowUp className="size-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.2em] text-[10px] uppercase opacity-50">Legal</h3>
            <ul className="space-y-5">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/40 hover:text-brand-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all text-sm group">
                    {item.name}
                    <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>© 2026 Vyroxa Studio. All rights reserved.</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
          >
            <span className="uppercase tracking-widest text-[10px]">Back to top</span>
            <div className="size-10 rounded-full glass border-white/5 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
              <ArrowUp className="size-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
