import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'PROGRAMMING',
    color: 'primary',
    barColor: 'bg-primary',
    textColor: 'text-primary',
    borderColor: 'border-primary',
    mainSkills: [
      { icon: 'code', name: 'JavaScript', pct: 95 },
      { icon: 'terminal', name: 'Python', pct: 90 },
    ],
    tags: [
      { icon: 'integration_instructions', label: 'TypeScript' },
      { icon: 'database', label: 'SQL' },
    ],
  },
  {
    title: 'FRAMEWORKS',
    color: 'secondary',
    barColor: 'bg-secondary',
    textColor: 'text-secondary',
    borderColor: 'border-secondary',
    mainSkills: [
      { icon: 'layers', name: 'React / Next.js', pct: 92 },
      { icon: 'api', name: 'Node.js / Express', pct: 88 },
    ],
    tags: [
      { icon: 'css', label: 'Tailwind CSS' },
      { icon: 'flutter_dash', label: 'Flutter' },
    ],
  },
  {
    title: 'INFRASTRUCTURE',
    color: 'tertiary',
    barColor: 'bg-tertiary',
    textColor: 'text-tertiary',
    borderColor: 'border-tertiary',
    mainSkills: [
      { icon: 'cloud', name: 'Cloud Arch (AWS)', pct: 85 },
      { icon: 'box', name: 'Docker / K8s', pct: 80 },
    ],
    tags: [
      { icon: 'account_tree', label: 'Git / CI/CD' },
      { icon: 'security', label: 'Firebase' },
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
