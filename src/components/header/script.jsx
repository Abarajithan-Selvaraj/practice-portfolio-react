import React from 'react'
import './style.css'
import CTA from './cta'
import ME from '../../assets/me.png'
import SocialBar from './social-bar'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <SocialBar />
        <a href="#contact" className="scroll__down">Scroll Down</a>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>

    </header>
  )
}

export default Header