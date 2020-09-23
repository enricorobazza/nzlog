import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./products.module.scss"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      products: file(relativePath: { eq: "products.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coca: file(relativePath: { eq: "coca.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fanta: file(relativePath: { eq: "fanta.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monster: file(relativePath: { eq: "monster.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matte: file(relativePath: { eq: "matte.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crystal: file(relativePath: { eq: "crystal.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delvalle: file(relativePath: { eq: "delvalle.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schweppes: file(relativePath: { eq: "schweppes.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const products = [
    data.coca,
    data.fanta,
    data.monster,
    data.matte,
    data.crystal,
    data.delvalle,
    data.schweppes,
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Img fluid={data.products.childImageSharp.fluid} />
      </div>

      <div className={styles.wrapper}>
        <span className={styles.title}>
          Os produtos Coca-Cola na <br /> palma da sua mão
        </span>
        <br />
        <div className={styles.description}>
          Disponha da grande variedade de produtos Coca-Cola para deixar o seu
          ambiente de trabalho ainda mais agradável! Estão disponíveis:
        </div>
        <div className={styles.products}>
          {products.map(product => (
            <div className={styles.productContainer}>
              <Img fluid={product.childImageSharp.fluid} />
            </div>
          ))}
        </div>
        <div className={styles.callToActionContainer}>
          <a className={styles.callToAction} href="#">
            Entrar em contato
          </a>
        </div>
      </div>
    </div>
  )
}

export default Products
