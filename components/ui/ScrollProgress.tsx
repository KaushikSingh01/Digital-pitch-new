"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the very top that fills with scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="scroll-progress w-full"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
