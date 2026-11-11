"use client";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  // Cursor spotlight + subtle 3D tilt on each card
  const move = (e: React.PointerEvent<HTMLElement>) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    c.style.setProperty("--mx", `${x}px`);
    c.style.setProperty("--my", `${y}px`);
    c.style.setProperty("--ry", `${(x / r.width - 0.5) * 8}deg`);
    c.style.setProperty("--rx", `${(0.5 - y / r.height) * 8}deg`);
  };
  const leave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <Reveal tag="section" id="work">
      <div className="eyebrow">Projects</div>
      <h2>Things I’ve built</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} tag="article" kind="rv" className={`card${p.featured ? " big" : ""}`} delay={(i % 4) * 0.1} onPointerMove={move} onPointerLeave={leave}>
            {p.featured && <span className="badge">Featured · AI agent</span>}
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.bullets && <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
