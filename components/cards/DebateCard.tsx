"use client";

import { motion } from "framer-motion";

export default function DebateCard({ debate }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="glass-panel neon-border rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
        <span className="h-2 w-2 rounded-full bg-cyan-200" />
        In Session
      </div>
      <h4 className="mt-4 text-lg font-semibold">{debate.topic}</h4>
      <p className="mt-3 text-sm text-white/60">{debate.summary}</p>
      <div className="mt-5 flex items-center gap-3 text-xs text-white/50">
        <span className="rounded-full border border-white/10 px-3 py-1">
          Listen
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1">
          Add Note
        </span>
      </div>
    </motion.div>
  );
}
