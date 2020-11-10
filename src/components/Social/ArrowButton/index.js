import React from "react"
import styles from "./arrowbutton.module.scss"
import { useStaticQuery, graphql } from "gatsby"

export const ArrowButton = ({ next, width, current, length, onChange }) => {
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "arrow.svg" }) {
        extension
        publicURL
      }
    }
  `)


  const classes = next
    ? [styles.btnNext, styles.btnNext33, styles.btnNext50, styles.btnNext90]
    : [styles.btnPrev, styles.btnPrev33, styles.btnPrev50, styles.btnPrev90]
  const limit = next ? length - 1 : 0

  return (
    <div
      className={`${classes[0]} ${styles.btn} ${
        current === limit && styles.hidden
      } ${
        width.includes("90")
          ? classes[3]
          : width.includes("50")
          ? classes[2]
          : width.includes("33")
          ? classes[1]
          : ""
      }`}
      onClick={() => onChange(next ? 1 : -1)}
    >
      <img src={data.arrow.publicURL} className={`${styles.icon} ${!next && styles.reverse}`} />
    </div>
  )
}
