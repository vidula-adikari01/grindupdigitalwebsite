"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { showcaseVideos, type ShowcaseVideo } from "../data/site";

// Copies of the list rendered side by side so the loop never shows a gap on wide screens.
const COPIES = 4;
const SPEED = 0.5; // px per frame

type ShowcaseCardProps = {
  item: ShowcaseVideo;
  playing: boolean;
  onToggle: () => void;
  onStop: () => void;
};

function ShowcaseCard({ item, playing, onToggle, onStop }: ShowcaseCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(onStop);
    } else {
      video.pause();
    }
  }, [playing, onStop]);

  // Stop a playing video once it is dragged off screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playing) return;
    const observer = new IntersectionObserver(([entry]) => !entry.isIntersecting && onStop(), { threshold: 0 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [playing, onStop]);

  return (
    <article className="flex w-[260px] shrink-0 flex-col gap-3 sm:w-[300px]">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
        {item.category}
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
        className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 outline-none focus-visible:border-zinc-500"
      >
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          playsInline
          preload="none"
          draggable={false}
          onEnded={(event) => {
            event.currentTarget.load(); // back to the thumbnail
            onStop();
          }}
          className="h-full w-full object-cover"
        />
        {!playing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
            <Play className="h-14 w-14 fill-white text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition group-hover:scale-110" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 rounded-xl border border-zinc-800 bg-zinc-900 py-4 text-center">
        {item.stats.map((stat) => (
          <div key={stat.label} className="px-2">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function VideoShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const leftFadeRef = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const drag = useRef<{ x: number; scroll: number; moved: boolean } | null>(null);
  const justDragged = useRef(false);
  // Only one video plays at a time; the row stops scrolling while it does.
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const playingRef = useRef(playingKey);
  useEffect(() => {
    playingRef.current = playingKey;
  }, [playingKey]);
  const stop = useCallback(() => setPlayingKey(null), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setWidth = () => track.scrollWidth / COPIES;
    // Start on the first video and loop forward only: once past the third copy, jump back one copy
    // (visually identical). Scrolling back left always ends at the first video.
    const wrap = () => {
      if (playingRef.current) return; // jumping would move the playing card out from under the viewer
      const width = setWidth();
      if (track.scrollLeft >= width * 2) track.scrollLeft -= width;
    };

    track.scrollLeft = 0;
    // Hold still until the row is on screen, so visitors always see the first video first.
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        started = true;
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(track);

    let frame = 0;
    const tick = () => {
      if (started && !hovered.current && !drag.current && !playingRef.current && !reduceMotion) {
        track.scrollLeft += SPEED;
      }
      wrap();
      // No fade on the left while the first video sits at the edge.
      if (leftFadeRef.current) leftFadeRef.current.style.opacity = String(Math.min(track.scrollLeft / 60, 1));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    drag.current = { x: event.clientX, scroll: trackRef.current!.scrollLeft, moved: false };
  };
  const onPointerMove = (event: React.PointerEvent) => {
    const state = drag.current;
    if (!state) return;
    const delta = event.clientX - state.x;
    if (!state.moved && Math.abs(delta) > 5) {
      state.moved = true;
      trackRef.current!.setPointerCapture(event.pointerId);
    }
    if (state.moved) trackRef.current!.scrollLeft = state.scroll - delta;
  };
  const endDrag = () => {
    justDragged.current = drag.current?.moved ?? false;
    drag.current = null;
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onMouseEnter={() => (hovered.current = true)}
        onMouseLeave={() => {
          hovered.current = false;
          endDrag();
        }}
        onTouchStart={() => (hovered.current = true)}
        onTouchEnd={() => setTimeout(() => (hovered.current = false), 1500)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          // A drag that ends over a card should not also play it.
          if (justDragged.current) {
            event.stopPropagation();
            justDragged.current = false;
          }
        }}
        className="flex cursor-grab select-none items-start gap-5 overflow-x-auto px-4 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: COPIES }).flatMap((_, copy) =>
          showcaseVideos.map((item) => {
            const key = `${copy}-${item.src}`;
            return (
              <ShowcaseCard
                key={key}
                item={item}
                playing={playingKey === key}
                onToggle={() => setPlayingKey((current) => (current === key ? null : key))}
                onStop={stop}
              />
            );
          }),
        )}
      </div>
      <div
        ref={leftFadeRef}
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-zinc-950 to-transparent opacity-0 sm:w-20"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-950 to-transparent sm:w-20" />
    </div>
  );
}
