
import * as React from 'react'
import "../styles/index.css"
import Instagram from "../assets/instagram.svg"
import Whatsapp from "../assets/whatsapp.svg"
const Nav = () => {
  return (
    <nav className="nav" id="nav">
       <a href="https://www.instagram.com/akma.m.t/"><img src={Instagram} alt="instagram icon" /></a>
       <a href="/#about-me"><p> akma.m.t </p></a>
       <a href="https://wa.me/77757264500"><img src={Whatsapp} alt="whatsapp icon" /></a>
    </nav>
  )
}

// Step 3: Export your component
export default Nav