import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
