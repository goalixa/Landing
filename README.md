# Goalixa Landing Page

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Modern, animated landing page for Goalixa built with React and Framer Motion.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI framework |
| TypeScript | 5.4 | Type safety |
| Vite | 5.1 | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.0 | Animations |
| Lucide Icons | - | Icon library |

## Project Structure

```
src/
├── components/
│   ├── ui/           # Button, Card, etc.
│   ├── layout/       # Navigation, Footer
│   ├── sections/     # Hero, Features, etc.
│   └── animations/   # Animation wrappers
├── lib/
│   ├── utils.ts      # Utilities
│   └── constants.ts  # Content data
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/goalixa/goalixa-landing.git
cd goalixa-landing
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Build

```bash
npm run build
npm run preview
```

## Deployment

### Docker

```bash
docker build -t goalixa-landing:latest .
docker run -p 80:80 goalixa-landing:latest
```

### Kubernetes

```bash
helm upgrade --install goalixa-landing ./helm \
  --namespace goalixa \
  --create-namespace
```

## Customization

### Content Updates

Edit `src/lib/constants.ts` to update:

- Features list
- FAQ items
- Testimonials
- Pricing plans

### Design System

| Element | Value |
|---------|-------|
| Primary Color | `#0066FF` |
| Font | Inter |
| Base Spacing | 4px |

## Performance

| Metric | Target |
|--------|--------|
| Lighthouse Score | 95+ |
| First Contentful Paint | < 1.5s |
| Bundle Size | < 200KB gzipped |

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built by [Amirreza Rezaie](https://github.com/amirrezarezaie)
