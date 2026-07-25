"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { workItems } from "../data/site";

const filters = ["All", "Posts", "Videos", "Branding", "Web"];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? workItems : workItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
              active === filter ? "bg-zinc-800 text-white" : "border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
        {visible.map((item) => {
          const CardTag = item.href ? motion.a : motion.article;

          return (
            <CardTag
              layout
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              href={item.href}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noreferrer" : undefined}
              tabIndex={0}
              aria-label={item.href ? `Open ${item.title} website` : undefined}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 outline-none transition-all duration-300 hover:scale-[1.01] hover:border-zinc-600 focus-visible:border-zinc-500"
            >
              {item.image ? (
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={`${item.title} website hero section`}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/35 p-2 text-white backdrop-blur">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} p-4 sm:p-5`}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-zinc-950/20 p-4 backdrop-blur sm:p-5">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-20 rounded-full bg-white/70 sm:w-28" />
                      <ArrowUpRight className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{item.metric}</p>
                      <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                        <div className="h-10 rounded-lg bg-white/80 sm:h-14 sm:rounded-xl" />
                        <div className="h-10 rounded-lg bg-white/45 sm:h-14 sm:rounded-xl" />
                        <div className="h-10 rounded-lg bg-zinc-950/70 sm:h-14 sm:rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5 sm:pt-20">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:text-xs">{item.category}</p>
                <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                <p className="text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">{item.text}</p>
              </div>
            </CardTag>
          );
        })}
      </motion.div>
    </div>
  );
}
