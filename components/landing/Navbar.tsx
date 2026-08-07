"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-2xl mx-auto floating-nav-pill rounded-full px-6 py-2.5 flex items-center justify-between shadow-xs">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-zinc-900 text-lg tracking-tight">
          {/* Logo Mark Icon matching reference aesthetic */}
          <div className="w-6 h-6 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs font-mono">
            M.
          </div>
          <span className="font-semibold text-base tracking-tight text-zinc-900">Flowboard</span>
        </Link>

        {/* Right Navigation items */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="#pricing" className="hover:text-zinc-900 transition-colors">
            Pricing
          </Link>
          <Link href="#ai-agents" className="hover:text-zinc-900 transition-colors hidden sm:inline">
            AI Agents
          </Link>
          <Link href="/login" className="hover:text-zinc-900 transition-colors">
            Log in
          </Link>
          <Link
            href="/excalidraw"
            className="px-4 py-1.5 rounded-full bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition-colors"
          >
            Join for free
          </Link>
        </div>
      </div>
    </nav>
  );
}
