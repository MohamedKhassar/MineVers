import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Faq from "./components/FAQ"
import Footer from "./components/Footer"
import Governance from "./components/Governance"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Roadmap from "./components/Roadmap"
import Staking from "./components/Staking"
import Token from "./components/Token"
import NotFound from "./components/NotFound"
import WhitepaperPage from "./components/WhitePaper"
import ContactSection from "./components/Contact"
import SmallNavbar from "./components/SmallNavbar"

const App = () => {
  return (
    <>
       <Layout>
        <Navbar />
        <SmallNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Token />
                <Staking />
                <Governance />
                <Roadmap />
                <Faq />
                <ContactSection  />
              </>
            }
          />
          {/* Catch-all route */}
            <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App