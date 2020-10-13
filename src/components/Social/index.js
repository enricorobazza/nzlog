import React, { useState, useEffect } from "react"
import CallToAction from "../CallToAction"
import Card from "./Card"
import styles from "./social.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useWindowDimensions from "../../utils/dimensions"

const Social = () => {
  useEffect(() => {
    setCurrent(1)
  }, [])
  const { width } = useWindowDimensions()
  const [current, setCurrent] = useState(0)
  const [shiftMargin, setShiftMargin] = useState()

  useEffect(() => {
    /* $xxs: 320px;
      $xs: 480px;
      $sm: 600px;
      $md: 768px;
      $lg: 900px;
      $xl: 1024px;
      $xxl: 1200px;
      $xxxl: 1500px; */
    // col-6 col-xl-6 col-lg-8 col-md-8 col-sm-10 col-xs-10 col-xs-12 col-xxs-12
    if (width > 900) setShiftMargin(50)
    else if (width > 600) setShiftMargin(67)
    else if (width > 480) setShiftMargin(90)
    else setShiftMargin(107)
  }, [width])

  const [depositions, setDepositions] = useState([
    {
      text: (
        <>
          1 - Passando para deixar registrado a <b>eficiência</b> e{" "}
          <b>agilidade</b> no atendimento sempre que solicitado, e confiança dos
          consumidores com relação aos produtos da marca.
        </>
      ),
      client: "Fabiana",
      company: "St. Marchê",
    },
    {
      text: (
        <>
          2 - Passando para deixar registrado a <b>eficiência</b> e{" "}
          <b>agilidade</b> no atendimento sempre que solicitado, e confiança dos
          consumidores com relação aos produtos da marca.
        </>
      ),
      client: "Fabiana",
      company: "St. Marchê",
    },
    {
      text: (
        <>
          3 - Passando para deixar registrado a <b>eficiência</b> e{" "}
          <b>agilidade</b> no atendimento sempre que solicitado, e confiança dos
          consumidores com relação aos produtos da marca.
        </>
      ),
      client: "Fabiana",
      company: "St. Marchê",
    },
  ])

  const changeDepositions = direction => {
    const newCurrent = current + direction
    if (newCurrent >= 0 && newCurrent < depositions.length)
      setCurrent(current + direction)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        O que nossos parceiros
        <br /> pensam sobre nós
      </div>
      <div className={styles.description}>
        Procuramos sempre proporcionar a melhor experiência
      </div>
      <div
        className={`${styles.depositionsContainer} col-7 col-xxxl-10 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-xs-12 col-xs-12 col-xxs-12`}
      >
        <div
          className={`${styles.btnPrev} ${styles.btn} ${
            current === 0 && styles.hidden
          }`}
          onClick={() => changeDepositions(-1)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "arrow-left"]}
          />
        </div>

        <div
          className={`${styles.btnNext} ${styles.btn} ${
            current === depositions.length - 1 && styles.hidden
          }`}
          onClick={() => changeDepositions(1)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "arrow-right"]}
          />
        </div>
        <div
          className={styles.depositionsWrapper}
          style={{ marginLeft: `${-shiftMargin * current + 40}%` }}
          // style={{ marginLeft: "25%" }}
        >
          {depositions.map((deposition, index) => {
            return (
              <Card
                key={index}
                text={deposition.text}
                clientName={deposition.client}
                clientCompany={deposition.company}
                index={index}
                current={current}
              ></Card>
            )
          })}
        </div>
      </div>

      <CallToAction />
    </div>
  )
}

export default Social
