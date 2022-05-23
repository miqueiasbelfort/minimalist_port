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
        <a href=""><FaInstagram/></a>
        <a href=""><FaGithub/></a>
        <a href=""><FaLinkedin/></a>
      </div>
      <div className={styles.desc}>
        <p>Hi, I’m <span className='bold'>Miqueias</span>, I’m <span className='bold'>web developer</span>.
Welcome to my portfolio, here you will see some of my skills and projetcs.</p>
      </div>
    </div>
  )
}

export default Profile
