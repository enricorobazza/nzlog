import React from "react"
import styles from "./calltoaction.module.scss"

const CallToAction = () => {
  return (
    <div className={styles.callToActionContainer}>
      <a className={styles.callToAction} href="#">
        Entrar em contato
      </a>
    </div>
  )
}

export default CallToAction
