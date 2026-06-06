import Card from "@/components/ui/Card";

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-fb-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-fb-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Core Features
          </p>
          <h2
            className="font-bold text-3xl md:text-5xl text-fb-black mb-4"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Everything you need to think better
          </h2>
          <p className="text-lg text-fb-gray-500 max-w-2xl mx-auto">
            Powerful tools designed to stay out of your way while your team
            creates.
          </p>
        </div>

        {/* Bento Grid — Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 — Infinite Canvas (Large, spans 2 cols) */}
          <div className="lg:col-span-2 group">
            <Card className="p-0 overflow-hidden h-full" hover={false}>
              <div className="flex flex-col lg:flex-row h-full">
                <div className="p-8 lg:p-10 lg:w-[45%] flex flex-col justify-center">
                  <div className="w-10 h-10 bg-fb-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-2xl text-fb-black mb-3"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Infinite Canvas
                  </h3>
                  <p className="text-fb-gray-500 leading-relaxed mb-4">
                    Never run out of space. Pan, zoom, and navigate freely across a boundless workspace. From bird&apos;s-eye strategy to pixel-level detail.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Pan & Zoom", "Grid Snap", "Minimap"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-fb-primary/5 text-fb-primary border border-fb-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Embedded UI mockup */}
                <div className="lg:w-[55%] bg-fb-gray-50 relative overflow-hidden min-h-[260px] border-l border-fb-outline-variant/20">
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <div className="relative z-10 p-6 pt-8">
                    {/* Mini canvas with zoom levels */}
                    <div className="bg-fb-white rounded-xl border border-fb-outline-variant/30 shadow-lg p-4 transform group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Toolbar */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          {["#1a56db", "#34a853", "#fbbc04", "#a8364b"].map((c) => (
                            <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                        <div className="ml-auto flex items-center gap-1 bg-fb-gray-50 rounded-full px-2 py-0.5">
                          <span className="text-[9px] text-fb-gray-400">−</span>
                          <span className="text-[9px] font-medium text-fb-gray-600">87%</span>
                          <span className="text-[9px] text-fb-gray-400">+</span>
                        </div>
                      </div>
                      {/* Canvas content */}
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <div className="w-16 h-10 bg-fb-primary/10 rounded border border-fb-primary/20" />
                          <div className="w-24 h-10 bg-amber-50 rounded border border-amber-200" />
                          <div className="w-14 h-10 bg-emerald-50 rounded border border-emerald-200" />
                        </div>
                        <div className="flex gap-2">
                          <div className="w-20 h-8 bg-fb-gray-50 rounded border border-fb-outline-variant/30" />
                          <div className="w-12 h-8 bg-violet-50 rounded border border-violet-200" />
                          <div className="w-24 h-8 bg-rose-50 rounded border border-rose-200" />
                        </div>
                      </div>
                    </div>
                    {/* Zoom indicator overlay */}
                    <div className="absolute bottom-3 right-3 glass rounded-lg px-3 py-1.5 text-[10px] font-medium text-fb-gray-600 shadow-sm">
                      ↕ Scroll to zoom
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 2 — Live Cursors (Tall card) */}
          <div className="group">
            <Card className="p-0 overflow-hidden h-full" hover={false}>
              <div className="p-8 pb-0">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  </svg>
                </div>
                <h3
                  className="font-bold text-2xl text-fb-black mb-3"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Live Cursors
                </h3>
                <p className="text-fb-gray-500 leading-relaxed">
                  See who&apos;s doing what in real-time. Named cursors with colors make remote feel like in-person.
                </p>
              </div>
              {/* Cursor visualization */}
              <div className="relative px-8 pt-6 pb-4 min-h-[180px]">
                <div className="relative">
                  {/* Cursor 1 */}
                  <div className="absolute top-2 left-4 animate-float" style={{ animationDuration: "3s" }}>
                    <CursorWithLabel name="Priya" color="#1a56db" />
                  </div>
                  {/* Cursor 2 */}
                  <div className="absolute top-12 right-6 animate-float" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                    <CursorWithLabel name="Marcus" color="#059669" />
                  </div>
                  {/* Cursor 3 */}
                  <div className="absolute bottom-4 left-1/3 animate-float" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
                    <CursorWithLabel name="Leila" color="#e8364b" />
                  </div>
                  {/* Selection box being drawn */}
                  <div className="mt-8 mx-6 border-2 border-dashed border-fb-primary/30 rounded-lg h-20 bg-fb-primary/3 group-hover:border-fb-primary/50 transition-colors duration-300" />
                </div>
              </div>
            </Card>
          </div>

          {/* Card 3 — Built-in Voice */}
          <div className="group">
            <Card className="p-0 overflow-hidden h-full" hover={false}>
              <div className="p-8 pb-4">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </div>
                <h3
                  className="font-bold text-2xl text-fb-black mb-3"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Built-in Voice
                </h3>
                <p className="text-fb-gray-500 leading-relaxed">
                  Hop on a quick audio huddle right inside the board. No switching apps.
                </p>
              </div>
              {/* Audio waveform visualization */}
              <div className="px-8 pb-6">
                <div className="bg-fb-gray-50 rounded-xl p-4 border border-fb-outline-variant/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-fb-gray-700">Voice huddle</div>
                      <div className="text-[10px] text-fb-gray-400">3 participants</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  </div>
                  {/* Waveform bars */}
                  <div className="flex items-end gap-[3px] h-8">
                    {[40, 65, 30, 80, 50, 70, 35, 90, 55, 45, 75, 60, 40, 85, 50, 65, 35, 70, 45, 80, 55, 30, 60, 75, 40].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-rose-400/60 group-hover:bg-rose-500/70 transition-colors duration-300"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 4 — Smart Connectors (spans 2 cols) */}
          <div className="lg:col-span-2 group">
            <Card className="p-0 overflow-hidden h-full" hover={false}>
              <div className="flex flex-col lg:flex-row-reverse h-full">
                <div className="p-8 lg:p-10 lg:w-[45%] flex flex-col justify-center">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-2xl text-fb-black mb-3"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Smart Connectors
                  </h3>
                  <p className="text-fb-gray-500 leading-relaxed mb-4">
                    Draw relationships between ideas with auto-routing arrows that intelligently snap to shapes and flow around obstacles.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Auto-route", "Snap to shape", "Label arrows"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Connector visualization */}
                <div className="lg:w-[55%] bg-fb-gray-50 relative overflow-hidden min-h-[240px] border-r border-fb-outline-variant/20">
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <div className="relative z-10 p-8">
                    <svg width="100%" height="180" viewBox="0 0 400 180" fill="none" className="group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Nodes */}
                      <rect x="20" y="20" width="100" height="44" rx="8" fill="white" stroke="#1a56db" strokeWidth="1.5" />
                      <text x="70" y="46" textAnchor="middle" className="text-xs" fill="#1a56db" fontWeight="600" fontSize="11">Research</text>
                      
                      <rect x="160" y="68" width="100" height="44" rx="8" fill="white" stroke="#7c3aed" strokeWidth="1.5" />
                      <text x="210" y="94" textAnchor="middle" className="text-xs" fill="#7c3aed" fontWeight="600" fontSize="11">Ideation</text>
                      
                      <rect x="300" y="20" width="90" height="44" rx="8" fill="white" stroke="#059669" strokeWidth="1.5" />
                      <text x="345" y="46" textAnchor="middle" className="text-xs" fill="#059669" fontWeight="600" fontSize="11">Design</text>
                      
                      <rect x="300" y="116" width="90" height="44" rx="8" fill="white" stroke="#e11d48" strokeWidth="1.5" />
                      <text x="345" y="142" textAnchor="middle" className="text-xs" fill="#e11d48" fontWeight="600" fontSize="11">Build</text>

                      {/* Arrows */}
                      <path d="M120 42 Q140 42 160 68" stroke="#aeb2bf" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
                      <path d="M260 82 Q280 52 300 42" stroke="#aeb2bf" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
                      <path d="M260 96 Q280 126 300 136" stroke="#aeb2bf" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#aeb2bf" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CursorWithLabel({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-start">
      <svg width="16" height="20" viewBox="0 0 14 18" fill="none">
        <path d="M1 1L5.5 16L7.5 10L13 8L1 1Z" fill={color} stroke="white" strokeWidth="1" />
      </svg>
      <span
        className="text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-sm -ml-0.5 mt-3.5 shadow-sm"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}
