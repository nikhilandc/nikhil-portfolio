import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data'

function SkillCard({ s, i }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:30 }}
      animate={inView ? { opacity:1, y:0 } : { opacity:0, y:30 }}
      transition={{ duration:0.6, delay:(i%3)*0.1 }}
      data-hover
      className="group relative cursor-none overflow-hidden transition-all duration-300"
      style={{ background:'var(--bg)', outline:'1px solid var(--border)' }}
      onMouseEnter={e=>e.currentTarget.style.background='var(--card)'}
      onMouseLeave={e=>e.currentTarget.style.background='var(--bg)'}
    >
      {/* hover gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background:'linear-gradient(135deg,rgba(255,34,68,0.05),transparent)' }} />
      {/* bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background:'linear-gradient(90deg,var(--red),var(--gold))' }} />

      <div className="relative z-10 p-8">
        <div className="text-3xl mb-3">{s.icon}</div>
        <div className="font-bebas text-xl tracking-wide mb-3" style={{ color:'var(--white)' }}>{s.name}</div>

        {/* Bar */}
        <div className="h-px rounded-full mb-1.5 overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background:'linear-gradient(90deg,var(--red),var(--gold))' }}
            initial={{ width:0 }}
            animate={inView ? { width:`${s.level}%` } : { width:0 }}
            transition={{ duration:1.4, delay:(i%3)*0.1+0.3, ease:[0.4,0,0.2,1] }}
          />
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-mono text-[0.58rem] tracking-widest uppercase" style={{ color:'var(--gray)' }}>Proficiency</span>
          <span className="font-mono text-[0.58rem]" style={{ color:'var(--red)' }}>{s.level}%</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {s.tags.map(t => (
            <span key={t} className="font-mono text-[0.58rem] px-2 py-1 rounded-sm tracking-wide"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'var(--gray)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: false })
  return (
    <section id="skills" className="py-32 px-[5vw] relative z-10" style={{ background:'var(--bg)' }}>
      <motion.div ref={ref}
        initial={{ opacity:0, y:30 }}
        animate={inView ? { opacity:1, y:0 } : { opacity:0, y:30 }}
        transition={{ duration:0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--red)' }}>
          02 &nbsp;— Skills
          <span className="w-[60px] h-px block" style={{ background:'var(--red)', opacity:0.4 }} />
        </div>
        <h2 className="font-bebas leading-[0.9]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)', color:'var(--white)' }}>
          WHAT I BRING<br/>TO THE TABLE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background:'var(--border)' }}>
        {skills.map((s,i) => <SkillCard key={s.name} s={s} i={i} />)}
      </div>
    </section>
  )
}
