"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check, ArrowRight } from "lucide-react";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", date: "", time: "", message: "",
  });
  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-green-500 mx-auto mb-6 flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl text-charcoal-900 mb-3">Consultation booked</h1>
          <p className="text-slate-500 mb-2">Thank you, {form.name}. Your consultation request has been received.</p>
          <p className="text-sm text-slate-400 mb-8">
            We&apos;ll confirm your appointment at <strong>{form.email}</strong> within 24 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">Book Another</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-ivory-50">
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label !text-sukom-400 mb-5">Consultation</div>
            <h1 className="text-4xl lg:text-5xl mb-3">Book a Consultation</h1>
            <p className="text-slate-400 max-w-lg">Speak with a Sukom travel professional. Get expert advice tailored to your travel plans.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — Consultation availability is simulated</div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 lg:p-10 shadow-sm">
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Full Name *</label>
                  <input className="input-field" placeholder="Your full name" value={form.name} onChange={e => update("name", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Email *</label>
                  <input className="input-field" type="email" placeholder="your@email.com" value={form.email} onChange={e => update("email", e.target.value)} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Phone</label>
                  <input className="input-field" placeholder="+234 XXX XXX XXXX" value={form.phone} onChange={e => update("phone", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Service *</label>
                  <select className="input-field" value={form.service} onChange={e => update("service", e.target.value)}>
                    <option value="">Select service</option>
                    <option value="visa">Visa Advisory</option>
                    <option value="travel">Travel Planning</option>
                    <option value="tour">Tour Enquiry</option>
                    <option value="flight">Flight Assistance</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Preferred Date</label>
                  <input className="input-field" type="date" value={form.date} onChange={e => update("date", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Preferred Time</label>
                  <select className="input-field" value={form.time} onChange={e => update("time", e.target.value)}>
                    <option value="">Select time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Message</label>
                <textarea className="input-field min-h-[120px] resize-none" placeholder="Tell us about your travel plans or questions..." value={form.message} onChange={e => update("message", e.target.value)} />
              </div>
            </div>

            <button onClick={() => setSubmitted(true)} className="btn-primary w-full mt-8 text-sm">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
