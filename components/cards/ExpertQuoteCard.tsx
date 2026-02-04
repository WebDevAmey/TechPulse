"use client";

import { motion } from "framer-motion";

export default function ExpertQuoteCard({ quote }: any) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/20 blur-2xl" />
      </div>
      <p className="text-sm uppercase tracking-[0.25em] text-white/40">
        Expert Signal
      </p>
      <p className="mt-4 text-lg italic text-white/80">"{quote.text}"</p>
      <p className="mt-6 text-sm text-white/50">— {quote.name}</p>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-200 to-fuchsia-300" />
    </motion.div>
  );
}
