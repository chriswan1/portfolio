"use client";
import { useEffect, useRef } from 'react';

export function useScrollReveal({ 
  stagger = 100, 
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1 
}: {
  stagger?: number;
  rootMargin?: string;
  threshold?: number;
} = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin, threshold }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el, index) => {
      observer.observe(el);
      // Add stagger delay
      (el as HTMLElement).style.setProperty(
        '--reveal-delay', 
        `${index * stagger}ms`
      );
    });

    return () => observer.disconnect();
  }, [stagger, rootMargin, threshold]);
}

export function useCardFadeOut() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the card is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / rect.height;
          
          if (visibilityRatio < 0.3 && rect.top < windowHeight / 2) {
            card.classList.add('fade-out');
          } else if (visibilityRatio < 0.1 && rect.top < 0) {
            card.classList.add('fade-out-complete');
          } else {
            card.classList.remove('fade-out', 'fade-out-complete');
          }
        });
      },
      { threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1] }
    );

    const cards = document.querySelectorAll('.card-section');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);
}

export function useScrollGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!gradientRef.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollProgress = scrollY / documentHeight;
      
      // Create gradient that starts light and ends with a darker, more readable tone
      // Using the charcoal/slate tone from the image for the final section
      const gradientElement = gradientRef.current;
      
      if (scrollProgress < 0.8) {
        // For the first 80% of scroll, use the original gradient
        const hueShift = scrollProgress * 60;
        const saturationShift = 50 + (scrollProgress * 20);
        const lightnessShift = 85 + (scrollProgress * 10);
        
        gradientElement.style.background = `
          linear-gradient(
            to bottom,
            hsl(${200 + hueShift}, ${saturationShift}%, ${lightnessShift}%) 0%,
            hsl(${220 + hueShift}, ${saturationShift}%, ${lightnessShift - 5}%) 25%,
            hsl(${240 + hueShift}, ${saturationShift}%, ${lightnessShift - 10}%) 50%,
            hsl(${260 + hueShift}, ${saturationShift}%, ${lightnessShift - 15}%) 75%,
            hsl(${280 + hueShift}, ${saturationShift}%, ${lightnessShift - 20}%) 100%
          )
        `;
      } else {
        // For the final 20% of scroll, transition to the darker charcoal tone
        const finalProgress = (scrollProgress - 0.8) / 0.2; // 0 to 1 for final section
        const darkLightness = 25 + (finalProgress * 5); // 25% to 30% lightness
        const darkSaturation = 15 + (finalProgress * 10); // 15% to 25% saturation
        
        gradientElement.style.background = `
          linear-gradient(
            to bottom,
            hsl(240, 30%, 60%) 0%,
            hsl(250, 25%, 45%) 25%,
            hsl(260, 20%, 35%) 50%,
            hsl(270, ${darkSaturation}%, ${darkLightness}%) 75%,
            hsl(280, ${darkSaturation}%, ${darkLightness}%) 100%
          )
        `;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return gradientRef;
}
