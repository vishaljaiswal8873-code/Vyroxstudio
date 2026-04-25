/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="size-10 rounded-full overflow-hidden border border-brand-400/20 shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform duration-500">
          <img 
            src="/logo.png" 
            alt="Vyroxa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              // Fallback if logo.png is missing
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-brand-600');
            }}
          />
        </div>
        <span className="font-display text-2xl font-bold tracking-tight text-white">Vyroxa</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        {["Services", "Results", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>

      <button aria-label="Hire Us" className="glass px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
        Hire Us
      </button>
    </motion.nav>
  );
}
