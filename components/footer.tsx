"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactDetails } from "../data/site";

const footerLinks = {
  Home: ["Services", "Strategy", "Work", "Testimonials"],
  Portfolio: ["Posts", "Videos", "Branding", "Web"],
  Products: ["Starter", "Growth", "Performance"],
  Contact: ["Book a Call", contactDetails.email, contactDetails.phoneDisplay],
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-5"
        >
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/logo/GrindUp_logo_white.png"
                width={12345}
                height={4059}
                alt="GrindUp Digital"
                className="h-auto w-40"
              />
            </Link>
            <p className="mb-4 text-sm text-zinc-500">Creative digital agency for startups and growing businesses.</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-lime pulse-glow" />
              <span className="text-xs text-zinc-400">Ready for new projects</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-zinc-500 transition-colors hover:text-white">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row"
        >
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} GrindUp Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/portfolio" className="text-sm text-zinc-500 transition-colors hover:text-white">
              Portfolio
            </Link>
            <Link href="/products" className="text-sm text-zinc-500 transition-colors hover:text-white">
              Products
            </Link>
            <Link href="/contact" className="text-sm text-zinc-500 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
