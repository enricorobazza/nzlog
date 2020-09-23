import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Products from "../components/Products"
import HardPart from "../components/HardPart"

import styles from "../styles.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.gradient}>
      <Header />
      <Banner />
    </div>
    <Clients />
    <Products />
    <HardPart />
  </Layout>
)

export default IndexPage
