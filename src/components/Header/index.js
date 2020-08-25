import React from "react"
import styles from "./header.module.scss"
import globalStyles from "../../styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => (
  <header className={styles.header}>
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
        <div className={styles.hamburguer}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "bars"]}
            // onClick={() => {
            //   setDropdown(!dropdown)
            // }}
          />
        </div>
      </div>
    </div>
  </header>
)

export default Header
