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
    company: 'Peaksys',
    role: 'Développeur C# / Kafka',
    period: 'Poste actuel',
    description:
      'Intégré à une équipe produit, développement et maintenance de systèmes distribués utilisant Kafka pour la gestion des événements en temps réel.',
    technologies: ['C#', '.NET', 'Kafka', 'Microservices', 'Event Streaming'],
    highlights: [
      'Développement de services événementiels haute performance',
      'Optimisation des pipelines de données en temps réel',
      'Collaboration en équipe produit agile',
    ],
  },
  {
    company: 'Floa Banque',
    role: 'Développeur C# / Js',
    period: '2022 - 2024',
    description:
      'Développement transverse sur plusieurs projets bancaires, avec focus sur la messagerie asynchrone et les bases de données NoSQL.',
    technologies: ['C#', 'JavaScript', 'MongoDB', 'RabbitMQ', '.NET'],
    highlights: [
      'Architecture de messagerie distribuée avec RabbitMQ',
      'Migration et optimisation de bases MongoDB',
      'Développement d\'APIs REST pour services bancaires',
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

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Architecture',
    skills: [
      { name: 'C# / .NET', level: 95 },
      { name: 'Architectures distribuées', level: 90 },
      { name: 'API REST / GraphQL', level: 88 },
      { name: 'Microservices', level: 85 },
    ],
  },
  {
    title: 'Messaging & Event Streaming',
    skills: [
      { name: 'Apache Kafka', level: 90 },
      { name: 'RabbitMQ', level: 88 },
      { name: 'Event Sourcing', level: 80 },
    ],
  },
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'SQL Server', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'DevOps & Production',
    skills: [
      { name: 'MCO / Support Niveau 3', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Monitoring & Observabilité', level: 85 },
    ],
  },
]

export const skillCategoriesWithIcons = [
  {
    title: 'Backend & Architecture',
    icon: Server,
    skills: [
      { name: 'C# / .NET', level: 95 },
      { name: 'Architectures distribuées', level: 90 },
      { name: 'API REST / GraphQL', level: 88 },
      { name: 'Microservices', level: 85 },
      { name: 'Design Pattern : Command', level: 85 },
    ],
  },
  {
    title: 'Messaging & Event Streaming',
    icon: MessageSquare,
    skills: [
      { name: 'Apache Kafka', level: 90 },
      { name: 'RabbitMQ', level: 88 },
      { name: 'Event Sourcing', level: 80 },
    ],
  },
  {
    title: 'Frontend & UI',
    icon: Code2,
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Bases de données',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'SQL Server', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'DevOps & Production',
    icon: Monitor,
    skills: [
      { name: 'MCO / Support Niveau 3', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Monitoring & Observabilité', level: 85 },
    ],
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
      'CI/CD (GitHub Actions, Azure DevOps)',
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
  },
]

export const projectsWithIcons = [
  {
    ...projects[0],
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

