"use client";

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-white border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            Capability Suite
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4 font-sans">
            Engineered for high-velocity teams.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Everything your product team needs to sketch, map, and export code without breaking context.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="lg:col-span-2 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Infinite AI Canvas</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Pan, zoom, and navigate freely across boundless pixels. Autonomous AI agents continuously organize your workspace into nested frames and clear sections.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 flex items-center justify-between text-xs text-zinc-600 font-mono">
              <span>Zoom level: 100% Infinite</span>
              <span className="font-semibold text-zinc-900">Pan & Snap Active</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Zero-Latency Cursors</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                See teammate presence and AI agent markers in real time. Colors and labels keep remote sessions structured.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 font-medium text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-zinc-900" />
                Agent-Architect [AI]
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                Priya (Lead Designer)
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Spatial Voice Huddles</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Hop on audio huddles directly inside your canvas with zero extra links or calendar invites.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 flex items-center justify-between text-xs font-semibold text-zinc-800">
              <span>Voice Huddle Active</span>
              <span className="text-emerald-600">3 Participants</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-2 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Smart Auto-Routing Connectors</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Draw relationships between shapes effortlessly. Arrows automatically route around obstacles and snap cleanly to midpoints.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 flex items-center justify-around text-xs font-semibold text-zinc-800">
              <span className="px-3 py-1 bg-zinc-100 rounded-lg">React App</span>
              <span className="text-zinc-400">→</span>
              <span className="px-3 py-1 bg-zinc-100 rounded-lg">Cloudvyn API</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
