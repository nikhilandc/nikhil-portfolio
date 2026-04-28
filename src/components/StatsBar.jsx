import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { stats } from '../data'

export default function StatsBar() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false })
  return (
    <div ref={ref} className="border-y flex flex-wrap justify-center" style={{ background:'var(--card)', borderColor:'var(--border)' }}>
      {stats.map((s,i) => (
        <div key={i}
          className="flex-1 min-w-[120px] max-w-[220px] text-center px-8 py-8 border-r last:border-r-0 transition-all duration-700"
          style={{ borderColor:'var(--border)', opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(20px)', transitionDelay:`${i*120}ms` }}
        >
          <div className="font-bebas text-5xl text-gradient-red leading-none">
            {inView
              ? <CountUp key={String(inView)} end={s.num} duration={1.5} suffix={s.suffix} />
              : '0'
            }
          </div>
          <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase mt-1" style={{ color:'var(--gray)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
