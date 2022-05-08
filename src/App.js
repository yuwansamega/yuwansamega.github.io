import React, {Fragment} from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Footer />
    </Fragment>
  )
}

export default App