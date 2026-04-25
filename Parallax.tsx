import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface ParallaxProps {
  children?: React.ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Parallax({ children, offset = 50, className = "", style = {} }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ ...style, y }} className={className}>
      {children}
    </motion.div>
  );
}
