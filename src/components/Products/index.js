import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./products.module.scss"
import CallToAction from "../CallToAction"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      products: file(relativePath: { eq: "products2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coca: file(relativePath: { eq: "coca.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fanta: file(relativePath: { eq: "fanta.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monster: file(relativePath: { eq: "monster.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matte: file(relativePath: { eq: "matte.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crystal: file(relativePath: { eq: "crystal.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delvalle: file(relativePath: { eq: "delvalle.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schweppes: file(relativePath: { eq: "schweppes.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coca_active: file(relativePath: { eq: "coca_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fanta_active: file(relativePath: { eq: "fanta_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monster_active: file(relativePath: { eq: "monster_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matte_active: file(relativePath: { eq: "matte_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crystal_active: file(relativePath: { eq: "crystal_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delvalle_active: file(relativePath: { eq: "delvalle_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schweppes_active: file(relativePath: { eq: "schweppes_active.webp" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      products_linear: file(relativePath: { eq: "products3.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const products = [
    { img: data.coca, active: data.coca_active },
    { img: data.fanta, active: data.fanta_active },
    { img: data.monster, active: data.monster_active },
    { img: data.matte, active: data.matte_active },
    { img: data.crystal, active: data.crystal_active },
    { img: data.delvalle, active: data.delvalle_active },
    { img: data.schweppes, active: data.schweppes_active },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Img fluid={data.products.childImageSharp.fluid} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Os produtos
            <span className={styles.noBreak}> Coca-Cola </span>
            <br />
            na palma da sua mão
          </h2>
          <br />
          <div className={styles.description}>
            Disponha da grande variedade de produtos Coca-Cola para deixar o seu
            ambiente de trabalho ainda mais agradável! Estão disponíveis:
          </div>
          <div className={styles.products}>
            {products.map((product, index) => (
              <div className={styles.productContainer} key={index}>
                <Img
                  className={styles.productWipedOut}
                  fluid={product.img.childImageSharp.fluid}
                />
                <Img
                  className={styles.productActive}
                  fluid={product.active.childImageSharp.fluid}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.productsLinear}>
          <Img
            className={styles.productsLinearImgContainer}
            fluid={data.products_linear.childImageSharp.fluid}
          ></Img>
        </div>
        <CallToAction className={styles.callToAction} />
      </div>
    </div>
  )
}

export default Products
