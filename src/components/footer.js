
import * as React from 'react'
import "../styles/index.css"
import Instagram from "../assets/instagram.svg"
import Whatsapp from "../assets/whatsapp.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <h5 className="pt"> thank you for scrolling till here! </h5>
      <div className="pt">
        <a href="https://wa.me/77757264500"><img src={Whatsapp} alt="whatsapp icon" /></a>
        <a href="/#about-me"><p> go to top </p></a>
        <a href="https://www.instagram.com/akma.m.t/"><img src={Instagram} alt="instagram icon" /></a>
        
       </div>
    </footer>
  )
}

// Step 3: Export your component
export default Footer