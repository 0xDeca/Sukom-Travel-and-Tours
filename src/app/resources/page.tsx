"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { resources } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label !text-sukom-400 mb-5">Resources</div>
            <h1 className="text-5xl lg:text-6xl mb-4">Travel Hub</h1>
            <p className="text-slate-400 max-w-lg text-lg">Guides, tips and updates to help you travel with confidence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-8">Demo — Article content is illustrative</div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/resources/${article.id}`}
                  className="block bg-white group card-hover h-full"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 bg-ivory-100 text-sukom-500">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg text-charcoal-900 mb-3 group-hover:text-sukom-500 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{article.date}</span>
                      <span className="text-xs text-sukom-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
