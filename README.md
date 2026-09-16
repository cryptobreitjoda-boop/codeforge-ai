# CodeForge AI

Dieses Repository enthält die **Editor-App** als normales React/Vite-Projekt.
Der frühere `index.html`-Artifact-Export wurde in wartbare Quellmodule unter `src/` überführt.

## Voraussetzungen

- Node.js **>= 20.11.0**
- npm (mit Lockfile)

## Start aus frischem Checkout

```bash
npm ci
npm run dev
```

Weitere Befehle:

```bash
npm test
npm run build
npm run preview
```

> Hinweis: Nach der Migration ist die App nicht mehr als vollständige Anwendung per direktem Öffnen einer rohen `index.html` gedacht. Entwicklung/Build laufen über Vite.

## Struktur

- `/src/main.jsx` – App-Entry
- `/src/App.jsx` – rekonstruiertes Editor-UI mit States, Panels, Shortcuts, Split-View, Preview/Terminal-Bereich
- `/src/starterProject.js` – virtuelles Starterprojekt (Dateibaum + Datei-Inhalte), das im Editor angezeigt/bearbeitet wird
- `/src/styles.css` – aus dem ursprünglichen Export übernommene Styles
- `/supabase.sql`, `/Supabase.sql` – unveränderte SQL-Dateien

## Editor-App vs. eingebautes Beispielprojekt

Die Dateien wie `/src/App.tsx`, `/src/main.tsx`, `/package.json` in der UI sind **virtuelle Dateien des Starterprojekts** innerhalb der Editor-App.
Sie sind nicht die Build-Konfiguration dieses Repositories.

## Isolation-Header (COOP/COEP/CORP)

Für WebContainer-Kompatibilität bleiben diese Header aktiv:

- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Embedder-Policy: require-corp`
- `Cross-Origin-Resource-Policy: same-origin`

Konfiguration:

- lokal (Dev/Preview): `vite.config.js` (`server.headers` + `preview.headers`)
- Vercel: `vercel.json` (`headers`)

Zusätzlich wurde der SPA-Fallback so angepasst, dass statische Assets nicht vom Rewrite auf `index.html` überdeckt werden.

## Vercel-Build

Das Repository ist auf Vite-Build (`dist/`) ausgelegt. Lokal prüfen mit:

```bash
npm run build
npm run preview
```

## Tests / CI

Enthaltene Smoke-/Regressionstests prüfen u. a.:

- App-Start
- Datei-Editing im Editor
- Shortcut für Command Palette
- AI-Flow: „Bau Dashboard“ erzeugt zusätzliche virtuelle Datei

CI-Workflow: `.github/workflows/ci.yml` führt `npm ci`, `npm test`, `npm run build` aus.

## Rekonstruktionsgrenzen

Die App wurde aus einem minifizierten Export rekonstruiert. Verhalten wurde beibehalten, aber es gibt Grenzen:

- Vollständige 1:1-Rückgewinnung ursprünglicher Authoring-Quellen ist aus dem Bundle nicht garantiert.
- Externe Integrationen (z. B. CDN-Erreichbarkeit, WebContainer unter echten Produktions-Headern, externe APIs) bleiben umgebungsabhängig.
- Dieser PR implementiert **nicht** sämtliche beworbenen Integrationen neu, sondern stellt die vorhandene Implementierung reproduzierbar baubar bereit.
