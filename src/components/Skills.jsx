import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'HARDWARE & ELECTRONICS',
    color: 'primary',
    barColor: 'bg-primary',
    textColor: 'text-primary',
    borderColor: 'border-primary',
    mainSkills: [
      { icon: 'memory', name: 'Arduino / ESP32', pct: 95 },
      { icon: 'precision_manufacturing', name: 'Robotics & Sensors', pct: 90 },
    ],
    tags: [
      { icon: 'flash_on', label: 'Soldering' },
      { icon: 'settings_input_component', label: 'Circuit Design' },
    ],
  },
  {
    title: 'PROGRAMMING & AI',
    color: 'secondary',
    barColor: 'bg-secondary',
    textColor: 'text-secondary',
    borderColor: 'border-secondary',
    mainSkills: [
      { icon: 'code', name: 'C/C++', pct: 95 },
      { icon: 'terminal', name: 'Python & AI Models', pct: 90 },
    ],
    tags: [
      { icon: 'psychology', label: 'Informatics' },
      { icon: 'emoji_events', label: 'Competitive Programming' },
    ],
  },
  {
    title: 'ANALYTICAL SKILLS',
    color: 'tertiary',
    barColor: 'bg-tertiary',
    textColor: 'text-tertiary',
    borderColor: 'border-tertiary',
    mainSkills: [
      { icon: 'functions', name: 'Advanced Mathematics', pct: 98 },
      { icon: 'insights', name: 'Problem Solving', pct: 95 },
    ],
    tags: [
      { icon: 'calculate', label: 'Calculus' },
      { icon: 'bar_chart', label: 'Data Analysis' },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar-fill')
            bars.forEach(bar => {
              const target = bar.dataset.width
              bar.style.width = '0%'
              setTimeout(() => { bar.style.width = target }, 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[120px] px-gutter bg-surface-container-lowest/50"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] block mb-4">TECHNICAL ARSENAL</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Skill Sets &amp; Mastery</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map(group => (
            <div key={group.title} className="flex flex-col gap-6">
              <h3 className={`font-label-caps text-label-caps text-on-surface-variant border-l-2 ${group.borderColor} pl-4`}>
                {group.title}
              </h3>
              <div className="space-y-6">
                {group.mainSkills.map(skill => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-${group.color}/10 flex items-center justify-center ${group.textColor}`}>
                          <span className="material-symbols-outlined text-lg">{skill.icon}</span>
                        </div>
                        <span className="font-code-sm text-on-surface">{skill.name}</span>
                      </div>
                      <span className={`font-code-sm ${group.textColor}`}>{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className={`skill-bar-fill h-full ${group.barColor} rounded-full`}
                        data-width={`${skill.pct}%`}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {group.tags.map(tag => (
                  <div key={tag.label} className="glass-card p-4 rounded-lg flex items-center gap-3">
                    <span className={`material-symbols-outlined ${group.textColor} text-sm`}>{tag.icon}</span>
                    <span className="font-label-caps text-[10px] text-on-surface">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
