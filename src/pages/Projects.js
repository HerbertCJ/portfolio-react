import CardBt from "../components/CardBt"
import {cardData} from '../data'


function Projects() {
  return (
    <div className="project-container">
      <h1>Checkout my projects</h1>
      <section className="projects" id="projects">
        {cardData.map((card) => {
          return <CardBt key={card.id} {...card} className='card' />
        })}
      </section>
    </div>

  )
}
export default Projects