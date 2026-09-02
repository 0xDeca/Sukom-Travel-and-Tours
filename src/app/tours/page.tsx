"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { tourPackages } from "@/lib/data";

export default function ToursPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label !text-sukom-400 mb-5">Tours & Experiences</div>
            <h1 className="text-5xl lg:text-6xl mb-4">Curated for the curious.</h1>
            <p className="text-slate-400 max-w-lg text-lg">
              Discover our range of carefully planned tour experiences. From desert safaris to city adventures.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — Tour packages are illustrative and do not represent actual Sukom offerings</div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/tours/${tour.id}`} className="group block bg-white card-hover overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={tour.image} alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="demo-badge">Demo Package</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5">
                      <span className="text-xs font-semibold text-charcoal-900">{tour.type}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{tour.destination}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{tour.duration}</span>
                    </div>
                    <h3 className="text-lg text-charcoal-900 mb-2 group-hover:text-sukom-500 transition-colors">{tour.name}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">{tour.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-charcoal-900">{tour.price} <span className="text-[10px] text-amber-500 font-normal">demo</span></span>
                      <span className="text-xs text-sukom-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
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
