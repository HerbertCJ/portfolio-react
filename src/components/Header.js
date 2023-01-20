import Typed from 'typed.js'
import { useEffect, useRef } from 'react'


const Header = () => {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings:["HTML5", "CSS", "JavaScript", "BootStrap", "React.js"],
            typeSpeed: 100,            
            backSpeed: 100,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        })
    })

    return (
        <div className="header-wrapper">
            <div className="header-bg">
                <div className="main-info">
                    <h1>web development</h1>
                    <h2 className='typed-text'>- <span ref={el}></span> -</h2>
                    <a href="#" className='btn-main-offer'>contact me</a>
                </div>
            </div>
        </div>
    )
}
export default Header