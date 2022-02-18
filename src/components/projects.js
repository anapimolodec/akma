
import * as React from 'react'
import "../styles/index.css"
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import {useStaticQuery, graphql} from 'gatsby'

const Projects = () => {
  const allImagesQuery = graphql`
    query MyQuery {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        edges {
          node {
            base
            size
            childImageSharp {
              gatsbyImageData
            }
            relativePath
            relativeDirectory
          }
        }
      }
    }`
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)
  console.log(images)
  let g1 = []
  let g2 =[]
  images.map(image => {
          let dir = image.node.relativeDirectory;
          if (dir == "1" || dir == 1) {
              g1.push(image)
                
            }
          else {
              g2.push(image)
          }});

  return (
    <section id="projects">
      <h3 className="title"> Мои работы </h3>
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

// {images.map(image => 
//           
//           (<GatsbyImage 
//           image={image.node.childImageSharp.gatsbyImageData} 
//           className="singleimage" 
//           object-fit= 'contain'
//           imgStyle  = {{padding: '10px', objectFit: 'contain'}}
//           />
          
//         )
//         )}