import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

export default function Hero() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const inFlightRef = useRef(false);

  const runTransition = async (path: string) => {
    if (inFlightRef.current) return;
    inFlightRef.current = true;

    await controls.set({ y: "-100%" });

    // 1) slide DOWN to cover
    await controls.start({
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    });

    // 2) navigate while covered
    navigate(path);

    // 3) let destination mount/paint
    await nextFrame();
    await nextFrame();

    // 4) slide UP to reveal
    await controls.start({
      y: "-100%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    });

    inFlightRef.current = false;
  };

  // intercept left-click; allow cmd/ctrl/middle to open in new tab normally
  const go = (e: React.MouseEvent, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    e.preventDefault();
    runTransition(path);
  };

  const btn =
    "inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/60";

  return (
    <section className="relative h-[calc(100svh-64px)] overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.png"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Overlays (ignore clicks) */}
      <div className="hero-grid absolute inset-0 h-full pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute inset-0 h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-end site-pad pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-4xl text-white">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Architecture → Product & Code
          </div>

          <h1 className="text-4xl font-bold leading-none sm:text-6xl">
            <span>PRODUCT</span>
            <span className="mx-2 text-white/70">/</span>
            <span className="tracking-[.02em] text-white">SOFTWARE</span>
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-white/90">
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

      {/* Local page-transition overlay (same as your Navbar timing) */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-black"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        initial={{ y: "-100%" }}
        animate={controls}
        aria-hidden="true"
      />
    </section>
  );
}
