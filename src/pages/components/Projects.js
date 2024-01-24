import { projectsData } from "../../data";

function Projects() {
  return (
    <div className="project-container" id="projects">
      <h2>Projects</h2>
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
              <a href={url} className="btn" target="_blank" rel="noreferrer">
                Link
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
