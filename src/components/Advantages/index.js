import React, {useRef, useEffect} from "react"
import styles from "./advantages.module.scss"
import CallToAction from "../CallToAction"
import { useStaticQuery, graphql } from "gatsby"

const Advantages = ({setAdvantagesRef}) => {
  const data = useStaticQuery(graphql`
    query {
      bolt: file(relativePath: { eq: "bolt.svg" }) {
        extension
        publicURL
      }
      heart: file(relativePath: { eq: "heart.svg" }) {
        extension
        publicURL
      }
      clock: file(relativePath: { eq: "clock.svg" }) {
        extension
        publicURL
      }
      bottles: file(relativePath: { eq: "bottles.svg" }) {
        extension
        publicURL
      }
      percentage: file(relativePath: { eq: "percentage.svg" }) {
        extension
        publicURL
      }
      money: file(relativePath: { eq: "money.svg" }) {
        extension
        publicURL
      }

      coke: file(relativePath: { eq: "coke-bottle.svg" }) {
        extension
        publicURL
      }
    }
  `)


  const ref = useRef();
  useEffect(()=>{
    setAdvantagesRef(ref.current)
  },[])

  const advantages = [
    {
      title: "Aumenta a produtividade da sua empresa",
      icon: <img src={data.bolt.publicURL} className={styles.icon}/>,
    },
    {
      title: "Aumenta a satisfação com o ambiente",
      icon: <img src={data.heart.publicURL} className={`${styles.icon} ${styles.smaller}`}/>,
    },
    {
      title: "Está disponível 24h por dia",
      icon: <img src={data.clock.publicURL} className={styles.icon}/>,
    },
    {
      title: "Possui grande variedade de produtos",
      icon: <img src={data.coke.publicURL} className={styles.icon}/>,
    },
    {
      title: "É 100% autônoma",
      icon: <img src={data.percentage.publicURL} className={`${styles.icon} ${styles.midBigger}`}/>,
    },
    {
      title: "Custo zero de instalação e prestação de serviços",
      icon: <img src={data.money.publicURL} className={`${styles.icon} ${styles.midSmaller}`}/>,
    },
  ]

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.title}>
        As vantagens de se ter uma vending machine
      </div>
      <div className={styles.description}>
        Além de ter bebidas sempre geladas, as vending machines trazem <br />{" "}
        muitos outros pontos positivos para você
      </div>
      <div className={styles.advantagesContainer}>
        {advantages.map((advantage, index) => {
          return (
            <div
              className={`${styles.advantage} col-4 col-xl-4 col-lg-4 col-md-6 col-xs-6 col-xs-6 col-xxs-12`}
              key={index}
            >
              {advantage.icon}
              {advantage.title}
            </div>
          )
        })}
      </div>
      <CallToAction />
    </div>
  )
}

export default Advantages
