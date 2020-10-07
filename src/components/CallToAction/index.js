import React from "react"
import styles from "./calltoaction.module.scss"

const CallToAction = ({ outlined }) => {
  return (
    <div className={styles.callToActionContainer}>
      <a
        className={`${styles.callToAction} ${outlined ? styles.outlined : ""}`}
        href="#"
      >
        Entrar em contato
      </a>
    </div>
  )
}

export default CallToAction
