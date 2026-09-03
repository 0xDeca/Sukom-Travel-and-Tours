"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setIsVisible(v > 0.01 && v < 0.99);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-sukom-500 z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
