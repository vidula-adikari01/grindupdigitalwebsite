"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const avatars = [
  "/professional-headshot-1.png",
  "/professional-headshot-2.png",
  "/professional-headshot-3.png",
  "/professional-headshot-4.png",
  "/professional-headshot-5.png",
];

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-lime pulse-glow" />
          <span className="text-sm text-zinc-400">Creative digital agency for startups and growing businesses</span>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              Build a brand
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-zinc-500"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              ready to grow.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          We help businesses turn attention into leads, and leads into sales using campaign strategy, creative content,
          landing flows, automation, and custom systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="shimmer-btn inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-zinc-950 shadow-lg shadow-white/10 transition hover:bg-zinc-200"
          >
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-8 text-base font-semibold text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center -space-x-3">
            {avatars.map((avatar, index) => (
              <motion.div
                key={avatar}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                <Image
                  src={avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-zinc-950 object-cover"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            Trusted by <span className="font-medium text-zinc-300">10+ growing brands</span> moving from messy to
            market-ready
          </p>
        </motion.div>
      </div>
    </section>
  );
}
