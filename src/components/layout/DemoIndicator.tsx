"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

export default function DemoIndicator() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-charcoal-900 text-white p-5 shadow-2xl max-w-xs"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="text-xs font-semibold tracking-wider uppercase">Demo Experience</h4>
              <button onClick={() => setExpanded(false)} className="text-slate-400 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
              This is a demonstration of what Sukom Travel &amp; Tours&apos; digital platform could become. 
              All data shown is fictional demo content.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Demonstration Mode
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 bg-sukom-500 text-white px-4 py-2.5 shadow-lg hover:bg-sukom-600 transition-colors group"
      >
        <Eye className="w-3.5 h-3.5" />
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">Demo</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      </button>
    </div>
  );
}
