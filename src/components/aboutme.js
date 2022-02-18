
import * as React from 'react'
import "../styles/index.css"
import { StaticImage } from 'gatsby-plugin-image'

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
        <h1>About Me</h1>
        <div className="about-me-details">
          <StaticImage
            alt="Akmaral avatar photo"
            src="../assets/avatar.jpg"
            className="ava-img"
            
          />
          <div className="about-me-text">
            <p> Привет! Добро пожаловать на мою страничку!</p>
            <h2> Меня зовут Акмарал Турсынханова.</h2>
            <p className="pt"> Фотограф в Южной Корее. Создаю кадры, как семейные, так и личные
            Визуализатор. Создаю продающий контент для Инстаграм. </p>
          </div>
        </div>
    </section>
  )
}

// Step 3: Export your component
export default AboutMe