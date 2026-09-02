"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, MapPin } from "lucide-react";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 bg-white shadow-2xl w-72"
          >
            <div className="bg-charcoal-900 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Talk to Sukom</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">We&apos;re here to help</p>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <a href="https://wa.me/2348075126874" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-ivory-50 transition-colors group">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal-900 group-hover:text-green-600">WhatsApp</div>
                  <div className="text-[10px] text-slate-400">+234 807 512 6874</div>
                </div>
              </a>
              <a href="tel:+2348075126874"
                className="flex items-center gap-3 p-3 hover:bg-ivory-50 transition-colors group">
                <div className="w-10 h-10 bg-charcoal-900 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal-900">Call Us</div>
                  <div className="text-[10px] text-slate-400">+234 807 512 6874</div>
                </div>
              </a>
              <a href="mailto:sukomtravel@gmail.com"
                className="flex items-center gap-3 p-3 hover:bg-ivory-50 transition-colors group">
                <div className="w-10 h-10 bg-sukom-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal-900">Email</div>
                  <div className="text-[10px] text-slate-400">sukomtravel@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3">
                <div className="w-10 h-10 bg-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal-900">Office</div>
                  <div className="text-[10px] text-slate-400">Benin City, Edo State, Nigeria</div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-[9px] text-slate-400 text-center">Some details are placeholders — not all verified</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-charcoal-900 text-white flex items-center justify-center shadow-xl hover:bg-charcoal-800 transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}
