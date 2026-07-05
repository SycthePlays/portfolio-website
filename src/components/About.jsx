import { useState } from 'react'
import profilImg from '../assets/Danish.jpeg'


const bio = {
  en: `I am a software architect and digital craftsman dedicated to bridging the gap between complex engineering and intuitive user interfaces. With a focus on performance, scalability, and aesthetic integrity, I transform abstract ideas into high-performance digital reality.`,
  id: `Saya adalah arsitek perangkat lunak dan digital craftsman yang berdedikasi untuk menjembatani kesenjangan antara rekayasa kompleks dan antarmuka pengguna yang intuitif. Dengan fokus pada performa, skalabilitas, dan integritas estetika, saya mengubah ide abstrak menjadi kenyataan digital berkinerja tinggi.`,
}

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '10+', label: 'Tech Stacks' },
]

export default function About() {
  const [lang, setLang] = useState('en')

  return (
    <section id="about" className="pt-[160px] pb-[120px] px-gutter max-w-container-max mx-auto relative">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-tertiary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Image */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass-card aspect-square rounded-2xl overflow-hidden border-2 border-white/10">
            <img
              src={profilImg}
              alt="Danish Ahmad Satria"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Language Toggle */}
          <div className="absolute -bottom-4 -right-4 flex bg-surface-container-high rounded-full p-1 border border-outline-variant/30 shadow-xl">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${lang === 'en' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('id')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${lang === 'id' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              ID
            </button>
          </div>
        </div>

        {/* Bio & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">CRAFTING DIGITAL EXPERIENCES</span>
            <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface leading-tight">
              Building with <span className="text-gradient">Precision</span> and Purpose.
            </h2>
            <p className="text-on-surface-variant font-body-md text-lg max-w-2xl transition-all duration-500">
              {bio[lang]}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map(s => (
              <div key={s.label} className="glass-card p-6 rounded-xl flex flex-col gap-2">
                <span className="font-display-lg text-4xl text-primary font-bold">{s.value}</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
