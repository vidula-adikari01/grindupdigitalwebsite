"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { products } from "../data/site";

function BorderBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-white/20 blur-xl" />
      <div className="absolute -bottom-10 right-8 h-32 w-32 rounded-full bg-brand/30 blur-2xl" />
    </div>
  );
}

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Plans for each growth stage</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            From testing the market to scaling revenue, each plan combines creative output with strategy.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {products.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative flex h-full flex-col rounded-2xl border p-6 text-center transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted ? "border-zinc-700 bg-zinc-900" : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
              }`}
            >
              {plan.highlighted ? <BorderBeam /> : null}
              {plan.highlighted ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-950">
                  Most popular
                </div>
              ) : null}

              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{plan.stage}</p>
                <h3 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">{plan.name}</h3>
                <p className="text-sm text-zinc-400">{plan.text}</p>
              </div>

              <ul className="mb-8 space-y-3 text-left">
                {plan.includes.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="h-4 w-4 shrink-0 text-lime" strokeWidth={1.5} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex h-10 w-full items-center justify-center rounded-full text-sm font-medium ${
                  plan.highlighted
                    ? "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200"
                    : "border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Book a Call
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
