import React from 'react'
import RobFace from "./roblinkedin.jpg"
import "./About.css"

function About() {
  return (
    <>
        <h1>About Us</h1>
        <img src={RobFace} alt="rob linkedin" class="pic"/>
        <p>Hey guys! My name is Robert. I am a senior this semester and excited to graduate. I'm taking Agile, Data Management, and Algebra this semester
            Some of my hobbies include: gaming, fluting, skiing, cycling, and eventually learning vim. 
        </p>
    </>
  )
}

export default About