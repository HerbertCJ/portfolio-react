import About from "@/components/About";
import Contact from "@/components/Contact";
import CurrentYear from "@/components/CurrentYear";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { site } from "@/data/profile";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>Built by {site.name}</p>
          <p>
            © <CurrentYear buildYear={new Date().getFullYear()} /> All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
