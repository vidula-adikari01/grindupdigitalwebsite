"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { workItems } from "../data/site";

const filters = ["Posts", "Videos", "Web", "SaaS"];

export function PortfolioGrid() {
  const [active, setActive] = useState("Posts");
  const [activeVideo, setActiveVideo] = useState<(typeof workItems)[number] | null>(null);
  const visible = workItems.filter((item) => item.category === active);

  const getVideoEmbedUrl = (href: string) => {
    if (!href) return "";

    if (href.includes("youtube.com/watch?v=")) {
      const videoId = href.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (href.includes("drive.google.com/file/d/")) {
      const match = href.match(/file\/d\/([^/]+)/);
      const fileId = match?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : href;
    }

    return href;
  };

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

      <motion.div
        layout
        className={`mx-auto grid max-w-5xl gap-3 sm:gap-5 lg:gap-6 ${active === "Web" || active === "SaaS" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}
      >
        {visible.map((item, index) => {
          const CardTag = item.href ? motion.a : motion.article;
          const aspectClass = item.category === "Posts" ? "aspect-square" : "aspect-video";
          const isFeatured = active === "Web" || active === "SaaS";
          const spanClass = isFeatured && (index === 0 || index === 1) ? "md:col-span-2" : "";

          if (!item.image && item.category !== "SaaS") {
            return null;
          }

          return (
            <CardTag
              layout
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              href={item.href}
              target={item.href && item.category !== "Videos" ? "_blank" : undefined}
              rel={item.href && item.category !== "Videos" ? "noreferrer" : undefined}
              tabIndex={0}
              aria-label={item.href && item.category !== "Videos" ? `Open ${item.title} website` : undefined}
              onClick={(event) => {
                if (item.category === "Videos" && item.href) {
                  event.preventDefault();
                  setActiveVideo(item);
                }
              }}
              className={`group relative ${aspectClass} overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 outline-none transition-all duration-300 hover:scale-[1.01] hover:border-zinc-600 focus-visible:border-zinc-500 ${spanClass}`}
            >
              <div className="absolute inset-0">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 50vw"
                    className={`object-cover transition duration-500 group-hover:scale-105 ${item.category === "Posts" ? "object-center" : "object-cover"}`}
                    priority={index < 2}
                  />
                ) : (
                  <div className="h-full w-full bg-zinc-950" />
                )}
                {item.category !== "Posts" ? <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" /> : null}
                <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/35 p-2 text-white backdrop-blur">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              {item.category === "Videos" ? (
                <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5 sm:pt-20">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:text-xs">{item.category}</p>
                  <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">Client: {item.client}</h3>
                </div>
              ) : item.category === "Web" || item.category === "SaaS" ? (
                <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5 sm:pt-20">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:text-xs">{item.category}</p>
                  <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                  <p className="text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">{item.text}</p>
                </div>
              ) : null}
            </CardTag>
          );
        })}
      </motion.div>

      {activeVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">Video</p>
                <h3 className="text-lg font-semibold text-white">{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <iframe
                src={getVideoEmbedUrl(activeVideo.href || "")}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
