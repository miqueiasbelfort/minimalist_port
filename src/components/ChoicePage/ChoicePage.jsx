import React, {useState} from 'react'
import styles from "./ChoicePage.module.css"

const ChoicePage = ({handleClickPro, handleClickSki}) => {  

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <button
            onClick={handleClickPro} 
            className={`btn btn-choice btnChoice`}
        >
            Projects
        </button>
        <button
            onClick={handleClickSki} 
            className={`btn btn-choice btnChoice`}
        >
            Skills
        </button>
      </div>
    </div>
  )
}

export default ChoicePage