import { projects } from "@/data/profile";
import { ArrowIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <p className="eyebrow">03 · Projects</p>
        <h2 id="projects-title" className="section-title">
          Selected work
        </h2>
        <p className="section-lead">
          Most of my day-to-day work lives behind company logins. These are projects you can open and
          explore.
        </p>

        <ul className="projects">
          {projects.map((p) => (
            <li key={p.name} className="project">
              <article>
                <header className="project-head">
                  <p className="project-kind">
                    {p.kind}
                    {p.year && <span> · {p.year}</span>}
                  </p>
                  {p.highlight && <span className="badge">{p.highlight}</span>}
                </header>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <ArrowIcon size={14} />
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
