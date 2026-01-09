import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import {
  SkillsSkeleton,
  ExperienceSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
} from '@/components/Skeletons'

// Lazy load des composants non critiques pour améliorer le First Contentful Paint
const SkillsAndStack = dynamic(() => import('@/components/SkillsAndStack'), {
  loading: () => <SkillsSkeleton />,
})

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <ExperienceSkeleton />,
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <ProjectsSkeleton />,
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <ContactSkeleton />,
})

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Aller au contenu principal
      </a>
      <main id="main-content" className="min-h-screen">
      <Navigation />
      <Hero />
        <SkillsAndStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </>
  )
}

