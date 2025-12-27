# Guide de Déploiement

Ce document décrit les différentes méthodes de déploiement du portfolio.

## 🐳 Déploiement avec Docker

### Build local

```bash
# Build de l'image
docker build -t portfolio-dev:latest .

# Exécution
docker run -d -p 3000:3000 --name portfolio portfolio-dev:latest
```

### Push vers un registry

```bash
# Tag de l'image
docker tag portfolio-dev:latest registry.example.com/portfolio-dev:latest

# Push
docker push registry.example.com/portfolio-dev:latest
```

## 🚀 Déploiement avec GitLab CI/CD

### Prérequis

1. **GitLab Runner** configuré avec Docker
2. **Variables d'environnement** dans GitLab :
   - `CI_REGISTRY_USER` - Utilisateur du registry
   - `CI_REGISTRY_PASSWORD` - Token d'accès au registry
   - `CI_REGISTRY` - URL du registry (ex: `registry.gitlab.com`)

### Pipeline

Le pipeline `.gitlab-ci.yml` comprend 4 stages :

1. **build** - Compilation Next.js
2. **test** - Linting
3. **docker-build** - Construction et push de l'image Docker
4. **deploy** - Déploiement (manuel)

### Déclenchement

Le pipeline se déclenche automatiquement sur :
- Push sur `main` ou `develop`
- Merge requests
- Tags

### Déploiement manuel

Le job `deploy` nécessite une action manuelle depuis l'interface GitLab.

## ☸️ Déploiement sur Kubernetes

### Exemple de déploiement

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: registry.example.com/portfolio-dev:latest
        ports:
        - containerPort: 3000
          # Note: Pour exposer uniquement sur localhost, utilisez un Service de type ClusterIP
          # et configurez un Ingress avec un reverse proxy
        env:
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

## 🌐 Déploiement sur Vercel

1. Connectez votre repository GitLab/GitHub à Vercel
2. Vercel détecte automatiquement Next.js
3. Le déploiement se fait automatiquement à chaque push

## 📦 Variables d'environnement

Pour la production, configurez :

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

## 🔒 Sécurité

- L'application s'exécute avec un utilisateur non-root dans Docker
- Health check configuré dans le Dockerfile
- Variables d'environnement sécurisées via GitLab CI/CD

## 📊 Monitoring

L'application expose un endpoint de health check sur le port 3000.

Pour vérifier :

```bash
curl http://localhost:3000
```

