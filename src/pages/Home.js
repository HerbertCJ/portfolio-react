import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import CardBt from "../components/CardBt"
import { cardData } from '../data'
import Timeline from "../components/Timeline"
import { MdEmail } from 'react-icons/md'
import { socials } from '../data'


const Home = () => {
    const el = useRef(null)

    useEffect(() => {
        new Typed(el.current, {
            strings: ["HTML5", "CSS", "JavaScript", "BootStrap", "React.js"],
            showCursor: false,
            loop: true,
        })
    })

    return (
        <>
            {/* HOME */}
            <div className="intro-wrapper" id='home'>
                <div className="intro-bg">
                    <div className="main-info">
                        <h1>web development</h1>
                        <h2 className='typed-text'>- <span ref={el}></span> -</h2>
                    </div>
                </div>
            </div>

            {/* PROJECTS */}
            <div className="project-container" id='projects'>
                <h2>Checkout my projects</h2>
                <section className="projects">
                    {cardData.map((card) => {
                        return <CardBt key={card.id} {...card} className='card' />
                    })}
                </section>
            </div>

            {/* ABOUT ME */}
            <div className="aboutme" id='aboutme'>
                <h2 className='title'>About Me</h2>
                <Timeline />
            </div>

            {/* CONTACT */}
            <div className="contact" id='contact'>
                <h2>Let's work together</h2>
                <section className="contact-content">
                    {socials.map((link) => {
                        const { id, url, text, icon } = link
                        return <a key={id} href={url} target="_blank" rel="noreferrer" className='social-link'><p className='socials'><img src={icon} alt="icon" /> {text}</p></a>
                    })}
                    <p className='socials'><MdEmail className='emailicon' /> herbertjacby@gmail.com</p>
                </section>
            </div>
        </>
    )
}
export default Home