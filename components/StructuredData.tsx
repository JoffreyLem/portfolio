export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joffrey Lemery',
  jobTitle: 'Ingénieur Développeur Expert',
  url: 'https://portofolio.botbot.fr',
  sameAs: [
    'https://www.linkedin.com/in/joffrey-lemery',
    'https://github.com/JoffreyLem',
  ],
  knowsAbout: [
    'C#',
    '.NET',
    'Kafka',
    'RabbitMQ',
    'Microservices',
    'Architecture distribuée',
    'Event Streaming',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Extia',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Extia',
  },
  description:
    'Ingénieur Développeur .NET expert en architectures distribuées, microservices, event streaming (Kafka, RabbitMQ) et systèmes en production.',
}

export function StructuredDataScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

