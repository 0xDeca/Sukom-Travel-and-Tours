"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, Map, Compass, MessageCircle, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Visa Services",
    description: "Expert guidance through every step of the visa application process. From document preparation to submission support.",
    href: "/visa-services",
    color: "from-charcoal-800 to-charcoal-900",
  },
  {
    icon: Plane,
    title: "Flight & Ticketing",
    description: "Assistance with planning and booking your travel arrangements. Competitive options for every route.",
    href: "/flights",
    color: "from-charcoal-700 to-charcoal-900",
  },
  {
    icon: Map,
    title: "Tours & Experiences",
    description: "Curated travel experiences across Africa, the Middle East, Europe and beyond.",
    href: "/tours",
    color: "from-charcoal-800 to-charcoal-900",
  },
  {
    icon: MessageCircle,
    title: "Travel Consultation",
    description: "One-on-one sessions with experienced travel professionals to plan your perfect journey.",
    href: "/consultation",
    color: "from-charcoal-700 to-charcoal-900",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-5">Our Services</div>
          <h2 className="text-4xl lg:text-5xl text-charcoal-900 max-w-2xl">
            Everything you need to move with confidence.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full card-hover"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 h-full flex flex-col min-h-[300px]`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-sukom-400" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-sukom-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
