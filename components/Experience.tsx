"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { jobs } from "@/data/portfolio";

export default function Experience() {
  const tl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = tl.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const f = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height));
      el.style.setProperty("--fill", `${f * 100}%`);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Reveal tag="section" id="experience">
      <div className="eyebrow">Experience</div>
      <h2>Where I’ve worked</h2>
      <div className="timeline" ref={tl}>
        {jobs.map((job, i) => (
          <Reveal key={job.title} kind="rv" className="job" delay={(i % 4) * 0.1}>
            <h3>{job.title}</h3>
            <div className="meta">{job.meta}</div>
            <ul>
              {job.points.map((p, k) => (
                <li key={k}>{p.label && <strong>{p.label}: </strong>}{p.text}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
