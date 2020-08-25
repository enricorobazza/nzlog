import React from "react"
import Img from "gatsby-image"
import styles from "./banner.module.scss"
import globalStyles from "../../styles.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Banner2 = () => {
  const data = useStaticQuery(graphql`
    query {
      machine: file(relativePath: { eq: "image2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${globalStyles.wrapper}`}>
        <div
          className={`${styles.textContainer} col-7 col-xl-6 col-lg-6 col-md-6 col-xs-12 col-xs-12 col-xxs-12`}
        >
          <div className={styles.textWrapper}>
            <div className={styles.title}>
              Tenha a sua Vending Machine <br /> com custo zero
            </div>

            <div className={styles.description}>
              A melhor opção para manter a sua equipe produtiva e o seu ambiente
              de trabalho satisfatório
            </div>
          </div>
        </div>
        <div
          className={`${styles.imageContainer} col-5 col-xl-6 col-lg-6 col-md-6 col-xs-12 col-xs-12 col-xxs-12`}
        >
          <Img fluid={data.machine.childImageSharp.fluid} />
        </div>
      </div>

      <svg className={styles.svg} viewBox="0 0 595.91 95.64">
        <path
          d="M0,353.78s152,39.66,287.62,0c211.23-61.8,307.66,0,307.66,0v67.16H0"
          transform="translate(0.13 -325.81)"
          className={styles.wave}
        />
      </svg>
    </div>
  )
}

export default Banner2