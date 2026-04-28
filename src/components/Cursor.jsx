import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef  = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail  = trailRef.current
    if (!cursor || !trail) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
      trail.style.left  = e.clientX + 'px'
      trail.style.top   = e.clientY + 'px'
    }

    const addHover = () => { cursor.classList.add('hovered'); trail.classList.add('hovered') }
    const rmHover  = () => { cursor.classList.remove('hovered'); trail.classList.remove('hovered') }

    document.addEventListener('mousemove', move)

    const hoverEls = () => document.querySelectorAll('a,button,[data-hover]')
    const interval = setInterval(() => {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', rmHover)
      })
    }, 500)

    return () => {
      document.removeEventListener('mousemove', move)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef}  id="cursor"       />
      <div ref={trailRef}   id="cursor-trail" />
    </>
  )
}
