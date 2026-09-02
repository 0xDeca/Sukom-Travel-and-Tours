"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-900 to-charcoal-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sukom-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label !text-sukom-400 justify-center mb-5">Get Started</div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready for the journey?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10">
              Let&apos;s build a digital experience that makes Sukom easier to discover, 
              easier to trust and easier to do business with.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultation" className="btn-champagne">
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/visa-services" className="btn-secondary !border-white/20 !text-white hover:!bg-white hover:!text-charcoal-900">
                Explore the Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
