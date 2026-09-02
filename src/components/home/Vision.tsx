"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ecosystem = [
  { label: "Customer", color: "bg-sukom-500" },
  { label: "Sukom Website", color: "bg-charcoal-700" },
  { label: "Applications", color: "bg-charcoal-600" },
  { label: "Customer Portal", color: "bg-charcoal-500" },
  { label: "Staff Dashboard", color: "bg-charcoal-400" },
  { label: "CRM / Leads", color: "bg-slate-500" },
  { label: "Notifications", color: "bg-slate-400" },
  { label: "Analytics", color: "bg-sukom-400" },
];

export default function Vision() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-5">The Vision</div>
          <h2 className="text-4xl lg:text-5xl text-charcoal-900 mb-4">
            Not just a website.
            <br />A better way to travel with Sukom.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6">
            The next generation of Sukom&apos;s digital experience could bring discovery, applications, 
            enquiries, travel support and customer communication into one connected platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sukom-400 via-charcoal-700 to-slate-300" />

            <div className="space-y-0">
              {ecosystem.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-5 relative"
                >
                  <div className={`w-10 h-10 ${item.color} flex items-center justify-center z-10 shrink-0`}>
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="flex-1 py-4 border-b border-slate-200/60">
                    <span className="text-sm font-medium text-charcoal-900">{item.label}</span>
                  </div>
                  {i < ecosystem.length - 1 && (
                    <ArrowRight className="absolute left-[11px] top-[50%] -translate-y-1/2 w-3 h-3 text-slate-300 z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
