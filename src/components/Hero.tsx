import { metrics, site } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          Remote · Available for US time zones
        </p>
        <h1 id="hero-title" className="hero-title">
          Herbert Jacby
          <span className="hero-role">{site.role}</span>
        </h1>
        <p className="hero-lead">
          I build fast, well-tested web applications with <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>Angular</strong> and <strong>TypeScript</strong>, mostly for
          the financial sector. Currently leading front-end modernization for a US-based investment
          firm.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn">
            Get in touch
          </a>
          <a href="#experience" className="btn btn-ghost">
            See my work
          </a>
          <div className="socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer me" aria-label="GitHub profile">
              <GithubIcon />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn profile">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <dl className="metrics">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
