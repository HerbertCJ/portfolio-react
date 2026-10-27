import { certifications, courses, skills } from "@/data/profile";
import { ArrowIcon } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <p className="eyebrow">04 · Skills</p>
        <h2 id="skills-title" className="section-title">
          Toolbox
        </h2>

        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certs">
          <h3 className="sub-title">Certifications</h3>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a className="cert-name cert-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.name} <ArrowIcon size={14} />
                  </a>
                ) : (
                  <span className="cert-name">{c.name}</span>
                )}
                <span className="cert-meta">
                  {c.issuer} · {c.date}
                </span>
              </li>
            ))}
          </ul>
          <details className="courses">
            <summary>Courses ({courses.length})</summary>
            <ul className="cert-list">
              {courses.map((c) => (
                <li key={c.name}>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-meta">
                    {c.issuer} · {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}
