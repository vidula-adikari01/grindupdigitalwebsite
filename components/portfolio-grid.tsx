"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { workItems } from "../data/site";

const filters = ["Videos", "Posts", "Web", "SaaS"];

export function PortfolioGrid() {
  const [active, setActive] = useState("Videos");
  // Only one video plays at a time; starting another unmounts or pauses the previous one.
  const [playingSlug, setPlayingSlug] = useState<string | null>(null);
  const stopVideo = useCallback(() => setPlayingSlug(null), []);
  const visible = workItems.filter((item) => item.category === active);
  const portraitVideos = visible.filter((item) => item.orientation === "portrait");
  const landscapeVideos = visible.filter((item) => item.orientation !== "portrait");

  const getVideoEmbedUrl = (href: string) => {
    if (!href) return "";

    if (href.includes("youtube.com/watch?v=")) {
      const videoId = href.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&autoplay=1`;
    }

    if (href.includes("drive.google.com/file/d/")) {
      const match = href.match(/file\/d\/([^/]+)/);
      const fileId = match?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview?rm=minimal` : href;
    }

    return href;
  };

  const renderCard = (item: (typeof workItems)[number], index: number) => {
    if (item.category === "Videos") {
      if (!item.image) return null;
      return (
        <VideoCard
          key={item.slug}
          item={item}
          embedUrl={getVideoEmbedUrl(item.href || "")}
          playing={playingSlug === item.slug}
          onToggle={() => setPlayingSlug((current) => (current === item.slug ? null : item.slug))}
          onStop={stopVideo}
        />
      );
    }

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
        target={item.href ? "_blank" : undefined}
        rel={item.href ? "noreferrer" : undefined}
        tabIndex={0}
        aria-label={item.href ? `Open ${item.title} website` : undefined}
        className={`group relative self-start ${aspectClass} overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 outline-none transition-all duration-300 hover:scale-[1.01] hover:border-zinc-600 focus-visible:border-zinc-500 ${spanClass}`}
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
        {item.category === "Web" || item.category === "SaaS" ? (
          <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5 sm:pt-20">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:text-xs">{item.category}</p>
            <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">{item.title}</h3>
            <p className="text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">{item.text}</p>
          </div>
        ) : null}
      </CardTag>
    );
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

      {active === "Videos" ? (
        <>
          {portraitVideos.length ? (
            <motion.div layout className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
              {portraitVideos.map((item, index) => renderCard(item, index))}
            </motion.div>
          ) : null}
          {landscapeVideos.length ? (
            <motion.div
              layout
              className={`mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6 ${
                portraitVideos.length ? "mt-3 sm:mt-5 lg:mt-6" : ""
              }`}
            >
              {landscapeVideos.map((item, index) => renderCard(item, index))}
            </motion.div>
          ) : null}
        </>
      ) : (
        <motion.div
          layout
          className={`mx-auto grid max-w-5xl gap-3 sm:gap-5 lg:gap-6 ${active === "Web" || active === "SaaS" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}
        >
          {visible.map((item, index) => renderCard(item, index))}
        </motion.div>
      )}

    </div>
  );
}

type VideoCardProps = {
  item: (typeof workItems)[number];
  embedUrl: string;
  playing: boolean;
  onToggle: () => void;
  onStop: () => void;
};

// Thumbnail with a play button; plays in place. Local files use <video>, Drive/YouTube links swap in their player.
function VideoCard({ item, embedUrl, playing, onToggle, onStop }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aspectClass = item.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(onStop);
    } else {
      video.pause();
    }
  }, [playing, onStop]);

  const showEmbed = playing && !item.video;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative self-start ${aspectClass} overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900`}
    >
      {item.video ? (
        <video
          ref={videoRef}
          src={item.video}
          poster={item.image}
          playsInline
          preload="none"
          onEnded={(event) => {
            event.currentTarget.load(); // back to the thumbnail
            onStop();
          }}
          className="h-full w-full object-cover"
        />
      ) : showEmbed ? (
        <iframe
          src={embedUrl}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : item.image ? (
        <Image
          src={item.image}
          alt={`${item.title} preview`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 50vw"
          className="object-cover"
        />
      ) : null}

      {!showEmbed && (
        <button
          type="button"
          onClick={onToggle}
          aria-label={playing ? `Pause ${item.title}` : `Play ${item.title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 outline-none transition hover:bg-black/25 focus-visible:ring-2 focus-visible:ring-zinc-500"
        >
          {!playing && (
            <Play className="h-12 w-12 fill-white text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition group-hover:scale-110 sm:h-14 sm:w-14" />
          )}
        </button>
      )}
    </motion.div>
  );
}
