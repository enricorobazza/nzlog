import React, {useState, createContext} from "react"

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
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import styles from "../styles.module.scss"

export const ContactOffsetContext = createContext(0);

const IndexPage = () => {
  const [offsetContact, setOffsetContact] = useState(0)

  return(
    <ContactOffsetContext.Provider value={offsetContact}>
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
        <Contact setOffsetContact={setOffsetContact}/>
        <Footer />
      </Layout>
    </ContactOffsetContext.Provider>
  )
}
export default IndexPage
