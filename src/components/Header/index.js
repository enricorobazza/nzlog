import React, { useState, useCallback, useRef, useEffect, useContext } from "react"
import styles from "./header.module.scss"
import globalStyles from "../../styles.module.scss"
import CallToAction from '../CallToAction'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {RefsContext} from '../../pages'

const Header = ({setHeaderRef}) => {
  const [fixed, setFixed] = useState(false)
  const [offsetTop, setOffseTop] = useState(500)
  const ref = useRef(null)

  const {servicesRef, establishmentsRef, advantagesRef, placesRef} = useContext(RefsContext);


  const listenToScroll = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll >= offsetTop) setFixed(true)
    else setFixed(false)
  }, [offsetTop])

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => {
      window.removeEventListener("scroll", listenToScroll)
    }
  }, [listenToScroll])

  useEffect(() => {
    setOffseTop(ref.current.offsetHeight/3)
  }, [])

  useEffect(() => {
    setHeaderRef(ref.current)
  }, [ref.current])

  const applyFixedHeaderAndScroll = (offset) => {
    let toScroll = 0;
    if(document.documentElement.scrollTop > ref.current.clientHeight) toScroll = offset;
    else toScroll = offset - ref.current.clientHeight;
    window.scroll({
      top: toScroll,
      behavior: 'smooth' 
    });
  }

  const homeClick = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth' 
    });
  }

  const servicesClick = (e) => {
    e.preventDefault();
    applyFixedHeaderAndScroll(servicesRef.offsetTop-100)
  }
  const establishmentsClick = (e) => {
    e.preventDefault();
    applyFixedHeaderAndScroll(establishmentsRef.offsetTop)

  }
  const advantagesClick = (e) => {
    e.preventDefault();
    applyFixedHeaderAndScroll(advantagesRef.offsetTop)
  }
  const placesClick = (e) => {
    e.preventDefault();
    applyFixedHeaderAndScroll(placesRef.offsetTop)
  }

  return (
    <header ref={ref} className={`${styles.header} ${fixed && styles.fixed}`}>
      <div className={`${styles.wrapper} ${globalStyles.wrapper}`}>
        <div className={styles.logo}>
          <a href="#" onClick={homeClick}>NZLog</a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul}>
            <li onClick={servicesClick}>Serviços</li>
            <li onClick={establishmentsClick}>Onde podem ser instaladas</li>
            <li onClick={advantagesClick}>Vantagens</li>
            <li onClick={placesClick}>Onde Atuamos</li>
            <li className={styles.button}><CallToAction withoutMargin outlined shortText/></li>
          </ul>
          {/* <div className={styles.hamburguer}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "bars"]}
            // onClick={() => {
            //   setDropdown(!dropdown)
            // }}
          />
        </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
