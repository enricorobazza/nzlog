import React, {useEffect, useRef} from "react"
import styles from "./hardpart.module.scss"
import globalStyles from "../../styles.module.scss"

import CallToAction from "../CallToAction"

const HardPart = ({setServicesRef}) => {
  const ref = useRef()

  useEffect(()=>{
    setServicesRef(ref.current);
  }, [ref.current])

  const services = [
    { title: "Instalação" },
    { title: "Abastecimento" },
    { title: "Manutenção" },
  ]

  return (
    <div ref={ref} className={`${globalStyles.wrapper} ${styles.wrapper}`}>
      <div className={styles.title}>Nós fazemos a parte difícil</div>
      <div className={styles.servicesWrapper}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceContainer} col-4 col-xl-4 col-lg-4 col-md-6 col-xs-12 col-xs-12 col-xxs-12`}
          >
            <div className={styles.service}>
              <div className={styles.serviceImg}>IMAGEM</div>
              <div className={styles.serviceTitle}>{service.title}</div>
            </div>
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  )
}

export default HardPart
