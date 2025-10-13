import { useEffect, useRef, useState } from "react";

export default function VideoThumb({
  poster,
  srcWebm,
  className = "rounded-2xl",
}: { poster: string; srcWebm: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {loaded ? (
        <video autoPlay muted loop playsInline preload="none" poster={poster} className="w-full rounded-2xl">
          <source src={srcWebm} type="video/webm" />
        </video>
      ) : (
        <img src={poster} alt="" className="w-full rounded-2xl object-cover" loading="lazy" />
      )}
    </div>
  );
}
