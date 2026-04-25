/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Info, TrendingUp, Users, Instagram, Camera, Edit3, Calendar } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹3000",
      features: ["12 Reels", "Editing + Posting"],
      highlight: false,
    },
    {
      name: "Standard",
      price: "₹4500–₹5500",
      features: ["15 Reels + Posts", "Content + Posting"],
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹6000–₹8000",
      features: ["15 Reels + Shooting + Full Handling", "Priority Support", "Strategy Consulting"],
      highlight: true,
    },
  ];

  const inclusions = [
    { title: "Shooting", desc: "Professional video capture (for Premium)", icon: <Camera className="size-5" /> },
    { title: "Editing & Captions", desc: "High-quality reels with engaging text", icon: <Edit3 className="size-5" /> },
    { title: "Posting & Scheduling", desc: "We post when your audience is active", icon: <Calendar className="size-5" /> },
    { title: "Content Planning", desc: "Strategic ideas tailored to your brand", icon: <Instagram className="size-5" /> },
    { title: "Growth Strategy", desc: "Techniques to attract more local followers", icon: <TrendingUp className="size-5" /> },
  ];

  return (
    <section id="plans" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* 2. THE PROBLEM (HOOK) */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[2rem] border-brand-400/20"
        >
          <Info className="size-10 text-brand-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">The Digital Struggle</h2>
          <div className="space-y-4">
            <p className="text-white/80 text-xl font-medium leading-relaxed">
              "Most local businesses don’t get customers online because they don’t post consistently or professionally."
            </p>
            <p className="text-brand-400 text-lg font-semibold italic">
              👉 This makes them feel the need to stand out.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/40 font-semibold uppercase tracking-widest text-[10px]">
            <Users className="size-4" /> That's where we handle everything
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-widest block mb-4">Our Packages</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Simple, High-Converting Plans</h2>
        </div>

        {/* 4. PLANS (CLEAN TABLE STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col h-full border transition-all duration-500 ${
                plan.highlight 
                ? "bg-gradient-to-b from-brand-600/20 to-black border-brand-400/50 scale-105 z-10 shadow-[0_0_50px_rgba(139,92,246,0.3)]" 
                : "glass border-white/5 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="bg-brand-400 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full w-fit mb-6 mx-auto">
                  Recommended ⭐
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-center">{plan.name}</h3>
              <div className="text-4xl font-bold mb-8 text-center text-brand-400">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white/60 text-sm items-start">
                    <Check className="size-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-bold transition-all ${
                  plan.highlight 
                  ? "bg-white text-black hover:scale-105" 
                  : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* 5. WHAT'S INCLUDED */}
        <div className="mt-32 p-12 glass rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <Check className="text-emerald-400" /> What’s Included in Every Plan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {inclusions.map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-400/20 group-hover:text-brand-400 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold mb-2">{item.title}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-tighter">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. TRUST LINE */}
        <p className="mt-12 text-center text-white/30 text-sm font-medium tracking-wide uppercase">
          Designed for local businesses like gyms, clinics, salons & more
        </p>
      </div>
    </section>
  );
}
