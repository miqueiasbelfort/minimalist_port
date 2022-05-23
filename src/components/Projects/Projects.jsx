import React from 'react'
import styles from "./Projects.module.css"
import {FaLink} from "react-icons/fa"
import Me from "../../public/me.jpg"

const Projects = ({title}) => {
  return (
    <div className={styles.container}>
        <a href="">
            <img src={Me} alt="Miqueias Belfort" />
        </a>
        <div className={styles.info_container}>
            <span>web</span>
            <div className={styles.box_info}>
                <h2>{title}</h2>
                <a href={``}><FaLink/></a>
            </div>
        </div>
    </div>
  )
}

export default Projects