/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  originX: number;
  originY: number;
  angle: number;
  radius: number;
  speed: number;
}

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>(0);
  
  // INTERNAL STATE MACHINE
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const [uiProgress, setUiProgress] = useState(0);
  const autoPlayBaseSpeed = 0.0028; // Calibrated for a faster cinematic reveal (approx 6-7s)

  // Use a local scroll listener for "relative" scrubbing (Additive, never blocking)
  const { scrollYProgress } = useScroll();
  const lastScrollPos = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const delta = latest - lastScrollPos.current;
    lastScrollPos.current = latest;
    
    // Inject scroll delta as a BOOST (Multiplied for responsiveness)
    if (delta > 0) {
      targetProgressRef.current = Math.min(targetProgressRef.current + delta * 0.8, 1);
    }
  });

  const colors = ["#8b5cf6", "#6d28d9", "#00d2ff", "#0ea5e9", "#ffffff"];

  const initParticles = () => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 250 : 500;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Object Pooling: Reuse existing particle objects if available to reduce GC stress
    const existingParticles = particles.current;
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      let p: Particle;
      
      if (existingParticles[i]) {
        // Reuse object
        p = existingParticles[i];
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
        p.vx = (Math.random() - 0.5) * 1.5;
        p.vy = (Math.random() - 0.5) * 1.5;
        p.size = Math.random() * 1.8 + 0.5;
        p.color = color;
        p.alpha = Math.random() * 0.4 + 0.1;
        p.originX = Math.random() * canvas.width;
        p.originY = Math.random() * canvas.height;
        p.angle = Math.random() * Math.PI * 2;
        p.radius = Math.random() * 500 + 100;
        p.speed = Math.random() * 0.015 + 0.005;
      } else {
        // Create new object
        p = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 1.8 + 0.5,
          color: color,
          alpha: Math.random() * 0.4 + 0.1,
          originX: Math.random() * canvas.width,
          originY: Math.random() * canvas.height,
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * 500 + 100,
          speed: Math.random() * 0.015 + 0.005,
        };
      }
      newParticles.push(p);
    }
    
    // Sort by color for batch rendering efficiency
    particles.current = newParticles.sort((a, b) => a.color.localeCompare(b.color));
  };

  const animate = () => {
    if (!canvasRef.current || !ctxRef.current) return;
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    targetProgressRef.current = Math.min(targetProgressRef.current + autoPlayBaseSpeed, 1);
    const lerpFactor = 0.1;
    progressRef.current += (targetProgressRef.current - progressRef.current) * lerpFactor;

    const p = progressRef.current;
    
    // Threshold for completion
    if (p >= 0.998) {
      setTimeout(onComplete, 300);
      cancelAnimationFrame(animationFrame.current);
      return;
    }

    // Throttle React state updates to 60fps React overhead - only update if visible change
    if (Math.abs(p - uiProgress) > 0.004) {
      setUiProgress(p);
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Optimization: Draw background rectangle once
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Atmospheric overlay
    ctx.globalAlpha = Math.max(0.4, 0.4 + p * 0.4);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;

    let currentColor = "";
    
    // Batch rendering: Group draw calls by color
    particles.current.forEach((particle) => {
      // Update Physics
      if (p < 0.2) {
        const t = p / 0.2;
        particle.x += particle.vx * (1 - t);
        particle.y += particle.vy * (1 - t);
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      } else if (p < 0.5) {
        const t = (p - 0.2) / 0.3;
        particle.angle += particle.speed;
        const orbitRadius = particle.radius * (1 - t * 0.7);
        const tx = centerX + Math.cos(particle.angle) * orbitRadius;
        const ty = centerY + Math.sin(particle.angle) * orbitRadius;
        particle.x += (tx - particle.x) * 0.1;
        particle.y += (ty - particle.y) * 0.1;
        particle.alpha = Math.min(particle.alpha + 0.03, 0.8);
      } else if (p < 0.8) {
        const t = (p - 0.5) / 0.3;
        const targetX = centerX + (Math.random() - 0.5) * (30 * (1 - t));
        const targetY = centerY + (Math.random() - 0.5) * (30 * (1 - t));
        particle.x += (targetX - particle.x) * (0.05 + t * 0.2);
        particle.y += (targetY - particle.y) * (0.05 + t * 0.2);
        particle.alpha = 1;
      } else if (p < 0.98) {
        const t = (p - 0.8) / 0.18;
        const angle = Math.atan2(particle.y - centerY, particle.x - centerX);
        const force = 60 * t;
        particle.x += Math.cos(angle) * force;
        particle.y += Math.sin(angle) * force;
        particle.alpha = Math.max(0, 1 - t * 2);
      }

      // Render Strategy: Batching
      if (particle.color !== currentColor) {
        if (currentColor !== "") ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        currentColor = particle.color;
      }

      ctx.globalAlpha = particle.alpha;
      ctx.moveTo(particle.x + particle.size, particle.y);
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    });
    
    ctx.fill();
    ctx.globalAlpha = 1.0;

    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d", { alpha: false });
    }
    
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const title = "VYROXA";
  const subtitle = "STUDIO";

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden cursor-none bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Scroll/Wait Indicator */}
      <motion.div 
        animate={{ opacity: uiProgress < 0.15 ? 1 : 0 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.6em] font-light">Cinematic Experience</span>
      </motion.div>

      {/* Light Singularity */}
      <motion.div
        animate={{
          scale: uiProgress >= 0.75 ? (uiProgress >= 0.96 ? 20 : 2) : 0,
          opacity: uiProgress >= 0.75 ? (uiProgress >= 0.99 ? 0 : 1) : 0
        }}
        className="absolute rounded-full w-48 h-48 bg-white blur-[100px] shadow-[0_0_250px_rgba(139,92,246,1)] z-0"
      />

      {/* VYROXA Title Reveal - Editorial Luxury Style */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        <div className="flex gap-[0.8em] md:gap-[1.2em]">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{
                opacity: uiProgress > 0.88 ? 1 : 0,
                y: uiProgress > 0.88 ? 0 : 20,
                filter: uiProgress > 0.92 ? "blur(0px)" : "blur(10px)",
                transition: { delay: i * 0.05, duration: 0.8 }
              }}
              className="text-5xl md:text-9xl font-display font-light text-white tracking-widest drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: uiProgress > 0.93 ? 0.7 : 0,
            scale: uiProgress > 0.93 ? 1 : 0.95,
            transition: { delay: 0.4, duration: 1 }
          }}
          className="mt-8 overflow-hidden"
        >
          <span className="text-xl md:text-3xl tracking-[1.5em] text-brand-300 font-extralight uppercase block translate-x-[0.75em]">
            {subtitle}
          </span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: uiProgress > 0.94 ? 1 : 0 }}
            className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/50 to-transparent mt-4"
          />
        </motion.div>
      </div>

      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
}






