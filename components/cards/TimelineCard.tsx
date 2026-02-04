"use client";

import { motion } from "framer-motion";

export default function TimelineCard({ event }: any) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-cyan-200 to-fuchsia-300 shadow-[0_0_16px_rgba(124,242,255,0.6)]" />
      <div className="absolute left-[6px] top-6 h-full w-px bg-white/10" />
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        {event.date}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{event.title}</p>
      <p className="mt-2 text-sm text-white/60">
        Pulse shift recorded in the ecosystem.
      </p>
    </motion.div>
  );
}
