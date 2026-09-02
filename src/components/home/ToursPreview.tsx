"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { tourPackages } from "@/lib/data";

export default function ToursPreview() {
  const featured = tourPackages.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-5">Tours & Experiences</div>
            <h2 className="text-4xl lg:text-5xl text-charcoal-900">
              Curated for the curious.
            </h2>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm text-charcoal-900 font-medium hover:text-sukom-500 transition-colors group shrink-0"
          >
            View all tours
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/tours/${tour.id}`} className="group block card-hover">
                <div className="relative overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="demo-badge">{tour.isDemo ? "Demo Package" : "Package"}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5">
                    <span className="text-xs font-semibold text-charcoal-900">{tour.type}</span>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex items-center gap-4 mb-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {tour.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tour.duration}
                    </span>
                  </div>
                  <h3 className="text-lg text-charcoal-900 mb-2 group-hover:text-sukom-500 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-charcoal-900">
                      {tour.price}
                      {tour.isDemo && (
                        <span className="text-[10px] text-amber-500 font-normal ml-1">demo</span>
                      )}
                    </span>
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
  );
}
