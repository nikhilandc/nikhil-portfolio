import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      data-hover
      whileTap={{ scale: 0.9 }}
      className="cursor-none relative w-12 h-6 rounded-full border border-border flex items-center px-1 transition-all duration-300"
      style={{ background: dark ? 'rgba(255,34,68,0.1)' : 'rgba(255,209,102,0.15)' }}
      aria-label="Toggle theme"
      title={dark ? 'Switch to Light' : 'Switch to Dark'}
    >
      {/* Track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ background: dark ? 'rgba(255,34,68,0.08)' : 'rgba(255,209,102,0.12)' }}
        transition={{ duration: 0.3 }}
      />

      {/* Knob */}
      <motion.div
        className="relative z-10 w-4 h-4 rounded-full flex items-center justify-center text-[0.55rem]"
        animate={{
          x: dark ? 0 : 22,
          background: dark ? '#ff2244' : '#ffd166',
          boxShadow: dark ? '0 0 10px rgba(255,34,68,0.6)' : '0 0 10px rgba(255,209,102,0.6)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={dark ? 'moon' : 'sun'}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {dark ? '🌙' : '☀️'}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
