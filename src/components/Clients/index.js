import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import globalStyles from "../../styles.module.scss"
import styles from "./clients.module.scss"

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      dicico: file(relativePath: { eq: "dicico.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drogSaoPaulo: file(relativePath: { eq: "drogariasaopaulo.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jadlog: file(relativePath: { eq: "jadlog.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jbs: file(relativePath: { eq: "jbs.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jequiti: file(relativePath: { eq: "jequiti.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      luft: file(relativePath: { eq: "luftsolutions.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notredame: file(relativePath: { eq: "notredame.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peugeot: file(relativePath: { eq: "peugeot.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rodopark: file(relativePath: { eq: "rodopark.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sbt: file(relativePath: { eq: "sbt.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      telhanorte: file(relativePath: { eq: "telhanorte.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totvs: file(relativePath: { eq: "totvs.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volkswagen: file(relativePath: { eq: "volkswagen.webp" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <div className={`${globalStyles.wrapper} ${styles.wrapper}`}>
        {Object.values(data).map((logo, index) => (
          <div className={styles.imgContainer} key={index}>
            <div className={styles.imgContainerWrapper}>
              <Img fluid={logo.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
