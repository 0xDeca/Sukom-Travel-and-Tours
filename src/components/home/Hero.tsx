"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/50 to-charcoal-800/30 z-10" />
        <img
          src="/hero-travel.jpg"
          alt="Travel destination"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-sukom-400" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sukom-400">
                  Sukom Travel & Tours
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-8"
            >
              Your Journey
              <br />
              <span className="text-sukom-400">Starts Here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-300 max-w-lg leading-relaxed mb-10"
            >
              From visa guidance to unforgettable journeys, Sukom helps you move 
              from where you are to where you want to be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link href="/visa-services" className="btn-primary">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/application" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-charcoal-900">
                Start Your Journey
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { icon: Shield, label: "Expert Guidance" },
                { icon: Globe, label: "7+ Destinations" },
                { icon: MapPin, label: "Personalised Support" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon className="w-4 h-4 text-sukom-400" />
                  <span className="text-xs text-slate-400 tracking-wide">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-[3/4] max-w-md ml-auto">
                <div className="absolute inset-0 bg-sukom-400/10 -rotate-3" />
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-xl max-w-[220px]">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sukom-500 mb-1">
                    Popular Destination
                  </div>
                  <div className="text-sm font-medium text-charcoal-900">United Kingdom</div>
                  <div className="text-xs text-slate-400 mt-1">Visitor • Student • Work</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-charcoal-900 text-white px-4 py-3 shadow-xl">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sukom-400 mb-0.5">
                    Visa Advisory
                  </div>
                  <div className="text-xs text-slate-300">Expert guidance for your application</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-50 to-transparent z-20" />
    </section>
  );
}
