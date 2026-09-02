"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { destinations } from "@/lib/data";

const purposes = [
  "Tourism",
  "Business",
  "Study",
  "Visit Family",
  "Work",
  "Other",
];

export default function VisaExperience() {
  const [step, setStep] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  const journeySteps = [
    { label: "Discover", description: "Explore your options" },
    { label: "Prepare", description: "Gather documents" },
    { label: "Apply", description: "Submit application" },
    { label: "Travel", description: "Begin your journey" },
  ];

  const handleDestinationSelect = (id: string) => {
    setSelectedDestination(id);
    setTimeout(() => setStep(1), 400);
  };

  const handlePurposeSelect = (purpose: string) => {
    setSelectedPurpose(purpose);
    setTimeout(() => setStep(2), 400);
  };

  const reset = () => {
    setStep(0);
    setSelectedDestination(null);
    setSelectedPurpose(null);
  };

  const selectedDest = destinations.find((d) => d.id === selectedDestination);

  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label !text-sukom-400 justify-center mb-5">
            Visa Services
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Find the right visa path.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Answer two questions and we&apos;ll show you the recommended next steps for your travel plans.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            {["Destination", "Purpose", "Your Journey"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    step > i
                      ? "bg-sukom-500 text-white"
                      : step === i
                      ? "bg-white text-charcoal-900"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {step > i ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={`text-xs tracking-wide hidden sm:block transition-colors duration-300 ${
                    step >= i ? "text-white" : "text-white/30"
                  }`}
                >
                  {label}
                </span>
                {i < 2 && (
                  <div
                    className={`w-12 h-[1px] mx-2 transition-colors duration-300 ${
                      step > i ? "bg-sukom-500" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 p-8 lg:p-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl mb-2">Where would you like to go?</h3>
                  <p className="text-sm text-slate-400 mb-8">Select your destination country.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {destinations.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => handleDestinationSelect(dest.id)}
                        className={`text-left p-4 border transition-all duration-300 hover:border-sukom-400 ${
                          selectedDestination === dest.id
                            ? "border-sukom-400 bg-sukom-400/10"
                            : "border-white/10 bg-white/5"
                        }`}
                      >
                        <span className="text-2xl block mb-2">{dest.flag}</span>
                        <span className="text-sm font-medium">{dest.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setStep(0)}
                    className="text-xs text-slate-400 hover:text-white mb-6 flex items-center gap-1"
                  >
                    ← Change destination
                  </button>
                  <h3 className="text-xl mb-2">Why are you travelling?</h3>
                  <p className="text-sm text-slate-400 mb-8">
                    Select the purpose of your trip to {selectedDest?.name}.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {purposes.map((purpose) => (
                      <button
                        key={purpose}
                        onClick={() => handlePurposeSelect(purpose)}
                        className={`text-left p-4 border transition-all duration-300 hover:border-sukom-400 ${
                          selectedPurpose === purpose
                            ? "border-sukom-400 bg-sukom-400/10"
                            : "border-white/10 bg-white/5"
                        }`}
                      >
                        <span className="text-sm font-medium">{purpose}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={reset}
                    className="text-xs text-slate-400 hover:text-white mb-6 flex items-center gap-1"
                  >
                    ← Start over
                  </button>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-3xl">{selectedDest?.flag}</span>
                    <div>
                      <h3 className="text-xl">Your Sukom Journey</h3>
                      <p className="text-sm text-slate-400">
                        {selectedDest?.name} — {selectedPurpose}
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {journeySteps.map((s, i) => (
                        <motion.div
                          key={s.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="text-center p-4 bg-white/5 border border-white/10"
                        >
                          <div className="w-10 h-10 mx-auto mb-3 bg-sukom-400/10 border border-sukom-400/30 flex items-center justify-center">
                            <span className="text-sukom-400 text-sm font-semibold">{i + 1}</span>
                          </div>
                          <div className="text-sm font-medium mb-1">{s.label}</div>
                          <div className="text-[11px] text-slate-400">{s.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 mb-8">
                    <h4 className="text-sm font-medium mb-2">Your next steps with Sukom:</h4>
                    <ul className="space-y-2">
                      {[
                        "Initial consultation to understand your travel goals",
                        "Document preparation and review",
                        "Application support and guidance",
                        "Submission assistance",
                        "Progress updates until completion",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <ChevronRight className="w-3.5 h-3.5 text-sukom-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[11px] text-slate-500 mb-6">
                    Visa requirements and decisions are determined by the relevant authorities and may change.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/application" className="btn-champagne text-xs">
                      Start My Application
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/consultation" className="btn-secondary !border-white/20 !text-white text-xs hover:!bg-white hover:!text-charcoal-900">
                      Book Consultation
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
