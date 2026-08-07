"use client";

import Link from "next/link";

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="py-24 bg-white border-t border-zinc-200/80 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Layered Icon Badge */}
        <div className="mx-auto mb-8 w-14 h-14 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-pink-200 rounded-xl transform -rotate-6 opacity-70" />
          <div className="relative w-full h-full bg-pink-400 rounded-xl flex items-center justify-center text-white font-extrabold text-xl font-mono">
            K.
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4 font-sans">
          Ready to build with autonomous AI?
        </h2>
        <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto mb-8 font-normal">
          Join thousands of product teams using Cloudvyn Flowboard. Free for individuals, included under Cloudvyn pricing.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/excalidraw"
            className="px-7 py-3 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors shadow-xs"
          >
            Join for free
          </Link>
          <a
            href="https://cloudvyn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-white text-zinc-900 border border-zinc-200 font-semibold text-sm hover:bg-zinc-50 transition-colors"
          >
            Visit cloudvyn.com →
          </a>
        </div>

      </div>
    </section>
  );
}
