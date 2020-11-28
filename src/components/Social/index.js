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

  // const sizes = [
  //   { width: "33%", breakpoints: [1 / 3, 0, -1 / 3] },
  //   { width: "50%", breakpoints: [5 / 13, -2 / 18, -3 / 5] },
  //   { width: "90%", breakpoints: [2 / 10, -14 / 20, -32 / 20] },
  // ]

  const sizes = [
    { width: "33%", breakpoints: [1 / 2, 1/6, -1/6, -1/2, -5/6, -7/6, -3/2] },
    { width: "50%", breakpoints: [39/100, -10/100, -3 / 5, -109.7/100, -159/100, -209.4/100] },
    { width: "90%", breakpoints: [2 / 10, -14 / 20, -32 / 20, -50/20, -68/20, -429/100, -520/100] },
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

  const depositions = [
    {
      text: (
        <>
          O pessoal da NZLog é muito profissional com o suporte, o atendimento, e realmente <b>trazem conforto para nós</b>.
        </>
      ),
      client: "Allan",
      company: "Grupo Notre Dame Intermédica ",
    },
    {
      text: (
        <>
          Passando para deixar registrado a <b>eficiência</b> e{" "}
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
          A máquina com os produtos Coca Cola é um <b>sucesso</b> em nosso condomínio!!!
          Gostamos e recomendamos!!
        </>
      ),
      client: "Valéria",
      company: "Gerente do Condomínio WISE SP",
    },
    {
      shortText: (<>Meu nome é Ana Lucia, sou sub síndica do Cond. Morada Imperial na zona norte de São Paulo,
        Assim que assumimos, fiz contato através do Vending Machine Coca Cola, sempre muito bem
        atendida...</>),
      text: (<>Meu nome é Ana Lucia, sou sub síndica do Cond. Morada Imperial na zona norte de São Paulo,
        Assim que assumimos, fiz contato através do Vending Machine Coca Cola, sempre muito bem
        atendida, já foi marcado uma visita e em poucos dias já tínhamos a nossa primeira Vending
        Machine no Condominio, somente com latinhas.
        Devido ao <b>conforto</b> que nos proporcionou, as vendas cresceram, e logo nos foi oferecido mais
        uma Vending Machine com garrafas de 1,5 e um mix de latinhas, completando a linha.
        Quando a quarentena chegou a Vending Machine <b>foi a salvação</b> para muitos moradores,
        principalmente nos primeiros dias, onde a quarentena foi mais rigorosa.
        Essa parceria nos dá conforto, segurança e valoriza nosso Condominio!</>),
      client: "Ana Lucia",
      company: "Cond. Morada Imperial"
    },
    {
      text: (<>A máquina da Coca Cola em nosso condomínio fez toda a <b>diferença</b>. Só temos elogios por
        parte dos moradores. Seu abastecimento é feito com <b>frequência</b>.
        Recomendamos.</>),
      client: "Alexandre",
      company: "Condomínio Tamboré 6"
    },
    {
      text: (<>Parceiro <b>comprometido</b> com o abastecimento dos equipamentos aqui na Robert Bosch.</>),
      client: "Dauglê Maria Carneiro",
      company: "Filial Robert Bosch"
    },
    {
      shortText: (<>A NZ LOG é responsável por entregar <b>felicidade</b>!
        Com muita <b>dedicação</b> e senso de prioridade a NZ LOG tem como seu principal objetivo entregar
        felicidade as famílias de todo Brasil...</>),
      text: (<>A NZ LOG é responsável por entregar <b>felicidade</b>!
        Com muita <b>dedicação</b> e senso de prioridade a NZ LOG tem como seu principal objetivo entregar
        felicidade as famílias de todo Brasil.
        É responsável por realizar a operação Logística da Coca Cola, para mim os produtos da marca
        são sinônimos de momentos felizes.
        NZ contribui diretamente para que estes momentos felizes sejam proporcionados a minha e
        muitas outras famílias, através de muito foco, trabalho duro, dedicação e o principal sempre
        entregando na hora e local certo!</>),
      client: "Fabio Araujo Ferreira",
      company: "Operação galpão 400 Cajamar"
    }
  ];

  const changeDepositions = direction => {
    const newCurrent = current + direction
    if (newCurrent >= 0 && newCurrent < depositions.length)
      setCurrent(current + direction)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        O que nossos parceiros
        <br /> pensam sobre nós
      </h2>
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
                shortText={deposition.shortText}
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
