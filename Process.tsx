/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Lightbulb, Code, Target } from "lucide-react";

export function Process() {
  const steps = [
    { title: "Strategy", description: "We understand your business and create a custom growth plan.", icon: <Lightbulb className="size-8 text-brand-400" /> },
    { title: "Execution", description: "We handle content creation, design, and posting for you.", icon: <Code className="size-8 text-brand-400" /> },
    { title: "Growth", description: "You get more visibility, more leads, and more customers.", icon: <Target className="size-8 text-brand-400" /> },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="size-20 rounded-full glass border border-white/5 mx-auto flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
