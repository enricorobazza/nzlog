import React from "react"
import styles from "./card.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({ text, clientName, clientCompany, index, current }) => {
  /* 
      $xxs: 320px;
      $xs: 480px;
      $sm: 600px;
      $md: 768px;
      $lg: 900px;
      $xl: 1024px;
      $xxl: 1200px;
      $xxxl: 1500px; 
  */

  return (
    <div
      className={`${
        styles.container
      } col-6 col-xl-6 col-lg-8 col-md-8 col-sm-10 col-xs-10 col-xs-12 col-xxs-12 ${
        index !== current ? styles.blur : styles.focus
      }`}
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
