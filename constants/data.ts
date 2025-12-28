/**
 * Données statiques du portfolio
 */

import type { Experience, Project, SkillCategory, StackCategory } from '@/types'
import { 
  Server, 
  MessageSquare, 
  Code2, 
  Database, 
  Monitor,
  Cloud,
  Settings,
  Zap,
  Activity,
  Code
} from 'lucide-react'

export const experiences: Experience[] = [
  {
    company: 'Peaksys ( Cdiscount )',
    role: 'Développeur C# / Kafka',
    period: 'Poste actuel',
    description:
      'Intégré à une équipe produit, développement et maintenance de systèmes distribués utilisant Kafka pour la gestion des événements en temps réel. Responsabilités sur le développement d\'APIs et la gestion de production en tant qu\'équipe produit.',
    technologies: ['C#', '.NET', 'Kafka', 'Microservices', 'Event Streaming', 'API REST'],
    highlights: [
      'Développement de services événementiels haute performance',
      'Développement d\'APIs REST pour la gestion des commandes',
      'Gestion de production et support en équipe produit',
      'Optimisation des pipelines de données en temps réel',
      'Collaboration en équipe produit agile',
    ],
  },
  {
    company: 'Floa Banque',
    role: 'Développeur C# / Js',
    period: '2022 - 2025',
    description:
      'Développement transverse sur plusieurs projets bancaires, avec focus sur la messagerie asynchrone et les bases de données NoSQL. Développement d\'APIs et gestion de production sur les systèmes critiques.',
    technologies: ['C#', 'JavaScript', 'MongoDB', 'RabbitMQ', '.NET', 'API REST'],
    highlights: [
      'Architecture de messagerie distribuée avec RabbitMQ',
      'Développement d\'APIs REST pour services bancaires',
      'Gestion de bases MongoDB',
      'Gestion de production et support des systèmes critiques',
    ],
  },
  {
    company: 'CGI',
    role: 'Développeur API et Support Niveau 3',
    period: '2020 - 2022',
    description:
      'Développement C# avec responsabilités en MCO (Maintenance en Conditions Opérationnelles) et support niveau 3 en production.',
    technologies: ['C#', '.NET', 'API REST', 'SQL Server', 'Support Production'],
    highlights: [
      'Développement et maintenance d\'APIs critiques',
      'Support niveau 3 et résolution d\'incidents en production',
      'Optimisation de performances et monitoring de systèmes',
    ],
  },
]

// Compétences de base (sans icônes) - réutilisées pour skillCategoriesWithIcons
// Système de notation sur 5 points (1-5)
const backendSkills = [
  { name: 'C# / .NET', level: 5 },
  { name: 'Architectures distribuées', level: 4 },
  { name: 'API REST / GraphQL', level: 4 },
  { name: 'Microservices', level: 4 },
]

const messagingSkills = [
  { name: 'Apache Kafka', level: 4 },
  { name: 'RabbitMQ', level: 4 },
  { name: 'Event Sourcing', level: 4 },
]

const frontendSkills = [
  { name: 'React', level: 4 },
  { name: 'TypeScript', level: 4 },
]

const databaseSkills = [
  { name: 'MongoDB', level: 4 },
  { name: 'SQL Server', level: 4 },
  { name: 'Redis', level: 4 },
]

const devopsSkills = [
  { name: 'MCO / Support Niveau 3', level: 5 },
  { name: 'Docker', level: 4 },
  { name: 'Kubernetes', level: 4 },
  { name: 'Ansible', level: 4 },
  { name: 'CI/CD', level: 4 },
  { name: 'Monitoring & Observabilité', level: 4 },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Architecture',
    skills: backendSkills,
  },
  {
    title: 'Messaging & Event Streaming',
    skills: messagingSkills,
  },
  {
    title: 'Frontend & UI',
    skills: frontendSkills,
  },
  {
    title: 'Bases de données',
    skills: databaseSkills,
  },
  {
    title: 'DevOps & Production',
    skills: devopsSkills,
  },
]

export const skillCategoriesWithIcons = [
  {
    title: 'Backend & Architecture',
    icon: Server,
    skills: backendSkills,
  },
  {
    title: 'Messaging & Event Streaming',
    icon: MessageSquare,
    skills: messagingSkills,
  },
  {
    title: 'Frontend & UI',
    icon: Code2,
    skills: frontendSkills,
  },
  {
    title: 'Bases de données',
    icon: Database,
    skills: databaseSkills,
  },
  {
    title: 'DevOps & Production',
    icon: Monitor,
    skills: devopsSkills,
  },
]

export const stackCategoriesWithIcons = [
  {
    title: 'Langages & Frameworks',
    icon: Code2,
    items: [
      'C#',
      '.NET / .NET Core',
      'ASP.NET Core',
      'JavaScript / TypeScript',
      'React',
    ],
  },
  {
    title: 'Messaging & Event Streaming',
    icon: MessageSquare,
    items: ['Apache Kafka', 'RabbitMQ', 'Event Sourcing', 'CQRS'],
  },
  {
    title: 'Bases de données',
    icon: Database,
    items: [
      'MongoDB',
      'SQL Server',
      'PostgreSQL',
      'Redis',
      'Elasticsearch',
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    items: [
      'Docker',
      'Kubernetes',
      'CI/CD (Gitlab CICD, Azure DevOps)',
      'Prometheus / Grafana',
    ],
  },
  {
    title: 'Outils & Méthodologies',
    icon: Settings,
    items: [
      'Git',
      'Agile / Scrum',
      'TDD / BDD',
      'Monitoring & Observabilité',
      'MCO / Support Niveau 3',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description:
      'Portfolio moderne et épuré développé avec Next.js 14, TypeScript et Tailwind CSS. Design 2025-2026 avec glassmorphism, animations fluides et dark mode. Déployé via Docker et CI/CD GitLab.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Docker'],
    category: 'Full Stack / Portfolio',
    highlights: [
      'Architecture Next.js 14 avec App Router',
      'Design moderne avec glassmorphism et animations',
      'CI/CD complet avec GitLab et Docker',
      'Optimisé pour les performances et le SEO',
    ],
    githubUrl: 'https://github.com/JoffreyLem/portfolio',
  },
  {
    title: 'Projets à venir',
    description:
      'Cette section sera bientôt enrichie avec mes réalisations techniques. Je prépare actuellement la mise en ligne de projets illustrant mon expertise en architectures distribuées, systèmes backend et solutions techniques complexes.',
    technologies: [],
    category: 'En préparation',
    highlights: [
      'Projets en cours de finalisation',
      'Documentation et préparation en cours',
      'Bientôt disponible',
    ],
    githubUrl: undefined,
  },
]

export const projectsWithIcons = [
  {
    ...projects[0],
    icon: Code2,
  },
  {
    ...projects[1],
    icon: Code,
  },
]

export const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Projets', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
]

export const techStack = ['C# / .NET', 'Kafka', 'RabbitMQ', 'React', 'MongoDB']

