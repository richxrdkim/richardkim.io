import { NavLink, useNavigate } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

declare global {
  interface Window {
    __runPageTransition?: (path: string) => void;
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<PageTransitionHandle>(null);

  // Esc closes menu (keep scrollbar visible: no body locking)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* 🔸 ADDED: expose the overlay transition globally so other components can call it */
  useEffect(() => {
    window.__runPageTransition = (path: string) => overlayRef.current?.run(path);
    return () => {
      window.__runPageTransition = undefined;
    };
  }, []);

  const startHomeTransition = () => {
    overlayRef.current?.run("/");
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white/80 backdrop-blur-md">
      <div className="site-pad flex h-16 w-full items-center justify-between">
        <button
          aria-label="Go home"
          onClick={startHomeTransition}
          className="whitespace-nowrap text-2xl sm:text-3xl font-extrabold tracking-tight text-black hover:opacity-90"
        >
          RICHARD KIM
        </button>

        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-line p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Full-screen menu overlay — keeps scrollbar (no body lock) */}
      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[9999] cursor-default bg-black overflow-y-auto overscroll-contain"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.36, 1, 0.3, 1] }}
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="relative z-10 flex min-h-dvh w-full flex-col text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="site-pad flex h-16 items-center justify-end">
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md border border-white/50 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <motion.nav
                  className="site-pad mt-6 mb-12 flex flex-1 flex-col justify-start gap-8"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
                    show:   { transition: { delayChildren: 0.1, staggerChildren: 0.08 } },
                  }}
                >
                  <MenuLink to="/" label="Home" end onClose={() => setMenuOpen(false)} />
                  <MenuLink to="/about-me" label="About Me" onClose={() => setMenuOpen(false)} />
                  <MenuLink to="/projects" label="Projects" onClose={() => setMenuOpen(false)} />
                  <MenuLink to="/contact" label="Contact" onClose={() => setMenuOpen(false)} />
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Logo click page transition (imperative, always mounted) */}
      {createPortal(<PageTransition ref={overlayRef} />, document.body)}
    </header>
  );
}

/* ---------------- Page Transition (logo click, imperative) ---------------- */

type PageTransitionHandle = {
  run: (path: string) => Promise<void>;
};

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

const PageTransition = forwardRef<PageTransitionHandle>((_, ref) => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const inFlightRef = useRef(false);

  useImperativeHandle(ref, () => ({
    async run(path: string) {
      if (inFlightRef.current) return; // ignore while animating
      inFlightRef.current = true;

      // Start off-screen
      controls.set({ y: "-100%" });
      await nextFrame();

      // 1) slide DOWN to cover
      await controls.start({
        y: 0,
        transition: { duration: 0.7, ease: [0.36, 1, 0.3, 1] },
      });

      // 2) navigate while covered
      navigate(path);

      // 3) give destination time to mount/paint
      await nextFrame();
      await nextFrame();

      // 4) slide UP to reveal
      await controls.start({
        y: "-100%",
        transition: { duration: 0.7, ease: [0.36, 1, 0.3, 1] },
      });

      inFlightRef.current = false;
    },
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-black"
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      initial={{ y: "-100%" }} // always start off-screen
      animate={controls}
    />
  );
});

/* ---------------- Menu big link ---------------- */

function MenuLink({
  to,
  label,
  end,
  onClose,
}: {
  to: string;
  label: string;
  end?: boolean;
  onClose: () => void;
}) {
  return (
    <NavLink to={to} end={end} onClick={onClose}>
      {({ isActive }) => (
        <motion.span
          className={`block font-semibold leading-none ${isActive ? "opacity-85" : "opacity-100"}`}
          variants={{
            hidden: { y: 32, opacity: 0 },
            show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: [0.36, 1, 0.3, 1] } },
          }}
        >
          <span className="text-white text-5xl sm:text-6xl md:text-7xl">{label}</span>
        </motion.span>
      )}
    </NavLink>
  );
}
