import { earlierCareer, experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <p className="eyebrow">02 · Experience</p>
        <h2 id="experience-title" className="section-title">
          Where I&apos;ve worked
        </h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.start}`} className="job">
              <div className="job-meta">
                <time dateTime={job.start}>{job.period}</time>
                <span>{job.location}</span>
              </div>
              <article className="job-body">
                <h3>
                  {job.role} <span className="at">@</span> {job.company}
                  {job.via && <span className="via"> via {job.via}</span>}
                </h3>
                <ul className="job-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {job.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <div className="earlier">
          <h3 className="earlier-title">Before front-end</h3>
          <ul>
            {earlierCareer.map((e) => (
              <li key={e.role}>
                <span className="earlier-period">{e.period}</span>
                <div>
                  <strong>{e.role}</strong> · {e.place}
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
