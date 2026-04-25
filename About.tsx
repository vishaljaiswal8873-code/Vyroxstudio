/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} id="agency" className="py-24 px-6 md:px-12 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden"
        >
          <motion.img
            style={{ y: imgY }}
            src="https://picsum.photos/seed/vyroxa_studio_office/1200/1200"
            alt="Vyroxa Studio Creative Space"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-brand-600/10 mix-blend-overlay" />
          <div className="absolute bottom-6 left-6 glass px-6 py-4 rounded-2xl backdrop-blur-md">
            <span className="block text-2xl font-bold">12+</span>
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Web Excellence Awards</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-widest block mb-4">Our Mission</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Grow Your Local <br /> Business Online</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Vyroxa is a direct-growth agency focused on one thing: getting more customers for your local business in Ranchi.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            We don't just build websites; we build lead-generation machines. From clinics to gyms, we help you dominate the local market using Google Maps and social media strategy.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block text-3xl font-bold mb-1">Direct</span>
              <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Leads Focused</span>
            </div>
            <div>
              <span className="block text-3xl font-bold mb-1">Ranchi</span>
              <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Local Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
