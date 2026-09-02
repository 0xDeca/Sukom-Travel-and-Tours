"use client";

import { motion } from "framer-motion";
import { FileCheck, Users, MessageSquare, LayoutGrid } from "lucide-react";

const pillars = [
  {
    icon: FileCheck,
    title: "Clear Process",
    description: "Step-by-step guidance so you always know where you stand and what comes next.",
  },
  {
    icon: Users,
    title: "Personal Assistance",
    description: "Dedicated support from experienced travel professionals who understand your needs.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Honest, clear information about requirements, timelines, and what to expect.",
  },
  {
    icon: LayoutGrid,
    title: "Centralised Applications",
    description: "Manage your visa applications, documents, and travel plans in one place.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-5">Why Sukom</div>
          <h2 className="text-4xl lg:text-5xl text-charcoal-900 mb-4">
            Guidance. Clarity. Support.
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Our approach is built on process excellence and genuine care for every traveller we assist.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-6 border border-slate-200 flex items-center justify-center group-hover:border-sukom-400 group-hover:bg-sukom-400/5 transition-all duration-300">
                <pillar.icon className="w-6 h-6 text-slate-400 group-hover:text-sukom-500 transition-colors duration-300" />
              </div>
              <h3 className="text-lg text-charcoal-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
