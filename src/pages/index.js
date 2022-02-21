import React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"
import AboutMe from '../components/aboutme.js'
import Nav from '../components/nav.js'
import Steps from '../components/steps.js'
import ContactMe from '../components/contactme.js'
import Footer from '../components/footer.js'
import MyWork from '../components/mywork.js'



export default function Home() {
  

  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title> Akma - Personal Website</title>
          <link rel="canonical" href="https://akma.gatsbyjs.io" />
      </Helmet>
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
