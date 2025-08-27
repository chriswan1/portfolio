"use client";
import { useEffect, useMemo } from "react";

type Opts = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  stagger?: number;
};

export function useScrollReveal(opts: Opts = {}) {
  const cfg = useMemo(
    () => ({
      root: null as Element | null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1 as number | number[],
      once: true,
      stagger: 80,
      ...opts,
    }),
    [] // run once per mount
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { root, rootMargin, threshold, once, stagger } = cfg;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] [data-reveal]")
    );

    // Apply JS-only hidden state
    els.forEach((el) => el.classList.add("reveal"));

    // Group stagger
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      const kids = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
      kids.forEach((kid, i) => {
        if (!kid.hasAttribute("data-reveal-delay")) {
          kid.style.setProperty("--reveal-delay", `${i * stagger}ms`);
        }
      });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const revealOnce = el.hasAttribute("data-reveal-once") || once;

        if (entry.isIntersecting) {
          const explicit = el.getAttribute("data-reveal-delay");
          if (explicit) el.style.setProperty("--reveal-delay", `${parseInt(explicit, 10)}ms`);

          // ensure transition delay is applied
          el.style.transitionDelay = getComputedStyle(el)
            .getPropertyValue("--reveal-delay")
            .trim();

          // 🔑 wait 1–2 frames so the browser paints the hidden state first
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("is-visible");
            });
          });

          if (revealOnce) io.unobserve(el);
        } else if (!revealOnce) {
          el.classList.remove("is-visible");
        }
      });
    }, { root, rootMargin, threshold });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// New hook for card fade-out animations
export function useCardFadeOut() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cardSections = Array.from(
      document.querySelectorAll<HTMLElement>(".card-section")
    );

    if (cardSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the card is visible
          const visibleRatio = Math.max(0, Math.min(1, entry.intersectionRatio));
          
          // Remove existing classes
          card.classList.remove("fade-out", "fade-out-complete");
          
          if (entry.isIntersecting) {
            // Card is entering viewport
            if (visibleRatio < 0.5) {
              card.classList.add("fade-out");
            } else {
              // Card is fully visible
              card.classList.remove("fade-out");
            }
          } else {
            // Card is leaving viewport
            if (rect.top < 0) {
              // Card is scrolling up (out of view)
              card.classList.add("fade-out-complete");
            } else {
              // Card is scrolling down (not yet in view)
              card.classList.add("fade-out");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    cardSections.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
}
