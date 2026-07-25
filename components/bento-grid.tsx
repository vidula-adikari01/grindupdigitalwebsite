"use client";

import { motion, useInView } from "framer-motion";
import {
  Bot,
  Clapperboard,
  Code2,
  Megaphone,
  Search,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Growth Marketing",
    description: "Campaign strategy, ad creative testing, landing flows, and performance loops built to turn attention into sales.",
    icon: TrendingUp,
    glow: "rgba(110,70,245,0.72)",
  },
  {
    title: "Social Media Marketing",
    description: "Post systems, captions, content calendars, and platform-ready creative for consistent brand visibility.",
    icon: Megaphone,
    glow: "rgba(255,111,145,0.62)",
  },
  {
    title: "Video Production",
    description: "Reels, campaign cuts, founder content, and product videos built to hold attention and drive action.",
    icon: Clapperboard,
    glow: "rgba(215,255,88,0.45)",
  },
  {
    title: "SEO",
    description: "Search visibility, content structure, and technical improvements that help the right customers find you.",
    icon: Search,
    glow: "rgba(255,111,145,0.5)",
  },
  {
    title: "Web Development",
    description: "Landing pages, websites, and web experiences that explain your offer clearly and move visitors toward action.",
    icon: Code2,
    glow: "rgba(56,216,255,0.5)",
  },
  {
    title: "Automations",
    description: "Lead flows, follow-up systems, reporting workflows, and custom automations that keep growth moving.",
    icon: Bot,
    glow: "rgba(110,70,245,0.62)",
  },
];

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Everything your brand needs to look ready
          </p>
        </motion.div>

        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
                className="group relative h-[245px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-4 text-left text-white shadow-sm transition hover:border-zinc-600 hover:shadow-lg sm:h-64 sm:p-6"
              >
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `radial-gradient(circle at 25% 20%, ${service.glow}, transparent 24%),
                      linear-gradient(140deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 38%),
                      linear-gradient(155deg, rgba(255,255,255,0) 28%, ${service.glow} 54%, rgba(255,255,255,0) 76%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
                <div className="service-card-noise absolute inset-0 opacity-[0.16] mix-blend-screen" aria-hidden="true" />

                <div className="relative z-10 flex h-full flex-col">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white drop-shadow-md sm:h-11 sm:w-11">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 flex min-h-9 items-start text-[11px] font-bold uppercase leading-tight tracking-wide text-white drop-shadow-md sm:mt-5 sm:min-h-10 sm:text-sm">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/90 sm:text-sm">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
