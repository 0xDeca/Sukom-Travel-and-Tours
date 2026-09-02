"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, ArrowRight, Check } from "lucide-react";

export default function FlightsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    from: "", to: "", departure: "", returnDate: "", passengers: "1", class: "economy",
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-charcoal-900 mx-auto mb-6 flex items-center justify-center">
            <Plane className="w-8 h-8 text-sukom-400" />
          </div>
          <h1 className="text-3xl text-charcoal-900 mb-3">Request received</h1>
          <p className="text-slate-500 mb-8">Our travel team will review your flight request and get back to you with options.</p>
          <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">Submit Another Request</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-ivory-50">
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label !text-sukom-400 mb-5">Flights</div>
            <h1 className="text-4xl lg:text-5xl mb-3">Flight Assistance</h1>
            <p className="text-slate-400 max-w-lg">Tell us where you&apos;re going and we&apos;ll help with your flight arrangements.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — This is an illustration of the flight assistance request flow</div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 lg:p-10 shadow-sm">
            <div className="bg-ivory-50 border border-ivory-200 p-4 mb-8 text-sm text-slate-600">
              <strong>Note:</strong> Sukom&apos;s travel team can assist with your flight arrangements. This is not a live booking engine.
            </div>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">From</label>
                  <input className="input-field" placeholder="City or airport" value={form.from} onChange={e => update("from", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">To</label>
                  <input className="input-field" placeholder="City or airport" value={form.to} onChange={e => update("to", e.target.value)} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Departure Date</label>
                  <input className="input-field" type="date" value={form.departure} onChange={e => update("departure", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Return Date</label>
                  <input className="input-field" type="date" value={form.returnDate} onChange={e => update("returnDate", e.target.value)} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Passengers</label>
                  <select className="input-field" value={form.passengers} onChange={e => update("passengers", e.target.value)}>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Passenger" : "Passengers"}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Travel Class</label>
                  <select className="input-field" value={form.class} onChange={e => update("class", e.target.value)}>
                    <option value="economy">Economy</option>
                    <option value="premium">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>
            </div>

            <button onClick={() => setSubmitted(true)} className="btn-primary w-full mt-8 text-sm">
              Request Flight Assistance <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
