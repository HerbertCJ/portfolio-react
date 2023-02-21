import { useEffect, useState } from 'react'
import CardBt from "../components/CardBt"
import { cardData } from '../data'
import Timeline from "../components/Timeline"
import { MdEmail } from 'react-icons/md'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Home = () => {  
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)    
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = ["HTML5", "CCS", "JavaScript", "BootStrap", "React.js"]
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delta, text])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum +1)
            setDelta(100)
        }
    }

    return (
        <>
            {/* HOME */}
            <div className="intro-wrapper" id='home'>
                <div className="intro-bg">
                    <div className="main-info">
                        <h1>web development</h1>
                        <h2 className='typed-text'>- <span className="wrap">{`${text}`}</span> -</h2>
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
                    <a href="https://www.linkedin.com/in/herbertcj" target='_blank' rel='noreferrer'><AiFillLinkedin className='iconlinkedin' /> Linkedin</a>
                    <a href="https://github.com/HerbertCJ" target='_blank' rel='noreferrer'><AiFillGithub className='icongithub' /> Github</a>
                    <p className='emailp'><MdEmail className='iconemail' /> herbertjacby@gmail.com</p>
                </section>
            </div>
        </>
    )
}
export default Home