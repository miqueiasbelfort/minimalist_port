import React from 'react'
import styles from "./ButtonsAndIcons.module.css"
import {FaWhatsapp, FaDiscord} from "react-icons/fa"

const ButtonsAndIcons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsAndIcons_container}>
        <a 
            className='btn'
            href='/Miqueias_Belfort_Dev_Curriculo.docx' 
            download
            >
                Download CV
            </a>
            <div className={styles.container_icons}>
                <a href=""><FaWhatsapp /></a>
                <a href=""><FaDiscord /></a>
            </div>
      </div>
    </div>
  )
}

export default ButtonsAndIcons
