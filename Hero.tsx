/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { Parallax } from "./Parallax";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-black"
    >
      {/* Background Grid & Depth Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <Parallax offset={-100} className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%]">
          <div className="w-full h-full bg-brand-600/10 blur-[150px] rounded-full" />
        </Parallax>
        
        <Parallax offset={150} className="absolute top-[20%] -right-[15%] w-[60%] h-[60%]">
          <div className="w-full h-full bg-brand-400/5 blur-[180px] rounded-full" />
        </Parallax>

        <Parallax offset={50} className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%]">
          <div className="w-full h-full bg-brand-600/5 blur-[120px] rounded-full" />
        </Parallax>

        {/* Micro-particles */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Parallax 
              offset={Math.random() * 200 - 100} 
              className="rounded-full bg-white/10 blur-[1px]"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            />
          </div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: y1, opacity }}
        className="max-w-5xl w-full text-center z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-brand-400/20 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
          </span>
          Ranchi Business Growth Agency
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Get More Customers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">
            for Your Business
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-6"
        >
          We help local businesses in Ranchi grow using websites, Instagram marketing, and Google Maps optimization.
        </motion.p>
        
        <motion.p
          variants={itemVariants}
          className="text-brand-400/60 font-medium text-sm mb-12 tracking-wide uppercase"
        >
          Helping local businesses turn online visitors into real customers.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contact" className="px-10 py-5 rounded-full bg-white text-black font-bold hover:scale-105 transition-all active:scale-95 flex items-center gap-3 group shadow-2xl shadow-brand-400/20">
            Start Growing Today
          </a>
          <a href="https://wa.me/916209009255" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-full glass font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all border-white/5 flex items-center gap-3">
             Chat on WhatsApp 💬
          </a>
        </motion.div>
      </motion.div>

      {/* Floating 3D-ish Elements with Parallax */}
      <Parallax offset={80} className="absolute top-1/4 -right-12 md:right-[10%] -z-0 hidden md:block">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 h-48 rounded-2xl glass border-white/10 rotate-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-transparent p-4">
            <div className="w-full h-1 bg-white/20 rounded-full mb-4" />
            <div className="w-2/3 h-1 bg-white/10 rounded-full mb-4" />
            <div className="w-full h-16 bg-white/5 rounded-lg" />
          </div>
        </motion.div>
      </Parallax>

      <Parallax offset={-60} className="absolute bottom-1/4 -left-12 md:left-[10%] -z-0 hidden lg:block">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-32 h-32 rounded-full glass border-white/10 -rotate-12"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent" />
        </motion.div>
      </Parallax>
    </section>
  );
}
