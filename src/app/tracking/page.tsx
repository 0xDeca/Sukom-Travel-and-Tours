"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, Clock, ArrowRight } from "lucide-react";
import { trackingTimeline } from "@/lib/data";

export default function TrackingPage() {
  const [ref, setRef] = useState("");
  const [found, setFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (!ref.trim()) return;
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setFound(true);
    }, 1200);
  };

  return (
    <div className="pt-20 min-h-screen bg-ivory-50">
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label !text-sukom-400 mb-5">Application Tracking</div>
            <h1 className="text-4xl lg:text-5xl mb-3">Track Your Application</h1>
            <p className="text-slate-400 max-w-lg">Enter your Sukom reference number to check the status of your application.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — Tracking data is simulated for demonstration</div>

          {!found ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 shadow-sm">
              <h3 className="text-lg text-charcoal-900 mb-5">Enter your reference number</h3>
              <div className="flex gap-3">
                <input
                  className="input-field flex-1"
                  placeholder="e.g. SK-DEMO-10428"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button onClick={handleSearch} disabled={searching} className="btn-primary text-sm px-6">
                  {searching ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Searching
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Search className="w-4 h-4" /> Track</span>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Try: <button onClick={() => setRef("SK-DEMO-10428")} className="text-sukom-500 hover:underline">SK-DEMO-10428</button>
              </p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg text-charcoal-900">{ref}</h3>
                    <p className="text-xs text-slate-400">UK Visitor Visa — Adaeze Okonkwo</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold uppercase tracking-wider">Under Review</span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 w-full">
                    <div className="h-full bg-sukom-500 transition-all duration-1000" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-charcoal-900 mb-6">Application Timeline</h4>
                <div className="space-y-0">
                  {trackingTimeline.map((item, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 flex items-center justify-center shrink-0 z-10 ${
                          item.completed ? "bg-green-500 text-white" : "bg-slate-200 text-slate-400"
                        }`}>
                          {item.completed ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        </div>
                        {i < trackingTimeline.length - 1 && (
                          <div className={`w-[1px] flex-1 ${item.completed ? "bg-green-200" : "bg-slate-200"}`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <div className="text-sm font-medium text-charcoal-900">{item.status}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.date}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => { setFound(false); setRef(""); }} className="text-sm text-slate-500 hover:text-charcoal-900 flex items-center gap-1">
                ← Track another application
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
