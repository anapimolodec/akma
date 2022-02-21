
import * as React from 'react'
import "../styles/index.css"
import { GatsbyImage } from 'gatsby-plugin-image'
import {useStaticQuery, graphql} from 'gatsby'

const ProjectsThings = ({f1,f2}) => {

  return (
    <section id="figures">
      <h3 className="title"> Предметные фотосессии </h3>
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="g1">
            {f1.map(image => (
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
            {f2.map(image => (
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
export default ProjectsThings

