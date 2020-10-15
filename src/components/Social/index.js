import React, { useState, useEffect } from "react"
import CallToAction from "../CallToAction"
import Card from "./Card"
import styles from "./social.module.scss"
import useWindowDimensions from "../../utils/dimensions"
import { ArrowButton } from "./ArrowButton"

const Social = () => {
  useEffect(() => {
    setCurrent(1)
  }, [])
  const { width } = useWindowDimensions()
  const [current, setCurrent] = useState(0)
  const [size, setSize] = useState(0)
  const [touch, setTouch] = useState()

  const sizes = [
    { width: "33%", breakpoints: [1 / 3, 0, -1 / 3] },
    { width: "50%", breakpoints: [5 / 13, -2 / 18, -3 / 5] },
    { width: "90%", breakpoints: [2 / 10, -14 / 20, -32 / 20] },
  ]

  useEffect(() => {
    /* $xxs: 320px;
      $xs: 480px;
      $sm: 600px;
      $md: 768px;
      $lg: 900px;
      $xl: 1024px;
      $xxl: 1200px;
      $xxxl: 1500px; */

    if (width > 1200) setSize(0)
    else if (width > 900) setSize(1)
    else setSize(2)
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
        className={`${styles.depositionsContainer}`}
        onTouchMove={e => {
          // e.preventDefault()
        }}
        onTouchStart={e => {
          const { pageX, pageY } = e.changedTouches[0]
          setTouch({ pageX, pageY, time: new Date().getTime() })

          // e.preventDefault()
        }}
        onTouchEnd={e => {
          if (!touch) return
          const { pageX, pageY } = e.changedTouches[0]
          const dist = pageX - touch.pageX
          const elapsedTime = new Date().getTime() - touch.time

          if (
            elapsedTime <= 800 &&
            Math.abs(pageY - touch.pageY) <= 50 &&
            Math.abs(dist) >= 20
          ) {
            if (dist > 0) changeDepositions(-1)
            else changeDepositions(1)
          }
          // e.preventDefault()
        }}
      >
        <ArrowButton
          width={sizes[size].width}
          current={current}
          length={depositions.length}
          onChange={changeDepositions}
        />

        <ArrowButton
          next
          width={sizes[size].width}
          current={current}
          length={depositions.length}
          onChange={changeDepositions}
        />

        <div
          className={styles.depositionsWrapper}
          style={{
            marginLeft: `${sizes[size].breakpoints[current] * 100}%`,
          }}
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
                width={sizes[size].width}
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
