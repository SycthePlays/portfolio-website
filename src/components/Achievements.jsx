const programs = [
  {
    icon: 'security',
    title: 'Program Merdeka Siber',
    issuer: 'Cyber Security & CTF Training',
  },
  {
    icon: 'school',
    title: 'Teaching Activities',
    issuer: 'Math and English for 4th to 10th graders at Al Bayyinah (80 hours)',
  },
  {
    icon: 'memory',
    title: 'Arduino & Electronics',
    issuer: 'Self-teaching and training in microcontrollers and hardware',
  },
  {
    icon: 'work',
    title: 'Skha Consultant Internship',
    issuer: 'Developed a CV analysis and ranking website',
  },
  {
    icon: 'science',
    title: 'The Yabapi Internship',
    issuer: 'Created a smoke sensor device to detect air quality at Universitas Indonesia',
  },
  {
    icon: 'psychology',
    title: 'Research: Dampak...',
    issuer: 'Grade 8 to 9 Research Project',
  },
  {
    icon: 'code',
    title: 'Research: Paint Language Battle',
    issuer: 'Interactive App for Programming Language Performance Comparison (Python)',
  }
]

const achievements = [
  {
    year: 'Grade 8',
    title: 'International Mathematics Competition (IWYMIC) 2023',
    desc: 'Bronze Medal',
    badge: 'Bronze',
  },
  {
    year: 'Grade 8',
    title: 'SIMOC 2023',
    desc: 'Silver Medal',
    badge: 'Silver',
  },
  {
    year: 'Grade 10',
    title: 'TIMO 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: 'Grade 10',
    title: 'SMGF 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: 'Grade 10',
    title: 'AMO 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: 'Grade 11',
    title: 'SEAMO 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: 'Grade 10',
    title: 'SIMOC 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: '2025',
    title: 'TIMO Final Round 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: '2024',
    title: 'HKIMO Final Round 2024',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: '2025',
    title: 'HKIMO Heat Round 2025',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: '2024',
    title: 'NJCO 2024 (National Junior CyberSecurity Olympiad)',
    desc: 'Silver Medal',
    badge: 'Silver',
  },
  {
    year: '2025',
    title: 'Indonesian Mathematical Olympiad (OSN Math Senior High School)',
    desc: 'Finalist (National Round)',
    badge: 'Finalist',
  },
  {
    year: '2025',
    title: 'IYMC 2025 (International Youth Math Challenge)',
    desc: 'Gold medal, Top Scorer (Individual), Champion Team, Winner of Puzzle/Math warriors in India.',
    badge: 'Gold / Champion',
  },
  {
    year: '2024',
    title: 'Beaver Computing Challenge 2024 (BCC)',
    desc: 'Certificate of Distinction (top 25%)',
    badge: 'Distinction',
  },
  {
    year: 'Grade 11',
    title: 'Olimpiade Matematika Indonesia 2026',
    desc: 'Gold medal and Grand Award',
    badge: 'Gold / Grand Award',
  },
  {
    year: 'Grade 11',
    title: 'SEAMO X 2026 Final',
    desc: 'Bronze Medal',
    badge: 'Bronze',
  },
  {
    year: '2025',
    title: 'Lomba Matematika Nasional UGM - 35th 2025',
    desc: 'Finalists (Universitas Gajah Mada)',
    badge: 'Finalist',
  },
  {
    year: 'Grade 11',
    title: 'SASMO 2026',
    desc: 'Gold Medal',
    badge: 'Gold',
  },
  {
    year: 'Grade 10',
    title: 'SMGF 2026',
    desc: 'Silver Medal',
    badge: 'Silver',
  },
  {
    year: 'Grade 11',
    title: 'KMNR 2026 (Kompetisi Matematika Nalaria Realistik)',
    desc: 'Gold medal and Absolute Winner',
    badge: 'Absolute Winner',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="px-gutter max-w-container-max mx-auto py-[120px] scroll-mt-24">
      <div className="flex flex-col gap-12">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-4">Milestones</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Achievements &amp; Programs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Recognized for excellence in mathematics, informatics, and engineering through global competitions and practical training programs.
          </p>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(p => (
            <div key={p.title} className="glass-card p-card-padding rounded-xl flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-surface-container-high rounded-full border border-outline-variant/30">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {p.icon}
                </span>
              </div>
              <h3 className="font-headline-lg text-xl text-on-surface mb-1">{p.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">{p.issuer}</p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div>
          <h3 className="font-headline-lg text-2xl text-on-surface mb-8 border-l-4 border-primary pl-6">Awards &amp; Recognitions</h3>
          <div className="space-y-4">
            {achievements.map(a => (
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
