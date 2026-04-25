/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ForceFieldBackground } from "./ForceFieldBackground";

interface BackgroundProps {
  hue?: number;
  saturation?: number;
  spacing?: number;
  forceStrength?: number;
  magnifierRadius?: number;
}

export function Background({
  hue = 260,
  saturation = 80,
  spacing = 12,
  forceStrength = 15,
  magnifierRadius = 200,
}: BackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Interactive Force Field Background */}
      <ForceFieldBackground 
        hue={hue}
        saturation={saturation}
        spacing={spacing}
        density={1.5} // Slightly less dense for cleaner look
        forceStrength={forceStrength}
        magnifierRadius={magnifierRadius}
        className="opacity-70"
      />

      {/* Atmospheric Depth Layers */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-brand-400/5 blur-[120px] pointer-events-none"
      />

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
    </div>
  );
}

