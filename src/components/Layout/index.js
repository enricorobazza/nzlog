/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import Footer from "../Footer"

import "./layout.scss"
import "./global-styles.scss"
import styles from "./layout.module.scss"
import "../../utils/fontawesome"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.grow}>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
