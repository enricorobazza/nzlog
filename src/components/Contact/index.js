import React, {useRef, useEffect, useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import axios from 'axios'

import styles from "./contact.module.scss"

const Contact = ({setContactRef}) => {
  const ref = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact.webp" }) {
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
            <form action="#" onSubmit={async (e) => {
              e.preventDefault();
              try{
                const answer = await axios.post('mail.php', {name, email, message, phone});
                console.log(answer);
                alert('Chegou !!');
              }
              catch(err){
                alert('erro!!');
                console.log(err);
              }
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
