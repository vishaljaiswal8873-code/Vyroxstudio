import { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "motion/react";
import { wrap } from "@motionone/utils";

interface VelocityTextProps {
  children: string;
  baseVelocity: number;
}

function VelocityText({ children, baseVelocity = 100 }: VelocityTextProps) {
  const baseX = useMotionValue(0);

  /**
   * This is a magic wrapping for the length of the text - you
   * may need to adjust the percentages based on number of repeats or text length
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be enough to span the element width
   * (usually 4-8 times)
   */
  return (
    <div className="overflow-hidden tracking-[-2px] leading-[0.8] m-0 white-space-nowrap flex flex-nowrap">
      <motion.div className="font-display font-bold uppercase text-[4rem] md:text-[8rem] whitespace-nowrap flex flex-nowrap gap-8" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export function ScrollVelocityMarquee() {
  return (
    <section className="py-24 overflow-hidden mask-fade-edges">
      <VelocityText baseVelocity={-5}>Ranchi's Best Growth Agency</VelocityText>
      <VelocityText baseVelocity={5}>More Leads. More Customers. More Growth.</VelocityText>
    </section>
  );
}
