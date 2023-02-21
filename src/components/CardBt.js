import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

function ProjectCard({ title, text, url, image }) {
  return (
    <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}>

      <Col size={12}>
        <div id="cardLayout">
          <span></span>
          <div className="content">
            <img src={image} height="150px" className="card-img-top" alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={url} className="btn" target="_blank" rel='noreferrer'>Link</a>
          </div>
        </div>
      </Col>
    </motion.div>
  )
}

export default ProjectCard