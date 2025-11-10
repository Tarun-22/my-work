import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Connect from '../components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-700/80 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Connect />
      </div>
    </main>
  )
}
