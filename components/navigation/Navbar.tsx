"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="neon-border fixed top-6 left-1/2 z-50 -translate-x-1/2
                 rounded-full bg-black/60 backdrop-blur px-8 py-3"
    >
      <div className="flex gap-6 text-sm">
        <Link
          href="/"
          className="font-semibold tracking-wide text-white/90 hover:text-white"
        >
          TechnoXBuzz
        </Link>
        <Link href="/debates" className="opacity-60 transition hover:opacity-100">
          Debates
        </Link>
        <Link href="/experts" className="opacity-60 transition hover:opacity-100">
          Experts
        </Link>
        <Link href="/trends" className="opacity-60 transition hover:opacity-100">
          Trends
        </Link>
      </div>
    </motion.nav>
  );
}
