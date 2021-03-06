
import * as React from 'react'
import "../styles/index.css"
import { GatsbyImage } from 'gatsby-plugin-image'


const Projects = ({g1, g2}) => {

  return (
    <section id="projects">
      <h3 className="title"> Фотосессии с героями </h3>
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="g1">
            {g1.map(image => (
              <GatsbyImage 
             image={image.node.childImageSharp.gatsbyImageData} 
             className="singleimage" 
             object-fit= 'contain'
             imgStyle  = {{padding: '10px', objectFit: 'contain'}}
             imgClassName ='singleimage-inner'
             />)
            )}
          </div>
          <div className="g2">
            {g2.map(image => (
              <GatsbyImage 
             image={image.node.childImageSharp.gatsbyImageData} 
             className="singleimage" 
             object-fit= 'contain'
             imgStyle  = {{padding: '10px', objectFit: 'contain'}}
             imgClassName ='singleimage-inner'
             />)
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}

// Step 3: Export your component
export default Projects

