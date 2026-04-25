/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Parallax } from "./Parallax";

const projects = [
  {
    title: "Modern Multi-Specialty Clinic",
    category: "Website & Booking",
    image: "https://picsum.photos/seed/vyroxa_clinic/800/600",
  },
  {
    title: "Elite Fitness Hub Ranchi",
    category: "Instagram Growth",
    image: "https://picsum.photos/seed/vyroxa_gym/800/600",
  },
  {
    title: "Local Dental Care",
    category: "Google Maps SEO",
    image: "https://picsum.photos/seed/vyroxa_dental/800/600",
  },
  {
    title: "Gourmet Dine Interior",
    category: "Digital Presence",
    image: "https://picsum.photos/seed/vyroxa_restaurant/800/600",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">Demo Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative cursor-pointer glass p-6 rounded-3xl">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/60 mb-6">Designed to showcase services, build trust, and convert visitors into members.</p>
            <a href="https://fitness-evolution.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm inline-block">View Demo</a>
          </div>
          <div className="group relative cursor-pointer glass p-6 rounded-3xl border border-white/5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Future Projects" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/60">We are constantly building and improving high-converting solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
