'use client'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef
    }
    
    const targetRef = refs[section as keyof typeof refs]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleViewProjects = () => scrollToSection('projects')
  const handleContact = () => scrollToSection('contact')

  return (
    <main className="min-h-screen">
      <Navigation onNavigate={scrollToSection} />
      <div ref={homeRef}>
        <Hero onViewProjects={handleViewProjects} onContact={handleContact} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  )
}