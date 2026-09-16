# Go/No-Go Matrix – Feature-Validierung

Stand: Commit `1cffb04856eaf4022b77529816cf0d0e4e547442`

## P0 (kritisch)

| ID | Status | Blocker |
|---|---|---|
| P0-1 GitHub Token + Repos laden | No-Go | Keine echte GitHub-API-Anbindung nachweisbar |
| P0-2 Echte Commits | No-Go | Kein echter Commit-API-Flow im Client |
| P0-3 PR Flow | No-Go | PR-Daten und Status sind UI-Mock |
| P0-4 Issues + Actions live | No-Go | Statische Demo-Inhalte statt Live-API |
| P0-5 WebContainer real run | No-Go | Boot angedeutet, Runner-Pipeline/Terminal teils simuliert |
| P0-6 Supabase Auth + CRUD | No-Go | Kein echter Auth- und CRUD-Flow im Client nachweisbar |
| P0-7 Quickstart reproduzierbar | No-Go | Repo-Root ohne echte Build-Struktur für README-Quickstart |

## P1 (hoch)

| ID | Status | Blocker |
|---|---|---|
| P1-1 Monaco echt | No-Go | Editor basiert auf `textarea`, Monaco nicht real belegt |
| P1-2 Minimap | No-Go | Keine funktionale Minimap sichtbar |
| P1-3 AI @codebase echt | No-Go | Chat-Logik lokal/simuliert |
| P1-4 Ghost Completion (Tab) | No-Go | Kein belastbarer Tab-Akzeptanzpfad |
| P1-5 AI Review echt | No-Go | Review-Text ist statisch |
| P1-6 1-Click Vercel Deploy | No-Go | Aktuell Download-Flow statt echter Deploy-Trigger |

## Referenzen

- README Features: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L5-L11
- README Quickstart: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L13-L21
- README Supabase: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L28-L32
- README Vercel: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L34-L44
- README Env: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L46-L51
- README Shortcuts: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/README.md#L58-L63
- `index.html` zentrale Runtime-Blöcke: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/index.html#L87
- `index.html` Handler/Simulationen: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/index.html#L161
- `index.html` Editor-Textareas: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/index.html#L174-L175
- `supabase.sql` Schema + RLS: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/supabase.sql#L4-L18
- `vercel.json` Header + Rewrite: https://github.com/cryptobreitjoda-boop/codeforge-ai/blob/1cffb04856eaf4022b77529816cf0d0e4e547442/vercel.json#L1-L27
