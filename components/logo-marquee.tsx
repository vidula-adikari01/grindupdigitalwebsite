"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = ["Social Content", "Video Production", "Branding", "Web Design", "Digital Strategy", "Ad Creative", "Launch Systems", "Performance"];

export function LogoMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">Built for the channels brands actually need</p>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-zinc-950 to-transparent" />
        <div className="flex animate-marquee">
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-8 flex h-16 min-w-[190px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800">
                  <span className="text-xs font-bold">{item[0]}</span>
                </div>
                <span className="font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
