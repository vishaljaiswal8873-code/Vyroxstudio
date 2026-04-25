/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Quote, PlusCircle } from "lucide-react";

const initialTestimonials = [
  {
    text: "Vyroxa helped our clinic get way more phone calls. Our Google Maps profile is finally ranking first, and we're seeing new patients every week.",
    author: "Dr. Sandeep Singh",
    role: "Owner, HealthFirst Clinic",
    avatar: "https://picsum.photos/seed/doc_ranchi/150/150",
  },
  {
    text: "Our gym's Instagram exploded after working with them. We gained real followers from Ranchi, and many of them have now joined as members.",
    author: "Amit Kumar",
    role: "Proprietor, PowerHouse Gym",
    avatar: "https://picsum.photos/seed/gym_owner/150/150",
  },
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [formData, setFormData] = useState({ text: "", author: "", role: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTestimonials([
      ...testimonials,
      {
        ...formData,
        avatar: `https://picsum.photos/seed/${formData.author}/150/150`,
      },
    ]);
    setFormData({ text: "", author: "", role: "" });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-widest block mb-4">Happy Clients</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Trusted by Local Businesses</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 rounded-3xl glass relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 size-12 text-white/5" />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="size-12 rounded-full border border-white/20"
                />
                <div>
                  <span className="block font-bold">{t.author}</span>
                  <span className="text-sm text-white/40 uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="max-w-xl mx-auto glass p-8 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <PlusCircle className="text-brand-400" /> Add Your Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              required 
              placeholder="Your Review" 
              value={formData.text} 
              onChange={(e) => setFormData({...formData, text: e.target.value})} 
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white" 
            />
            <input 
              required 
              placeholder="Your Name" 
              value={formData.author} 
              onChange={(e) => setFormData({...formData, author: e.target.value})} 
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white" 
            />
            <input 
              required 
              placeholder="Your Role/Business" 
              value={formData.role} 
              onChange={(e) => setFormData({...formData, role: e.target.value})} 
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white" 
            />
            <button 
              type="submit" 
              className="w-full py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-500 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

