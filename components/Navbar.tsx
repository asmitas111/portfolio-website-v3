"use client";
import { useEffect, useState } from "react";

const links = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#work"], ["Skills", "#skills"]];

export default function Navbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try { const s = localStorage.getItem("theme"); if (s) document.documentElement.setAttribute("data-theme", s); } catch {}
    const onScroll = () => {
      const d = document.documentElement, max = d.scrollHeight - d.clientHeight;
      setProgress(max > 0 ? d.scrollTop / max : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const r = document.documentElement;
    const dark = r.getAttribute("data-theme") === "dark" || (!r.getAttribute("data-theme") && matchMedia("(prefers-color-scheme:dark)").matches);
    const next = dark ? "light" : "dark";
    r.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <>
      <div id="bar" style={{ transform: `scaleX(${progress})` }} />
      <nav>
        <div className="wrap">
          <b>Asmita S.</b>
          <ul>
            {links.map(([label, href]) => <li className="hide" key={href}><a href={href}>{label}</a></li>)}
            <li><a href="#contact">Contact</a></li>
            <li><button id="theme" aria-label="Toggle theme" onClick={toggleTheme}>◐</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
