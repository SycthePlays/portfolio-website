const certs = [
  {
    icon: 'cloud_done',
    title: 'Solutions Architect',
    issuer: 'Amazon Web Services (AWS)',
    link: '#',
  },
  {
    icon: 'terminal',
    title: 'Full-Stack Engineer',
    issuer: 'Meta (Professional Certificate)',
    link: '#',
  },
  {
    icon: 'database',
    title: 'Cloud Associate',
    issuer: 'Google Cloud Platform',
    link: '#',
  },
]

const awards = [
  {
    year: '2023',
    title: 'Global Hackathon Winner - AI Innovation',
    desc: 'Led a team of 4 to build an automated accessibility auditor for web applications.',
    badge: 'First Place',
  },
  {
    year: '2022',
    title: 'Top Contributor - Open Source Monthly',
    desc: 'Recognized for significant PRs in the Next.js and Tailwind CSS ecosystem.',
    badge: 'Community Award',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="px-gutter max-w-container-max mx-auto py-[120px] scroll-mt-24">
      <div className="flex flex-col gap-12">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-4">Milestones</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Achievements &amp; Certifications</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Validated expertise in cloud architecture, software engineering, and industry standards through globally recognized institutions.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map(c => (
            <div key={c.title} className="glass-card p-card-padding rounded-xl flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-surface-container-high rounded-full border border-outline-variant/30">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {c.icon}
                </span>
              </div>
              <h3 className="font-headline-lg text-xl text-on-surface mb-1">{c.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">{c.issuer}</p>
              <a
                href={c.link}
                className="mt-auto font-label-caps text-label-caps text-primary hover:underline flex items-center gap-2 group"
              >
                Verify Credential
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div>
          <h3 className="font-headline-lg text-2xl text-on-surface mb-8 border-l-4 border-primary pl-6">Awards &amp; Recognitions</h3>
          <div className="space-y-4">
            {awards.map(a => (
              <div key={a.title} className="flex flex-col md:flex-row md:items-center justify-between p-6 glass-card rounded-xl group">
                <div className="flex gap-6 items-center">
                  <div className="text-primary font-code-sm text-code-sm">{a.year}</div>
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">{a.title}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">{a.desc}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 font-label-caps text-label-caps text-on-tertiary-container bg-tertiary-container/30 px-3 py-1 rounded-full border border-outline-variant/20 whitespace-nowrap">
                  {a.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
