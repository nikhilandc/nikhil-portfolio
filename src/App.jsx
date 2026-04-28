import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider, useTheme } from './context/ThemeContext'

import Cursor     from './components/Cursor'
import { Loader, Footer } from './components/Footer'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import StatsBar   from './components/StatsBar'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'

function PortfolioContent() {
  const [loaded, setLoaded] = useState(false)
  const { dark } = useTheme()

  return (
    <>
      <Cursor />

      {/* Noise grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Loader */}
      <AnimatePresence>
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Main content */}
      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
