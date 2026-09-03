"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze O.",
    location: "Lagos, Nigeria",
    service: "UK Visitor Visa",
    rating: 5,
    text: "Sukom made the entire UK visa process seamless. From document preparation to submission, everything was handled professionally. I received my visa within the expected timeline.",
  },
  {
    name: "Emeka A.",
    location: "Benin City, Nigeria",
    service: "Canada Study Permit",
    rating: 5,
    text: "I was nervous about my study permit application, but the Sukom team guided me through every step. They were thorough, patient, and always available to answer my questions.",
  },
  {
    name: "Funke M.",
    location: "Abuja, Nigeria",
    service: "Dubai Tourist Visa",
    rating: 5,
    text: "Quick, efficient, and stress-free. Sukom handled my Dubai visa application in record time. I will definitely use their services again for my next trip.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-5">Testimonials</div>
          <h2 className="text-4xl lg:text-5xl text-charcoal-900 mb-4">
            What our travellers say.
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Real feedback from clients who trusted us with their travel plans.
          </p>
        </motion.div>

        <div className="demo-badge mb-10 justify-center mx-auto w-fit">Demo — Testimonials are illustrative</div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 relative"
            >
              <Quote className="w-8 h-8 text-sukom-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-sukom-400 text-sukom-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-sm font-medium text-charcoal-900">{t.name}</div>
                <div className="text-xs text-slate-400">{t.location} — {t.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
