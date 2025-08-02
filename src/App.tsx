import About from "./components/About"
import Faq from "./components/FAQ"
import Governance from "./components/Governance"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Roadmap from "./components/Roadmap"
import Staking from "./components/Staking"
import Token  from "./components/Token"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Token />
    <Staking />
    <Governance />
    <Roadmap />
    <Faq />
    </>
  )
}

export default App