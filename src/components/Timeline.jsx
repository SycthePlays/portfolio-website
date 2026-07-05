import { useEffect, useRef } from 'react'

const items = [
  {
    period: '2022 — Present',
    title: 'Senior Software Architect',
    company: 'Global Tech Systems',
    color: 'primary',
    dotClass: 'bg-primary',
    textColor: 'text-primary',
    companyColor: 'text-primary-fixed-dim',
    align: 'left',
    points: [
      '• Spearheaded development of a scalable microservices architecture.',
      '• Reduced system latency by 45% through strategic caching layers.',
      '• Mentored a team of 12 full-stack developers across 3 continents.',
    ],
  },
  {
    period: '2020 — 2022',
    title: 'Full Stack Developer',
    company: 'Innovate Digital',
    color: 'tertiary',
    dotClass: 'bg-tertiary',
    textColor: 'text-tertiary',
    companyColor: 'text-tertiary-fixed-dim',
    align: 'right',
    points: [
      '• Delivered 15+ production-grade web applications for Fortune 500 clients.',
      '• Implemented robust CI/CD pipelines increasing deployment frequency by 4x.',
      '• Led the transition from legacy monoliths to React-based frontends.',
    ],
  },
  {
    period: '2016 — 2020',
    title: 'B.Sc. in Computer Science',
    company: 'University of Technology',
    color: 'secondary',
    dotClass: 'bg-secondary-fixed-dim',
    textColor: 'text-secondary-fixed-dim',
    companyColor: 'text-on-secondary-container',
    align: 'left',
    points: [
      '• Graduated with Honors (First Class).',
      '• Specialized in Distributed Systems and Neural Networks.',
      '• Winner of the Annual Collegiate Hackathon (2019).',
    ],
  },
]

export default function Timeline() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="py-[120px] bg-surface-container-lowest overflow-hidden">
      <div className="px-gutter max-w-[800px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Trajectory</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Experience &amp; Growth</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line transform md:-translate-x-1/2" />

          {items.map((item, i) => (
            <div
              key={item.title}
              ref={el => { itemRefs.current[i] = el }}
              className={`relative mb-20 reveal-on-scroll ${
                item.align === 'left'
                  ? 'md:w-1/2 md:pr-12'
                  : 'md:w-1/2 md:ml-auto md:pl-12'
              }`}
            >
              {/* Dot */}
              <div className={`absolute ${
                item.align === 'left'
                  ? 'left-[-32px] md:left-auto md:right-[-41px]'
                  : 'left-[-32px] md:left-[-41px]'
              } top-1`}>
                <div className={`w-4 h-4 rounded-full ${item.dotClass} bloom-dot z-10 border-4 border-surface`} />
              </div>

              <div className={`glass-card p-8 rounded-xl ${item.align === 'left' ? 'text-left md:text-right' : 'text-left'}`}>
                <span className={`font-code-sm text-code-sm ${item.textColor}`}>{item.period}</span>
                <h3 className="font-headline-lg text-[22px] mt-2 text-on-surface">{item.title}</h3>
                <p className={`${item.companyColor} font-medium`}>{item.company}</p>
                <ul className="mt-4 space-y-2 text-on-surface-variant text-sm list-none">
                  {item.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
