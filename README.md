# Portfolio Développeur Logiciel

Portfolio moderne et épuré (2025-2026) pour développeur logiciel, présentant les compétences techniques et le parcours professionnel.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne et responsive
- **Framer Motion** - Animations légères et fluides
- **Lucide React** - Icônes modernes
- **Inter Font** - Typographie moderne

## ✨ Caractéristiques Design 2025-2026

- **Glassmorphism** - Effets de verre dépoli avec backdrop-blur
- **Animations fluides** - Transitions et micro-interactions sophistiquées
- **Dark mode** - Palette sobre avec accents bleus/cyan
- **Gradients modernes** - Dégradés subtils et animations de gradient
- **Responsive design** - Optimisé pour tous les appareils
- **Performance** - Animations au scroll avec lazy loading
- **Typographie hiérarchique** - Hiérarchie visuelle claire et lisible

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build de production

```bash
# Créer un build optimisé
npm run build

# Lancer le serveur de production
npm start
```

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux avec variables CSS
├── components/
│   ├── Navigation.tsx  # Navigation avec détection de section active
│   ├── Hero.tsx        # Section hero avec animations
│   ├── Skills.tsx       # Compétences avec barres de progression
│   ├── Experience.tsx  # Expériences professionnelles
│   ├── Projects.tsx    # Projets techniques
│   ├── Stack.tsx       # Stack & outils
│   └── Contact.tsx     # Contact avec liens sociaux
├── constants/
│   └── data.ts         # Données statiques centralisées
├── types/
│   └── index.ts        # Types TypeScript partagés
├── Dockerfile          # Configuration Docker multi-stage
├── .dockerignore       # Fichiers exclus du build Docker
├── .gitlab-ci.yml      # Pipeline CI/CD GitLab
└── next.config.js      # Configuration Next.js
```

## 🎨 Personnalisation

### Modifier les informations de contact

Éditez le fichier `components/Contact.tsx` et remplacez :
- L'email : `mailto:contact@example.com`
- Le profil LinkedIn : `https://linkedin.com/in/yourprofile`
- Le profil GitHub : `https://github.com/yourusername`

### Modifier le contenu

Tous les contenus sont directement dans les composants :
- **Expériences** : `components/Experience.tsx`
- **Compétences** : `components/Skills.tsx`
- **Projets** : `components/Projects.tsx`
- **Stack** : `components/Stack.tsx`

### Personnaliser les couleurs

Les couleurs sont définies dans `app/globals.css` via des variables CSS :
- `--background` : Couleur de fond principale
- `--foreground` : Couleur de texte principale
- `--accent` : Couleur d'accent (bleu par défaut)

## 🐳 Docker

### Build de l'image

```bash
docker build -t portfolio-dev .
```

### Exécution du conteneur

```bash
# Exposé uniquement sur localhost (pour reverse proxy)
docker run -p 127.0.0.1:3000:3000 portfolio-dev
```

### Avec Docker Compose (optionnel)

Créez un fichier `docker-compose.yml` :

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "127.0.0.1:3000:3000"  # Exposé uniquement sur localhost
    environment:
      - NODE_ENV=production
```

Puis exécutez :

```bash
docker-compose up -d
```

## 🚀 CI/CD avec GitLab

Le projet inclut un fichier `.gitlab-ci.yml` configuré pour :

1. **Build** - Compilation de l'application Next.js
2. **Test** - Exécution des linters
3. **Docker Build** - Construction de l'image Docker
4. **Deploy** - Déploiement (manuel par défaut)

### Configuration requise

- GitLab Runner avec Docker
- Variables d'environnement GitLab :
  - `CI_REGISTRY_USER` - Utilisateur du registry Docker
  - `CI_REGISTRY_PASSWORD` - Mot de passe du registry Docker
  - `CI_REGISTRY` - URL du registry Docker (ex: `registry.gitlab.com`)

### Déploiement automatique

Le pipeline se déclenche automatiquement sur :
- Branches `main` et `develop`
- Merge requests
- Tags

Pour déployer en production, le job `deploy` doit être déclenché manuellement depuis l'interface GitLab.

## 🌐 Déploiement

Le portfolio peut être déployé sur :
- **Docker** - Via l'image Docker construite
- **GitLab Pages** - Via le pipeline CI/CD
- **Vercel** (recommandé pour Next.js) - Déploiement automatique depuis GitHub
- **Netlify** - Support Next.js avec configuration automatique
- **Kubernetes** - Via l'image Docker

## 📝 Notes

- Design dark mode par défaut (optimisé pour 2025-2026)
- Responsive design (mobile, tablette, desktop)
- Animations légères et discrètes avec Framer Motion
- Navigation fluide avec scroll smooth et détection de section active
- Optimisé pour les performances (lazy loading, animations au scroll)
- Accessibilité améliorée (contrastes, navigation clavier)

## 🎯 Standards 2025-2026

Ce portfolio intègre les dernières tendances de design :
- Glassmorphism et effets de profondeur
- Micro-interactions sophistiquées
- Typographie moderne (Inter)
- Espacement généreux et hiérarchie visuelle claire
- Animations fluides avec easing personnalisés
- Gradients subtils et effets de lumière

