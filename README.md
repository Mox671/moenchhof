# Gästehaus Mönchhof Website

Diese Angular-Anwendung ist die offizielle Website des Gästehauses Mönchhof.

## Entwicklung

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm

### Installation
```bash
npm install
```

### Entwicklungsserver starten
```bash
npm start
```
Die Anwendung ist dann unter `http://localhost:4200` verfügbar.

### Build für Produktion
```bash
npm run build
```

## GitHub Pages Deployment

Diese Anwendung ist für GitHub Pages optimiert und wird automatisch bei jedem Push auf den `main` Branch deployed.

### Automatisches Deployment
1. Push auf den `main` Branch
2. GitHub Actions baut die Anwendung automatisch
3. Die Website wird auf `https://[username].github.io/moenchhof/` deployed

### Manuelles Deployment
```bash
npm run build:github-pages
```

### GitHub Pages Konfiguration
- **Repository Name**: `moenchhof`
- **Base Href**: `/moenchhof/`
- **Branch**: `gh-pages` (wird automatisch erstellt)

## Projektstruktur

```
src/
├── app/
│   ├── components/          # Wiederverwendbare Komponenten
│   ├── pages/              # Seitenkomponenten
│   └── ...
├── assets/                 # Bilder, Icons, etc.
└── ...
```

## Technologien

- Angular 19
- Bootstrap 5
- TypeScript
- GitHub Actions für CI/CD
# Trigger deployment
