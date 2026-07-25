"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-4 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to Grind Up with us?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Bring us the rough version of your brand. We’ll help turn it into a clear, credible digital presence.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="shimmer-btn inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-zinc-950 shadow-lg shadow-white/20 transition hover:bg-zinc-200"
          >
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-14 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-8 text-base font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            See the Work
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-500">Strategy, content, video, brand, web, and performance creative.</p>
      </motion.div>
    </section>
  );
}
