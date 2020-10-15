import React from "react"
import styles from "./card.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({ text, clientName, clientCompany, index, current, width }) => {
  return (
    <div
      className={`${styles.container} ${
        Math.abs(index - current) > 1
          ? styles.hidden
          : index !== current
          ? styles.blur
          : styles.focus
      }`}
      style={{ width: width }}
    >
      <FontAwesomeIcon className={styles.quotes} icon={["fas", "quote-left"]} />
      <div className={styles.text}>{text}</div>
      <hr className={styles.divider} />
      <div className={styles.client}>{clientName}</div>
      <div className={styles.company}>{clientCompany}</div>
    </div>
  )
}

export default Card
