"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data";

export default function DestinationsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label !text-sukom-400 mb-5">Explore</div>
            <h1 className="text-5xl lg:text-6xl mb-4">Destinations</h1>
            <p className="text-slate-400 max-w-lg text-lg">
              Explore the destinations we support. Each one carefully selected to serve the travel needs of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="demo-badge">Demo Data — Destination listings are illustrative</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/destinations/${dest.id}`}
                  className="group block bg-white card-hover overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl">{dest.flag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg text-charcoal-900 group-hover:text-sukom-500 transition-colors">
                        {dest.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sukom-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                      <MapPin className="w-3 h-3" />
                      {dest.continent}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.visaTypes.slice(0, 3).map((type) => (
                        <span
                          key={type}
                          className="text-[10px] px-2 py-1 bg-ivory-100 text-slate-500 tracking-wide"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
