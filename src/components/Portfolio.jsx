import { useState } from 'react'

const allProjects = [
  {
    title: 'Nexus Engine',
    desc: 'A real-time distributed processing engine built for high-throughput sensor data analysis and visualization.',
    tags: ['Next.js', 'Rust', 'WebSocket'],
    category: 'web',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGRINhC0lIJN95TXQdIkoM4rdf8uukWMIgiXXHD3mk1UCsjlFTmX6-WUNupXWbmJ5E2mYZDHLi82xJy8ODl1YqJqXusPu4NSOD6rucgT9wDtTHJYdOXB4y2wnc_y737mSOQt6kycKMt4XjEMY2XXpOeVMa6FGvuRsn7Lfk3zaO6oWnj_y7roBa9mcH3KHNDkSTQtMZRtVHV3LMPRCapidDY9aByt323K5-PkZxUT--rAlwAuR6Khs7Upv4LnfpEvQYCIax8kwHHEPf',
  },
  {
    title: 'Neural Health',
    desc: 'AI-powered personal healthcare companion that predicts stress levels using biometric data patterns.',
    tags: ['PyTorch', 'Flutter', 'Firebase'],
    category: 'ai',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVM2RX1gUGugJeL_x2XQLo0ZkV6W1tbcWrNwj0UvLcmujz1PeX5AD7lyncdkKNwKkaQ6SdkNmUOkeudLb3ilwkTDzOgFgcZFMb0GbzaKGOrL-V5qYYKe3BjiGhxAjdjKIsjZ8p5PsDgaf9Za9Hsxi_rrh5iNry6csKolNaAA71uzE7kPcRC-EiG0Qe_rpFZgapL3DtPVWoG46McS5Z-vwfZEHiSqdYzxlw0xFHrPr3NIpUFqNewIImO2qF_0i4',
  },
  {
    title: 'Vector Studio',
    desc: 'Collaborative design tool enabling vector manipulation via natural language processing commands.',
    tags: ['OpenAI', 'React', 'Canvas API'],
    category: 'ai',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDFhr7KA_0REERn9SQdGhbCqlB3fWF47PZE69MPVcQGdBQICI5d3TynS0ouuXYPtS-S6TvU1eH4-f36faTYR2WkssUz8IhVY8VkmL2FY6PcuE5a5vU5B4tCNFAF9WL4QYptaJt0OnMdXWXCKu-46mJDumlwk1WvlwSlbD6zWL8JVy0_8-Ii8wLDVlyfZxYOxYRwuyGalrhmZzW1_NbQIFVe6gAO7mCuP9mzRsT4VsdF7r1IKG0kipCaAm-lASTrxdAkgY3DOSXCUB2',
  },
]

const filters = ['All', 'Web', 'Mobile', 'AI/ML']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = allProjects.filter(p => {
    if (active === 'All') return true
    if (active === 'Web') return p.category === 'web'
    if (active === 'Mobile') return p.category === 'mobile'
    if (active === 'AI/ML') return p.category === 'ai'
    return true
  })

  return (
    <section id="projects" className="py-[120px] px-gutter max-w-container-max mx-auto">
      <div className="mb-12 space-y-4">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Portfolio</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Digital Crafts</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 pt-6">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full font-label-caps text-label-caps transition-all ${
                active === f
                  ? 'bg-primary text-on-primary'
                  : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(p => (
          <div key={p.title} className="glass-card group rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-video relative overflow-hidden bg-surface-container-highest">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="space-y-2">
                <h3 className="font-headline-lg text-[24px] text-primary-fixed-dim">{p.title}</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-2">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded bg-primary/10 text-primary font-code-sm text-code-sm">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">code</span> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-primary font-medium hover:underline">
                  Live Demo <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
