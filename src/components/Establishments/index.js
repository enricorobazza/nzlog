import React, {useEffect, useRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./establishments.module.scss"
import CallToAction from "../CallToAction"

const Establishments = ({setEstablishmentsRef}) => {
  const ref = useRef();

  useEffect(()=>{
    setEstablishmentsRef(ref.current)
  }, [ref.current])

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "coke_bg.webp" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      map: file(relativePath: { eq: "map.svg" }) {
        extension
        publicURL
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
    <div ref={ref} className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Onde podem ser instaladas</div>
          <div className={styles.description}>
            As Vending Machines podem ser instaladas em qualquer lugar, desde
            que se tenha visibilidade e um alto fluxo de pessoas, como em:
          </div>
          <div className={styles.establishmentsContainer}>
            {establishments.map((establishment, index) => {
              return (
                <div
                  className={`${styles.establishment} col-4 col-xl-6 col-lg-6 col-md-4 col-xs-4 col-xs-6 col-xxs-6`}
                  key={index}
                >
                  <img
                    className={styles.icon}
                    src={data.map.publicURL}
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
      </div>
      <BackgroundImage
        className={styles.background}
        fluid={data.bg.childImageSharp.fluid}
      ></BackgroundImage>
    </div>
  )
}

export default Establishments
