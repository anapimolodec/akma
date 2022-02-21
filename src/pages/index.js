import React from "react"
import "../styles/index.css"
import AboutMe from '../components/aboutme.js'
import Nav from '../components/nav.js'
import Steps from '../components/steps.js'
import ContactMe from '../components/contactme.js'

import Footer from '../components/footer.js'
import MyWork from '../components/mywork.js'



export default function Home() {
  

  return (
    <div>
      <Nav />
      <main>
        <AboutMe/>
        <Steps />
        <ContactMe />
        <MyWork />
        
      </main>
      <Footer />
    </div>
  )
}
