import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences } from '../data'

function ExpItem({ e, i, total }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, x:-30 }}
      animate={inView ? { opacity:1, x:0 } : { opacity:0, x:-30 }}
      transition={{ duration:0.7, delay:i*0.12 }}
      className="relative pl-10 pb-14 last:pb-0"
    >
      {i < total-1 && (
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background:`linear-gradient(to bottom, ${e.color}80, transparent)` }} />
      )}
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[4.5px]"
        style={{ background:e.color, boxShadow:`0 0 16px ${e.color}` }} />

      <div className="font-mono text-[0.63rem] tracking-[0.18em] uppercase mb-2" style={{ color:e.color }}>{e.period}</div>
      <div className="font-bebas text-[1.8rem] tracking-wide leading-none mb-0.5" style={{ color:'var(--white)' }}>{e.role}</div>
      <div className="text-[0.88rem] mb-0.5" style={{ color:e.color }}>{e.org}</div>
      <div className="text-[0.78rem] mb-4" style={{ color:'var(--gray)' }}>{e.sub}</div>
      <ul className="space-y-2">
        {e.bullets.map((b,j) => (
          <li key={j} className="flex gap-3 text-[0.9rem] leading-[1.7]" style={{ color:'var(--gray)' }}>
            <span className="text-[0.72rem] mt-1 flex-shrink-0" style={{ color:'var(--red)' }}>→</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: false })
  return (
    <section id="experience" className="py-32 px-[5vw] relative z-10" style={{ background:'var(--bg)' }}>
      <motion.div ref={ref}
        initial={{ opacity:0, y:30 }}
        animate={inView ? { opacity:1, y:0 } : { opacity:0, y:30 }}
        transition={{ duration:0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--red)' }}>
          04 &nbsp;— Experience
          <span className="w-[60px] h-px block" style={{ background:'var(--red)', opacity:0.4 }} />
        </div>
        <h2 className="font-bebas leading-[0.9]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)', color:'var(--white)' }}>
          WHERE I'VE MADE<br/>AN IMPACT
        </h2>
      </motion.div>
      <div className="max-w-3xl">
        {experiences.map((e,i) => <ExpItem key={i} e={e} i={i} total={experiences.length} />)}
      </div>
    </section>
  )
}
