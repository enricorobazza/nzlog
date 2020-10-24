import React, {useContext} from "react"
import styles from "./calltoaction.module.scss"

import {ContactOffsetContext} from '../../pages'

const CallToAction = ({ outlined, className, withoutMargin, shortText }) => {
  const contactOffset = useContext(ContactOffsetContext);

  return (
    <div className={`${!withoutMargin && styles.callToActionContainer} ${className}`}>
      <a
        className={`${styles.callToAction} ${outlined ? styles.outlined : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          // window.scrollTo(0, contactOffset);
          window.scroll({
            top: contactOffset,
            behavior: 'smooth' 
          });
        }}
      >
        {shortText ? `Contato` : `Entrar em contato`}
        {/* {contactOffset} */}
      </a>
    </div>
  )
}

export default CallToAction
