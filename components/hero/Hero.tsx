"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute right-[-8%] top-[-10%] h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[-6%] bottom-[-20%] h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            TechnoXBuzz Pulse
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Make sense of the
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              next‑gen tech surge.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 md:text-xl">
            Live launches, sharp debates, and expert signals in one cinematic
            feed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-cyan-100">
              Explore Launches
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-1 hover:border-cyan-200 hover:text-white">
              Watch Debates
            </button>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { label: "Live Drop", value: "Sora Preview" },
            { label: "Debate Hot", value: "Safety vs Speed" },
            { label: "Expert Take", value: "Alignment First" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass-panel neon-border rounded-2xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {item.value}
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
