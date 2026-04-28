import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export function Footer() {
  const { dark } = useTheme()
  return (
    <footer
      className="border-t px-[5vw] py-6 flex flex-wrap items-center justify-between gap-4 relative z-10"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <span className="font-mono text-[0.62rem] tracking-[0.1em]" style={{ color: 'var(--gray)' }}>
        © 2025 Nikhil Kumar — Built with React 18, Tailwind CSS & Three.js
      </span>

      <div className="flex items-center gap-4">
        <a href="https://github.com/nikhilandc" target="_blank" rel="noopener noreferrer"
          className="font-mono text-[0.62rem] tracking-widest uppercase transition-colors cursor-none"
          style={{ color: 'var(--gray)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
        >
          GitHub →
        </a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-525965316" target="_blank" rel="noopener noreferrer"
          className="font-mono text-[0.62rem] tracking-widest uppercase transition-colors cursor-none"
          style={{ color: 'var(--gray)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
        >
          LinkedIn →
        </a>
        <span className="font-bebas text-xl tracking-widest text-gradient-red">NK</span>
      </div>
    </footer>
  )
}

export function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#040408' }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated ring behind NK */}
      <div className="relative flex items-center justify-center mb-6">
        <motion.div
          className="absolute w-36 h-36 rounded-full border"
          style={{ borderColor: 'rgba(255,34,68,0.3)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border"
          style={{ borderColor: 'rgba(0,245,212,0.2)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="font-bebas leading-none text-gradient-red"
          style={{ fontSize: 'clamp(3rem,10vw,6rem)', letterSpacing: '0.1em' }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          NK
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #ff2244, #ffd166)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          onAnimationComplete={onDone}
        />
      </div>

      <motion.p
        className="font-mono text-[0.62rem] tracking-[0.35em] uppercase mt-5"
        style={{ color: '#555' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading Experience...
      </motion.p>
    </motion.div>
  )
}
