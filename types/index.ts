/**
 * Types partagés pour le portfolio
 */

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  highlights: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
  highlights: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface StackCategory {
  title: string
  items: string[]
}

export interface NavItem {
  name: string
  href: string
}

