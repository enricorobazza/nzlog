import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import globalStyles from "../../styles.module.scss"
import styles from "./clients.module.scss"

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      dicico: file(relativePath: { eq: "Dicico.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drogSaoPaulo: file(relativePath: { eq: "DrogariaSaoPaulo.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jadlog: file(relativePath: { eq: "Jadlog.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jbs: file(relativePath: { eq: "JBS.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jequiti: file(relativePath: { eq: "Jequiti.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      luft: file(relativePath: { eq: "LuftSolutions.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notredame: file(relativePath: { eq: "notredame.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peugeot: file(relativePath: { eq: "Peugeot.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rodopark: file(relativePath: { eq: "Rodopark.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sbt: file(relativePath: { eq: "SBT.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      telhanorte: file(relativePath: { eq: "Telhanorte.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totvs: file(relativePath: { eq: "Totvs.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volkswagen: file(relativePath: { eq: "volkswagen.png" }) {
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
