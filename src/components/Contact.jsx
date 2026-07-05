import { useState } from 'react'

const socials = [
  {
    href: 'https://github.com',
    title: 'GitHub',
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com',
    title: 'LinkedIn',
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    title: 'Instagram',
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [btnState, setBtnState] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnState('sending')
    setTimeout(() => {
      setBtnState('sent')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setBtnState('idle'), 3000)
    }, 1500)
  }

  const btnLabel = btnState === 'idle' ? 'Send Message' : btnState === 'sending' ? 'Sending...' : 'Message Sent! ✓'
  const btnClass = btnState === 'sent'
    ? 'bg-green-600 text-white'
    : 'bg-primary text-on-primary hover:shadow-[0_10px_30px_rgba(137,206,255,0.2)]'

  return (
    <section id="contact" className="px-gutter max-w-container-max mx-auto py-[120px] scroll-mt-24 relative">
      {/* Glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info Column */}
        <div className="space-y-10">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-4">Connect</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Let's create something extraordinary together.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Whether you're looking to discuss a new project, architectural consulting, or just want to geek out about
              performance optimization, my inbox is always open.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg border border-outline-variant/20 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface-variant">Base Location</h4>
                <p className="font-body-md text-on-surface">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg border border-outline-variant/20 text-primary">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface-variant">Email Address</h4>
                <p className="font-body-md text-on-surface">hello@danishahmad.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map(s => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.title}
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary transition-all duration-300"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Form Column */}
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Full Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-on-surface"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Email Address</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-on-surface"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Subject</label>
              <input
                type="text"
                value={formState.subject}
                onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                placeholder="Project Inquiry"
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-on-surface"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Message</label>
              <textarea
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-on-surface resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={btnState !== 'idle'}
              className={`w-full font-label-caps text-label-caps py-4 rounded-lg active:scale-[0.98] transition-all duration-200 ${btnClass}`}
            >
              {btnLabel}
            </button>
          </form>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="font-headline-lg text-3xl text-on-surface">Need the full overview?</h3>
          <p className="font-body-md text-on-surface-variant">
            Detailed technical breakdown, project deep-dives, and full career history available in PDF format.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/resume.pdf"
              download
              className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 rounded-full active:scale-95 transition-all duration-200 hover:shadow-[0_0_30px_rgba(137,206,255,0.3)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined">download</span>
              Download Full Resume
            </a>
            <a
              href="mailto:hello@danishahmad.com"
              className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-2"
            >
              Get in Touch
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
