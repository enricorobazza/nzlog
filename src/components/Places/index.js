import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./places.module.scss"

const Places = () => {
  const data = useStaticQuery(graphql`
    query {
      rio: file(relativePath: { eq: "rio.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      parana: file(relativePath: { eq: "parana.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sp: file(relativePath: { eq: "sp.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const places = [
    {
      title: "Rio de Janeiro",
      image: data.rio,
      description: "Região Sul Fluminense",
      padding: "5%",
    },
    {
      title: "São Paulo",
      image: data.sp,
      description: (
        <>
          Grande São Paulo <br /> Santos <br /> Campinas
        </>
      ),
      padding: 0,
    },
    {
      title: "Paraná",
      image: data.parana,
      description: "Região Metropolitana de Curitiba",
      padding: "5%",
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Onde atuamos</div>
      <div className={styles.description}>
        Estamos presentes em 3 estados, em breve atenderemos mais regiões
      </div>
      <div className={styles.placesContainer}>
        {places.map(place => {
          return (
            <div
              className={`${styles.place} col-4 col-xl-4 col-lg-6 col-md-12 col-xs-12 col-xs-12 col-xxs-12`}
            >
              <div className={styles.placeTitle}>{place.title}</div>
              <div style={{ padding: place.padding }}>
                <Img
                  className={styles.placeImage}
                  fluid={place.image.childImageSharp.fluid}
                />
              </div>
              <div className={styles.placeDescription}>{place.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Places
