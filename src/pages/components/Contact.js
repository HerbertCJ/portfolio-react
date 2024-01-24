import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Let's work together</h2>
      <section className="contact-content">
        <div>
          <a
            href="https://www.linkedin.com/in/herbertcj"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="iconlinkedin" /> Linkedin
          </a>
          <a
            href="https://github.com/HerbertCJ"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icongithub" /> Github
          </a>
          <p className="emailp">
            <MdEmail className="iconemail" /> herbertjacby@gmail.com
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
