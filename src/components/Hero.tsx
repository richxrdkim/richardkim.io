import React from "react";
import { Link } from "react-router-dom";

/** Allow calling the navbar's global page transition */
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
    // push below the sticky 64px navbar + use dynamic vh to avoid iOS bar jumps
    <section className="relative mt-16 min-h-[calc(100dvh-64px)] overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.png"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Grid & gradient overlays (ignore clicks) */}
      <div className="hero-grid absolute inset-0 h-full pointer-events-none z-0" aria-hidden="true" />
      <div
        className="absolute inset-0 h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Content (ensure on top) */}
      <div className="relative z-10 flex min-h-[calc(100dvh-64px)] w-full items-end site-pad pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-4xl text-white">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Architecture → Product & Code
          </div>

          {/* smaller base size + tighter line-height + allow wrapping on phones */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight break-words">
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
