import React, {useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./advantages.module.scss"
import CallToAction from "../CallToAction"

const Advantages = ({setAdvantagesRef}) => {
  const ref = useRef();
  useEffect(()=>{
    setAdvantagesRef(ref.current)
  },[])

  const advantages = [
    {
      title: "Aumenta a produtividade da sua empresa",
      icon: "bolt",
    },
    {
      title: "Aumenta a satisfação com o ambiente",
      icon: "heart",
    },
    {
      title: "Está disponível 24h por dia",
      icon: "clock",
    },
    {
      title: "Possui grande variedade de produtos",
      icon: "wine-bottle",
    },
    {
      title: "É 100% autônoma",
      icon: "percentage",
    },
    {
      title: "Custo zero de instalação e prestação de serviços",
      icon: "dollar-sign",
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
              className={`${styles.advantage} col-4 col-xl-4 col-lg-4 col-md-6 col-xs-6 col-xs-12 col-xxs-12`}
              key={index}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={["fas", advantage.icon]}
              />
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
