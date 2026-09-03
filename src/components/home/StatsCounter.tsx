"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { label: "Visa Applications Processed", value: 2400, suffix: "+" },
  { label: "Happy Travellers", value: 1800, suffix: "+" },
  { label: "Destinations Covered", value: 15, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-charcoal-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="demo-badge mb-10 justify-center mx-auto w-fit">Demo — Statistics are illustrative</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-display text-sukom-400 mb-2">
                <AnimatedCounter target={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs text-slate-400 tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
