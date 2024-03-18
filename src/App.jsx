import './App.css'
import AurServices from './components/AurServices'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBAr from './components/NavBAr'
import Technology from './components/Technology'
import { Element } from "react-scroll"

function App() {

  return (
    <div>
      <NavBAr />
      <Element name="hero" >
        <Hero />
      </Element>

      <Element name="aurservices">
        <AurServices />
      </Element>
      <Element name="technology">
        <Technology />
      </Element>
      <Element name='clients'>
        <Clients />
      </Element>
      <Element name='about'>
        <Footer />
      </Element>
    </div>

  )
}

export default App
