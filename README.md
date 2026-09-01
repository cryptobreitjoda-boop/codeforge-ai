# CodeForge AI - Ultimate Code Editor mit GitHub

Live Editor gebaut mit React + Monaco + WebContainers + GitHub API + Supabase

## Features
- **Monaco Editor** (echtes VS Code Feeling), Split View, Minimap
- **GitHub Integration**: Token -> Repos laden, echte Commits via API, PR Flow, Issues, Actions
- **AI**: @codebase Chat, Agent Mode (erstellt mehrere Dateien), Ghost Completion (Tab), AI Review
- **WebContainers**: `npm install` & `npm run dev` läuft WIRKLICH im Browser (braucht COOP/COEP Headers)
- **Cloud Sync**: Supabase Auth + projects Tabelle
- **Deploy**: 1-Click Vercel

## Quick Start

### 1. Lokal
```bash
npm install
npm run dev
```

Oder einfach die `index.html` aus diesem Repo öffnen - alles client-only.

### 2. GitHub verbinden
1. Gehe zu github.com/settings/tokens/new
2. Erstelle classic token mit Scope `repo` + `gist`
3. Im Editor: GitHub Panel -> Token einfügen -> Verbinden

### 3. Supabase verbinden (optional, für Cloud)
1. Neues Projekt auf supabase.com
2. SQL Editor -> Inhalt von `supabase.sql` ausführen
3. Settings -> API -> URL + anon key kopieren
4. Im Editor: Settings -> Supabase URL + Key eintragen -> Login

### 4. Deploy auf Vercel (für echte WebContainers)
WICHTIG: Ohne Header läuft WebContainers nicht, Code wird simuliert.

```bash
vercel --prod
```
Die `vercel.json` in diesem Repo setzt automatisch:
- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Embedder-Policy: require-corp

Nach Deploy: WebContainers bootet, `npm run dev` startet echten Dev Server, Preview zeigt localhost.

### 5. Env (optional)
Wenn du Supabase fest einbauen willst:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Projekt Struktur
- `index.html` - Die komplette App (aus dem Artifact Export)
- `vercel.json` - Headers für WebContainers
- `supabase.sql` - DB Schema

## Shortcuts
- Ctrl+P: Datei suchen
- Ctrl+K: Command Palette
- Ctrl+S: Speichern
- ?: Shortcuts Hilfe
- Tab: AI Vorschlag annehmen

## Roadmap
- [ ] Echte Extension API
- [ ] Voice -> Code
- [ ] Figma Import

Built with CodeForge AI Ultimate.
