import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'

// Lazy load des composants non critiques pour améliorer le First Contentful Paint
const SkillsAndStack = dynamic(() => import('@/components/SkillsAndStack'), {
  loading: () => <div className="min-h-screen" />,
})

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[400px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SkillsAndStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

