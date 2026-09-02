"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Info } from "lucide-react";
import { destinations } from "@/lib/data";

const purposes = ["Tourism", "Business", "Study", "Visit Family", "Work", "Other"];

export default function VisaServicesPage() {
  const [step, setStep] = useState(0);
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  const journeySteps = [
    { label: "Initial Consultation", description: "Discuss your travel goals with a Sukom advisor" },
    { label: "Document Preparation", description: "Gather and review all required documents" },
    { label: "Application Support", description: "Complete and refine your application" },
    { label: "Submission Guidance", description: "Submit with confidence through the right channel" },
    { label: "Progress Updates", description: "Stay informed throughout the process" },
  ];

  const handleDestSelect = (id: string) => {
    setSelectedDest(id);
    setTimeout(() => setStep(1), 300);
  };

  const handlePurposeSelect = (p: string) => {
    setSelectedPurpose(p);
    setTimeout(() => setStep(2), 300);
  };

  const reset = () => {
    setStep(0);
    setSelectedDest(null);
    setSelectedPurpose(null);
  };

  const dest = destinations.find((d) => d.id === selectedDest);

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label !text-sukom-400 mb-5">Visa Services</div>
            <h1 className="text-5xl lg:text-6xl mb-4">Find the right visa path.</h1>
            <p className="text-slate-400 max-w-lg text-lg">
              Select your destination and travel purpose, and we&apos;ll guide you through the recommended next steps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — This is an interactive demonstration</div>

          <div className="flex items-center justify-between mb-10">
            {["Country", "Purpose", "Your Journey"].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-9 h-9 flex items-center justify-center text-xs font-semibold transition-all duration-300 shrink-0 ${
                    step > i ? "bg-sukom-500 text-white" : step === i ? "bg-charcoal-900 text-white" : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {step > i ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= i ? "text-charcoal-900" : "text-slate-400"}`}>
                  {label}
                </span>
                {i < 2 && <div className={`flex-1 h-[1px] mx-3 ${step > i ? "bg-sukom-400" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white p-8 lg:p-10 shadow-sm min-h-[420px]">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl text-charcoal-900 mb-2">Where would you like to go?</h3>
                  <p className="text-sm text-slate-500 mb-8">Select your destination country.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {destinations.map((d) => (
                      <button key={d.id} onClick={() => handleDestSelect(d.id)}
                        className={`text-left p-4 border-2 transition-all duration-200 hover:border-sukom-400 ${
                          selectedDest === d.id ? "border-sukom-400 bg-sukom-400/5" : "border-slate-100 hover:bg-ivory-50"
                        }`}>
                        <span className="text-2xl block mb-2">{d.flag}</span>
                        <span className="text-sm font-medium text-charcoal-900">{d.name}</span>
                        <span className="block text-xs text-slate-400 mt-0.5">{d.continent}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <button onClick={() => setStep(0)} className="text-xs text-slate-400 hover:text-charcoal-900 mb-6 flex items-center gap-1">
                    ← Change destination
                  </button>
                  <h3 className="text-2xl text-charcoal-900 mb-2">Why are you travelling?</h3>
                  <p className="text-sm text-slate-500 mb-8">Select the purpose of your trip to {dest?.name}.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {purposes.map((p) => (
                      <button key={p} onClick={() => handlePurposeSelect(p)}
                        className={`text-left p-5 border-2 transition-all duration-200 hover:border-sukom-400 ${
                          selectedPurpose === p ? "border-sukom-400 bg-sukom-400/5" : "border-slate-100 hover:bg-ivory-50"
                        }`}>
                        <span className="text-sm font-medium text-charcoal-900">{p}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <button onClick={reset} className="text-xs text-slate-400 hover:text-charcoal-900 mb-6 flex items-center gap-1">
                    ← Start over
                  </button>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-3xl">{dest?.flag}</span>
                    <div>
                      <h3 className="text-2xl text-charcoal-900">Your Sukom Journey</h3>
                      <p className="text-sm text-slate-500">{dest?.name} — {selectedPurpose}</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Next Steps</h4>
                    <div className="space-y-0">
                      {journeySteps.map((s, i) => (
                        <motion.div key={s.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                          className="flex gap-4 relative">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-sukom-500 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                              {i + 1}
                            </div>
                            {i < journeySteps.length - 1 && <div className="w-[1px] flex-1 bg-sukom-200" />}
                          </div>
                          <div className="pb-8">
                            <h5 className="text-sm font-medium text-charcoal-900">{s.label}</h5>
                            <p className="text-xs text-slate-500 mt-0.5">{s.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-ivory-50 border border-ivory-200 p-5 mb-6 flex items-start gap-3">
                    <Info className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-500">
                      Visa requirements and decisions are determined by the relevant authorities and may change. Sukom provides advisory support — final decisions rest with the issuing authority.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/application" className="btn-primary text-sm">
                      Start My Application <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/consultation" className="btn-secondary text-sm">
                      Book Consultation
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl text-charcoal-900 mb-8">Visa Requirements — By Destination</h2>
          <div className="demo-badge mb-6">Demo — Requirements are illustrative</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <div key={d.id} className="bg-ivory-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{d.flag}</span>
                  <h3 className="text-lg text-charcoal-900">{d.name}</h3>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Processing: {d.processingTime}
                </div>
                <ul className="space-y-2 mb-5">
                  {d.requirements.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <ChevronRight className="w-3 h-3 text-sukom-500 mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link href={`/destinations/${d.id}`} className="text-xs font-medium text-charcoal-900 hover:text-sukom-500 flex items-center gap-1 transition-colors">
                  View details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
