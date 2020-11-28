import React, {useEffect, useRef} from "react"
import styles from "./hardpart.module.scss"
import globalStyles from "../../styles.module.scss"
import { useStaticQuery, graphql } from "gatsby"

import CallToAction from "../CallToAction"

const HardPart = ({setServicesRef}) => {
  const data = useStaticQuery(graphql`
    query {
      install: file(relativePath: { eq: "install.svg" }) {
        extension
        publicURL
      }
      supply: file(relativePath: { eq: "supply.svg" }) {
        extension
        publicURL
      }
      coke: file(relativePath: { eq: "coke-bottle.svg" }) {
        extension
        publicURL
      }
      maintenance: file(relativePath: { eq: "maintenance.svg" }) {
        extension
        publicURL
      }
    }
  `)

  const ref = useRef()

  useEffect(()=>{
    setServicesRef(ref.current);
  }, [ref.current])

  const services = [
    { 
      title: "Instalação", 
      icon: <img src={data.install.publicURL} className={`${styles.icon}`}/>,
      text: "Para que você não tenha trabalho algum"
    },
    { 
      title: "Abastecimento", 
      icon: <img src={data.coke.publicURL} className={`${styles.icon} ${styles.verticalIcon}`}/>,
      text: "Para você ter tudo o que precisar, quando precisar"
    },
    { 
      title: "Manutenção", 
      icon: <img src={data.maintenance.publicURL} className={`${styles.icon}`}/>,
      text: "Para garantir sempre o melhor funcionamento"
    },
  ]

  return (
    <div ref={ref} className={`${globalStyles.wrapper} ${globalStyles.wrapperMax} ${styles.wrapper}`}>
      <h2 className={styles.title}>Nós fazemos a parte difícil</h2>
      <div className={styles.description}>Com a NZLog você não precisa se preocupar com nada</div>
      <div className={styles.servicesWrapper}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceContainer} col-4 col-xl-4 col-lg-4 col-md-6 col-xs-12 col-xs-12 col-xxs-12`}
          >
            <div className={styles.service}>
              <div className={styles.serviceLeft}>
                {service.icon}
              </div>
              <div className={styles.serviceRight}> 
                <div className={styles.serviceTitle}>{service.title}</div>
                <div className={styles.serviceDescription}>{service.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.description} ${styles.bottomDescription}`}>
          Além disso, os produtos podem ser liberados por nós de maneira remota caso um consumidor encontre problemas ao usar a máquina
      </div>
      <CallToAction />
    </div>
  )
}

export default HardPart
