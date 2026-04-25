/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Results-focused approach",
  "Clean, professional designs",
  "Local business understanding",
  "Complete handling (you don’t manage anything)",
];

export function Benefits() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border border-white/5">
        <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">Why Vyroxa Studio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4">
              <CheckCircle2 className="size-6 text-brand-400" />
              <p className="text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
