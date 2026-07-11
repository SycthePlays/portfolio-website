import { useEffect, useRef } from 'react'

const items = [
  {
    period: 'Current',
    title: 'Grade 12',
    company: 'Labschool Kebayoran',
    color: 'primary',
    dotClass: 'bg-primary',
    textColor: 'text-primary',
    companyColor: 'text-primary-fixed-dim',
    align: 'left',
    points: [
      '• Currently pursuing studies in Grade 12.',
      '• Active in math olympiads, competitive programming, and robotics.',
    ],
  },
  {
    period: 'Grade 11',
    title: 'Grade 11',
    company: 'Labschool Kebayoran',
    color: 'tertiary',
    dotClass: 'bg-tertiary',
    textColor: 'text-tertiary',
    companyColor: 'text-tertiary-fixed-dim',
    align: 'right',
    points: [
      '• Semester 1 Average Grade: 92.68',
      '• Semester 2 Average Grade: 93.23',
    ],
  },
  {
    period: 'Grade 10',
    title: 'Grade 10',
    company: 'Labschool Kebayoran',
    color: 'secondary',
    dotClass: 'bg-secondary-fixed-dim',
    textColor: 'text-secondary-fixed-dim',
    companyColor: 'text-on-secondary-container',
    align: 'left',
    points: [
      '• Semester 1 Average Grade: 91.00',
      '• Semester 2 Average Grade: 91.00',
    ],
  },
  {
    period: '7th - 9th Grade',
    title: 'Junior High School',
    company: 'Secondary School',
    color: 'primary',
    dotClass: 'bg-primary',
    textColor: 'text-primary',
    companyColor: 'text-primary-fixed-dim',
    align: 'right',
    points: [
      '• Total Average Score (7th till 9th grade): 94.68',
    ],
  }
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
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Education</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Academic Journey &amp; Grades</h2>
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
