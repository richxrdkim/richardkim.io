export default function Hero() {
  return (
    <section className="relative h-[calc(100svh-64px)] overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.png"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Grid & gradient overlays */}
      <div className="hero-grid absolute inset-0 h-full" />
      <div className="absolute inset-0 h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full w-full items-end site-pad pb-24 sm:pb-32 lg:pb-40">
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
            <a
              href="/projects"
              className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/60"
            >
              View Projects
            </a>
            <a
              href="/about-me"
              className="inline-flex items-center rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white hover:border-white/60"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
