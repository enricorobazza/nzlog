import React from "react"
import styles from "./calltoaction.module.scss"

const CallToAction = ({ outlined, className }) => {
  return (
    <div className={`${styles.callToActionContainer} ${className}`}>
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
