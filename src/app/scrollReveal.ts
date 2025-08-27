
// scrollReveal.ts
type Options = {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;
    stagger?: number; // ms
  };
  
  export function initScrollReveal({
    root = null,
    rootMargin = "0px 0px -10% 0px", // reveal a bit before the element fully enters
    threshold = 0.1,
    once = true,
    stagger = 80,
  }: Options = {}) {
    if (typeof window === "undefined") return; // SSR guard
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // show immediately (CSS handles)
  
    const candidates: HTMLElement[] = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] [data-reveal]")
    );
  
    // Add the .reveal class (so default = visible when JS fails)
    candidates.forEach((el) => el.classList.add("reveal"));
  
    // Precompute group-based stagger delays
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      const children = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
      children.forEach((child, i) => {
        // Respect explicit data-reveal-delay; else set by index
        if (!child.hasAttribute("data-reveal-delay")) {
          child.style.setProperty("--reveal-delay", `${i * (stagger)}ms`);
        }
      });
    });
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const revealOnce = el.hasAttribute("data-reveal-once") || once;
  
        if (entry.isIntersecting) {
          // Apply explicit per-item delay if provided
          const explicitDelay = el.getAttribute("data-reveal-delay");
          if (explicitDelay) el.style.setProperty("--reveal-delay", `${parseInt(explicitDelay, 10)}ms`);
  
          // kick in delay if present
          const delay = getComputedStyle(el).getPropertyValue("--reveal-delay");
          if (delay) el.style.transitionDelay = delay.trim();
  
          el.classList.add("is-visible");
          if (revealOnce) io.unobserve(el);
        } else if (!revealOnce) {
          // allow hide/show if you want repeated reveals
          el.classList.remove("is-visible");
        }
      });
    }, { root, rootMargin, threshold });
  
    candidates.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }
  