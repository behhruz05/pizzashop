import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Menu />
        <Events />
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
