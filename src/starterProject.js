export const initialFileTree = [{
    name: "src",
    path: "/src",
    type: "folder",
    expanded: !0,
    children: [{
      name: "App.tsx",
      path: "/src/App.tsx",
      type: "file"
    }, {
      name: "main.tsx",
      path: "/src/main.tsx",
      type: "file"
    }, {
      name: "components",
      path: "/src/components",
      type: "folder",
      expanded: !0,
      children: [{
        name: "Dashboard.tsx",
        path: "/src/components/Dashboard.tsx",
        type: "file"
      }, {
        name: "Stats.tsx",
        path: "/src/components/Stats.tsx",
        type: "file"
      }]
    }, {
      name: "styles.css",
      path: "/src/styles.css",
      type: "file"
    }]
  }, {
    name: "public",
    path: "/public",
    type: "folder",
    expanded: !1,
    children: [{
      name: "index.html",
      path: "/public/index.html",
      type: "file"
    }]
  }, {
    name: "package.json",
    path: "/package.json",
    type: "file"
  }, {
    name: "README.md",
    path: "/README.md",
    type: "file"
  }
];

export const initialStarterFiles = {
    "/src/App.tsx": {
      language: "tsx",
      content: `import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold tracking-tight">CodeForge Final</h1>
      <p className="text-zinc-400 mt-2">WebContainer + Supabase + AI - bereit für den letzten Build.</p>
      <Dashboard />
    </div>
  )
}`,
      original: `import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold tracking-tight">CodeForge Final</h1>
      <p className="text-zinc-400 mt-2">WebContainer + Supabase + AI - bereit für den letzten Build.</p>
      <Dashboard />
    </div>
  )
}`
    },
    "/src/main.tsx": {
      language: "tsx",
      content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)`,
      original: ""
    },
    "/src/components/Dashboard.tsx": {
      language: "tsx",
      content: `export default function Dashboard(){
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {[1,2,3].map(i=>(
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <div className="h-2 w-12 rounded-full bg-violet-500/50 mb-4" />
          <div className="h-4 w-24 rounded bg-white/10 mb-2" />
          <div className="h-3 w-full rounded bg-white/5" />
        </div>
      ))}
    </div>
  )
}`,
      original: ""
    },
    "/src/components/Stats.tsx": {
      language: "tsx",
      content: `export function Stats({ value }: { value: number }) {
  return <div className="text-2xl font-mono">{value.toLocaleString()}</div>
}`,
      original: ""
    },
    "/src/styles.css": {
      language: "css",
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }`,
      original: ""
    },
    "/package.json": {
      language: "json",
      content: `{
  "name": "codeforge-final",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite --port 3000",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@types/react": "^18.2.0"
  }
}`,
      original: ""
    },
    "/README.md": {
      language: "markdown",
      content: `# CodeForge Final

Die letzte Version. Echter Code-Runner.

- WebContainer bootet im Browser
- Supabase Sync optional
- AI baut echte Komponenten
- Deploy als ZIP

Start: npm run dev`,
      original: ""
    },
    "/public/index.html": {
      language: "html",
      content: '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Preview</title></head><body><div id="root"></div></body></html>',
      original: ""
    }
};
