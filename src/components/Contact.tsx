import { site } from "@/data/profile";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact-intro">
          <p className="eyebrow">05 · Contact</p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s build something together
          </h2>
          <p>
            I&apos;m open to senior front-end roles and contract work with remote teams, including US
            time zones. The fastest way to reach me is by email.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${site.email}`}>
                <MailIcon /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer me">
                <LinkedinIcon /> linkedin.com/in/herbertcj
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer me">
                <GithubIcon /> github.com/HerbertCJ
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
