import Button from "@/components/ui/Button";

export default function SeeItInAction() {
  return (
    <section id="see-it-in-action" className="py-24 md:py-32 bg-fb-surface overflow-hidden relative">
      {/* Background glow effects - Adapted for light theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-fb-primary-light blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-100 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fb-primary/10 border border-fb-primary/20 text-fb-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-fb-primary animate-pulse" />
            Live Collaboration
          </div>
          <h2
            className="font-bold text-4xl md:text-5xl lg:text-6xl text-fb-black mb-6"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Plug and play with <span className="text-fb-primary italic font-serif">your</span> workflow
          </h2>
          <p className="text-lg text-fb-gray-600 max-w-2xl mx-auto">
            Flowboard isn&apos;t just a drawing tool. It connects directly to your issues, tickets, and code. Visually map your architecture and let the code generate itself.
          </p>
        </div>

        {/* Massive UI Mockup - Adapted for light theme */}
        <div className="relative mx-auto max-w-5xl">
          {/* Main App Window */}
          <div className="rounded-2xl border border-fb-outline-variant/30 bg-fb-white shadow-[0_20px_60px_-15px_rgba(13,15,20,0.1)] overflow-hidden relative">
            
            {/* Header bar */}
            <div className="h-12 border-b border-fb-outline-variant/20 flex items-center px-4 bg-fb-gray-50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-fb-error/70" />
                <div className="w-3 h-3 rounded-full bg-fb-warning/70" />
                <div className="w-3 h-3 rounded-full bg-fb-success/70" />
              </div>
              <div className="mx-auto bg-fb-white text-fb-gray-500 text-xs px-4 py-1.5 rounded-md flex items-center gap-2 border border-fb-outline-variant/30 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                flowboard.app/board/auth-flow-v2
              </div>
              <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-fb-primary border-2 border-fb-white flex items-center justify-center text-[10px] text-white">S</div>
                 <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-fb-white flex items-center justify-center text-[10px] text-white">M</div>
              </div>
            </div>

            {/* Split Pane Interface */}
            <div className="flex h-[500px]">
              
              {/* Sidebar (Code/Properties) */}
              <div className="w-64 border-r border-fb-outline-variant/20 bg-fb-gray-50 p-4 flex flex-col hidden md:flex">
                <div className="text-xs font-semibold text-fb-gray-500 mb-4 tracking-wider uppercase">Properties</div>
                
                <div className="space-y-4">
                  {/* Selected Node Info */}
                  <div className="p-3 bg-fb-white rounded-lg border border-fb-outline-variant/30 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-rose-500" />
                       <span className="text-sm font-semibold text-fb-black">Auth Middleware</span>
                    </div>
                    <div className="text-xs text-fb-gray-500 mb-2">Node Type: Route Handler</div>
                    <div className="h-1.5 w-full bg-fb-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-rose-500 w-3/4" />
                    </div>
                  </div>

                  {/* Code Snippet */}
                  <div>
                    <div className="text-xs text-fb-gray-500 mb-2 flex justify-between font-medium">
                      <span>middleware.ts</span>
                      <span className="text-fb-primary cursor-pointer hover:underline">Copy</span>
                    </div>
                    <div className="bg-fb-gray-900 rounded-lg p-3 text-[10px] font-mono text-gray-300 border border-fb-gray-800 overflow-x-auto shadow-inner">
                      <span className="text-violet-400">export function</span> <span className="text-blue-400">middleware</span>(req: Request) {"{\n"}
                      {"  "}<span className="text-violet-400">const</span> token = req.headers.<span className="text-blue-400">get</span>(<span className="text-green-400">'auth'</span>);\n
                      {"  "}<span className="text-violet-400">if</span> (!token) {"{\n"}
                      {"    "}<span className="text-violet-400">return new</span> <span className="text-amber-400">Response</span>(<span className="text-green-400">'Error'</span>);\n
                      {"  }\n"}
                      {"}"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Canvas Area */}
              <div className="flex-1 relative bg-fb-white overflow-hidden dot-pattern">
                {/* Grid background is handled by dot-pattern class */}
                
                {/* Node Graph */}
                <div className="relative w-full h-full p-8">
                  
                  {/* Client App Node */}
                  <div className="absolute top-10 left-10 w-40 bg-fb-white/90 backdrop-blur border border-blue-200 rounded-xl p-3 shadow-md hover:border-blue-400 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-blue-50 rounded text-blue-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-fb-black">Client App</span>
                    </div>
                    <div className="text-[10px] text-fb-gray-500">Next.js Frontend</div>
                  </div>

                  {/* Auth API Node */}
                  <div className="absolute top-32 left-[40%] w-48 bg-fb-white/90 backdrop-blur border border-rose-200 rounded-xl p-3 shadow-md ring-2 ring-rose-100 group cursor-pointer z-10 hover:border-rose-400 transition-colors">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 rounded-full border-2 border-fb-white flex items-center justify-center shadow-sm">
                      <span className="text-[8px] text-white font-bold">!</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-rose-50 rounded text-rose-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-fb-black">Auth Middleware</span>
                    </div>
                    <div className="text-[10px] text-fb-gray-500 mb-2">Validates JWT tokens</div>
                    <div className="h-1 w-full bg-fb-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-3/4" />
                    </div>
                  </div>

                  {/* Database Node */}
                  <div className="absolute top-10 right-10 w-40 bg-fb-white/90 backdrop-blur border border-emerald-200 rounded-xl p-3 shadow-md hover:border-emerald-400 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-emerald-50 rounded text-emerald-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-fb-black">Users DB</span>
                    </div>
                    <div className="text-[10px] text-fb-gray-500">PostgreSQL</div>
                  </div>

                  {/* Microservice Node */}
                  <div className="absolute bottom-16 right-24 w-40 bg-fb-white/90 backdrop-blur border border-amber-200 rounded-xl p-3 shadow-md hover:border-amber-400 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-amber-50 rounded text-amber-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                          <line x1="6" y1="6" x2="6.01" y2="6" />
                          <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-fb-black">Profile Service</span>
                    </div>
                    <div className="text-[10px] text-fb-gray-500">Node.js API</div>
                  </div>

                  {/* Connectors (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Client to Auth */}
                    <path d="M 120 82 C 160 82, 250 140, 290 140" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                    {/* Auth to DB */}
                    <path d="M 480 140 C 520 140, 560 82, 600 82" fill="none" stroke="#10b981" strokeWidth="2" />
                    {/* Auth to Profile */}
                    <path d="M 480 180 C 500 180, 520 280, 580 280" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  </svg>

                  {/* Live Cursor hovering over a node */}
                  <div className="absolute top-[170px] left-[48%] z-20">
                    <div className="flex items-start">
                      <svg width="16" height="20" viewBox="0 0 14 18" fill="none">
                        <path d="M1 1L5.5 16L7.5 10L13 8L1 1Z" fill="#e8364b" stroke="white" strokeWidth="1" />
                      </svg>
                      <span className="text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-sm -ml-0.5 mt-3.5 bg-rose-500 shadow-md">
                        Leila
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Toolbar */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-fb-white/90 backdrop-blur border border-fb-outline-variant/30 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg">
                    <button className="text-fb-gray-500 hover:text-fb-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /></svg></button>
                    <button className="text-fb-primary hover:text-fb-primary-hover transition-colors bg-fb-primary/10 rounded p-0.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg></button>
                    <button className="text-fb-gray-500 hover:text-fb-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></button>
                    <div className="w-px h-4 bg-fb-outline-variant/40" />
                    <button className="text-fb-gray-500 hover:text-fb-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></svg></button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Floating feature tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 relative z-10">
            <div className="bg-fb-white border border-fb-outline-variant/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-fb-black font-semibold mb-2">Visual Architecture</h4>
              <p className="text-sm text-fb-gray-600">Map out complex microservices and API flows with smart snapping connectors.</p>
            </div>
            <div className="bg-fb-white border border-fb-outline-variant/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-fb-black font-semibold mb-2">Code Sync</h4>
              <p className="text-sm text-fb-gray-600">Attach code snippets directly to nodes. Changes in the board reflect in your repo.</p>
            </div>
            <div className="bg-fb-white border border-fb-outline-variant/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-fb-black font-semibold mb-2">Live multiplayer</h4>
              <p className="text-sm text-fb-gray-600">Design systems together with zero latency cursors and built-in presence.</p>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -8; }
        }
      `}} />
    </section>
  );
}
