import React from "react"
import "../styles/index.css"
import { StaticImage } from 'gatsby-plugin-image'
import AboutMe from '../components/aboutme.js'
import Nav from '../components/nav.js'
import Steps from '../components/steps.js'
import ContactMe from '../components/contactme.js'
import Projects from '../components/projects.js'
export default function Home() {
  return (
    <div>
      <Nav />
      <main>

        <AboutMe/>
        <Steps />
        <ContactMe />
        <Projects />
      </main>
    </div>
  )
}
