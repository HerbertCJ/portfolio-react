import CardBt from "../components/CardBt"
import cardData from '../data'

function Projects() {
  return (
    <section className="projects" id="projects">
        <h1>Checkout my projects</h1>
        {cardData.map((card) => {            
            return <CardBt key={card.id} {...card} className='card' />
        })}      
       
    </section>    
  )
}
export default Projects