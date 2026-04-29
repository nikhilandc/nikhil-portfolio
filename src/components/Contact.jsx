import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────────────────────
//  ✅ EmailJS — fill these 3 values
//  1. emailjs.com → Sign up free
//  2. Email Services → Add Gmail → copy SERVICE_ID
//  3. Email Templates → Create → add vars: {{from_name}} {{from_email}} {{subject}} {{message}} → copy TEMPLATE_ID
//  4. Account → API Keys → copy PUBLIC_KEY
// ─────────────────────────────────────────────────────────────
const EJ_SERVICE  = 'service_sigqbvu'
const EJ_TEMPLATE = 'template_awzxtnd'
const EJ_KEY      = '9PHmEy93CULVY9d4q'

const toastOpts = {
  style:{ background:'#0d0d1a', color:'#f0f0f8', border:'1px solid rgba(255,34,68,0.35)', fontFamily:'Space Mono,monospace', fontSize:'0.72rem' },
  iconTheme:{ primary:'#ff2244', secondary:'#040408' },
}

const socialLinks = [
  { icon:'💼', label:'LinkedIn',        href:'https://www.linkedin.com/in/nikhil-kumar-525965316' },
  { icon:'🐙', label:'GitHub',          href:'https://github.com/nikhilandc' },
  { icon:'✉',  label:'nk5434802@gmail.com', href:'mailto:nk5434802@gmail.com' },
  { icon:'📞', label:'+91 98214 32989', href:'tel:+919821432989' },
]

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.6rem] tracking-[0.15em] uppercase" style={{ color:'var(--gray)' }}>
        {label} {required && <span style={{ color:'var(--red)' }}>*</span>}
      </label>
      {children}
      {error && <span className="font-mono text-[0.58rem]" style={{ color:'var(--red)' }}>⚠ {error}</span>}
    </div>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"/>
    </svg>
  )
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:false })
  const formRef = useRef(null)
  const [form,    setForm]    = useState({ name:'', email:'', subject:'', message:'' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    if (EJ_SERVICE === 'YOUR_SERVICE_ID') {
      toast.error('⚠️ Add your EmailJS keys in Contact.jsx first!', toastOpts); return
    }
    setSending(true)
    try {
      await emailjs.sendForm(EJ_SERVICE, EJ_TEMPLATE, formRef.current, EJ_KEY)
      setSent(true)
      setForm({ name:'', email:'', subject:'', message:'' })
      toast.success("Message sent! I'll reply within 24h 🚀", toastOpts)
    } catch(err) {
      console.error(err)
      toast.error('Send failed. Email me: nk5434802@gmail.com', toastOpts)
    } finally { setSending(false) }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('nk5434802@gmail.com')
    toast.success('Email copied! 📋', toastOpts)
  }

  const downloadResume = () => {
    const a = document.createElement('a')
    a.href = '/Nikhil_Kumar_Resume.pdf'
    a.download = 'Nikhil_Kumar_Resume.pdf'
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    toast.success('Downloading resume... 📄', toastOpts)
  }

  return (
    <section id="contact" className="py-36 px-[5vw] relative overflow-hidden z-10" style={{ background:'var(--bg2)' }}>
      <Toaster position="top-right" />

      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-bebas text-[18vw] whitespace-nowrap" style={{ color:'rgba(255,34,68,0.03)', letterSpacing:'-0.02em' }}>
          LET'S TALK
        </span>
      </div>

      <motion.div ref={ref}
        initial={{ opacity:0, y:40 }}
        animate={inView ? { opacity:1, y:0 } : { opacity:0, y:40 }}
        transition={{ duration:0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--red)' }}>
            05 &nbsp;— Contact
            <span className="w-[60px] h-px block" style={{ background:'var(--red)', opacity:0.4 }} />
          </div>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)', color:'var(--white)' }}>
            LET'S BUILD<br/><span className="text-gradient-red">SOMETHING GREAT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, x:-30 }}
            animate={inView ? { opacity:1, x:0 } : { opacity:0, x:-30 }}
            transition={{ duration:0.7, delay:0.2 }}
          >
            <p className="text-[1rem] leading-[1.85] mb-8" style={{ color:'var(--gray)' }}>
              Open to <strong style={{ color:'var(--white)' }}>frontend developer roles</strong>, internships,
              freelance projects and hackathon collabs. Let's create something nobody has seen before.
            </p>

            <div className="flex flex-col gap-2.5 mb-8">
              {socialLinks.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="cursor-none flex items-center gap-4 px-5 py-3.5 rounded-sm border transition-all duration-300 hover:-translate-y-0.5 group no-underline"
                  style={{ borderColor:'var(--border)', background:'var(--card)', textDecoration:'none' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='var(--red)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}
                >
                  <span className="text-lg w-5 text-center">{l.icon}</span>
                  <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color:'var(--gray)' }}>{l.label}</span>
                  <span className="ml-auto font-mono text-[0.68rem] transition-transform group-hover:translate-x-1.5" style={{ color:'var(--red)' }}>→</span>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.button onClick={downloadResume}
              whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
              className="cursor-none w-full flex items-center justify-center gap-3 py-4 rounded-sm font-mono text-[0.73rem] tracking-[0.12em] uppercase text-white font-bold relative overflow-hidden group mb-4"
              style={{ background:'linear-gradient(135deg,var(--red),#cc0022)' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative">📄 Download Resume ↓</span>
            </motion.button>

            <button onClick={copyEmail}
              className="cursor-none w-full text-center font-mono text-[0.6rem] tracking-[0.2em] uppercase pb-0.5 border-b border-dashed transition-colors"
              style={{ color:'var(--gray)', borderColor:'var(--gray)' }}
              onMouseEnter={e=>{ e.currentTarget.style.color='var(--red)'; e.currentTarget.style.borderColor='var(--red)' }}
              onMouseLeave={e=>{ e.currentTarget.style.color='var(--gray)'; e.currentTarget.style.borderColor='var(--gray)' }}
            >
              Click to copy · nk5434802@gmail.com
            </button>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={inView ? { opacity:1, x:0 } : { opacity:0, x:30 }}
            transition={{ duration:0.7, delay:0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" required error={errors.name}>
                  <input name="from_name" value={form.name}
                    onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                    placeholder="Your name" className="nk-input" />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input name="from_email" type="email" value={form.email}
                    onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                    placeholder="your@email.com" className="nk-input" />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject}>
                <input name="subject" value={form.subject}
                  onChange={e=>setForm(f=>({...f,subject:e.target.value}))}
                  placeholder="Frontend role / Collab / Freelance..." className="nk-input" />
              </Field>

              <Field label="Message" required error={errors.message}>
                <textarea name="message" value={form.message}
                  onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="nk-input" style={{ minHeight:140 }} />
              </Field>

              <motion.button type="submit" disabled={sending||sent}
                whileHover={!sending&&!sent?{scale:1.01}:{}}
                whileTap={!sending&&!sent?{scale:0.98}:{}}
                className="cursor-none w-full py-4 rounded-sm font-mono text-[0.73rem] tracking-[0.12em] uppercase font-bold transition-all"
                style={{
                  background: sent ? 'linear-gradient(135deg,#00f5d4,#007a6a)' : 'linear-gradient(135deg,var(--red),#cc0022)',
                  color:'#fff', opacity:sending?0.75:1
                }}
              >
                {sending
                  ? <span className="flex items-center justify-center gap-2"><Spinner/> Sending...</span>
                  : sent ? '✅ Message Sent!' : 'Send Message →'
                }
              </motion.button>

              <p className="font-mono text-[0.55rem] tracking-wide text-center" style={{ color:'var(--gray)' }}>
                Replies within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
