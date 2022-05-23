import React from 'react'
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>My Skills</h3>

      <div className={styles.skills_container}>

        <div className={styles.front_container}>
            <span>Front-end Skills</span>
            <ul className={styles.list}>
              <li> <span className={styles.ball}></span> HTML</li>
              <li> <span className={styles.ball}></span> CSS</li>
              <li> <span className={styles.ball}></span> BOOTSTRAP</li>
              <li> <span className={styles.ball}></span> REACT JS</li>
              <li> <span className={styles.ball}></span> TYPESCRIPT</li>
              <li> <span className={styles.ball}></span> JAVASCRIPT</li>
            </ul>
        </div>

        <div className={styles.back_container}>
            <span>Back-end Skills</span>
            <ul className={styles.list}>
              <li> <span className={styles.ball}></span> NODE JS</li>
              <li> <span className={styles.ball}></span> EXPRESS JS</li>
              <li> <span className={styles.ball}></span> MONGODB</li>
              <li> <span className={styles.ball}></span> MYSQL</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Skills
