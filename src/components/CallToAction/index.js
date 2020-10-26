import React, {useContext} from "react"
import styles from "./calltoaction.module.scss"

import {RefsContext} from '../../pages'

const CallToAction = ({ outlined, className, withoutMargin, shortText }) => {
  const {contactRef, headerRef} = useContext(RefsContext);

  return (
    <div className={`${!withoutMargin && styles.callToActionContainer} ${className}`}>
      <a
        className={`${styles.callToAction} ${outlined ? styles.outlined : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          let toScroll = 0;
          if(document.documentElement.scrollTop > headerRef.clientHeight) toScroll = contactRef.offsetTop;
          else toScroll = contactRef.offsetTop - headerRef.clientHeight;
          window.scroll({
            top: toScroll,
            behavior: 'smooth' 
          });
        }}
      >
        {shortText ? `Contato` : `Entrar em contato`}
      </a>
    </div>
  )
}

export default CallToAction
