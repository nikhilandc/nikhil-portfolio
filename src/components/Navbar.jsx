import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)
  const { dark } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const downloadResume = () => {
    const a = document.createElement('a')
    a.href     = '/Nikhil_Kumar_Resume.pdf'
    a.download = 'Nikhil_Kumar_Resume.pdf'
    a.click()
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.7, delay: 2.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-[5vw] py-4 flex items-center justify-between transition-all duration-500"
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        background: scrolled
          ? dark ? 'rgba(4,4,8,0.85)' : 'rgba(248,244,240,0.85)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-bebas text-2xl tracking-widest text-gradient-red cursor-none"
      >
        NK
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map(l => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              className="cursor-none font-mono text-[0.68rem] tracking-[0.15em] uppercase transition-colors duration-300 relative group"
              style={{ color: active === l.toLowerCase() ? 'var(--white)' : 'var(--gray)' }}
            >
              {l}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                style={{
                  background: 'var(--red)',
                  width: active === l.toLowerCase() ? '100%' : '0%',
                }}
              />
            </button>
          </li>
        ))}

        {/* Resume btn */}
        <li>
          <button
            onClick={downloadResume}
            data-hover
            className="cursor-none font-mono text-[0.65rem] tracking-[0.1em] uppercase px-4 py-2 rounded-sm border transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5"
            style={{ borderColor: 'var(--red)', color: 'var(--red)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)' }}
          >
            📄 Resume
          </button>
        </li>

        {/* Theme toggle */}
        <li><ThemeToggle /></li>
      </ul>

      {/* Mobile right cluster */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => setOpen(!open)}
          className="cursor-none flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--white)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ${open ? 'opacity-0' : ''}`}          style={{ background: 'var(--white)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--white)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 right-0 backdrop-blur-xl border-b flex flex-col items-center gap-5 py-8"
            style={{ background: dark ? 'rgba(8,8,18,0.97)' : 'rgba(237,232,226,0.97)', borderColor: 'var(--border)' }}
          >
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="cursor-none font-mono text-sm tracking-widest uppercase transition-colors"
                style={{ color: 'var(--gray)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
              >
                {l}
              </button>
            ))}
            <button onClick={downloadResume} data-hover
              className="cursor-none font-mono text-sm tracking-widest uppercase px-6 py-2.5 rounded-sm border"
              style={{ borderColor: 'var(--red)', color: 'var(--red)' }}
            >
              📄 Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
