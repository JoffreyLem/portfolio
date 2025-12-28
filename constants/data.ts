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
    company: 'Extia',
    role: 'Ingénieur Développeur .NET',
    period: '2022 - Poste actuel',
    description:
      'Ingénieur développeur .NET chez Extia, envoyé en mission chez différents clients. Développement et maintenance d\'applications backend avec expertise en architectures distribuées, microservices et gestion de production.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'Microservices', 'API REST', 'Docker'],
    highlights: [
      'Missions chez différents clients (Peaksys/Cdiscount, Floa Banque)',
      'Développement d\'APIs et systèmes distribués',
      'Gestion de production',
      'Architectures microservices et event-driven',
    ],
    missions: [
      {
        company: 'Peaksys ( Cdiscount )',
        role: 'Développeur C# / Kafka',
        period: 'Mission en cours',
        description:
          'Mission chez Peaksys (Cdiscount) via Extia. Intégré à une équipe produit, développement et maintenance de systèmes distribués utilisant Kafka pour la gestion des événements en temps réel. Responsabilités sur le développement d\'APIs et la gestion de production en tant qu\'équipe produit.',
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
          'Mission chez Floa Banque via Extia. Développement transverse sur plusieurs projets bancaires, avec focus sur la messagerie asynchrone et les bases de données NoSQL. Développement d\'APIs et gestion de production sur les systèmes critiques.',
        technologies: ['C#', 'JavaScript', 'MongoDB', 'RabbitMQ', '.NET', 'API REST'],
        highlights: [
          'Architecture de messagerie distribuée avec RabbitMQ',
          'Développement d\'APIs REST pour services bancaires',
          'Gestion de bases MongoDB',
          'Gestion de production et support des systèmes critiques',
        ],
      },
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
  { name: 'ASP.NET Core', level: 5 },
  { name: 'Entity Framework Core', level: 4 },
  { name: 'Architectures distribuées', level: 3.5 },
  { name: 'API REST / GraphQL', level: 4 },
  { name: 'Microservices', level: 4 },
  { name: 'Clean Architecture', level: 4 },
]

const messagingSkills = [
  { name: 'Apache Kafka ( apprentissage )', level: 2.5 },
  { name: 'RabbitMQ', level: 4 },
  { name: 'SignalR', level: 4 },
  { name: 'Event Sourcing', level: 3.5 },
]

const frontendSkills = [
  { name: 'React', level: 4 },
  { name: 'TypeScript', level: 4 },
  { name: 'Next.js', level: 3 },
]

const databaseSkills = [
  { name: 'MongoDB', level: 4 },
  { name: 'SQL Server', level: 4 },
  { name: 'Redis', level: 3 },
]

