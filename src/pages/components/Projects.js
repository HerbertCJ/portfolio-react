import { projectsData } from "../../data";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="project-container" id="projects">    
        <h2>Projects</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <section className="projects">
            {projectsData.map((slide) => {
              const { title, text, url, image, id } = slide;
              return (
                <div className="project-div" key={id}>
                  <img
                    src={image}
                    height="150px"
                    className="card-img-top"
                    alt={title}
                  />
                  <h2 className="project-title">{title}</h2>
                  <p>{text}</p>
                  <a
                    href={url}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </div>
              );
            })}
          </section>
        </motion.div>    
    </div>
  );
}

export default Projects;
