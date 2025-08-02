import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
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
    </>
  )
}

export default App