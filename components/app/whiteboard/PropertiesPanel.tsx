"use client";

export default function PropertiesPanel() {
  const colorSwatches = [
    "#1a56db",
    "#34a853",
    "#fbbc04",
    "#a8364b",
    "#7c3aed",
    "#0d0f14",
    "#ffffff",
    "#e5e8f4",
  ];

  return (
    <div
      id="properties-panel"
      className="absolute top-16 right-4 z-20 w-[240px] bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/20 flex items-center justify-between">
        <span className="text-sm font-semibold text-fb-black">Properties</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#777a87" strokeWidth="2">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      </div>

      {/* Fill */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider">
            Fill
          </span>
          <span className="text-xs text-fb-gray-400">100%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-fb-primary border border-fb-outline-variant/30" />
          <span className="text-xs text-fb-gray-600 font-mono">#1A56DB</span>
        </div>
      </div>

      {/* Stroke & Corners */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider block mb-2">
          Stroke & Corners
        </span>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 bg-fb-gray-50 rounded-lg px-2.5 py-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#777a87" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            <span className="text-xs text-fb-gray-600">2px</span>
          </div>
          <div className="flex items-center gap-1.5 bg-fb-gray-50 rounded-lg px-2.5 py-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#777a87" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9" />
            </svg>
            <span className="text-xs text-fb-gray-600">8px</span>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider block mb-2">
          Typography
        </span>
        <div className="bg-fb-gray-50 rounded-lg px-3 py-2 mb-2">
          <span className="text-xs text-fb-gray-600">Geist Sans</span>
        </div>
        <div className="flex gap-1">
          {["B", "I", "U"].map((style) => (
            <button
              key={style}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors ${
                style === "B"
                  ? "bg-fb-gray-100 text-fb-gray-800"
                  : "text-fb-gray-400 hover:bg-fb-gray-50 hover:text-fb-gray-600"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 py-3">
        {[
          { label: "Add link", icon: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />, icon2: <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /> },
          { label: "Comment", icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></> },
          { label: "Lock element", icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
        ].map((action) => (
          <button
            key={action.label}
            className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-fb-gray-600 hover:bg-fb-gray-50 hover:text-fb-gray-800 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {action.icon}
              {action.icon2}
            </svg>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
