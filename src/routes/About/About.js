import React from 'react'

const visiona_url = 'http://www.visionaespacial.com.br'
const About = () => (
  <div className="about">
    <h1>About</h1>
    <p>Projeto integrador (PI) realizado na FATEC-JS</p>
    <p>
      O objetivo desse projeto é: construir uma plataforma para&nbsp;
      <a href={visiona_url} target="_blank" rel="noopener noreferrer">Visiona</a>
&nbsp;
      que auxilie no treinamento de uma I.A para reconhecer talhões e disponibilize a mesma como serviço
    </p>
  </div>
)

export default About
