import perfilBg from '../images/perfil_nobg.png'
import {MdEmail} from 'react-icons/md'
import {socials} from '../data'

function Contact() {
  return (
    <div className="contact">
      <img src={perfilBg} alt="perfil" className='perfilphoto' />
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