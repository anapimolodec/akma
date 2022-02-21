
import React, { useState, useEffect } from 'react';
import "../styles/index.css"
import Projects from './projects.js'
import ProjectsThings from './projects_things.js'
import {useStaticQuery, graphql} from 'gatsby'

const MyWork = () => {
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
            relativeDirectory
          }
        }
      }
    }`
  const {
    allFile: { edges: images },
    } = useStaticQuery(allImagesQuery)
  let g1 = []
  let g2 =[]
  let f1 =[]
  let f2 =[]
  images.map(image => {
          let dir = image.node.relativeDirectory;
          if (dir === "1" || dir === 1) {
              g1.push(image)
                
            }
          else if (dir === "2" || dir === 2){
              g2.push(image)
          } else if (dir === "figures/01") {
              f1.push(image)
          } else {
            f2.push(image)
          }
          return;
        });
 
  return (
    <section className="mywork">
      <h2> Мои работы </h2>
      <p className="pt"> Здесь ты можешь увидеть мои работы &#10024; </p>
      <div className="cards">
        <div className="card"> <a href="/#projects"> Хочу увидеть фотосессии с героями! </a> </div>
        <div className="card"> <a href="/#figures"> Хочу перейти к предметным фотографиям! </a> </div>
      </div>
      <Projects g1 = {g1} g2 ={g2} />
      <ProjectsThings f1={f1} f2 ={f2} />

    </section>
  )
}

// Step 3: Export your component
export default MyWork