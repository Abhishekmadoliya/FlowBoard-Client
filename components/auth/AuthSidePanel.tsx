import Link from "next/link";

export default function AuthSidePanel() {
  return (
    <div className="relative flex flex-col justify-between h-full p-10 overflow-hidden bg-slate-950 border-r border-white/10 dark-dot-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Brand */}
      <div>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-white font-sans tracking-tight">
            Flowboard
          </span>
          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 border border-cyan-500/30 px-1.5 py-0.5 rounded">
            AI CANVAS
          </span>
        </Link>
        <span className="text-xs text-slate-400 block mt-1">
          Powered by Cloudvyn.com Ecosystem
        </span>
      </div>

      {/* Quote */}
      <div className="my-auto relative z-10">
        <blockquote className="text-3xl lg:text-4xl text-white font-extrabold leading-tight mb-8 font-sans">
          The fastest path from idea to <span className="gradient-text-cyan">autonomous execution</span>.
        </blockquote>

        {/* Users & AI Badge */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-slate-950">AI</div>
            <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">S</div>
            <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">M</div>
          </div>
          <span className="text-slate-400 text-sm">
            Join 50,000+ teams building on Cloudvyn
          </span>
        </div>
      </div>

      {/* Decorative Canvas Preview HUD */}
      <div className="glass-dark rounded-2xl p-4 border border-white/10 relative z-10">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-cyan-400 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Agent-Architect Active
          </span>
          <span className="text-slate-400 text-[10px]">Cloudvyn SSO</span>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-slate-900 border border-cyan-500/30 rounded-lg text-xs text-cyan-300 font-medium">
            ⚡ AWS Infra
          </div>
          <div className="px-3 py-1.5 bg-slate-900 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 font-medium">
            🎨 UI Wireframe
          </div>
        </div>
      </div>
    </div>
  );
}
