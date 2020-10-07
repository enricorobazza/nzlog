import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./establishments.module.scss"
import CallToAction from "../CallToAction"

const Establishments = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "coke_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const establishments = [
    "Condomínios",
    "Escritórios",
    "Hospitais",
    "Indústrias",
    "Parques",
    "Hotéis",
    "Estacionamentos",
    "E muitos outros!",
  ]

  return (
    <BackgroundImage
      className={styles.background}
      fluid={data.bg.childImageSharp.fluid}
    >
      <div className={styles.wrapper}>
        <div className={styles.title}>Onde podem ser instaladas</div>
        <div className={styles.description}>
          As Vending Machines podem ser instaladas em qualquer lugar, desde que
          se tenha visibilidade e um alto fluxo de pessoas, como em:
        </div>
        <div className={styles.establishmentsContainer}>
          {establishments.map(establishment => {
            return (
              <div
                className={`${styles.establishment} col-4 col-xl-4 col-lg-4 col-md-4 col-xs-6 col-xs-6 col-xxs-6`}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "map-marker-alt"]}
                />
                {establishment}
              </div>
            )
          })}
        </div>
        <div className={styles.description}>
          Entre em contato para saber se o seu local está disponível
        </div>
        <CallToAction outlined />
      </div>
    </BackgroundImage>
  )
}

export default Establishments
