import React, { useState, useCallback, useRef, useEffect } from "react"
import styles from "./header.module.scss"
import globalStyles from "../../styles.module.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  const [fixed, setFixed] = useState(false)
  const [offsetTop, setOffseTop] = useState(500)
  const ref = useRef(null)

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
    // setOffseTop(ref.current.offsetTop+40)
    setOffseTop(ref.current.offsetHeight/3)
  }, [])

  return (
    <header ref={ref} className={`${styles.header} ${fixed && styles.fixed}`}>
      <div className={`${styles.wrapper} ${globalStyles.wrapper}`}>
        <div className={styles.logo}>
          <a href="#">NZLog</a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul}>
            <li>Máquinas</li>
            <li>Serviços</li>
            <li>Onde Atuamos</li>
            <li className={styles.button}>Contato</li>
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
