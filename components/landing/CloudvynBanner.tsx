"use client";

export default function CloudvynBanner() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-300 py-2 px-4 text-xs font-medium border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-100 text-[10px] font-semibold uppercase tracking-wider">
            Cloudvyn Suite
          </span>
          <span>
            Flowboard is a subproduct of <strong className="text-white">cloudvyn.com</strong> — Included under Cloudvyn pricing.
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs">
          <a
            href="https://cloudvyn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 font-medium"
          >
            Visit cloudvyn.com →
          </a>
        </div>
      </div>
    </div>
  );
}
