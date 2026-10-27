import { education, languages, site, summary } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <figure className="about-media">
          <img
            src="/profile-1200.webp"
            srcSet="/profile-640.webp 640w, /profile-1200.webp 1200w"
            sizes="(max-width: 900px) 100vw, 520px"
            width={1200}
            height={673}
            loading="lazy"
            decoding="async"
            alt="Illustration of Herbert Jacby coding at his desk"
          />
        </figure>
        <div className="about-body">
          <p className="eyebrow">01 · About</p>
          <h2 id="about-title" className="section-title">
            Front-end engineer with a finance background
          </h2>
          <p>{summary}</p>
          <p>
            I work with micro-frontends (Module Federation), design systems, large data grids, BFF APIs
            with NestJS and observability with Datadog RUM. Before tech, I managed finances and traded on
            the stock market, which helps me understand the products I build for investment and banking
            teams. I&apos;m AWS certified and used to async remote work with US teams.
          </p>
          <dl className="facts">
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>
                {education.degree}, {education.school}
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
