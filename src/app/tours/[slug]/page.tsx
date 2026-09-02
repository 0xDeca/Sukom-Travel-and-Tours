"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check, X as XIcon } from "lucide-react";
import { tourPackages } from "@/lib/data";

export default function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tour = tourPackages.find((t) => t.id === slug);

  if (!tour) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-charcoal-900 mb-4">Tour not found</h1>
          <Link href="/tours" className="btn-primary text-sm">View All Tours</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-sm text-slate-300 mb-3">
              <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-sukom-400">{tour.name}</span>
            </div>
            <div className="demo-badge mb-4">Demo Tour Package</div>
            <h1 className="text-4xl lg:text-5xl text-white mb-2">{tour.name}</h1>
            <p className="text-slate-300">{tour.destination} · {tour.duration} · {tour.type}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="section-label mb-5">Overview</div>
                <p className="text-lg text-slate-600 leading-relaxed">{tour.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="section-label mb-5">Highlights</div>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((h) => (
                    <span key={h} className="px-4 py-2 bg-ivory-50 border border-ivory-200 text-sm text-charcoal-900">{h}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <div className="section-label mb-5">Itinerary</div>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-5 p-5 bg-ivory-50">
                      <div className="w-12 h-12 bg-charcoal-900 text-white flex items-center justify-center shrink-0">
                        <span className="text-xs font-semibold">Day {day.day}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-charcoal-900 mb-1">{day.title}</h4>
                        <p className="text-sm text-slate-500">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <div className="section-label mb-4">Included</div>
                  <ul className="space-y-2">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <div className="section-label mb-4">Excluded</div>
                  <ul className="space-y-2">
                    {tour.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <XIcon className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-1">
              <div className="bg-ivory-50 p-8 sticky top-28">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Starting from</div>
                <div className="text-3xl font-semibold text-charcoal-900 mb-1">{tour.price}</div>
                <div className="text-xs text-amber-500 mb-6">Demo pricing — for illustration only</div>
                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div className="flex justify-between"><span>Duration</span><span className="font-medium">{tour.duration}</span></div>
                  <div className="flex justify-between"><span>Type</span><span className="font-medium">{tour.type}</span></div>
                  <div className="flex justify-between"><span>Destination</span><span className="font-medium">{tour.destination}</span></div>
                </div>
                <Link href="/consultation" className="btn-primary w-full text-sm">
                  Enquire About This Tour <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
