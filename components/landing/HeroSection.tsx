"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"ai" | "multiplayer">("ai");

  return (
    <section id="hero" className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-white text-zinc-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Layered Icon Badge (Matching reference image pink stacked card K. badge) */}
        <div className="mx-auto mb-8 w-16 h-16 relative flex items-center justify-center">
          {/* Layered stack cards behind */}
          <div className="absolute inset-0 bg-pink-200 rounded-2xl transform -rotate-6 translate-y-1 opacity-70" />
          <div className="absolute inset-0 bg-pink-300 rounded-2xl transform rotate-3 translate-y-0.5 opacity-80" />
          
          {/* Main Card */}
          <div className="relative w-full h-full bg-pink-400 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-sm tracking-tighter font-mono">
            K.
          </div>
        </div>

        {/* Main Headline (Matching reference image typography) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl mx-auto font-sans">
          Multi-collaborator canvas <br className="hidden sm:inline" />
          powered by autonomous AI.
        </h1>

        {/* Subheadline (Matching reference image subtitle) */}
        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Part of <strong className="text-zinc-800 font-semibold">cloudvyn.com</strong> pricing — Brainstorm, map cloud architectures, and build UI wireframes alongside real-time team multiplayer & autonomous AI agents.
        </p>

        {/* Action Buttons (Matching reference image pill buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            href="/excalidraw"
            className="px-7 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors shadow-xs"
          >
            Join for free
          </Link>

          <a
            href="#pricing"
            className="px-7 py-3.5 rounded-full bg-white text-zinc-900 border border-zinc-200 font-semibold text-sm hover:bg-zinc-50 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            See our plans →
          </a>
        </div>

        {/* High-Fidelity Clean Canvas Preview Window */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-3xl border border-zinc-200 bg-white shadow-xl overflow-hidden text-left">
            
            {/* Top Minimal Chrome Bar */}
            <div className="bg-zinc-50 border-b border-zinc-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                <span className="text-xs text-zinc-400 font-mono ml-2 hidden sm:inline">
                  cloudvyn.com/flowboard/canvas
                </span>
              </div>

              {/* Mode Pill Switcher */}
              <div className="flex items-center gap-1 bg-zinc-200/60 p-1 rounded-full text-xs font-medium">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === "ai" ? "bg-white text-zinc-900 shadow-xs font-semibold" : "text-zinc-600"
                  }`}
                >
                  Autonomous AI Mode
                </button>
                <button
                  onClick={() => setActiveTab("multiplayer")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === "multiplayer" ? "bg-white text-zinc-900 shadow-xs font-semibold" : "text-zinc-600"
                  }`}
                >
                  Team Multiplayer
                </button>
              </div>
            </div>

            {/* Canvas Stage */}
            <div className="bg-zinc-50/50 dot-pattern-light p-8 min-h-[360px] relative overflow-hidden flex items-center justify-center">
              
              {/* Canvas Nodes */}
              <div className="relative w-full h-full min-h-[280px]">
                
                {/* Node 1: Architect Node */}
                <div className="absolute top-6 left-[10%] bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm min-w-[170px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-zinc-900">Cloud Infrastructure</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">AWS EKS Cluster</span>
                </div>

                {/* Node 2: AI Wireframe Node */}
                <div className="absolute top-6 right-[10%] bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm min-w-[170px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                    <span className="text-xs font-bold text-zinc-900">SaaS Onboarding</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">UI Wireframe Frame</span>
                </div>

                {/* Sticky Note */}
                <div className="absolute bottom-8 left-[35%] bg-amber-100 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 shadow-sm max-w-[160px] transform -rotate-2">
                  <div className="font-semibold mb-1">🤖 AI Agent Insight:</div>
                  Auto-routing connected to Cloudvyn SSO API.
                </div>

                {/* Cursors */}
                <div className="absolute top-[35%] left-[30%] flex items-start z-10">
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <path d="M1 1L5.5 16L7.5 10L13 8L1 1Z" fill="#18181b" stroke="#ffffff" strokeWidth="1" />
                  </svg>
                  <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full bg-zinc-900 shadow-xs ml-1">
                    Agent-Architect [AI]
                  </span>
                </div>

                <div className="absolute bottom-[25%] right-[25%] flex items-start z-10">
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <path d="M1 1L5.5 16L7.5 10L13 8L1 1Z" fill="#ec4899" stroke="#ffffff" strokeWidth="1" />
                  </svg>
                  <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full bg-pink-500 shadow-xs ml-1">
                    Priya (Design Lead)
                  </span>
                </div>

                {/* SVG Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d="M 220 50 Q 400 30 580 50" fill="none" stroke="#d4d4d8" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
