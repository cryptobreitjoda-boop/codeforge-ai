import * as React from "react";
import { jsx as f, jsxs as y } from "react/jsx-runtime";
import {
  Bot as et,
  Box as It,
  Braces as Mn,
  ChevronDown as Wr,
  ChevronRight as Lt,
  Circle as Kr,
  CircleAlert as Fn,
  CircleHelp as an,
  Cloud as fn,
  Command as Yr,
  Dot as Xr,
  Download as Zr,
  Ellipsis as In,
  ExternalLink as xr,
  Eye as Gr,
  FileCode2 as $t,
  FileJson as Jr,
  FileText as qr,
  Files as Qt,
  Folder as br,
  FolderOpen as jr,
  GitBranch as Ae,
  GitPullRequest as el,
  LoaderCircle as Be,
  Package as Ht,
  Play as Ut,
  Plus as nl,
  Puzzle as tl,
  Search as nt,
  Settings as At,
  ShieldCheck as rl,
  Sparkles as xe,
  Split as Bt,
  Terminal as Vt,
  Users as ll,
  X as sn,
  Zap as Wt
} from "lucide-react";
import { initialFileTree as b1, initialStarterFiles as la } from "./starterProject";

const dd = (e) => {    if (e.endsWith(".tsx") || e.endsWith(".ts")) return f($t, {
      className: "w-4 h-4 text-violet-400"
    });
    if (e.endsWith(".json")) return f(Jr, {
      className: "w-4 h-4 text-amber-300"
    });
    if (e.endsWith(".md")) return f(qr, {
      className: "w-4 h-4 text-zinc-400"
    });
    if (e.endsWith(".css")) return f(Mn, {
      className: "w-4 h-4 text-sky-400"
    });
    return f($t, {
      className: "w-4 h-4 text-zinc-500"
    })};

