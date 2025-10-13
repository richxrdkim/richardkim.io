import React from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    __runPageTransition?: (path: string) => void;
  }
}

export default function Hero() {
  const btn =
    "inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/60";

  const go = (e: React.MouseEvent, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    if (window.__runPageTransition) {
      e.preventDefault();
      window.__runPageTransition(path);
    }
  };

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* Background (pulled up by the navbar height) */}
      <img
        src="/images/hero.png"
        alt="Hero background"
        className="absolute inset-x-0 -top-16 z-0 h-[calc(100%+64px)] w-full object-cover object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Grid & gradient overlays (match the same -top-16 offset) */}
      <div
        className="hero-grid absolute inset-x-0 -top-16 z-0 h-[calc(100%+64px)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 -top-16 z-0 h-[calc(100%+64px)] bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content (pad down so it doesn't sit under the navbar) */}
      <div className="relative z-10 flex h-full w-full items-end site-pad pt-16 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-4xl text-white">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Architecture → Product & Code
          </div>

          {/* Mobile-safe sizing & wrapping */}
          <h1 className="font-bold leading-tight text-3xl sm:text-5xl lg:text-6xl break-words">
            <span>PRODUCT</span>
            <span className="mx-2 text-white/70">/</span>
            <span className="tracking-[.02em] text-white">SOFTWARE</span>
          </h1>

          <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/90 break-words">
            Architectural principles, engineering fluency, and product results.
          </p>

          <div className="mt-8 flex gap-3">
            <Link to="/projects" onClick={(e) => go(e, "/projects")} className={btn}>
              View Projects
            </Link>
            <Link to="/about-me" onClick={(e) => go(e, "/about-me")} className={btn}>
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
