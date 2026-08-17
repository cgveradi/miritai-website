"use client";
import { useEffect, useRef, useState } from "react";
export default function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [visible, setVisible] = useState(false);
  useEffect(() => { const element = ref.current; if (!element) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.14 }); observer.observe(element); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal${visible ? " is-visible" : ""} ${className}`}>{children}</div>;
}
