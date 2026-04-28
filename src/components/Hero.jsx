import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function FloatingTorus({ position, color, speed=1, scale=1 }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.x = s.clock.elapsedTime * speed * 0.4
    ref.current.rotation.y = s.clock.elapsedTime * speed * 0.6
  })
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 60]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

function FloatingIco({ position, color, speed=0.8, scale=1 }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.x = s.clock.elapsedTime * speed * 0.3
    ref.current.rotation.z = s.clock.elapsedTime * speed * 0.5
  })
  return (
    <Float speed={speed} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1,0]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.4} transparent opacity={0.5} />
      </mesh>
    </Float>
  )
}

function FloatingOcta({ position, color, speed=1.2, scale=1 }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * speed * 0.5
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.5) * 0.5
  })
  return (
    <Float speed={speed} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1,0]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.5} transparent opacity={0.55} />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const ref = useRef()
  const count = 800
  const positions = new Float32Array(count * 3)
  for (let i=0; i<count; i++) {
    positions[i*3]   = (Math.random()-0.5)*30
    positions[i*3+1] = (Math.random()-0.5)*20
    positions[i*3+2] = (Math.random()-0.5)*15
  }
  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.02
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime*0.01)*0.1
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions,3]} />
      </bufferGeometry>
      <pointsMaterial color="#ff2244" size={0.06} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5,5,5]} intensity={1} color="#ff2244" />
      <pointLight position={[-5,-5,5]} intensity={0.5} color="#ffd166" />
      <ParticleField />
      <FloatingTorus  position={[-4,1.5,-3]}  color="#ff2244" speed={0.7} scale={0.8} />
      <FloatingTorus  position={[4.5,-1,-4]}  color="#ffd166" speed={0.5} scale={0.6} />
      <FloatingIco    position={[3,2.5,-2]}   color="#00f5d4" speed={0.9} scale={0.7} />
      <FloatingIco    position={[-3.5,-2,-3]} color="#ff6680" speed={1.1} scale={0.5} />
      <FloatingOcta   position={[0,-2.5,-2]}  color="#ffd166" speed={0.6} scale={0.6} />
      <FloatingOcta   position={[-1.5,2,-4]}  color="#ff2244" speed={0.8} scale={0.4} />
    </>
  )
}

function GlitchName() {
  const [glitch, setGlitch] = useState(false)
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true); setTimeout(()=>setGlitch(false),400)
    }, 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="relative select-none">
      <h1 className="font-bebas leading-[0.85] tracking-tight" style={{ fontSize:'clamp(5rem,18vw,16rem)' }}>
        <span className="block text-gradient-white">NIKHIL</span>
        <span className="block text-gradient-red">KUMAR</span>
      </h1>
      {glitch && (
        <>
          <h1 className="font-bebas leading-[0.85] tracking-tight absolute inset-0 glitch-layer"
            style={{ fontSize:'clamp(5rem,18vw,16rem)', color:'#00f5d4', opacity:0.6 }}>
            <span className="block">NIKHIL</span><span className="block">KUMAR</span>
          </h1>
          <h1 className="font-bebas leading-[0.85] tracking-tight absolute inset-0 glitch-layer"
            style={{ fontSize:'clamp(5rem,18vw,16rem)', color:'#ff2244', opacity:0.6, animationDelay:'0.1s' }}>
            <span className="block">NIKHIL</span><span className="block">KUMAR</span>
          </h1>
        </>
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-[5vw]">
      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position:[0,0,8], fov:60 }} gl={{ antialias:true, alpha:true }}>
          <Scene />
        </Canvas>
      </div>

      {/* Grid bg */}
      <div className="grid-bg absolute inset-0 z-[1]" />

      {/* Orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full blur-[80px] z-[1] animate-float"
        style={{ background:'rgba(255,34,68,0.1)' }} />
      <div className="absolute bottom-5 right-[-10%] w-[350px] h-[350px] rounded-full blur-[80px] z-[1]"
        style={{ background:'rgba(0,245,212,0.07)', animation:'float 6s ease-in-out -3s infinite' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:2.6, duration:0.7 }}
          className="flex items-center gap-3 mb-6 font-mono text-[0.72rem] tracking-[0.3em] uppercase" style={{ color:'var(--red)' }}>
          <span className="w-10 h-px" style={{ background:'var(--red)' }} />
          Available for Opportunities
          <span className="w-10 h-px" style={{ background:'var(--red)' }} />
        </motion.div>

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:2.8, duration:0.9 }}>
          <GlitchName />
        </motion.div>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:3.1, duration:0.7 }}
          className="mt-5 text-lg tracking-wide" style={{ color:'var(--gray)' }}>
          <TypeAnimation
            sequence={[
              'Frontend Developer & React.js Specialist',2500,
              'Tailwind CSS & UI/UX Enthusiast',2000,
              'PCB Designer & Electronics Engineer',2000,
              'AI & API Integration Expert',2000,
            ]}
            wrapper="span" speed={60} repeat={Infinity}
          />
        </motion.p>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:3.4, duration:0.7 }}
          className="flex flex-wrap gap-4 mt-8 justify-center">
          <button
            onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
            className="cursor-none px-9 py-3.5 rounded font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white relative overflow-hidden group transition-all hover:-translate-y-0.5"
            style={{ background:'linear-gradient(135deg,var(--red),#cc0022)', boxShadow:'0 4px 20px rgba(255,34,68,0.2)' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            View Projects
          </button>
          <button
            onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            className="cursor-none px-9 py-3.5 rounded font-mono text-[0.72rem] tracking-[0.1em] uppercase transition-all hover:-translate-y-0.5"
            style={{ border:'1px solid rgba(255,34,68,0.4)', color:'var(--white)' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,34,68,0.08)'; e.currentTarget.style.borderColor='var(--red)' }}
            onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(255,34,68,0.4)' }}
          >
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:3.8 }}
        onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}
        className="cursor-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase" style={{ color:'var(--gray)' }}>Scroll</span>
        <span className="w-px h-14 block" style={{ background:'linear-gradient(to bottom,var(--red),transparent)', animation:'scrollPulse 2s ease-in-out infinite' }} />
      </motion.button>
    </section>
  )
}
