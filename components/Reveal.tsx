"use client";
import { createElement, useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  tag?: "div" | "section" | "article";
  kind?: "reveal" | "rv";
  className?: string;
  delay?: number;
  id?: string;
  onPointerMove?: React.PointerEventHandler<HTMLElement>;
  onPointerLeave?: React.PointerEventHandler<HTMLElement>;
};

/** Adds the "in" class when the element scrolls into view (drives the CSS animations). */
export default function Reveal({ children, tag = "div", kind = "reveal", className = "", delay = 0, id, onPointerMove, onPointerLeave }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return createElement(
    tag,
    { ref, id, onPointerMove, onPointerLeave, className: `${kind} ${className}`.trim(), style: delay ? ({ "--d": `${delay}s` } as React.CSSProperties) : undefined },
    children
  );
}
