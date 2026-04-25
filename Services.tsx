/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe, Share2, MapPin, MessageSquare } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description: "We create, edit, and manage high-quality content that attracts attention and builds trust for your business.",
    icon: <Share2 className="size-6" />,
  },
  {
    title: "Website Development",
    description: "Modern, fast, and mobile-friendly websites designed to convert visitors into paying customers.",
    icon: <Globe className="size-6" />,
  },
  {
    title: "Google Maps Optimization",
    description: "Get discovered by local customers searching for your services and increase real walk-ins.",
    icon: <MapPin className="size-6" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-brand-400/50 transition-colors"
            >
              <div className="mb-6 text-brand-400">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
