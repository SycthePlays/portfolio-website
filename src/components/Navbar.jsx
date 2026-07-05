import { useEffect, useRef } from 'react'

const sections = ['about', 'skills', 'projects', 'timeline', 'achievements', 'contact']

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current
      if (!nav) return
      const links = nav.querySelectorAll('a[data-section]')
      let current = ''

      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.pageYOffset >= el.offsetTop - 120) {
          current = id
        }
      })

      links.forEach(link => {
        link.classList.remove('text-primary-fixed-dim', 'border-b-2', 'border-primary-fixed-dim', 'pb-1')
        link.classList.add('text-on-surface-variant')
        if (link.dataset.section === current) {
          link.classList.remove('text-on-surface-variant')
          link.classList.add('text-primary-fixed-dim', 'border-b-2', 'border-primary-fixed-dim', 'pb-1')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-surface/50 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm"
    >
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <div className="font-display-lg text-body-md font-bold tracking-tighter text-primary-fixed-dim cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Danish Ahmad Satria
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map(s => (
            <a
              key={s}
              data-section={s}
              onClick={(e) => { e.preventDefault(); scrollTo(s) }}
              href={`#${s}`}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps cursor-pointer capitalize"
            >
              {s === 'achievements' ? 'Achievements' : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all active:scale-95"
          >
            Download Resume
          </a>
          <button className="md:hidden text-on-surface material-symbols-outlined">menu</button>
        </div>
      </div>
    </nav>
  )
}
