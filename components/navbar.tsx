"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/site";

export function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[920px] -translate-x-1/2"
      style={{ maxWidth: 920 }}
    >
      <nav className="relative flex items-center justify-between rounded-full border border-zinc-800 bg-zinc-900/45 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2" aria-label="GrindUp Digital home">
          <Image
            src="/logo/GrindUp_logo_white.png"
            width={12345}
            height={4059}
            alt="GrindUp Digital"
            className="h-auto w-28 object-contain sm:w-32"
            priority
          />
        </Link>

        <div className="relative hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {(hoveredIndex === index || active) && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-zinc-800"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="shimmer-btn rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950 shadow-lg shadow-white/10 transition hover:bg-zinc-200"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="p-2 text-zinc-400 transition hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-4 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="shimmer-btn mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-zinc-950"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
