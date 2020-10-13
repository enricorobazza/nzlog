import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Products from "../components/Products"
import HardPart from "../components/HardPart"
import Establishments from "../components/Establishments"
import Advantages from "../components/Advantages"
import Places from "../components/Places"
import Social from "../components/Social"

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
    <Establishments />
    <Advantages />
    <Places />
    <Social />
  </Layout>
)

export default IndexPage
