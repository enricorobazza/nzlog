import React, {useState, useEffect} from "react"
import styles from "./card.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Card = ({ shortText, text, clientName, clientCompany, index, current, width }) => {
  const data = useStaticQuery(graphql`
  query {
    quotes: file(relativePath: { eq: "quotes.svg" }) {
      extension
      publicURL
    }
  }
`)

  const [collapsed, setCollapsed] = useState(false);

  const toggleMore = (e) => {
    e.preventDefault();
    setCollapsed(!collapsed);
  }

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
      {
        !collapsed && shortText != undefined ? 
        <div className={styles.text}>
          {shortText} {' '}
          <a className={styles.seeMore} onClick={toggleMore} href="#">Ver mais</a>
        </div> 
        : 
        <div className={styles.text}>
          {text} {' '}
          {collapsed && <a className={styles.seeMore} onClick={toggleMore} href="#">Ver menos</a>} 
        </div> 
      }
      <hr className={styles.divider} />
      <div className={styles.client}>{clientName}</div>
      <div className={styles.company}>{clientCompany}</div>
    </div>
  )
}

export default Card
