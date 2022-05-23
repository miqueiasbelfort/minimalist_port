import React from 'react'
import styles from "./Profile.module.css"
import Photo from "../../public/me.jpg"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_container}>
        <div className={styles.img_border}>
            <img src={Photo} alt="Miqueias Belfort" />
        </div>
        <h1>Miqueias Belfort</h1>
        <span>Web Developer</span>
      </div>
      <div className={styles.media_icons}>
        <a href="https://www.instagram.com/miqueiasbelfort/"><FaInstagram/></a>
        <a href="https://github.com/miqueiasbelfort"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/miqueias-belfort/"><FaLinkedin/></a>
      </div>
      <div className={styles.desc}>
        <p>Hi, I’m <span className='bold-blue'>Miqueias</span>, I am <span className='bold-purple'>web developer</span>.
Welcome to my portfolio, here you will see some of my skills, my projects and about me.</p>
      </div>
    </div>
  )
}

export default Profile
