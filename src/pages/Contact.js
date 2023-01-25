import {MdEmail} from 'react-icons/md'
import {socials} from '../data'

function Contact() {
  return (
    <div className="contact">      
      <section className="contact-content">        
        <h1>Let's work together</h1>
        {socials.map((link) => {
          const {id, url, text, icon} = link
          return <a key={id} href={url} target="_blank" rel="noreferrer" className='social-link'><p className='socials'>{icon} {text}</p></a>
        })}
        <p className='socials'><MdEmail /> herbertjacby@gmail.com</p>
      </section>
    </div>
  )
}
export default Contact