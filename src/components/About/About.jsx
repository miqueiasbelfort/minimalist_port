import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
        <h3>About me</h3>
        <div className={styles.about_me}>
            <p className={styles.first_p}>
            Comcei a programar com Python no começo de 2021, e foi amor a primeira vista, com o tempo aprendi javascript e estou buscando minha primeira oportunidade nessa carreira. Amo programar de coração. 💛💚<span className={styles.pt}>🇧🇷</span>
            </p>
            
                <hr/>

            <p className={styles.second_p}>
            I started programming with Python in early 2021, and it was love at first sight, over time I learned javascript and I'm looking for my first opportunity in this career. <br/> I love programming from my heart. ❤️💙<span className={styles.us}>🇺🇸</span>
            </p>
        </div>
    </div>
  )
}

export default About