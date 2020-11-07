import React, {useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./advantages.module.scss"
import CallToAction from "../CallToAction"

import Bolt from '../../icons/bolt.svg'
import Heart from '../../icons/heart.svg'
import Clock from '../../icons/clock.svg'
import Bottles from '../../icons/bottles.svg'
import Percentage from '../../icons/percentage.svg'
import Money from '../../icons/money.svg'


const Advantages = ({setAdvantagesRef}) => {
  const ref = useRef();
  useEffect(()=>{
    setAdvantagesRef(ref.current)
  },[])

  const advantages = [
    {
      title: "Aumenta a produtividade da sua empresa",
      // icon: "bolt",
      icon: <Bolt className={styles.icon}/>,
    },
    {
      title: "Aumenta a satisfação com o ambiente",
      // icon: "heart",
      icon: <Heart className={`${styles.icon} ${styles.smaller}`}/>,
    },
    {
      title: "Está disponível 24h por dia",
      // icon: "clock",
      icon: <Clock className={styles.icon}/>,
    },
    {
      title: "Possui grande variedade de produtos",
      // icon: "wine-bottle",
      icon: <Bottles className={styles.icon}/>,
    },
    {
      title: "É 100% autônoma",
      // icon: "percentage",
      icon: <Percentage className={`${styles.icon} ${styles.midBigger}`}/>,
    },
    {
      title: "Custo zero de instalação e prestação de serviços",
      // icon: "dollar-sign",
      icon: <Money className={`${styles.icon} ${styles.midSmaller}`}/>,
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
              {/* <FontAwesomeIcon
                className={styles.icon}
                icon={["fas", advantage.icon]}
              /> */}
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
