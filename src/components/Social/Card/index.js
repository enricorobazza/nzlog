import React from "react"
import styles from "./card.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Card = ({ text, clientName, clientCompany, index, current, width }) => {
  const data = useStaticQuery(graphql`
  query {
    quotes: file(relativePath: { eq: "quotes.svg" }) {
      extension
      publicURL
    }
  }
`)


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
      <img className={styles.quotes} src={data.quotes.publicURL} />
      <div className={styles.text}>{text}</div>
      <hr className={styles.divider} />
      <div className={styles.client}>{clientName}</div>
      <div className={styles.company}>{clientCompany}</div>
    </div>
  )
}

export default Card
