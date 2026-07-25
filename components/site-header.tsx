"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="GrindUp Digital home"
          className="inline-flex items-center"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/logo/grindup-wordmark.png"
            width={306}
            height={73}
            priority
            alt="GrindUp Digital"
            className="h-auto w-40 sm:w-48"
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-[8px] border border-line bg-white/70 p-1 shadow-sm md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[7px] px-4 py-2 text-sm font-black transition ${
                  active ? "bg-ink text-white" : "text-ink/74 hover:bg-brand/10 hover:text-brand-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-[8px] bg-brand px-4 py-2.5 text-sm font-black text-white shadow-[0_16px_36px_rgba(110,70,245,0.25)] transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Book a Call
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-line bg-white md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-background px-5 py-4 md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] border border-line bg-white px-4 py-3 font-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
