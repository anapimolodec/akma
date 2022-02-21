
import * as React from 'react'
import "../styles/index.css"

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
        <h2>About Me</h2>
        <div className="about-me-details">
          <img
            alt="Akmaral avatar photo"
            src={"../../avatar.jpg"}
            className="ava-img"
            

            
          />
          <div className="about-me-text">
            <p> Привет! Добро пожаловать на мою страничку!</p>
            <h2> Меня зовут Акмарал Турсынханова.</h2>
            <p className="pt"> Фотограф в Южной Корее. Создаю кадры, как семейные, так и личные <br/>
            Визуализатор. Создаю продающий контент для Инстаграм. </p>
          </div>
        </div>
    </section>
  )
}

// Step 3: Export your component
export default AboutMe