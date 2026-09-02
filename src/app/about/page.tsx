"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Users, MessageSquare, LayoutGrid, Mail, Phone, MapPin } from "lucide-react";

const process = [
  { step: "01", title: "Consultation", description: "We begin by understanding your travel goals, timeline, and specific needs." },
  { step: "02", title: "Planning", description: "Our team develops a tailored plan, whether for visa applications, tours, or travel arrangements." },
  { step: "03", title: "Preparation", description: "We guide you through document gathering, application completion, and requirements." },
  { step: "04", title: "Submission", description: "We support you through the submission process and provide ongoing updates." },
  { step: "05", title: "Completion", description: "From approval to travel, we stay with you until your journey is underway." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label !text-sukom-400 mb-5">About Sukom</div>
            <h1 className="text-5xl lg:text-6xl mb-4 max-w-3xl">Travel with clarity, confidence and support.</h1>
            <p className="text-slate-400 max-w-lg text-lg mt-6">
              Sukom Travel & Tours provides expert visa advisory, curated tours, and comprehensive travel support for individuals and families.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="section-label mb-5">Our Approach</div>
              <h2 className="text-3xl lg:text-4xl text-charcoal-900 mb-6">Built on process, guided by care.</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that navigating travel requirements shouldn&apos;t feel overwhelming. Sukom was founded to bring clarity, structure and personal support to every traveller we assist.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you&apos;re applying for a visa, planning a holiday, or booking flights, our team provides step-by-step guidance so you always know where you stand.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Compass, label: "Expert Guidance" },
                  { icon: Users, label: "Personal Support" },
                  { icon: MessageSquare, label: "Clear Communication" },
                  { icon: LayoutGrid, label: "Organised Process" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-ivory-50 border border-ivory-200 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-sukom-500" />
                    </div>
                    <span className="text-sm font-medium text-charcoal-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ivory-50 p-8 lg:p-10">
              <div className="demo-badge mb-6">Demo Content</div>
              <h3 className="text-xl text-charcoal-900 mb-6">What We Handle</h3>
              <ul className="space-y-4">
                {["Visa applications and advisory services", "Tour planning and booking", "Flight search and booking assistance", "Travel consultation and itinerary planning", "Document review and preparation guidance", "Group and corporate travel arrangements"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-sukom-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 lg:py-24 bg-ivory-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-label justify-center mb-5">Our Process</div>
            <h2 className="text-3xl lg:text-4xl text-charcoal-900">How we work with you.</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {process.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-charcoal-900 text-sukom-400 flex items-center justify-center text-sm font-bold shrink-0 z-10">
                    {step.step}
                  </div>
                  {i < process.length - 1 && <div className="w-[1px] flex-1 bg-charcoal-200" />}
                </div>
                <div className="pb-10">
                  <h4 className="text-lg text-charcoal-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="section-label justify-center mb-5">Contact</div>
            <h2 className="text-3xl lg:text-4xl text-charcoal-900 mb-4">Get in touch</h2>
            <p className="text-slate-500">We&apos;re here to help with your travel plans.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Phone", value: "+234 807 512 6874", note: "Verified" },
              { icon: Mail, label: "Email", value: "sukomtravel@gmail.com", note: "Verified" },
              { icon: MapPin, label: "Office", value: "Benin City, Edo State, Nigeria", note: "Verified" },
            ].map(item => (
              <div key={item.label} className="bg-ivory-50 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white border border-ivory-200 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-sukom-500" />
                </div>
                <h4 className="text-sm font-medium text-charcoal-900 mb-1">{item.label}</h4>
                <p className="text-sm text-slate-600 mb-2">{item.value}</p>
                <p className="text-[10px] text-slate-400 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
