"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { profile, stats } from "@/data/portfolio";

function reduced() { return typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion:reduce)").matches; }

function Counter({ pre, to, suf }: { pre: string; to: number; suf: string }) {
  const ref = useRef<HTMLElement>(null);
  const [val, setVal] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let t0: number | null = null;
      const f = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min((t - t0) / 1400, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(f);
      };
      setVal(0);
      requestAnimationFrame(f);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{pre}{val}{suf}</b>;
}

function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (reduced()) return;
    let pi = 0, ci = 0, del = false, timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = phrases[pi];
      let wait = del ? 28 : 60;
      if (!del) { ci++; if (ci === w.length) { del = true; wait = 1700; } }
      else { ci--; if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
      setText(w.slice(0, ci));
      timer = setTimeout(tick, wait);
    };
    setText("");
    tick();
    return () => clearTimeout(timer);
  }, [phrases]);
  return <>{text}</>;
}

const HEADLINE: [string, boolean][] = [
  ...["Hi,", "I’m", "Asmita.", "I", "build"].map((w): [string, boolean] => [w, false]),
  ...["scalable", "products"].map((w): [string, boolean] => [w, true]),
  ...["and", "the", "AI", "agents", "that", "ship", "them", "faster."].map((w): [string, boolean] => [w, false]),
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
      <div className="eyebrow">{profile.role}</div>
      <h1>
        {HEADLINE.map(([w, g], i) => (
          <span key={i}>
            <span className={g ? "w g" : "w"} style={{ "--i": i } as React.CSSProperties}>{w}</span>{" "}
          </span>
        ))}
      </h1>
      <p className="lead">{profile.lead}</p>
      <p className="type">Currently exploring <Typewriter phrases={profile.typed} /><i className="caret" /></p>
      <div className="btns">
        <a className="btn primary" href="#work">See my projects</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} kind="rv" className="stat" delay={(i % 4) * 0.1}>
            {"text" in s ? <b>{s.text}</b> : <Counter pre={s.pre} to={s.to} suf={s.suf} />}
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
      <div className="hero-photo">
        <div className="photo-frame">
          <Image src="/asmita.webp" alt="Portrait of Asmita Srivastava" width={640} height={800} priority />
        </div>
        <span className="badge-f a"><i>✦</i> AWS Certified</span>
        <span className="badge-f b"><i>★</i> 4+ yrs experience</span>
      </div>
    </section>
  );
}
