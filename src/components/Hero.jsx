import { useEffect, useRef, useState } from 'react'

const roles = ['Electrical Engineering Enthusiast', 'Math Olympian', 'AI & CP Enthusiast', 'Robotics Innovator']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const heroRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 50)
      } else {
        setIsDeleting(false)
        setRoleIndex(r => (r + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  // Entrance animations
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.motion-in') || []
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 150)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface -z-10" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tertiary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-gutter w-full relative z-10 text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="md:col-span-8 space-y-8">
            {/* Badges */}
            <div className="motion-in flex flex-wrap justify-center md:justify-start gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-[14px] mr-1">terminal</span>
                Available for hire
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20 text-secondary font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-[14px] mr-1">verified</span>
                Engineering Excellence
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="motion-in font-display-lg text-display-lg md:text-[88px] leading-none tracking-tighter">
                Danish Ahmad Satria
              </h1>
              <h2 className="motion-in font-headline-lg text-headline-lg text-on-surface-variant flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
                <span>Developer &amp; Engineer</span>
                <span className="hidden md:inline text-primary-fixed-dim/30">/</span>
                <span className="typewriter-cursor text-primary-fixed-dim font-code-sm text-[22px]">
                  {displayText}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="motion-in max-w-2xl text-on-surface-variant text-body-md leading-relaxed mx-auto md:mx-0">
              Bridging the gap between hardware and software engineering. Specializing in microcontrollers, robotics, artificial intelligence, and competitive programming, with a strong foundation in competitive mathematics.
            </p>

            {/* CTA */}
            <div className="motion-in flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
                }}
                className="w-full sm:w-auto bg-primary text-on-primary-fixed px-8 py-4 rounded-xl font-headline-lg text-body-md font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_-5px_rgba(137,206,255,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                View My Work
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto border border-outline-variant text-on-surface hover:bg-white/5 px-8 py-4 rounded-xl font-headline-lg text-body-md flex items-center justify-center gap-2 transition-all duration-300"
              >
                Download Resume
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>

          {/* Right — Decorative Card */}
          <div className="hidden md:block md:col-span-4 motion-in">
            <div className="glass-card rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="text-left">
                  <p className="font-code-sm text-primary text-sm">System Status</p>
                  <p className="text-sm text-on-surface-variant">Live &amp; Optimizing</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full" />
                  </div>
                  <div className="flex justify-between font-code-sm text-xs text-on-surface-variant mt-1">
                    <span>Architecture</span><span>85%</span>
                  </div>
                </div>
                <div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[99%] rounded-full" />
                  </div>
                  <div className="flex justify-between font-code-sm text-xs text-on-surface-variant mt-1">
                    <span>Performance</span><span>99%</span>
                  </div>
                </div>
                <div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[92%] rounded-full" />
                  </div>
                  <div className="flex justify-between font-code-sm text-xs text-on-surface-variant mt-1">
                    <span>Creativity</span><span>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">Explore</span>
        <div className="scroll-indicator w-6 h-10 rounded-full border-2 border-outline-variant flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
