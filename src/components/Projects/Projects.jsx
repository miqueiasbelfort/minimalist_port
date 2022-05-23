import React from 'react'
import styles from "./Projects.module.css"
import {FaLink} from "react-icons/fa"

const Projects = ({title, image, link}) => {
  return (
    <div className={styles.container}>
        <a href={link}>
            <img src={image} alt={title}/>
        </a>
        <div className={styles.info_container}>
            <span>web</span>
            <div className={styles.box_info}>
                <h2>{title}</h2>
                <a href={link}><FaLink/></a>
            </div>
        </div>
    </div>
  )
}

export default Projects