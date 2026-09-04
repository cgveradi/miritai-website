"use client";
import { useEffect, useRef, useState } from "react";
export default function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState("");
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    // Keep server-rendered content readable; only hide content still below the viewport.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("is-pending");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.remove("is-pending");
        setState(" is-visible");
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element);
    return () => { observer.disconnect(); element.classList.remove("is-pending"); };
  }, []);
  return <div ref={ref} className={`reveal${state} ${className}`}>{children}</div>;
}
