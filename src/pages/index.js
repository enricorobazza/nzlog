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

export const RefsContext = createContext(0);

const IndexPage = () => {
  const [contactRef, setContactRef] = useState()
  const [headerRef, setHeaderRef] = useState()
  const [servicesRef, setServicesRef] = useState()
  const [establishmentsRef, setEstablishmentsRef] = useState()
  const [advantagesRef, setAdvantagesRef] = useState()
  const [placesRef, setPlacesRef] = useState()

  return(
    <RefsContext.Provider value={{
      contactRef, headerRef, servicesRef, establishmentsRef, advantagesRef, placesRef
    }}>
      <Layout>
        <SEO title="Home" />
        <div className={styles.gradient}>
          <Header setHeaderRef={setHeaderRef}/>
          <Banner />
        </div>
        <Clients />
        <Products />
        <HardPart setServicesRef={setServicesRef}/>
        <Establishments setEstablishmentsRef={setEstablishmentsRef}/>
        <Advantages setAdvantagesRef={setAdvantagesRef}/>
        <Places setPlacesRef={setPlacesRef}/>
        <Social />
        <Contact setContactRef={setContactRef}/>
        <Footer />
      </Layout>
    </RefsContext.Provider>
  )
}
export default IndexPage
