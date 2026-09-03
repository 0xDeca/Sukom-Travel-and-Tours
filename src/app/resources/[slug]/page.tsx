"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { resources } from "@/lib/data";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = resources.find((r) => r.id === slug);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
        <div className="text-center">
          <h1 className="text-3xl text-charcoal-900 mb-4">Article not found</h1>
          <Link href="/resources" className="btn-primary text-sm">Back to Resources</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-charcoal-900 text-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/resources" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 bg-white/10 text-sukom-400">
                {article.category}
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-4 leading-tight">{article.title}</h1>
            <p className="text-slate-400">{article.date}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[700px] mx-auto px-6 lg:px-12">
          <div className="demo-badge mb-10">Demo — Article content is illustrative</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {article.body?.map((paragraph, i) => (
              <p key={i} className="text-base text-slate-600 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-4">Need help with your travel plans?</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/consultation" className="btn-primary text-xs">
                Book Consultation
              </Link>
              <Link href="/visa-services" className="btn-secondary text-xs">
                Visa Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
