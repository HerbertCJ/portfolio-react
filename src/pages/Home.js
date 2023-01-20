import Typed from 'typed.js'
import { useEffect, useRef } from 'react'


const Home = () => {
    const el = useRef(null)

    useEffect(() => {
        new Typed(el.current, {
            strings:["HTML5", "CSS", "JavaScript", "BootStrap", "React.js"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 500,
            startDelay: 1000,
            showCursor: false,
            loop: true,
        })
    })

    return (
        <div className="intro-wrapper">
            <div className="intro-bg">
                <div className="main-info">
                    <h1>web development</h1>
                    <h2 className='typed-text'>- <span ref={el}></span> -</h2>
                    <button className='btn-contact'>contact me</button>
                </div>
            </div>
        </div>
    )
}
export default Home