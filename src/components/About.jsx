import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Ring3D() {
  const outer = useRef(), inner = useRef(), dots = useRef()
  useFrame((s) => {
    outer.current.rotation.x = s.clock.elapsedTime * 0.3
    outer.current.rotation.y = s.clock.elapsedTime * 0.5
    inner.current.rotation.x = -s.clock.elapsedTime * 0.4
    inner.current.rotation.z = s.clock.elapsedTime * 0.2
    dots.current.rotation.y  = s.clock.elapsedTime * 0.8
  })
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <group>
        <mesh ref={outer}>
          <torusGeometry args={[2.2, 0.04, 8, 80]} />
          <meshStandardMaterial color="#ff2244" emissive="#ff2244" emissiveIntensity={0.5} />
        </mesh>
        <mesh ref={inner}>
          <torusGeometry args={[1.6, 0.03, 8, 60]} />
          <meshStandardMaterial color="#00f5d4" emissive="#00f5d4" emissiveIntensity={0.4} transparent opacity={0.7} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#0d0d1a" emissive="#ff2244" emissiveIntensity={0.1} wireframe />
        </mesh>
        <group ref={dots}>
          {[0,1,2,3,4,5].map(i => {
            const a = (i/6)*Math.PI*2
            return (
              <mesh key={i} position={[Math.cos(a)*2.2, Math.sin(a)*2.2, 0]}>
                <sphereGeometry args={[0.08,8,8]} />
                <meshStandardMaterial color="#ff2244" emissive="#ff2244" emissiveIntensity={1} />
              </mesh>
            )
          })}
        </group>
      </group>
    </Float>
  )
}

const tags = ['React.js 18','Tailwind CSS','TypeScript','PCB Design','AI Integration','UI/UX','REST APIs','Storybook','Vercel','OpenAI API']

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false })

  return (
    <section id="about" ref={ref} className="py-32 px-[5vw] relative z-10" style={{ background:'var(--bg2)' }}>
      <motion.div
        initial={{ opacity:0, y:30 }}
        animate={inView ? { opacity:1, y:0 } : { opacity:0, y:30 }}
        transition={{ duration:0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--red)' }}>
          01 &nbsp;— About Me
          <span className="w-[60px] h-px block" style={{ background:'var(--red)', opacity:0.4 }} />
        </div>
        <h2 className="font-bebas leading-[0.9]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)', color:'var(--white)' }}>
          THE PERSON<br/>BEHIND THE CODE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity:0, x:-40 }}
          animate={inView ? { opacity:1, x:0 } : { opacity:0, x:-40 }}
          transition={{ duration:0.8, delay:0.2 }}
        >
          <p className="leading-[1.9] text-[1.05rem] mb-5" style={{ color:'var(--gray)' }}>
            I'm a <strong style={{ color:'var(--white)' }}>B.Sc. Electronics student</strong> at Acharya Narendra Dev College, University of Delhi, with a passion for building{' '}
            <span style={{ color:'var(--red)' }}>production-grade frontend experiences</span> that people actually love to use.
          </p>
          <p className="leading-[1.9] text-[1.05rem] mb-5" style={{ color:'var(--gray)' }}>
            From designing PCBs in a <strong style={{ color:'var(--white)' }}>DRDO lab</strong> to shipping full-stack React applications on Vercel — I bridge the gap between{' '}
            <strong style={{ color:'var(--white)' }}>hardware precision</strong> and <strong style={{ color:'var(--white)' }}>software creativity</strong>.
          </p>
          <p className="leading-[1.9] text-[1.05rem] mb-8" style={{ color:'var(--gray)' }}>
            Interned at <strong style={{ color:'var(--white)' }}>DRDO–SSPL</strong>, contributed to a <strong style={{ color:'var(--white)' }}>NITI Aayog research study</strong> at IIT Delhi, and ranked{' '}
            <strong style={{ color:'var(--gold)' }}>Top 3 at IIITD Infronix Hackathon</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} data-hover
                className="font-mono text-[0.66rem] px-3 py-1.5 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 cursor-none"
                style={{ border:'1px solid var(--border)', color:'var(--gray)' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--red)'; e.currentTarget.style.color='var(--red)'; e.currentTarget.style.background='rgba(255,34,68,0.05)' }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--gray)'; e.currentTarget.style.background='transparent' }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, x:40 }}
          animate={inView ? { opacity:1, x:0 } : { opacity:0, x:40 }}
          transition={{ duration:0.8, delay:0.4 }}
          className="h-[380px] flex items-center justify-center"
        >
          <Canvas camera={{ position:[0,0,6], fov:50 }} gl={{ antialias:true, alpha:true }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5,5,5]} color="#ff2244" intensity={2} />
            <pointLight position={[-5,-5,5]} color="#00f5d4" intensity={1} />
            <Ring3D />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
