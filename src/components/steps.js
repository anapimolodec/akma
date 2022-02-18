
import * as React from 'react'
import "../styles/index.css"
import { StaticImage } from 'gatsby-plugin-image'
import Camera from "../assets/camera.svg"

const Steps = () => {
  return (
    <section id="steps">
      <h2> How do we work? </h2>
      <div className="steps pt">
        <ol>
          <li> Составляем мудборд </li>
          <li> Составляем 3 образа </li>
          <li> Подбираем реквизит </li>
          <li> Находим локации </li>
          <li> Обработку и раскладку вместе обсуждаем </li>
          <li> Создаем 2 REELS </li> 
          <li> Исходники и Обработанные фото скидываю через неделю. </li>
        </ol>
        <img src={Camera} alt="camera image" />
      </div>

    </section>
  )
}

// Step 3: Export your component
export default Steps