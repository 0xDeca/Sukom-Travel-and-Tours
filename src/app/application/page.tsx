"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, FileCheck } from "lucide-react";
import { destinations, applicationSteps } from "@/lib/data";
import { generateRef } from "@/lib/utils";

export default function ApplicationPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(() => generateRef());
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", nationality: "",
    travelDate: "", returnDate: "", tripType: "single",
    destination: "", purpose: "",
    service: "visa", documents: [] as string[],
    notes: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const docOptions = [
    "Valid Passport", "Passport Photographs", "Bank Statements", "Employment Letter",
    "Hotel Reservation", "Flight Itinerary", "Travel Insurance", "Invitation Letter"
  ];

  const toggleDoc = (doc: string) => {
    setForm((prev) => ({
      ...prev,
      documents: prev.documents.includes(doc)
        ? prev.documents.filter((d) => d !== doc)
        : [...prev.documents, doc],
    }));
  };

  const canNext = () => {
    if (step === 0) return form.firstName && form.lastName && form.email && form.phone;
    if (step === 1) return form.travelDate;
    if (step === 2) return form.destination && form.purpose;
    if (step === 3) return form.service;
    return true;
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-500 mx-auto mb-6 flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl text-charcoal-900 mb-3">Application received</h1>
          <p className="text-slate-500 mb-2">Thank you, {form.firstName}. Your application has been received.</p>
          <p className="text-sm text-slate-400 mb-8">
            Your Sukom reference is <span className="font-semibold text-charcoal-900">{ref}</span>.
          </p>
          <div className="bg-white p-6 mb-8 text-left shadow-sm">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Application Summary</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Name</span><span className="text-charcoal-900">{form.firstName} {form.lastName}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Destination</span><span className="text-charcoal-900">{destinations.find(d => d.id === form.destination)?.name || "—"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Purpose</span><span className="text-charcoal-900">{form.purpose}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Reference</span><span className="text-charcoal-900 font-semibold">{ref}</span></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/tracking?ref=${ref}`} className="btn-primary text-sm">
              Track Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/" className="btn-secondary text-sm">Return Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-ivory-50">
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="section-label !text-sukom-400 mb-5">Application</div>
          <h1 className="text-4xl lg:text-5xl mb-3">Start Your Application</h1>
          <p className="text-slate-400">Complete the form below to begin your journey with Sukom.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — This is an interactive demonstration of the application flow</div>

          <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-2">
            {applicationSteps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    step > i ? "bg-sukom-500 text-white cursor-pointer" :
                    step === i ? "bg-charcoal-900 text-white" : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {step > i ? <Check className="w-4 h-4" /> : i + 1}
                </button>
                <span className={`text-[11px] hidden sm:block ${step >= i ? "text-charcoal-900 font-medium" : "text-slate-400"}`}>
                  {s.label}
                </span>
                {i < applicationSteps.length - 1 && <div className={`w-6 h-[1px] mx-1 ${step > i ? "bg-sukom-400" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white p-8 lg:p-10 shadow-sm min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-6">Personal Details</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">First Name *</label>
                    <input className="input-field" placeholder="Enter first name" value={form.firstName} onChange={e => update("firstName", e.target.value)} /></div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Last Name *</label>
                    <input className="input-field" placeholder="Enter last name" value={form.lastName} onChange={e => update("lastName", e.target.value)} /></div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Email *</label>
                    <input className="input-field" type="email" placeholder="your@email.com" value={form.email} onChange={e => update("email", e.target.value)} /></div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Phone *</label>
                    <input className="input-field" placeholder="+234 XXX XXX XXXX" value={form.phone} onChange={e => update("phone", e.target.value)} /></div>
                    <div className="sm:col-span-2"><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Nationality</label>
                    <input className="input-field" placeholder="e.g. Nigerian" value={form.nationality} onChange={e => update("nationality", e.target.value)} /></div>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-6">Travel Details</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Travel Date *</label>
                    <input className="input-field" type="date" value={form.travelDate} onChange={e => update("travelDate", e.target.value)} /></div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Return Date</label>
                    <input className="input-field" type="date" value={form.returnDate} onChange={e => update("returnDate", e.target.value)} /></div>
                    <div className="sm:col-span-2"><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Trip Type</label>
                    <div className="flex gap-3">
                      {["single", "multiple"].map(t => (
                        <button key={t} onClick={() => update("tripType", t)}
                          className={`px-5 py-3 border-2 text-sm font-medium transition-all ${form.tripType === t ? "border-sukom-400 bg-sukom-400/5 text-charcoal-900" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}>
                          {t === "single" ? "Single Trip" : "Multiple Trips"}
                        </button>
                      ))}
                    </div></div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-6">Destination & Purpose</h3>
                  <div className="space-y-5">
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Destination *</label>
                    <select className="input-field" value={form.destination} onChange={e => update("destination", e.target.value)}>
                      <option value="">Select destination</option>
                      {destinations.map(d => <option key={d.id} value={d.id}>{d.flag} {d.name}</option>)}
                    </select></div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Purpose of Travel *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["Tourism", "Business", "Study", "Visit Family", "Work", "Other"].map(p => (
                        <button key={p} onClick={() => update("purpose", p)}
                          className={`p-3 border-2 text-sm transition-all ${form.purpose === p ? "border-sukom-400 bg-sukom-400/5 text-charcoal-900 font-medium" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}>
                          {p}
                        </button>
                      ))}
                    </div></div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-6">Service Selection</h3>
                  <div className="space-y-3">
                    {[
                      { id: "visa", label: "Visa Application Support", desc: "Full guidance through the visa application process" },
                      { id: "consultation", label: "Travel Consultation", desc: "One-on-one session with a travel professional" },
                      { id: "flight", label: "Flight Assistance", desc: "Help with finding and booking flights" },
                      { id: "tour", label: "Tour Booking", desc: "Book a curated tour experience" },
                    ].map(s => (
                      <button key={s.id} onClick={() => update("service", s.id)}
                        className={`w-full text-left p-5 border-2 transition-all ${form.service === s.id ? "border-sukom-400 bg-sukom-400/5" : "border-slate-200 hover:border-slate-300"}`}>
                        <div className="text-sm font-medium text-charcoal-900">{s.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-2">Document Checklist</h3>
                  <p className="text-sm text-slate-500 mb-6">Select the documents you have ready. Don&apos;t worry — a Sukom advisor will confirm exactly what you need.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {docOptions.map(doc => (
                      <button key={doc} onClick={() => toggleDoc(doc)}
                        className={`flex items-center gap-3 p-4 border-2 text-left transition-all ${form.documents.includes(doc) ? "border-sukom-400 bg-sukom-400/5" : "border-slate-200 hover:border-slate-300"}`}>
                        <div className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 ${form.documents.includes(doc) ? "border-sukom-500 bg-sukom-500" : "border-slate-300"}`}>
                          {form.documents.includes(doc) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm text-charcoal-900">{doc}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl text-charcoal-900 mb-6">Review Your Application</h3>
                  <div className="space-y-6">
                    <div className="bg-ivory-50 p-5">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Personal Details</h4>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-slate-500">Name:</span> <span className="text-charcoal-900 ml-1">{form.firstName} {form.lastName}</span></div>
                        <div><span className="text-slate-500">Email:</span> <span className="text-charcoal-900 ml-1">{form.email}</span></div>
                        <div><span className="text-slate-500">Phone:</span> <span className="text-charcoal-900 ml-1">{form.phone}</span></div>
                        <div><span className="text-slate-500">Nationality:</span> <span className="text-charcoal-900 ml-1">{form.nationality || "—"}</span></div>
                      </div>
                    </div>
                    <div className="bg-ivory-50 p-5">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Travel Details</h4>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-slate-500">Travel Date:</span> <span className="text-charcoal-900 ml-1">{form.travelDate}</span></div>
                        <div><span className="text-slate-500">Trip Type:</span> <span className="text-charcoal-900 ml-1">{form.tripType === "single" ? "Single" : "Multiple"}</span></div>
                        <div><span className="text-slate-500">Destination:</span> <span className="text-charcoal-900 ml-1">{destinations.find(d => d.id === form.destination)?.name || "—"}</span></div>
                        <div><span className="text-slate-500">Purpose:</span> <span className="text-charcoal-900 ml-1">{form.purpose || "—"}</span></div>
                      </div>
                    </div>
                    <div className="bg-ivory-50 p-5">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Documents Selected</h4>
                      <div className="flex flex-wrap gap-2">
                        {form.documents.length > 0 ? form.documents.map(d => (
                          <span key={d} className="px-3 py-1 bg-white border border-ivory-200 text-xs text-charcoal-900 flex items-center gap-1">
                            <FileCheck className="w-3 h-3 text-sukom-500" />{d}
                          </span>
                        )) : <span className="text-sm text-slate-400">No documents selected</span>}
                      </div>
                    </div>
                    <div><label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Additional Notes</label>
                      <textarea className="input-field min-h-[100px] resize-none" placeholder="Any additional information..." value={form.notes} onChange={e => update("notes", e.target.value)} /></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={() => step > 0 && setStep(step - 1)}
              disabled={step === 0}
              className={`flex items-center gap-2 text-sm font-medium ${step === 0 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:text-charcoal-900"}`}>
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            {step < applicationSteps.length - 1 ? (
              <button onClick={() => canNext() && setStep(step + 1)}
                disabled={!canNext()}
                className={`btn-primary text-sm ${!canNext() ? "opacity-50 cursor-not-allowed" : ""}`}>
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn-champagne text-sm">
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
