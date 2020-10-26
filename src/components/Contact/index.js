import React, {useRef, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./contact.module.scss"

const Contact = ({setContactRef}) => {
  const ref = useRef();

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    setContactRef(ref.current)

  }, [ref.current])

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Ainda não se convenceu?</div>
          <div className={styles.description}>
            Entre em contato conosco e tire suas dúvidas!
          </div>
          <div className={styles.formContainer}>
            <form action="#">
              <div className={styles.formRow}>
                <label for="name">Nome</label>
                <input name="name" type="text"></input>
              </div>

              <div className={styles.formRow}>
                <label for="tel">Telefone</label>
                <input name="tel" type="tel"></input>
              </div>

              <div className={styles.formRow}>
                <label for="email">E-mail</label>
                <input name="email" type="email"></input>
              </div>

              <div className={styles.formRow}>
                <label for="message">Mensagem</label>
                <textarea rows="5" name="message"></textarea>
              </div>

              <button className={styles.btnEnviar} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <BackgroundImage
        className={styles.background}
        fluid={data.bg.childImageSharp.fluid}
      ></BackgroundImage>
    </div>
  )
}

export default Contact
