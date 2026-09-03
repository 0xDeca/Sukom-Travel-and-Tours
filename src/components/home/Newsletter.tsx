"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-charcoal-900 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sukom-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sukom-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-xl">
            <div className="section-label !text-sukom-400 mb-5">Stay Updated</div>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Travel tips, visa updates, and exclusive offers.
            </h2>
            <p className="text-slate-400 mb-8">
              Join travellers who get the latest travel insights from Sukom delivered to their inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-sukom-400"
              >
                <div className="w-8 h-8 bg-sukom-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm">Thank you! You&apos;re now subscribed.</span>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
                className="flex gap-3"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:border-sukom-400 focus:outline-none transition-colors"
                  />
                </div>
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[10px] text-slate-500 mt-4">Demo — Subscription is simulated. No data is collected.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
