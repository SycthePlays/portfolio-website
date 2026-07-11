import { useState, useEffect, useRef } from 'react'
import profilImg from '../assets/Danish_new.jpg'


const bio = {
  en: `I am a high school student in Senior High School Labschool Kebayoran, and I am in Grade 12. I am an expert in the field of mathematics, physics, informatics, and microcontrollers such as Arduino and ESP32. I am very interested in engineering and currently competing and participating in hackathons and engineering internships. I have many achievements in Math Competitions, informatics competitions, internships, science fairs, and passion projects like a Bionic arm and Air Quality Gas Sensor. My dream is to pursue Electrical Engineering, Computer Science, or Industrial Engineering at top institutions like NUS, NTU, KAIST, HKUST, University of Waterloo, or University of Toronto.`,
  id: `Saya adalah siswa kelas 12 di SMA Labschool Kebayoran. Saya memiliki keahlian di bidang matematika, fisika, informatika, dan mikrokontroler seperti Arduino dan ESP32. Saya sangat tertarik dengan bidang teknik dan saat ini aktif berkompetisi, mengikuti hackathon, serta magang di bidang teknik. Saya telah meraih berbagai prestasi dalam kompetisi Matematika, informatika, program magang, science fair, serta proyek mandiri seperti Bionic Arm dan Sensor Gas Kualitas Udara. Impian saya adalah melanjutkan studi di bidang Teknik Elektro, Ilmu Komputer, atau Teknik Industri di institusi top seperti NUS, NTU, KAIST, HKUST, University of Waterloo, atau University of Toronto.`,
}

const scores = [
  { value: '7.5', label: 'IELTS Overall' },
  { value: '1450', label: 'SAT Total' },
  { value: '800', label: 'SAT Math' },
]

export default function About() {
  const [lang, setLang] = useState('en')
  const [isPhotoInView, setIsPhotoInView] = useState(false)
  const photoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPhotoInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )
    if (photoRef.current) observer.observe(photoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="pt-[160px] pb-[120px] px-gutter max-w-container-max mx-auto relative">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-tertiary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Image */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass-card aspect-square rounded-2xl overflow-hidden border-2 border-white/10" ref={photoRef}>
            <img
              src={profilImg}
              alt="Danish Ahmad Satria"
              className={`w-full h-full object-cover transition-all duration-700 ${isPhotoInView ? 'grayscale-0 scale-105' : 'grayscale'}`}
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

          {/* Scores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scores.map(s => (
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
