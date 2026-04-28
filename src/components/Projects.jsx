import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../data'

/* ── 3D Tilt — fixed so links still open ── */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x  = e.clientX - rect.left
    const y  = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const tiltX =  ((y - cy) / cy) * 8
    const tiltY = -((x - cx) / cx) * 0
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015,1.015,1.015)`
  }

  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

/* ── Single project card ── */
function ProjectCard({ p, i }) {
  // triggerOnce: false → animation replays every time user scrolls back
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false })

  const openLink = (url, e) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      className={p.featured ? 'col-span-1 lg:col-span-2' : ''}
    >
      <TiltCard className="h-full">
        <div
          className="group relative h-full cursor-pointer overflow-hidden transition-colors duration-300"
          style={{
            background: 'var(--bg2)',
            outline: '1px solid var(--border)',
            minHeight: p.featured ? 260 : 'auto',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--card)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
        >
          {/* Bottom sweep line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
            style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
          />

          {/* Glow overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at 30% 40%, ${p.color}0d, transparent 70%)` }}
          />

          {/* Inner content — translateZ for 3D depth */}
          <div
            className={`relative p-8 lg:p-10 ${p.featured ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center' : ''}`}
            style={{ transform: 'translateZ(20px)' }}
          >
            <div>
              {/* Number */}
              <div
                className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.2em] uppercase mb-5"
                style={{ color: p.color }}
              >
                {p.num} {p.featured && '— Featured'}
                <span className="h-px flex-1 max-w-[40px]" style={{ background: p.color, opacity: 0.35 }} />
              </div>

              {/* Title */}
              <h3
                className="font-bebas tracking-wide leading-none mb-1"
                style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--white)' }}
              >
                {p.title}
              </h3>
              <p className="font-mono text-[0.6rem] tracking-widest uppercase mb-4" style={{ color: p.color }}>
                {p.subtitle}
              </p>
              <p className="text-[0.88rem] leading-[1.8] mb-5" style={{ color: 'var(--gray)' }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[0.58rem] px-2.5 py-1 rounded-sm tracking-wide"
                    style={{ border: `1px solid ${p.color}40`, color: p.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links — proper <a> tags, z-index above tilt */}
              <div className="flex gap-6 relative z-20">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="group/link flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.15em] uppercase transition-colors"
                  style={{ color: 'var(--cyan)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--cyan)'}
                >
                  🔗 Live Demo
                  <span className="transition-transform group-hover/link:translate-x-1.5">→</span>
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="group/link flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.15em] uppercase transition-colors"
                  style={{ color: 'var(--gray)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
                >
                  🐙 GitHub
                  <span className="transition-transform group-hover/link:translate-x-1.5">→</span>
                </a>
              </div>
            </div>

            {/* Featured mockup chart */}
            {p.featured && (
              <div
                className="relative h-44 rounded border flex items-end justify-center gap-2 px-6 pb-5 overflow-hidden"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(255,34,68,0.06), transparent)' }}
                />
                {[55,85,40,72,60,88,45,70,50,80].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: 'linear-gradient(to top, #ff2244, #ffd166)',
                      opacity: 0.75,
                      animation: `barPulse 2s ease ${j * 0.12}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: false })

  return (
    <section id="projects" className="py-32 px-[5vw] relative z-10" style={{ background: 'var(--bg2)' }}>
      <style>{`
        @keyframes barPulse {
          from { opacity: 0.5; transform: scaleY(0.85); }
          to   { opacity: 1;   transform: scaleY(1); }
        }
      `}</style>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--red)' }}>
          03 &nbsp;— Projects
          <span className="w-[60px] h-px block" style={{ background: 'var(--red)', opacity: 0.4 }} />
        </div>
        <h2 className="font-bebas leading-[0.9]" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: 'var(--white)' }}>
          7 LIVE<br/>PRODUCTIONS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}
