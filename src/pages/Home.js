import { useEffect, useState } from 'react'
import { slideData } from '../data'
import Timeline from "../components/Timeline"
import { MdEmail } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import ContactForm from '../components/ContactForm'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from "framer-motion";
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';

SwiperCore.use([Autoplay]);

const Home = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = ["HTML5", "CCS", "JavaScript", "TypeScript", "BootStrap", "Material UI", "React.js", "NextJS", "Redux ToolKit", "Node.js", "MongoDB", "MySQL", "Java"]
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
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
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
                <div className="dark-bg">
                    <h2>Checkout my projects</h2>
                    <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <section className="projects">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={0}
                                slidesPerView='auto'
                                centeredSlides={true}
                                loop={true}
                                autoplay={{ delay: 2000 }}
                                navigation
                                breakpoints={{
                                    1100: {
                                        spaceBetween: 100,
                                        slidesPerView: 3
                                    },
                                    600: {
                                        spaceBetween: 50,
                                        slidesPerView: 2
                                    },
                                    450: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                }}

                            >
                                {slideData.map((slide) => {
                                    const { title, text, url, image, id } = slide
                                    return (
                                        <SwiperSlide key={id} id='slideLayout'>
                                            <span></span>
                                            <div className="content">
                                                <img src={image} height="150px" className="card-img-top" alt={title} />
                                                <h2>{title}</h2>
                                                <p>{text}</p>
                                                <a href={url} className="btn" target="_blank" rel='noreferrer'>Link</a>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </section>
                    </motion.div>
                </div>
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
                    <div>
                        <a href="https://www.linkedin.com/in/herbertcj" target='_blank' rel='noreferrer'><AiFillLinkedin className='iconlinkedin' /> Linkedin</a>
                        <a href="https://github.com/HerbertCJ" target='_blank' rel='noreferrer'><AiFillGithub className='icongithub' /> Github</a>
                        <p className='emailp'><MdEmail className='iconemail' /> herbertjacby@gmail.com</p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>

                </section>
            </div>
        </>
    )
}
export default Home