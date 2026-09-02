"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Clock, FileCheck } from "lucide-react";
import { destinations } from "@/lib/data";

export default function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const dest = destinations.find((d) => d.id === slug);

  if (!dest) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-charcoal-900 mb-4">Destination not found</h1>
          <Link href="/destinations" className="btn-primary text-sm">
            View All Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
              <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-sukom-400">{dest.name}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{dest.flag}</span>
              <div>
                <h1 className="text-5xl lg:text-6xl text-white">{dest.name}</h1>
                <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.continent}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="section-label mb-5">Overview</div>
                <p className="text-lg text-slate-600 leading-relaxed">{dest.overview}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="section-label mb-5">Popular For</div>
                <div className="flex flex-wrap gap-3">
                  {dest.popularFor.map((reason) => (
                    <span
                      key={reason}
                      className="px-4 py-2 bg-ivory-50 border border-ivory-200 text-sm text-charcoal-900"
                    >
                      {reason}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="section-label mb-5">Requirements</div>
                <div className="demo-badge mb-4">Demo — Requirements are illustrative</div>
                <ul className="space-y-3">
                  {dest.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <FileCheck className="w-4 h-4 text-sukom-500 mt-0.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 mt-4 italic">
                  Requirements vary by applicant and destination. Sukom can help you understand the current requirements.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-ivory-50 p-8 sticky top-28">
                <h3 className="text-lg text-charcoal-900 mb-4">Plan Your Trip</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-sukom-500" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Processing Time</div>
                      {dest.processingTime}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 mb-6">
                  <h4 className="text-sm font-medium text-charcoal-900 mb-2">Suggested Next Step</h4>
                  <p className="text-sm text-slate-500">{dest.nextStep}</p>
                </div>
                <div className="space-y-3">
                  <Link href="/application" className="btn-primary w-full text-sm">
                    Start Application
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/consultation" className="btn-secondary w-full text-sm">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
