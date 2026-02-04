"use client";
import { motion } from "framer-motion";

export default function LaunchCard({ launch }: any) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="absolute right-[-20%] top-[-20%] h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl transition group-hover:bg-cyan-200/30" />
      <h3 className="text-xl font-semibold">{launch.name}</h3>
      <p className="mt-2 text-white/60">{launch.tagline}</p>
      <p className="mt-4 text-sm text-white/50">{launch.description}</p>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
        <span>Launch Intel</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-white/60">
          Readout
        </span>
      </div>
    </motion.div>
  );
}
