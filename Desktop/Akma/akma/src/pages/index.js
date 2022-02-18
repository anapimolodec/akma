import React from "react"
import "../styles/index.css"
import { StaticImage } from 'gatsby-plugin-image'
export default function Home() {
  return (

    <main>
      <div class="about-me">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <img src="https://thumb.tildacdn.com/tild6432-6535-4363-b735-626432636165/-/resize/300x/-/format/webp/IMG_9491.JPG" className ="ava-img"/>
        <p> Привет! Добро пожаловать на мою страничку!</p>
        <h2> Меня зовут Акмарал Турсынханова.</h2>
        <img src={{}}
        <p>Фотограф в Южной Корее. Создаю кадры, как семейные, так и личные
        Визуализатор. Создаю продающий контент для Инстаграм.  </p>
      </div>
    </main>
  )
}
