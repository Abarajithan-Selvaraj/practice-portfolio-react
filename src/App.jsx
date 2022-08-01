import React from 'react'
import Header from './components/header/script'
import Nav from './components/nav/script'
import About from './components/about/script'
import Experience from './components/experience/script'
import Services from './components/services/script'
import Portfolio from './components/portfolio/script'
import Testimonials from './components/testimonials/script'
import Contact from './components/contact/script'
import Footer from './components/footer/script'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App