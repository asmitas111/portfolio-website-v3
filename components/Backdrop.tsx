"use client";
import { useEffect, useRef } from "react";

/** Animated aurora + grid background, plus a soft glow that follows the cursor. */
export default function Backdrop() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, []);
  return (
    <>
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="glow" ref={glow} aria-hidden="true" />
    </>
  );
}