const devopsSkills = [
  { name: 'MCO / Support Niveau 3', level: 4 },
  { name: 'Docker', level: 4 },
  { name: 'Kubernetes ( apprentissage )', level: 2.5 },
  { name: 'Ansible', level: 4 },
  { name: 'CI/CD', level: 3.5 },
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
      'Entity Framework Core',
      'JavaScript / TypeScript',
      'React',
      'Next.js',
    ],
  },
  {
    title: 'Messaging & Event Streaming',
    icon: MessageSquare,
    items: ['Apache Kafka', 'RabbitMQ', 'SignalR', 'Event Sourcing', 'CQRS'],
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
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'AutoMapper',
      'Clean Architecture',
      'Agile / Scrum',
      'TDD / BDD',
      'Monitoring & Observabilité',
      'MCO / Support Niveau 3',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Moteur de Décision de Trading IA',
    description:
      '🚧 Projet en cours - Moteur de décision de trading automatisé basé sur l\'intelligence artificielle. Architecture hybride combinant C# pour le backend et la logique métier, Python pour les modèles d\'IA et le machine learning, et React pour l\'interface utilisateur. Intégration de modèles prédictifs et d\'analyse de sentiment pour optimiser les décisions de trading.',
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Python',
      'React',
      'TypeScript',
      'Machine Learning',
      'IA',
    ],
    category: 'Full Stack / Trading / IA / En cours',
    highlights: [
      'Architecture hybride C# / Python pour le traitement IA',
      'Modèles de machine learning pour prédiction de marché',
      'Analyse de sentiment et traitement du langage naturel',
      'Système de décision automatisé avec validation manuel'
    ],
    githubUrl: undefined,
  },
  {
    title: 'Trading Bot - Robot de Trading Automatisé',
    description:
      '⏸️ Projet Archivé - Application complète de trading automatisé avec backend .NET et frontend React. Architecture modulaire avec compilation dynamique de stratégies, analyse technique avancée (indicateurs, patterns de chandeliers), gestion de risque, et intégration SignalR pour le temps réel. Intégration expérimentale LLM pour l\'analyse de marché.',
    technologies: [
      '.NET',
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'SignalR',
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Docker',
    ],
    category: 'Full Stack / Trading / Archivé',
    highlights: [
      'Architecture modulaire avec bibliothèques spécialisées (Trading, API, LLM)',
      'Compilation dynamique de stratégies C# sans redémarrage',
      'Analyse technique complète (SMA, EMA, RSI, MACD, Bollinger, patterns chandeliers)',
      'Gestion de risque automatisée (Stop Loss, Take Profit, Trailing Stop)',
      'Communication temps réel via SignalR (WebSockets)',
      'Frontend React avec dashboard temps réel et graphiques',
      'Intégration expérimentale LLM pour analyse de sentiment',
      'Génération automatique de DTOs TypeScript depuis C#',
    ],
    githubUrl: 'https://github.com/JoffreyLem/trading-botbot-fr-v3',
  },
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
    title: 'ProjectDroit - Assistant Juridique IA',
    description:
      '⚠️ Projet Expérimental - Application d\'assistance juridique combinant l\'IA (LLM) avec l\'API Legifrance pour analyser et répondre à des questions juridiques. Architecture Clean Architecture avec .NET 8, React et intégration de modèles LLM (Ollama, Gemini).',
    technologies: [
      '.NET 8',
      'ASP.NET Core',
      'React',
      'TypeScript',
      'MongoDB',
      'Docker',
      'Ollama',
      'Clean Architecture',
    ],
    category: 'Backend / IA / Expérimental',
    highlights: [
      'Architecture Clean Architecture en couches (.NET 8)',
      'Intégration LLM (Ollama local et Gemini API)',
      'Extraction automatique de mots-clés juridiques via IA',
      'Recherche dans l\'API officielle Legifrance',
      'Interface React avec recherche globale et avancée',
      'Infrastructure Docker Compose (MongoDB, Seq, Ollama)',
    ],
    githubUrl: 'https://github.com/JoffreyLem/ProjectDroits',
  },
  {
    title: 'Application de présence',
    description:
      'Application web de gestion de présence développée pour l\'ESN Extia. Permet la gestion des réservations, des événements et le suivi de localisation des collaborateurs. Architecture complète avec backend .NET (ASP.NET Core, Entity Framework Core) et frontend React (React 18, TypeScript, Vite).',
    technologies: [
      '.NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'React',
      'TypeScript',
      'Vite',
      'AutoMapper',
      'Docker',
    ],
    category: 'Full Stack / Application Métier',
    highlights: [
      'API REST ASP.NET Core avec architecture en couches',
      'Entity Framework Core avec migrations et repositories',
      'Frontend React 18 avec TypeScript et Vite',
      'Système d\'authentification et gestion des utilisateurs',
      'Gestion des événements et réservations',
      'Interface d\'administration complète',
      'Infrastructure Docker Compose (dev et production)',
      'Middleware de gestion d\'exceptions et logging',
    ],
    githubUrl: undefined,
  }
]

export const projectsWithIcons = [
  {
    ...projects[0],
    icon: Code2,
  },
  {
    ...projects[1],
    icon: Code2,
  },
  {
    ...projects[2],
    icon: Code2,
  },
  {
    ...projects[3],
    icon: Code2,
  },
  {
    ...projects[4],
    icon: Code2,
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

