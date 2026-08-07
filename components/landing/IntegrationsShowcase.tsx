"use client";

const INTEGRATION_ICONS = [
  {
    name: "OpenAI",
    bg: "bg-white border border-zinc-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18181b" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    position: "top-4 left-[15%] sm:left-[22%]",
  },
  {
    name: "GitHub",
    bg: "bg-zinc-900 text-white",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    position: "top-2 right-[18%] sm:right-[24%]",
  },
  {
    name: "Supabase",
    bg: "bg-emerald-400 text-slate-950",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    position: "bottom-6 left-[18%] sm:left-[26%]",
  },
  {
    name: "AWS",
    bg: "bg-amber-400 text-slate-950",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 9l6 6 6-6" />
      </svg>
    ),
    position: "top-10 left-[5%] sm:left-[10%]",
  },
  {
    name: "Dropbox",
    bg: "bg-blue-600 text-white",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 3l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 11l6 4 6-4-6-4-6 4zm24 0l-6-4-6 4 6 4 6-4zM6 16.5l6 4 6-4-6-3.8-6 3.8z" />
      </svg>
    ),
    position: "bottom-4 left-[46%]",
  },
  {
    name: "Figma",
    bg: "bg-purple-600 text-white",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>
    ),
    position: "bottom-8 right-[20%] sm:right-[25%]",
  },
  {
    name: "Stripe",
    bg: "bg-indigo-600 text-white",
    icon: (
      <span className="font-bold text-sm font-sans tracking-tight">S.</span>
    ),
    position: "top-16 right-[6%] sm:right-[10%]",
  },
  {
    name: "Apple TV",
    bg: "bg-zinc-950 text-white",
    icon: (
      <span className="font-bold text-xs font-sans">tv</span>
    ),
    position: "top-12 left-[33%]",
  },
  {
    name: "Twitch",
    bg: "bg-purple-600 text-white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143h-1.715zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    ),
    position: "top-8 right-[36%]",
  },
  {
    name: "Airbnb",
    bg: "bg-rose-500 text-white",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    position: "bottom-6 right-[10%] sm:right-[14%]",
  },
];

export default function IntegrationsShowcase() {
  return (
    <section className="py-28 bg-white border-t border-zinc-200/80 text-zinc-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative min-h-[420px] flex flex-col items-center justify-center">
        
        {/* Top Floating Badge Header (Identical to reference image) */}
        <div className="mb-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-medium mb-3">
            {/* Spinning/pulsing dot loader */}
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            A growing library of
          </div>
        </div>

        {/* Giant Centered Stat Headline (Matching reference image typography) */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-400 font-sans text-center mb-4">
          <span className="text-zinc-400">1,428</span>{" "}
          <span className="text-zinc-500 font-normal">apps</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md text-center font-normal">
          Connect Flowboard canvas with your favorite cloud tools, code repositories, and AI integrations.
        </p>

        {/* Scattered App Icon Squircles (Matching exact layout from reference image) */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {INTEGRATION_ICONS.map((item, idx) => (
            <div
              key={idx}
              className={`absolute ${item.position} ${item.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-sm pointer-events-auto transform hover:scale-110 transition-transform duration-300`}
              title={item.name}
            >
              {item.icon}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
