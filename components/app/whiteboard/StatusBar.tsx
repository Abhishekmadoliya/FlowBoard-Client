"use client";

export default function StatusBar() {
  return (
    <div
      id="status-bar"
      className="absolute bottom-4 right-4 z-20 flex items-center gap-3"
    >
      {/* Multiplayer status */}
      <div className="flex items-center gap-2 bg-fb-white border border-fb-outline-variant/30 rounded-lg px-3 py-2 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-fb-success animate-pulse" />
        <span className="text-xs text-fb-gray-600 font-medium">
          Multiplayer connected
        </span>
      </div>

      {/* Comments button */}
      <button
        id="comments-button"
        className="flex items-center gap-2 bg-fb-primary text-white rounded-lg px-3 py-2 shadow-sm hover:bg-fb-primary-hover transition-colors text-xs font-medium"
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        12 comments
      </button>
    </div>
  );
}