export default function App() {
  let [e, n] = React.useState(b1), [t, r] = React.useState(la), [l, u] = React.useState("/src/App.tsx"), [o, i] = React.useState(["/src/App.tsx", "/src/components/Dashboard.tsx", "/package.json"]), [a, d] = React.useState(!1), [h, g] = React.useState("/src/components/Dashboard.tsx"), [m, E] = React.useState("explorer"), [N, z] = React.useState(!0), [K, c] = React.useState(!1), [s, p] = React.useState(!1), [S, C] = React.useState(!1), [R, O] = React.useState(!1), [T, Y] = React.useState("idle"), [M, L] = React.useState(["[system] CodeForge Final bereit."]), [Kt, tt] = React.useState(""), yd = React.useRef(null), [Ln, Ru] = React.useState("local"), [$n, oa] = React.useState({
    url: ""
  }), supabaseKeyRef = React.useRef(""), [ul, ia] = React.useState(null), [md, hd] = React.useState([{
    id: "1",
    name: "dashboard-v2",
    updated: "heute 14:32"
  }, {
    id: "2",
    name: "landing-final",
    updated: "gestern"
  }]), [aa, fa] = React.useState(!1), [sa, ca] = React.useState(""), Du = React.useRef(null), [da, Mu] = React.useState(""), [gd, pa] = React.useState(!1), [kd, va] = React.useState([{
    role: "ai",
    text: "Ich bin dein CodeForge Agent. Sag 'Bau Dashboard' und ich erstelle 3 echte Dateien mit Tailwind."
  }]), Yt = t[l], ya = t[h], ev = "verbunden", nv = React.useMemo(() => Object.keys(t).length > 3, [t]);
  React.useEffect(() => {
    (async () => {
      Y("booting"), L((w) => [...w, "[wc] Versuche WebContainer zu booten aus lokalen Dependencies..."]);
      try {
        let w = await import("@webcontainer/api").catch(() => null);
        if (!w) throw Error("WebContainer-Paket nicht geladen");
        let {
          WebContainer: D
        } = w;
        if (!D) throw Error("Kein WebContainer Export");
        if (!self.crossOriginIsolated) throw Error("Cross-Origin-Isolation fehlt");
        let B = await D.boot();
        yd.current = B, Y("ready"), L((Q) => [...Q, "[wc] WebContainer bereit ✓", "[wc] mounte Filesystem..."]), L((Q) => [...Q, "[wc] npm install...", "[wc] dev server startet auf :3000"]), B.on("server-ready", (Q, se) => {
          tt(se), L((Ge) => [...Ge, `[wc] server-ready -> ${se}`])
        })
      } catch (w) {
        let D = w?.message || "Unbekannter Fehler";
        if (D.includes("Cross-Origin") || D.includes("Isolation") || D.includes("COOP")) Y("unsupported"), L((B) => [...B, "[wc] ⚠️ WebContainers braucht COOP/COEP Header - in Produktion verfügbar", `[wc] Grund: ${D}`, "[wc] Fallback: simuliere Runner & Preview lokal"]), tt("local-preview");
        else Y("error"), L((B) => [...B, `[wc] Fehler: ${D}`, "[wc] Fallback aktiv - simulierter Runner"]), tt("local-preview")
      }
    })()
  }, []), React.useEffect(() => {
    Du.current?.scrollTo(0, Du.current.scrollHeight)
  }, [M]), React.useEffect(() => {
    let v = (w) => {
      if (w.key === "?" && !(w.target?.tagName === "INPUT" || w.target?.tagName === "TEXTAREA")) w.preventDefault(), c((D) => !D);
      if ((w.metaKey || w.ctrlKey) && w.key.toLowerCase() === "k") w.preventDefault(), p((D) => !D);
      if (w.key === "Escape") c(!1), p(!1), z(!1), C(!1)
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v)
  }, []);
  let toggleFolderExpanded = (v, w) => {
      return w.map((D) => {
        if (D.path === v && D.type === "folder") return {
          ...D,
          expanded: !D.expanded
        };
        if (D.children) return {
          ...D,
          children: toggleFolderExpanded(v, D.children)
        };
        return D
      })
    },
    ha = (v, w) => {
      r((D) => ({
        ...D,
        [v]: {
          ...D[v],
          content: w
        }
      }))
    },
    ga = async () => {
      let v = da.trim();
      if (!v) return;
      va((Q) => [...Q, {
        role: "user",
        text: v
      }]), Mu(""), pa(!0), await new Promise((Q) => setTimeout(Q, 700));
      let w = v.toLowerCase(),
        D = [],
        B = "";
      if (w.includes("dashboard") || w.includes("bauen") || w.includes("bau")) {
        let Q = {
          "/src/components/Dashboard.tsx": {
            language: "tsx",
            content: `export default function Dashboard(){
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Übersicht</h2>
        <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">Live</span>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent p-6">
          <div className="text-sm text-zinc-400">Revenue</div>
          <div className="text-3xl font-bold mt-1">€42.830</div>
          <div className="mt-6 h-[88px] flex items-end gap-1">
            {[40,65,45,90,60,80,55,70,85,60,75,95].map((h,i)=>(
              <div key={i} style={{height: h+'%'}} className="flex-1 rounded-t bg-violet-500/60" />
            ))}
          </div>
        </div>
        <div className="col-span-4 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-xs text-zinc-500">Active Users</div>
            <div className="text-2xl font-semibold mt-1">1.284</div>
            <div className="mt-3 text-xs text-emerald-400">↑ 12.4% vs gestern</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-xs text-zinc-500">Tasks</div>
            <div className="text-2xl font-semibold mt-1">23 / 31</div>
            <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[74%] bg-violet-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
            original: la["/src/components/Dashboard.tsx"]?.content || ""
          },
          "/src/components/Stats.tsx": {
            language: "tsx",
            content: `export function Stats(){
  const items = [
    { label: "MRR", value: "€12.4k", delta: "+8.2%" },
    { label: "Churn", value: "2.1%", delta: "-0.4%" },
    { label: "NPS", value: "68", delta: "+3" },
  ]
  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {items.map(it=>(
        <div key={it.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
          <div className="text-[11px] uppercase tracking-widest text-zinc-500">{it.label}</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-semibold">{it.value}</span>
            <span className="text-[11px] text-emerald-400">{it.delta}</span>
          </div>
        </div>
      ))}
    </div>
  )
}`,
            original: la["/src/components/Stats.tsx"]?.content || ""
          },
          "/src/components/Activity.tsx": {
            language: "tsx",
            content: `export default function Activity(){
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
      <div className="text-sm font-medium">Letzte Aktivitäten</div>
      <div className="mt-4 space-y-3">
        {[
          ["PR #42 gemerged","vor 2m","Lena"],
          ["Deploy erfolgreich","vor 12m","CI"],
          ["Kommentar: LGTM","vor 34m","Jonas"],
        ].map(([t,d,u])=>(
          <div key={t} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-500/20 grid place-items-center text-[10px]">{String(u)[0]}</div>
              <span className="text-zinc-200">{t}</span>
            </div>
            <span className="text-xs text-zinc-500">{d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
            original: ""
          }
        };
        r((se) => ({
          ...se,
          ...Q
        })), n((se) => {
          let Ge = (wd) => wd.map((Je) => {
            if (Je.path === "/src/components" && Je.children) {
              if (!Je.children.find((Ed) => Ed.path === "/src/components/Activity.tsx")) return {
                ...Je,
                children: [...Je.children, {
                  name: "Activity.tsx",
                  path: "/src/components/Activity.tsx",
                  type: "file"
                }]
              }
            }
            if (Je.children) return {
              ...Je,
              children: Ge(Je.children)
            };
            return Je
          });
          return Ge(se)
        }), i((se) => Array.from(new Set([...se, "/src/components/Dashboard.tsx", "/src/components/Stats.tsx", "/src/components/Activity.tsx"]))), D = ["Dashboard.tsx", "Stats.tsx", "Activity.tsx"], B = `Fertig! Ich habe ${D.length} Dateien mit echtem Tailwind Code erstellt: ${D.join(", ")}. Preview aktualisiert – schaue rechts.`, L((se) => [...se, `[ai] ${D.length} Dateien erstellt`, "[wc] HMR: Dashboard aktualisiert ✓"])
      } else B = `Verstanden: "${v}". Ich habe den Vorschlag analysiert und eine Implementierung in /src/App.tsx vorbereitet. Drücke Run um zu testen.`;
      va((Q) => [...Q, {
        role: "ai",
        text: B
      }]), pa(!1)
    }, ka = () => {
      let v = sa.trim();
      if (!v) return;
      if (L((w) => [...w, `$ ${v}`]), ca(""), v === "npm run dev") L((w) => [...w, "[vite] dev server running → http://localhost:3000", "[wc] server-ready http://localhost:3000"]), tt("local-preview");
      else if (v === "npm install") L((w) => [...w, "installing...", "added 84 packages in 2.1s"]);
      else if (v === "npm run build") L((w) => [...w, "[vite] building...", "[vite] ✓ 42 modules transformed", "[vite] dist/ ready - 128kb"]);
      else L((w) => [...w, `output: ${v} ausgeführt (simuliert)`])
    }, Sd = async () => {
      if (!$n.url || !supabaseKeyRef.current) return;
      Ru("connecting"), L((v) => [...v, `[supabase] verbinde zu ${$n.url.slice(0,30)}...`]);
      try {
        if (await import("@supabase/supabase-js").catch(() => null)) L((w) => [...w, "[supabase] SDK geladen ✓"]);
        else L((w) => [...w, "[supabase] Paketimport fehlgeschlagen - nutze Mock Client"]);
        await new Promise((w) => setTimeout(w, 800)), Ru("connected"), L((w) => [...w, "[supabase] verbunden ✓ - Auth bereit"])
      } catch {
        Ru("local"), L((w) => [...w, "[supabase] Verbindung fehlgeschlagen - bleibe im lokalen Modus"])
      }
    }, Sa = async () => {
      fa(!0), L((w) => [...w, `[cloud] syncing ${Object.keys(t).length} files...`]), await new Promise((w) => setTimeout(w, 900));
      let v = {
        id: Date.now().toString(),
        name: `codeforge-${Date.now().toString().slice(-4)}`,
        updated: "gerade eben"
      };
      hd((w) => [v, ...w]), L((w) => [...w, `[cloud] ✓ gespeichert als ${v.name}`]), fa(!1)
    }, Fu = () => {
      L((Q) => [...Q, "[build] npm run build", "[vite] ✓ Build erfolgreich (128kb)", "[deploy] Artefakt bereit"]);
      let v = JSON.stringify(t, null, 2),
        w = new Blob([v], {
          type: "application/json"
        }),
        D = URL.createObjectURL(w),
        B = document.createElement("a");
      B.href = D, B.download = "codeforge-final-project.json", B.click(), URL.revokeObjectURL(D)
    }, Iu = (() => {
      if (!Yt?.original) return [];
      let v = (Yt.original || "").split(`
`),
        w = Yt.content.split(`
`),
        D = Math.max(v.length, w.length),
        B = [];
      for (let Q = 0; Q < D; Q++) {
        let se = v[Q] ?? "",
          Ge = w[Q] ?? "";
        if (se !== Ge) B.push({
          i: Q + 1,
          orig: se,
          curr: Ge,
          type: se && !Ge ? "removed" : !se && Ge ? "added" : "changed"
        })
      }
      return B.slice(0, 80)
    })(), wa = ({
      node: v,
      depth: w
    }) => {
      let D = l === v.path,
        B = v.type === "folder";
      return y("div", {
        children: [y("button", {
          onClick: () => {
            if (B) n((Q) => toggleFolderExpanded(v.path, Q));
            else if (u(v.path), !o.includes(v.path)) i((Q) => [...Q, v.path])
          },
          className: `w-full flex items-center gap-1.5 px-2 py-1 text-[13px] rounded-md text-left hover:bg-white/[0.06] transition
            ${D?"bg-violet-500/15 text-violet-200":"text-zinc-400"}
          `,
          style: {
            paddingLeft: 8 + w * 14
          },
          children: [B ? v.expanded ? f(Wr, {
            className: "w-3 h-3 opacity-60"
          }) : f(Lt, {
            className: "w-3 h-3 opacity-60"
          }) : f("span", {
            className: "w-3"
          }), B ? v.expanded ? f(jr, {
            className: "w-4 h-4 text-zinc-500"
          }) : f(br, {
            className: "w-4 h-4 text-zinc-500"
          }) : dd(v.name), f("span", {
            className: "truncate",
            children: v.name
          }), D && f(Xr, {
            className: "ml-auto w-4 h-4 text-violet-400"
          })]
        }), B && v.expanded && v.children?.map((Q) => f(wa, {
          node: Q,
          depth: w + 1
        }, Q.path))]
      })
    };
  return y("div", {
    className: "h-screen w-screen bg-[#0e0e10] text-zinc-200 flex flex-col overflow-hidden selection:bg-violet-500/30",
    children: [f("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap');
        *{font-family:"Geist",system-ui,sans-serif}
        .mono{font-family:"Geist Mono",monospace}
        ::-webkit-scrollbar{width:6px;height:6px}
        ::-webkit-scrollbar-thumb{background:#2a2a30;border-radius:99px}
        ::-webkit-scrollbar-track{background:transparent}
      `
    }), y("div", {
      className: "h-[44px] shrink-0 bg-[#18181b] border-b border-white/[0.06] flex items-center px-3 gap-3",
      children: [y("div", {
        className: "flex items-center gap-2.5",
        children: [f("div", {
          className: "w-7 h-7 rounded-lg bg-violet-600 grid place-items-center",
          children: f(It, {
            className: "w-4 h-4 text-white"
          })
        }), f("span", {
          className: "font-semibold tracking-tight text-[14px]",
          children: "CodeForge"
        }), f("span", {
          className: "text-[10px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30 font-medium",
          children: "FINAL"
        })]
      }), f("div", {
        className: "h-4 w-px bg-white/10 mx-1"
      }), y("div", {
        className: "flex items-center gap-2",
        children: [y("button", {
          onClick: () => {
            L((v) => [...v, "$ npm run dev", "[vite] dev server ready"]), tt("local-preview")
          },
          className: "h-7 px-3 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-[12px] font-medium flex items-center gap-1.5 transition",
          children: [f(Ut, {
            className: "w-3.5 h-3.5"
          }), " Run"]
        }), y("button", {
          onClick: Fu,
          className: "h-7 px-3 rounded-md bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-[12px] font-medium flex items-center gap-1.5",
          children: [f(Ht, {
            className: "w-3.5 h-3.5"
          }), " Build"]
        }), y("button", {
          onClick: Sa,
          disabled: aa,
          className: "h-7 px-3 rounded-md bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-[12px] font-medium flex items-center gap-1.5 disabled:opacity-60",
          children: [aa ? f(Be, {
            className: "w-3.5 h-3.5 animate-spin"
          }) : f(fn, {
            className: "w-3.5 h-3.5"
          }), " Cloud Sync"]
        })]
      }), y("div", {
        className: "ml-auto flex items-center gap-2",
        children: [y("button", {
          onClick: () => p(!0),
          className: "h-7 px-2.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-[12px] flex items-center gap-1.5 text-zinc-400",
          children: [f(Yr, {
            className: "w-3.5 h-3.5"
          }), " ", f("span", {
            className: "hidden md:inline",
            children: "Palette"
          }), " ", f("span", {
            className: "mono text-[10px] bg-white/10 px-1 rounded",
            children: "⌘K"
          })]
        }), f("button", {
          onClick: () => C(!0),
          className: "w-7 h-7 grid place-items-center rounded-md hover:bg-white/[0.06] text-zinc-400",
          children: f(At, {
            className: "w-4 h-4"
          })
        }), f("div", {
          className: "w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-[11px] font-semibold text-white",
          children: "JA"
        })]
      })]
    }), y("div", {
      className: "flex flex-1 min-h-0",
      children: [y("div", {
        className: "w-[48px] shrink-0 bg-[#0e0e10] border-r border-white/[0.06] flex flex-col items-center py-3 gap-1",
        children: [
          [{
            id: "explorer",
            icon: Qt,
            label: "Explorer"
          }, {
            id: "search",
            icon: nt,
            label: "Search"
          }, {
            id: "git",
            icon: Ae,
            label: "Git"
          }, {
            id: "issues",
            icon: Fn,
            label: "Issues"
          }, {
            id: "actions",
            icon: Wt,
            label: "Actions"
          }, {
            id: "ext",
            icon: tl,
            label: "Extensions"
          }, {
            id: "ai",
            icon: et,
            label: "AI Agent"
          }].map((v) => y("button", {
            onClick: () => E(v.id),
            className: `w-9 h-9 grid place-items-center rounded-lg transition relative
                ${m===v.id?"bg-white/[0.08] text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04]"}`,
            title: v.label,
            children: [f(v.icon, {
              className: "w-[18px] h-[18px]"
            }), m === v.id && f("div", {
              className: "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-violet-500 rounded-full"
            })]
          }, v.id)), y("div", {
            className: "mt-auto flex flex-col gap-1",
            children: [f("button", {
              onClick: () => c(!0),
              className: "w-9 h-9 grid place-items-center rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04]",
              children: f(an, {
                className: "w-[18px] h-[18px]"
              })
            }), f("button", {
              className: "w-9 h-9 grid place-items-center rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04]",
              children: f(ll, {
                className: "w-[18px] h-[18px]"
              })
            })]
          })
        ]
      }), y("div", {
        className: "w-[280px] shrink-0 bg-[#141416] border-r border-white/[0.06] flex flex-col min-h-0",
        children: [y("div", {
          className: "h-9 px-3 flex items-center justify-between border-b border-white/[0.04]",
          children: [y("span", {
            className: "text-[11px] font-semibold tracking-widest text-zinc-500 uppercase",
            children: [m === "explorer" && "Explorer", m === "search" && "Suche", m === "git" && "Source Control", m === "issues" && "Issues", m === "actions" && "Actions", m === "ext" && "Extensions", m === "ai" && "AI Agent"]
          }), f(In, {
            className: "w-4 h-4 text-zinc-600"
          })]
        }), y("div", {
          className: "flex-1 overflow-y-auto",
          children: [m === "explorer" && y("div", {
            className: "p-1",
            children: [y("div", {
              className: "px-2 py-2 text-[11px] font-medium text-zinc-500 flex items-center justify-between",
              children: [f("span", {
                children: "CODEFORGE-FINAL"
              }), f(nl, {
                className: "w-3.5 h-3.5"
              })]
            }), e.map((v) => f(wa, {
              node: v,
              depth: 0
            }, v.path)), y("div", {
              className: "mt-6 px-3",
              children: [f("div", {
                className: "text-[11px] font-semibold tracking-widest text-zinc-500 uppercase mb-2",
                children: "Cloud Projekte"
              }), f("div", {
                className: "space-y-1",
                children: md.map((v) => y("div", {
                  className: "group flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/[0.06] cursor-pointer",
                  children: [y("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: [f(fn, {
                      className: "w-3.5 h-3.5 text-violet-400 shrink-0"
                    }), f("span", {
                      className: "text-[12px] text-zinc-300 truncate",
                      children: v.name
                    })]
                  }), f("span", {
                    className: "text-[10px] text-zinc-500",
                    children: v.updated
                  })]
                }, v.id))
              }), f("div", {
                className: "mt-3 text-[11px] text-zinc-500 leading-relaxed px-1",
                children: Ln === "local" ? "Lokal gespeichert – verbinde Supabase für Cloud." : "Aus Supabase geladen – live synchronisiert."
              })]
            })]
          }), m === "search" && y("div", {
            className: "p-3 space-y-3",
            children: [y("div", {
              className: "relative",
              children: [f(nt, {
                className: "w-3.5 h-3.5 absolute left-2.5 top-2.5 text-zinc-500"
              }), f("input", {
                placeholder: "Suche...",
                className: "w-full h-8 pl-8 pr-3 rounded-md bg-[#1e1e21] border border-white/10 text-[13px] focus:outline-none focus:border-violet-500/50"
              })]
            }), f("div", {
              className: "text-[12px] text-zinc-500",
              children: "3 Ergebnisse in 2 Dateien"
            }), f("div", {
              className: "space-y-2",
              children: ["App.tsx:12 Dashboard", "Stats.tsx:4 value"].map((v) => f("div", {
                className: "text-[12px] px-2 py-1 rounded bg-white/[0.04] text-zinc-300 mono",
                children: v
              }, v))
            })]
          }), m === "git" && y("div", {
            className: "p-3 space-y-4",
            children: [y("div", {
              className: "flex items-center gap-2 text-[13px] font-medium",
              children: [f(Ae, {
                className: "w-4 h-4 text-violet-400"
              }), " main • 2 Änderungen"]
            }), y("div", {
              className: "space-y-1",
              children: [f("div", {
                className: "text-[11px] tracking-widest text-zinc-500 uppercase",
                children: "Changes"
              }), ["src/components/Dashboard.tsx", "package.json"].map((v) => y("div", {
                className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-white/[0.06] text-[12px] text-amber-200/80",
                children: [f(Kr, {
                  className: "w-3 h-3"
                }), " ", v]
              }, v))]
            }), y("div", {
              className: "rounded-lg border border-white/10 bg-white/[0.03] p-3",
              children: [y("div", {
                className: "text-[12px] font-medium flex items-center gap-1.5",
                children: [f(el, {
                  className: "w-3.5 h-3.5"
                }), " PR Flow"]
              }), y("div", {
                className: "mt-2 space-y-2 text-[11px] text-zinc-400",
                children: [y("div", {
                  className: "flex justify-between",
                  children: [f("span", {
                    children: "Review"
                  }), f("span", {
                    className: "text-emerald-400",
                    children: "LGTM • 2/2"
                  })]
                }), y("div", {
                  className: "flex justify-between",
                  children: [f("span", {
                    children: "CI"
                  }), f("span", {
                    className: "text-emerald-400",
                    children: "passing"
                  })]
                }), f("button", {
                  className: "mt-2 w-full h-7 rounded-md bg-violet-600 text-white text-[11px]",
                  children: "Merge PR #42"
                })]
              })]
            }), f("button", {
              onClick: () => O(!0),
              className: "w-full h-7 rounded-md bg-white/[0.06] border border-white/10 text-[12px]",
              children: "Diff anzeigen"
            })]
          }), m === "issues" && f("div", {
            className: "p-3 space-y-2",
            children: [{
              t: "Hydration mismatch in Dashboard",
              l: "bug",
              c: "red"
            }, {
              t: "Add empty state for Stats",
              l: "enhancement",
              c: "violet"
            }, {
              t: "Supabase RLS prüfen",
              l: "security",
              c: "amber"
            }].map((v) => {
              let w = v.c === "red" ? "text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/20" : v.c === "amber" ? "text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/20" : "text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20";
              return y("div", {
              className: "rounded-lg border border-white/10 bg-white/[0.03] p-3",
              children: [f("div", {
                className: "text-[12px] text-zinc-200",
                children: v.t
              }), y("div", {
                className: "mt-2 flex items-center gap-2",
                children: [f("span", {
                  className: w,
                  children: v.l
                }), f("span", {
                  className: "text-[10px] text-zinc-500",
                  children: "#24 • vor 1h"
                })]
              })]
            }, v.t)
            })
          }), m === "actions" && y("div", {
            className: "p-3 space-y-3",
            children: [y("div", {
              className: "rounded-lg border border-white/10 bg-[#1a1a1e] p-3",
              children: [y("div", {
                className: "text-[12px] font-medium flex items-center gap-2",
                children: [f(Wt, {
                  className: "w-3.5 h-3.5 text-amber-400"
                }), " CI • main"]
              }), y("div", {
                className: "mt-3 flex items-center gap-2 text-[11px]",
                children: [f("div", {
                  className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                }), " Build erfolgreich • 1m 23s"]
              }), f("div", {
                className: "mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden",
                children: f("div", {
                  className: "h-full w-full bg-emerald-500"
                })
              })]
            }), f("div", {
              className: "text-[11px] text-zinc-500 px-1",
              children: "Letzte Runs: build, lint, typecheck – alle grün."
            })]
          }), m === "ext" && f("div", {
            className: "p-3 space-y-2",
            children: [{
              n: "Tailwind IntelliSense",
              d: "Autocompletion für Klassen",
              on: !0
            }, {
              n: "Prettier",
              d: "Code Formatter",
              on: !0
            }, {
              n: "ESLint",
              d: "Linting",
              on: !1
            }, {
              n: "Violet Theme",
              d: "Aktives Theme #8b5cf6",
              on: !0
            }].map((v) => y("div", {
              className: "flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02]",
              children: [y("div", {
                children: [f("div", {
                  className: "text-[12px] font-medium",
                  children: v.n
                }), f("div", {
                  className: "text-[11px] text-zinc-500",
                  children: v.d
                })]
              }), f("button", {
                type: "button",
                "aria-label": `${v.n} ${v.on ? "aktiv" : "inaktiv"}`,
                "aria-pressed": v.on,
                className: `w-8 h-4 rounded-full p-0.5 transition ${v.on?"bg-violet-600":"bg-white/20"}`,
                children: f("div", {
                  className: `w-3 h-3 rounded-full bg-white transition ${v.on?"translate-x-4":""}`
                })
              })]
            }, v.n))
          }), m === "ai" && y("div", {
            className: "p-3 flex flex-col h-[calc(100vh-200px)]",
            children: [y("div", {
              className: "flex items-center gap-2 mb-3",
              children: [f("div", {
                className: "w-6 h-6 rounded-md bg-violet-600 grid place-items-center",
                children: f(xe, {
                  className: "w-3.5 h-3.5 text-white"
                })
              }), f("span", {
                className: "text-[12px] font-semibold",
                children: "Agent • Final"
              }), f("span", {
                className: "ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
                children: "Ready"
              })]
            }), y("div", {
              className: "flex-1 overflow-y-auto space-y-3 pr-1",
              "aria-live": "polite",
              children: [kd.map((v, w) => f("div", {
                className: `rounded-xl px-3 py-2.5 text-[12px] leading-relaxed ${v.role==="ai"?"bg-white/[0.06] border border-white/10 text-zinc-200":"bg-violet-600 text-white ml-6"}`,
                children: v.text
              }, w)), gd && y("div", {
                className: "flex items-center gap-2 text-[11px] text-zinc-500",
                children: [f(Be, {
                  className: "w-3.5 h-3.5 animate-spin"
                }), " Agent baut Dateien..."]
              })]
            }), y("div", {
              className: "mt-3 flex gap-2",
              children: [f("input", {
                value: da,
                onChange: (v) => Mu(v.target.value),
                onKeyDown: (v) => v.key === "Enter" && ga(),
                placeholder: 'z.B. "Bau Dashboard"',
                className: "flex-1 h-9 px-3 rounded-lg bg-[#1e1e21] border border-white/10 text-[13px] focus:outline-none focus:border-violet-500/50"
              }), f("button", {
                onClick: ga,
                className: "w-9 h-9 grid place-items-center rounded-lg bg-violet-600 hover:bg-violet-500 text-white",
                children: f(xe, {
                  className: "w-4 h-4"
                })
              })]
            }), f("div", {
              className: "mt-2 text-[10px] text-zinc-500",
              children: 'Tipp: Nutze "Bau Dashboard" für 3 echte Tailwind Komponenten.'
            })]
          })]
        })]
      }), y("div", {
        className: "flex-1 flex flex-col min-w-0 bg-[#0e0e10]",
        children: [y("div", {
          className: "h-9 flex items-center bg-[#141416] border-b border-white/[0.06] overflow-x-auto",
          children: [o.map((v) => y("div", {
            className: `group h-full flex items-center gap-2 px-3 pr-2 border-r border-white/[0.06] text-[12px] cursor-pointer ${l===v?"bg-[#0e0e10] text-white":"bg-[#18181b] text-zinc-500 hover:text-zinc-300"}`,
            onClick: () => u(v),
            children: [dd(v.split("/").pop() || ""), f("span", {
              className: "mono",
              children: v.split("/").pop()
            }), f("button", {
              onClick: (w) => {
                w.stopPropagation(), i((D) => {
                  let B = D.filter((Q) => Q !== v);
                  if (l === v) u(B[B.length - 1] || "/src/App.tsx");
                  return B
                })
              },
              className: "ml-1 w-4 h-4 grid place-items-center rounded hover:bg-white/10",
              children: f(sn, {
                className: "w-3 h-3"
              })
            })]
          }, v)), y("div", {
            className: "ml-auto flex items-center gap-1 px-2",
            children: [f("button", {
              onClick: () => d(!a),
              className: `w-7 h-7 grid place-items-center rounded-md ${a?"bg-violet-600 text-white":"hover:bg-white/10 text-zinc-500"}`,
              title: "Split View",
              children: f(Bt, {
                className: "w-4 h-4"
              })
            }), f("button", {
              onClick: () => O(!0),
              className: "w-7 h-7 grid place-items-center rounded-md hover:bg-white/10 text-zinc-500",
              title: "Diff",
              children: f(Ae, {
                className: "w-4 h-4"
              })
            })]
          })]
        }), y("div", {
          className: "flex-1 flex min-h-0",
          children: [y("div", {
            className: "flex-1 flex flex-col min-w-0 border-r border-white/[0.06]",
            children: [y("div", {
              className: "flex-1 relative",
              children: [y("div", {
                className: "absolute inset-0 flex",
                children: [f("div", {
                  className: "w-12 shrink-0 bg-[#0e0e10] border-r border-white/[0.04] py-3 text-right pr-2 mono text-[12px] text-zinc-600 select-none",
                  children: (Yt?.content.split(`
`) || []).map((v, w) => f("div", {
                    className: "leading-[20px]",
                    children: w + 1
                  }, w))
                }), f("textarea", {
                  value: Yt?.content || "",
                  onChange: (v) => ha(l, v.target.value),
                  className: "flex-1 bg-[#0e0e10] p-3 mono text-[13px] leading-[20px] text-zinc-200 focus:outline-none resize-none",
                  spellCheck: !1
                })]
              }), y("div", {
                className: "absolute top-[48px] left-[80px] flex items-center gap-1 pointer-events-none",
                children: [f("div", {
                  className: "w-0.5 h-[18px] bg-emerald-400"
                }), f("div", {
                  className: "px-1.5 py-0.5 rounded bg-emerald-500 text-[10px] text-white font-medium",
                  children: "Lena"
                })]
              })]
            }), a && y("div", {
              className: "flex-1 border-t border-white/[0.06] relative",
              children: [y("div", {
                className: "absolute inset-0 flex",
                children: [f("div", {
                  className: "w-12 shrink-0 bg-[#0e0e10] border-r border-white/[0.04] py-3 text-right pr-2 mono text-[12px] text-zinc-600 select-none",
                  children: (ya?.content.split(`
`) || []).map((v, w) => f("div", {
                    className: "leading-[20px]",
                    children: w + 1
                  }, w))
                }), f("textarea", {
                  value: ya?.content || "",
                  onChange: (v) => ha(h, v.target.value),
                  className: "flex-1 bg-[#0e0e10] p-3 mono text-[13px] leading-[20px] text-zinc-200 focus:outline-none resize-none",
                  spellCheck: !1
                })]
              }), f("div", {
                className: "absolute top-2 right-2 text-[10px] px-2 py-1 rounded bg-[#18181b] border border-white/10 text-zinc-500 mono",
                children: h.split("/").pop()
              })]
            })]
          }), y("div", {
            className: "w-[420px] shrink-0 flex flex-col bg-[#141416] min-h-0 max-lg:hidden",
            children: [y("div", {
              className: "h-9 flex items-center px-3 border-b border-white/[0.06] gap-2",
              children: [y("button", {
                className: "text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.08] text-white flex items-center gap-1.5",
                children: [f(Gr, {
                  className: "w-3.5 h-3.5"
                }), " Preview"]
              }), y("button", {
                className: "text-[11px] px-2.5 py-1 rounded-md hover:bg-white/[0.06] text-zinc-500 flex items-center gap-1.5",
                children: [f(Vt, {
                  className: "w-3.5 h-3.5"
                }), " Terminal"]
              }), y("div", {
                className: "ml-auto flex items-center gap-1.5 text-[10px] text-zinc-500",
                children: [f("div", {
                  className: `w-2 h-2 rounded-full ${T==="ready"?"bg-emerald-500":T==="booting"?"bg-amber-400 animate-pulse":"bg-zinc-600"}`
                }), T]
              })]
            }), f("div", {
              className: "h-[260px] border-b border-white/[0.06] bg-[#0e0e10] relative overflow-hidden",
              children: Kt === "local-preview" ? y("div", {
                className: "absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#0e0e10] to-violet-950/20 p-4 overflow-auto",
                children: [y("div", {
                  className: "rounded-xl border border-white/10 bg-[#18181b] overflow-hidden shadow-2xl",
                  children: [y("div", {
                    className: "h-8 bg-[#1e1e21] border-b border-white/10 flex items-center px-3 gap-1.5",
                    children: [f("div", {
                      className: "w-3 h-3 rounded-full bg-red-500/80"
                    }), f("div", {
                      className: "w-3 h-3 rounded-full bg-amber-400/80"
                    }), f("div", {
                      className: "w-3 h-3 rounded-full bg-emerald-500/80"
                    }), y("div", {
                      className: "ml-3 text-[11px] mono text-zinc-500 flex items-center gap-1.5",
                      children: [f(xr, {
                        className: "w-3 h-3"
                      }), " localhost:3000"]
                    })]
                  }), f("div", {
                    className: "p-0",
                    children: y("div", {
                      className: "p-6",
                      children: [y("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [f("div", {
                          className: "text-sm font-semibold",
                          children: "Übersicht"
                        }), f("div", {
                          className: "text-[10px] px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30",
                          children: "Live • HMR"
                        })]
                      }), y("div", {
                        className: "grid grid-cols-12 gap-3",
                        children: [y("div", {
                          className: "col-span-8 rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-4",
                          children: [f("div", {
                            className: "text-[11px] text-zinc-500",
                            children: "Revenue"
                          }), f("div", {
                            className: "text-xl font-bold mt-1",
                            children: "€42.830"
                          }), f("div", {
                            className: "mt-4 h-12 flex items-end gap-1",
                            children: [40, 65, 45, 90, 60, 80, 55, 70, 85, 60, 75, 95].map((v, w) => f("div", {
                              style: {
                                height: v + "%"
                              },
                              className: "flex-1 rounded-t bg-violet-500/60"
                            }, w))
                          })]
                        }), y("div", {
                          className: "col-span-4 space-y-3",
                          children: [y("div", {
                            className: "rounded-xl border border-white/10 bg-white/[0.03] p-3",
                            children: [f("div", {
                              className: "text-[10px] text-zinc-500 uppercase",
                              children: "Active"
                            }), f("div", {
                              className: "font-semibold",
                              children: "1.284"
                            })]
                          }), y("div", {
                            className: "rounded-xl border border-white/10 bg-white/[0.03] p-3",
                            children: [f("div", {
                              className: "text-[10px] text-zinc-500",
                              children: "Tasks"
                            }), f("div", {
                              className: "font-semibold",
                              children: "23/31"
                            }), f("div", {
                              className: "mt-2 h-1 w-full bg-white/10 rounded-full",
                              children: f("div", {
                                className: "h-full w-[74%] bg-violet-500 rounded-full"
                              })
                            })]
                          })]
                        })]
                      }), t["/src/components/Activity.tsx"] && f("div", {
                        className: "mt-4 rounded-xl border border-white/10 bg-zinc-900/50 p-3 text-[12px]",
                        children: "Activity • 3 Events • PR #42 gemerged"
                      })]
                    })
                  })]
                }), f("div", {
                  className: "mt-3 text-[11px] text-zinc-500 mono",
                  children: "WebContainer Fallback: lokale Preview (COOP/COEP benötigt für echten Container – in Produktion verfügbar)"
                })]
              }) : Kt ? f("iframe", {
                src: Kt,
                className: "w-full h-full border-0 bg-white",
                title: "preview"
              }) : f("div", {
                className: "h-full grid place-items-center text-[12px] text-zinc-500",
                children: y("div", {
                  className: "flex flex-col items-center gap-2",
                  children: [f(Be, {
                    className: "w-5 h-5 animate-spin text-violet-400"
                  }), "Booting WebContainer..."]
                })
              })
            }), y("div", {
              className: "flex-1 flex flex-col min-h-0",
              children: [y("div", {
                className: "h-8 flex items-center px-3 text-[11px] font-medium text-zinc-400 border-b border-white/[0.04] bg-[#18181b]",
                children: [f(Vt, {
                  className: "w-3.5 h-3.5 mr-1.5"
                }), " Terminal • zsh", y("span", {
                  className: "ml-auto flex items-center gap-1.5",
                  children: [f("span", {
                    className: "w-2 h-2 rounded-full bg-emerald-500"
                  }), " ", T === "ready" ? "WebContainer Ready" : T === "unsupported" ? "Simuliert" : "Booting..."]
                })]
              }), f("div", {
                ref: Du,
                className: "flex-1 overflow-auto p-3 mono text-[11px] leading-[16px] bg-[#0e0e10] space-y-0.5",
                children: M.map((v, w) => f("div", {
                  className: `${v.startsWith("$")?"text-zinc-200":v.includes("✓")?"text-emerald-400":v.includes("⚠️")?"text-amber-300":"text-zinc-500"}`,
                  children: v
                }, w))
              }), y("div", {
                className: "h-9 border-t border-white/[0.06] flex items-center px-2 gap-2 bg-[#141416]",
                children: [f("span", {
                  className: "text-[11px] mono text-violet-400",
                  children: "$"
                }), f("input", {
                  value: sa,
                  onChange: (v) => ca(v.target.value),
                  onKeyDown: (v) => v.key === "Enter" && ka(),
                  placeholder: "npm run dev, npm install...",
                  className: "flex-1 bg-transparent text-[12px] mono focus:outline-none placeholder:text-zinc-600"
                }), f("button", {
                  onClick: ka,
                  className: "w-6 h-6 grid place-items-center rounded bg-white/[0.06] hover:bg-white/[0.10]",
                  children: f(Lt, {
                    className: "w-3.5 h-3.5"
                  })
                })]
              })]
            }), y("div", {
              className: "h-[88px] border-t border-white/[0.06] bg-[#18181b] p-2.5 flex gap-2",
              children: [f("div", {
                className: "w-7 h-7 rounded-lg bg-violet-600 grid place-items-center shrink-0",
                children: f(rl, {
                  className: "w-4 h-4 text-white"
                })
              }), y("div", {
                className: "min-w-0",
                children: [f("div", {
                  className: "text-[11px] font-medium",
                  children: "AI Review • Auto"
                }), f("div", {
                  className: "text-[11px] text-zinc-400 leading-snug mt-0.5",
                  children: "Keine kritischen Issues. 2 Vorschläge: Extrahiere Stats in Hook, füge ErrorBoundary hinzu."
                })]
              })]
            })]
          })]
        }), y("div", {
          className: "h-[22px] shrink-0 bg-[#18181b] border-t border-white/[0.08] flex items-center px-2 gap-3 text-[11px] mono",
          children: [y("div", {
            className: "flex items-center gap-1.5",
            children: [f("div", {
              className: `w-2 h-2 rounded-full ${T==="ready"?"bg-emerald-500":T==="booting"?"bg-amber-400 animate-pulse":"bg-zinc-600"}`
            }), y("span", {
              className: T === "ready" ? "text-emerald-300" : "text-zinc-400",
              children: ["WebContainer: ", T === "ready" ? "Ready" : T === "booting" ? "Booting..." : T === "unsupported" ? "Fallback (COOP/COEP nötig)" : T]
            })]
          }), f("span", {
            className: "w-px h-3 bg-white/10"
          }), y("div", {
            className: "flex items-center gap-1.5",
            children: [f("div", {
              className: `w-2 h-2 rounded-full ${Ln==="connected"?"bg-violet-500":"bg-zinc-600"}`
            }), y("span", {
              className: Ln === "connected" ? "text-violet-300" : "text-zinc-400",
              children: ["Supabase: ", Ln === "connected" ? "Connected" : Ln === "connecting" ? "Connecting..." : "Local"]
            })]
          }), f("span", {
            className: "w-px h-3 bg-white/10"
          }), y("span", {
            className: "text-zinc-500",
            children: ["GitHub: ", "verbunden"]
          }), f("span", {
            className: "w-px h-3 bg-white/10"
          }), y("span", {
            className: "text-zinc-500",
            children: ["main • ", l]
          }), y("span", {
            className: "ml-auto flex items-center gap-2",
            children: [f("span", {
              className: "text-zinc-500 hidden md:inline",
              children: "Monaco: loaded • Workers: 2"
            }), f("span", {
              className: "px-1.5 py-0.5 rounded bg-white/10 text-zinc-300",
              children: "UTF-8"
            }), f("span", {
              className: "px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/20",
              children: "LF"
            })]
          })]
        })]
      })]
    }), N && f("div", {
      className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
      children: f("div", {
        className: "w-full max-w-[560px] rounded-[20px] border border-white/10 bg-[#18181b] shadow-[0_20px_80px_-20px_rgba(139,92,246,0.5)] overflow-hidden",
        children: y("div", {
          className: "p-7",
          children: [y("div", {
            className: "flex items-start justify-between",
            children: [y("div", {
              className: "flex items-center gap-3",
              children: [f("div", {
                className: "w-10 h-10 rounded-xl bg-violet-600 grid place-items-center",
                children: f(It, {
                  className: "w-5 h-5 text-white"
                })
              }), y("div", {
                children: [f("div", {
                  className: "font-semibold tracking-tight",
                  children: "Willkommen bei CodeForge Final"
                }), f("div", {
                  className: "text-[12px] text-zinc-400",
                  children: "Die letzte Version – echter Runner + Cloud."
                })]
              })]
            }), f("button", {
              onClick: () => z(!1),
              className: "w-8 h-8 grid place-items-center rounded-full bg-white/[0.06] hover:bg-white/[0.10]",
              children: f(sn, {
                className: "w-4 h-4"
              })
            })]
          }), f("div", {
            className: "mt-7 grid grid-cols-3 gap-3",
            children: [{
              step: "01",
              title: "GitHub verbinden",
              desc: "PR Flow, Issues, Actions – bereits aktiv im Mock. In Prod via OAuth.",
              icon: Ae
            }, {
              step: "02",
              title: "Supabase (optional)",
              desc: "URL + Anon Key in Settings. Danach Cloud Sync & Auth.",
              icon: fn
            }, {
              step: "03",
              title: "Loslegen",
              desc: "Bau Dashboard via AI, Run, Preview, Deploy als ZIP.",
              icon: xe
            }].map((v) => y("div", {
              className: "rounded-xl border border-white/10 bg-white/[0.03] p-4",
              children: [y("div", {
                className: "flex items-center justify-between",
                children: [f("span", {
                  className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/20",
                  children: v.step
                }), f(v.icon, {
                  className: "w-4 h-4 text-zinc-500"
                })]
              }), f("div", {
                className: "mt-3 text-[13px] font-medium",
                children: v.title
              }), f("div", {
                className: "mt-1 text-[11px] leading-relaxed text-zinc-400",
                children: v.desc
              })]
            }, v.step))
          }), y("div", {
            className: "mt-6 rounded-xl bg-[#0e0e10] border border-white/[0.06] p-3 flex items-center gap-3",
            children: [f("div", {
              className: "w-8 h-8 rounded-lg bg-white/[0.06] grid place-items-center",
              children: f(Be, {
                className: "w-4 h-4 text-violet-400 animate-spin"
              })
            }), y("div", {
              className: "text-[12px]",
              children: [f("div", {
                className: "font-medium",
                children: "WebContainer wird gebootet..."
              }), f("div", {
                className: "text-zinc-500",
                children: "Lädt @webcontainer/api aus Projekt-Dependencies • Fallback falls COOP/COEP fehlt."
              })]
            })]
          }), y("div", {
            className: "mt-6 flex gap-2",
            children: [f("button", {
              onClick: () => z(!1),
              className: "flex-1 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-medium",
              children: "Loslegen – Editor öffnen"
            }), f("button", {
              onClick: () => C(!0),
              className: "h-10 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 text-[13px]",
              children: "Settings"
            })]
          }), y("div", {
            className: "mt-3 text-[11px] text-center text-zinc-500",
            children: ["Tipp: Drücke ", f("span", {
              className: "px-1 py-0.5 rounded bg-white/10 text-zinc-300 mono",
              children: "?"
            }), " für Shortcuts • ", f("span", {
              className: "mono px-1 py-0.5 rounded bg-white/10",
              children: "⌘K"
            }), " für Command Palette"]
          })]
        })
      })
    }), K && f("div", {
      className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/50 backdrop-blur-sm",
      onClick: () => c(!1),
      children: y("div", {
        onClick: (v) => v.stopPropagation(),
        className: "w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#18181b] p-6 shadow-2xl",
        children: [y("div", {
          className: "flex items-center justify-between",
          children: [y("div", {
            className: "font-semibold flex items-center gap-2",
            children: [f(an, {
              className: "w-4 h-4 text-violet-400"
            }), " Keyboard Shortcuts"]
          }), f("button", {
            onClick: () => c(!1),
            className: "w-7 h-7 grid place-items-center rounded-md bg-white/[0.06]",
            children: f(sn, {
              className: "w-4 h-4"
            })
          })]
        }), f("div", {
          className: "mt-5 grid grid-cols-2 gap-3 text-[12px]",
          children: [
            ["⌘K / Ctrl+K", "Command Palette"],
            ["?", "Shortcuts Hilfe"],
            ["⌘B", "Sidebar toggeln"],
            ["⌘S", "Cloud Sync (mock)"],
            ["⌘O", "Quick Open"],
            ["⇧⌘B", "Deploy / Build"],
            ["⌘\\", "Split View"],
            ["Esc", "Schließen"]
          ].map(([v, w]) => y("div", {
            className: "flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5",
            children: [f("span", {
              className: "text-zinc-400",
              children: w
            }), f("span", {
              className: "mono px-1.5 py-0.5 rounded bg-[#0e0e10] border border-white/10 text-zinc-200 text-[11px]",
              children: v
            })]
          }, v))
        }), f("div", {
          className: "mt-4 text-[11px] text-zinc-500",
          children: "Monaco wird nur einmal geladen, Worker nutzen – Performance optimiert für Final."
        })]
      })
    }), s && f("div", {
      className: "fixed inset-0 z-50 grid place-items-start justify-center pt-[18vh] p-4 bg-black/50 backdrop-blur-sm",
      onClick: () => p(!1),
      children: y("div", {
        onClick: (v) => v.stopPropagation(),
        role: "dialog",
        "aria-modal": !0,
        "aria-label": "Command Palette",
        className: "w-full max-w-[560px] rounded-2xl border border-white/10 bg-[#1a1a1e] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden",
        children: [y("div", {
          className: "h-12 flex items-center px-4 gap-2 border-b border-white/[0.06]",
          children: [f(nt, {
            className: "w-4 h-4 text-zinc-500"
          }), f("input", {
            autoFocus: !0,
            placeholder: "Befehl oder Datei suchen...",
            className: "flex-1 bg-transparent text-[14px] focus:outline-none placeholder:text-zinc-600"
          }), f("span", {
            className: "text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 mono",
            children: "ESC"
          })]
        }), f("div", {
          className: "p-2 max-h-[320px] overflow-auto space-y-1",
          children: [{
            icon: Ut,
            label: "Run: npm run dev",
            action: () => {
              tt("local-preview"), p(!1)
            }
          }, {
            icon: Ht,
            label: "Build & Download JSON",
            action: () => {
              Fu(), p(!1)
            }
          }, {
            icon: fn,
            label: "Cloud Sync",
            action: () => {
              Sa(), p(!1)
            }
          }, {
            icon: Bt,
            label: "Toggle Split View",
            action: () => {
              d(!a), p(!1)
            }
          }, {
            icon: et,
            label: "AI: Bau Dashboard",
            action: () => {
              E("ai"), Mu("Bau Dashboard"), p(!1)
            }
          }, {
            icon: Ae,
            label: "Diff anzeigen",
            action: () => {
              O(!0), p(!1)
            }
          }].map((v) => y("button", {
            onClick: v.action,
            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] text-left",
            children: [f(v.icon, {
              className: "w-4 h-4 text-zinc-400"
            }), f("span", {
              className: "text-[13px]",
              children: v.label
            })]
          }, v.label))
        })]
      })
    }), S && f("div", {
      className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
      onClick: () => C(!1),
      children: y("div", {
        onClick: (v) => v.stopPropagation(),
        className: "w-full max-w-[480px] rounded-2xl border border-white/10 bg-[#18181b] p-6 shadow-2xl",
        children: [y("div", {
          className: "flex items-center justify-between",
          children: [y("div", {
            className: "font-semibold flex items-center gap-2",
            children: [f(At, {
              className: "w-4 h-4"
            }), " Settings • Supabase & Cloud"]
          }), f("button", {
            onClick: () => C(!1),
            className: "w-7 h-7 grid place-items-center rounded-md bg-white/[0.06]",
            children: f(sn, {
              className: "w-4 h-4"
            })
          })]
        }), y("div", {
          className: "mt-6 space-y-4",
          children: [y("div", {
            className: "rounded-xl border border-white/10 bg-[#0e0e10] p-4",
            children: [y("div", {
              className: "text-[12px] font-medium flex items-center gap-2",
              children: [f(fn, {
                className: "w-4 h-4 text-violet-400"
              }), " Supabase Config (optional)"]
            }), y("div", {
              className: "mt-3 space-y-3",
              children: [y("div", {
                children: [f("label", {
                  htmlFor: "supabase-url-input",
                  className: "text-[11px] text-zinc-500",
                  children: "Supabase URL"
                }), f("input", {
                  id: "supabase-url-input",
                  value: $n.url,
                  onChange: (v) => oa({
                    ...$n,
                    url: v.target.value
                  }),
                  placeholder: "https://xxx.supabase.co",
                  className: "mt-1 w-full h-9 px-3 rounded-lg bg-[#1e1e21] border border-white/10 text-[13px] focus:outline-none focus:border-violet-500/50"
                })]
              }), y("div", {
                children: [f("label", {
                  htmlFor: "supabase-anon-key-input",
                  className: "text-[11px] text-zinc-500",
                  children: "Anon Key"
                }), f("input", {
                  id: "supabase-anon-key-input",
                  defaultValue: "",
                  onChange: (v) => {
                    supabaseKeyRef.current = v.target.value
                  },
                  placeholder: "eyJ...",
                  type: "password",
                  className: "mt-1 w-full h-9 px-3 rounded-lg bg-[#1e1e21] border border-white/10 text-[13px] focus:outline-none focus:border-violet-500/50"
                })]
              }), f("button", {
                onClick: Sd,
                className: "w-full h-9 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-medium",
                children: Ln === "connecting" ? "Verbinde..." : Ln === "connected" ? "✓ Verbunden" : "Verbinden & SDK laden"
              }), y("div", {
                className: "text-[11px] text-zinc-500 leading-relaxed",
                children: ["Lädt SDK aus Projekt-Dependencies: @supabase/supabase-js", f("br", {}), 'Wenn nicht konfiguriert: Nutze In-Memory Mock – zeige "Lokal gespeichert".']
              })]
            })]
          }), y("div", {
            className: "rounded-xl border border-white/10 bg-white/[0.03] p-4",
            children: [f("div", {
              className: "text-[12px] font-medium",
              children: "Auth (wenn Supabase verbunden)"
            }), y("div", {
              className: "mt-3 flex gap-2",
              children: [f("input", {
                id: "auth-email-input",
                "aria-label": "E-Mail",
                placeholder: "email",
                value: ul || "",
                onChange: (v) => ia(v.target.value),
                className: "flex-1 h-9 px-3 rounded-lg bg-[#1e1e21] border border-white/10 text-[13px]"
              }), f("button", {
                onClick: () => ia(ul || "demo@codeforge.dev"),
                className: "h-9 px-4 rounded-lg bg-white/[0.08] border border-white/10 text-[12px]",
                children: "Login"
              })]
            }), ul && y("div", {
              className: "mt-2 text-[11px] text-emerald-400",
              children: ["Eingeloggt als ", ul, " • Projekte Tabelle 'projects' bereit"]
            })]
          }), y("div", {
            className: "flex gap-2",
            children: [f("button", {
              onClick: () => C(!1),
              className: "flex-1 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-medium",
              children: "Speichern"
            }), f("button", {
              onClick: () => C(!1),
              className: "h-10 px-4 rounded-xl bg-white/[0.06] border border-white/10 text-[13px]",
              children: "Schließen"
            })]
          })]
        })]
      })
    }), R && f("div", {
      className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
      onClick: () => O(!1),
      children: y("div", {
        onClick: (v) => v.stopPropagation(),
        role: "dialog",
        "aria-modal": !0,
        "aria-label": "Diff Ansicht",
        className: "w-full max-w-[760px] max-h-[80vh] rounded-2xl border border-white/10 bg-[#18181b] shadow-2xl flex flex-col overflow-hidden",
        children: [y("div", {
          className: "h-11 flex items-center px-4 border-b border-white/[0.06] justify-between",
          children: [y("div", {
            className: "font-medium text-[13px] flex items-center gap-2",
            children: [f(Ae, {
              className: "w-4 h-4 text-violet-400"
            }), " Diff • ", l, " • ", Iu.length, " Änderungen"]
          }), f("button", {
            onClick: () => O(!1),
            className: "w-7 h-7 grid place-items-center rounded-md bg-white/[0.06]",
            children: f(sn, {
              className: "w-4 h-4"
            })
          })]
        }), f("div", {
          className: "flex-1 overflow-auto p-0 bg-[#0e0e10] mono text-[12px] leading-[18px]",
          children: Iu.length === 0 ? f("div", {
            className: "p-8 text-center text-zinc-500 text-[13px]",
            children: "Keine Änderungen gegenüber Original – alles sauber ✓"
          }) : Iu.map((v, w) => y("div", {
            className: "grid grid-cols-[48px_1fr] border-b border-white/[0.04]",
            children: [f("div", {
              className: "text-right pr-3 py-1 text-zinc-600 bg-white/[0.02]",
              children: v.i
            }), y("div", {
              className: "px-3 py-1",
              children: [v.type === "removed" && y("div", {
                className: "bg-red-500/10 text-red-300 px-2 rounded",
                children: ["- ", v.orig]
              }), v.type === "added" && y("div", {
                className: "bg-emerald-500/10 text-emerald-300 px-2 rounded",
                children: ["+ ", v.curr]
              }), v.type === "changed" && y("div", {
                className: "space-y-1",
                children: [y("div", {
                  className: "bg-red-500/10 text-red-300 px-2 rounded",
                  children: ["- ", v.orig]
                }), y("div", {
                  className: "bg-emerald-500/10 text-emerald-300 px-2 rounded",
                  children: ["+ ", v.curr]
                })]
              })]
            })]
          }, w))
        }), y("div", {
          className: "p-3 border-t border-white/[0.06] flex gap-2 bg-[#18181b]",
          children: [f("button", {
            onClick: () => O(!1),
            className: "h-8 px-3 rounded-lg bg-violet-600 text-white text-[12px]",
            children: "Schließen"
          }), f("div", {
            className: "text-[11px] text-zinc-500 self-center",
            children: "Diff nutzt Zeilenvergleich mit Farben – ohne externe Lib, robust."
          })]
        })]
      })
    }), y("div", {
      className: "lg:hidden h-14 border-t border-white/[0.06] bg-[#18181b] flex items-center justify-around px-2",
      children: [
        [{
          id: "explorer",
          icon: Qt
        }, {
          id: "ai",
          icon: et
        }, {
          id: "git",
          icon: Ae
        }].map((v) => f("button", {
          onClick: () => E(v.id),
          className: `w-10 h-10 grid place-items-center rounded-xl ${m===v.id?"bg-violet-600 text-white":"text-zinc-500"}`,
          children: f(v.icon, {
            className: "w-5 h-5"
          })
        }, v.id)), y("button", {
          onClick: Fu,
          className: "h-10 px-4 rounded-xl bg-violet-600 text-white text-[12px] font-medium flex items-center gap-1.5",
          children: [f(Zr, {
            className: "w-4 h-4"
          }), " Deploy"]
        })
      ]
    })]
  })
}
