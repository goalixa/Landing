# Goalixa Landing Page v2.0

Modern, animated landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **React 18** + TypeScript for type safety
- **TailwindCSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Vite** for blazing-fast development
- **Responsive** mobile-first design
- **Optimized** for performance (Lighthouse 95+)
- **SEO-ready** with meta tags

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card)
│   ├── layout/          # Layout components (Navigation, Footer)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── animations/      # Animation wrappers
├── lib/
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # Content data
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🛠 Development

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t goalixa-landing:latest .
```

### Run Docker Container

```bash
docker run -p 80:80 goalixa-landing:latest
```

## 🚢 Deployment

This project is deployed to Kubernetes using ArgoCD GitOps.

### Kubernetes with Helm

```bash
helm upgrade --install goalixa-landing ./helm \
  --namespace goalixa-landing \
  --create-namespace \
  --values ./helm/values-production.yaml
```

### CI/CD Pipeline

GitHub Actions workflow automatically:
1. Builds Docker image on push to `main`
2. Pushes to Harbor registry
3. Updates ArgoCD application
4. ArgoCD syncs deployment

## Security

### Content Security Policy (CSP)

Configure at the ingress level:

```yaml
nginx.ingress.kubernetes.io/configuration-snippet: |
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.goalixa.com; font-src 'self' data:;";
```

### Security Headers

The service should be behind nginx-ingress with:
- **TLS 1.3**: Minimum TLS 1.2
- **HSTS**: Enabled with subdomains
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff

### Production Checklist

- [ ] HTTPS enforced (redirect HTTP to HTTPS)
- [ ] Security headers configured
- [ ] CSP policy defined
- [ ] Resource limits set
- [ ] Health checks configured

## 📊 Performance Targets

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Bundle Size**: < 200KB gzipped

## 🎨 Design System

- **Primary Color**: #0066FF (Electric Blue)
- **Typography**: Inter (display + body)
- **Spacing**: 4px base unit
- **Animations**: Framer Motion with reduced-motion support

## 📝 Content Updates

To update content (features, FAQs, etc.), edit:
- `src/lib/constants.ts`

## 🔧 Tech Stack

- **React 18.3**
- **TypeScript 5.4**
- **Vite 5.1**
- **TailwindCSS 3.4**
- **Framer Motion 11.0**
- **Lucide Icons**

## 📄 License

Created by Amirreza Rezaie. All rights reserved.

---

**Last Updated**: 2026-05-13
**Version**: 2.1.0
**Production Ready**: ✅ Yes

