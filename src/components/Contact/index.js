import React, {useRef, useEffect, useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import axios from 'axios'
import LoadingGif from '../../images/loading.gif'

import styles from "./contact.module.scss"

const Contact = ({setContactRef}) => {
  const ref = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact.webp" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      check: file(relativePath: { eq: "check.svg" }) {
        extension
        publicURL
      }
      times: file(relativePath: { eq: "times.svg" }) {
        extension
        publicURL
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
          <h2 className={styles.title}>Ainda não se convenceu?</h2>
          <div className={styles.description}>
            Entre em contato conosco e tire suas dúvidas!
          </div>
          <div className={styles.formContainer}>
            <form action="#" onSubmit={async (e) => {
              e.preventDefault();
              setShowError(false);
              setShowSuccess(false);
              setLoading(true);
              try{
                const answer = await axios.post('mail.php', {name, email, message, phone});
                setMessage("");
                setShowSuccess(true);
                setTimeout(() => {
                  setShowSuccess(false);
                }, 5000)
              }
              catch(err){
                setShowError(true);
                setTimeout(() => {
                  setShowError(false);
                }, 5000)
              }
              setLoading(false);
            }}>
              <div className={styles.formRow}>
                <label for="name">Nome</label>
                <input name="name" type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}>
                </input>
              </div>

              <div className={styles.formRow}>
                <label for="tel">Telefone</label>
                <input name="tel" type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}>
                </input>
              </div>

              <div className={styles.formRow}>
                <label for="email">E-mail</label>
                <input name="email" type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}>
                </input>
              </div>

              <div className={styles.formRow}>
                <label for="message">Mensagem</label>
                <textarea rows="5" name="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}>
                </textarea>
              </div>

              <button className={styles.btnEnviar} type="submit">
                Enviar
              </button>
              {loading && <img className={styles.loadingGif} width="50" src={LoadingGif} alt="Carregando"/>}
              {showSuccess && <div className={styles.formMessage}> 
                <img src={data.check.publicURL} className={`${styles.icon}`} /> 
                Mensagem enviada com sucesso.
              </div>}
              {showError && <div className={styles.formMessage}>
                <img src={data.times.publicURL} className={`${styles.icon}`} />
                Erro ao enviar mensagem.
              </div>}
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
