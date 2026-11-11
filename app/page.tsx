import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { about, profile, skills } from "@/data/portfolio";

export default function Home() {
  const strip = [...skills.Frontend, ...skills["AI & Agentic"], ...skills["Cloud & DevOps"].slice(1), ...skills["Backend & APIs"].slice(0, 2)];
  return (
    <>
      <Navbar />
      <main className="wrap">
        <Hero />

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...strip, ...strip].map((t, i) => <span className="pill" key={i}>{t}</span>)}
          </div>
        </div>

        <Reveal tag="section" id="about">
          <div className="eyebrow">About</div>
          <h2>{about.title}</h2>
          <div className="about">
            <div>{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="focus">
              <h3>Highlights</h3>
              <ul>{about.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
          </div>
        </Reveal>

        <Experience />
        <Projects />

        <Reveal tag="section" id="skills">
          <div className="eyebrow">Skills</div>
          <h2>Tools I work with</h2>
          <div className="skills">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} kind="rv" className="skill" delay={(i % 4) * 0.1}>
                <h3>{group}</h3>
                <div className="tags">{items.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal tag="section" id="contact">
          <div className="contact">
            <div className="eyebrow">Contact</div>
            <h2 style={{ marginBottom: 14 }}>Let’s build something together</h2>
            <p>Open to full-stack and AI-focused engineering roles. Based in Lucknow, India.</p>
            <div className="btns">
              <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
