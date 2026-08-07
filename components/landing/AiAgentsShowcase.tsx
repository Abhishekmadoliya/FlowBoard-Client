"use client";

import { useState } from "react";

const AGENTS = [
  {
    id: "architect",
    name: "System Architect Agent",
    badge: "Infrastructure",
    headline: "Autonomously designs cloud architecture & microservices",
    description: "Prompt the Architect Agent to map microservices, load balancers, and database clusters live on your infinite canvas.",
    codeSnippet: `// Auto-generated Terraform by Architect Agent
module "cloudvyn_cluster" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"
  name    = "flowboard-prod"
}`,
  },
  {
    id: "wireframe",
    name: "UI/UX Wireframe Agent",
    badge: "Design",
    headline: "Turns rough ideas into interactive UI wireframe layouts",
    description: "Generate SaaS onboarding flows, dashboard screens, and mobile layouts with clean, aligned component structures.",
    codeSnippet: `<div className="p-6 bg-white border border-zinc-200 rounded-2xl">
  <Header title="Flowboard AI Workspace" />
  <CanvasGrid mode="multiplayer" />
</div>`,
  },
  {
    id: "strategy",
    name: "Strategy & Retro Agent",
    badge: "Agile",
    headline: "Clusters raw sticky notes into structured roadmaps",
    description: "Synthesize dozens of unorganized sticky notes after sprint retros into prioritized theme pillars and action items.",
    codeSnippet: `{
  "sprint": "Q3-Sprint-14",
  "action_items": ["Implement Cloudvyn SSO", "Canvas Zoom Optimization"]
}`,
  },
  {
    id: "code-sync",
    name: "Code & Spec Sync Agent",
    badge: "DevOps",
    headline: "Translates whiteboard drawings into production code",
    description: "Every rectangle and connector drawn on your canvas is synced to clean TypeScript interfaces and OpenAPI specifications.",
    codeSnippet: `export interface CanvasNode {
  id: string;
  type: "architect" | "wireframe" | "note";
  cloudvynSync: boolean;
}`,
  },
];

export default function AiAgentsShowcase() {
  const [selectedId, setSelectedId] = useState("architect");
  const activeAgent = AGENTS.find((a) => a.id === selectedId) || AGENTS[0];

  return (
    <section id="ai-agents" className="py-24 bg-zinc-50 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            Autonomous Teammates
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4 font-sans">
            AI agents working live on your canvas.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Embed autonomous AI workers directly into your team sessions to draw, design, and write code specs alongside you.
          </p>
        </div>

        {/* Agent Cards Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {AGENTS.map((agent) => {
            const isSelected = agent.id === selectedId;
            return (
              <button
                key={agent.id}
                onClick={() => setSelectedId(agent.id)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? "bg-white border-zinc-900 shadow-sm"
                    : "bg-zinc-100/60 border-zinc-200/80 hover:bg-white hover:border-zinc-300"
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-200/80 px-2 py-0.5 rounded-full inline-block mb-3">
                  {agent.badge}
                </span>
                <h3 className="font-bold text-sm text-zinc-900 mb-1">{agent.name}</h3>
                <p className="text-xs text-zinc-500 line-clamp-2">{agent.headline}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Agent Output Card */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                {activeAgent.name}
              </span>
              <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
                {activeAgent.headline}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {activeAgent.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-zinc-900 rounded-2xl p-5 text-zinc-200 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="text-[10px] text-zinc-400 border-b border-zinc-800 pb-2 mb-3 font-semibold">
                // Live Stream Output from {activeAgent.name}
              </div>
              <pre className="text-zinc-200 leading-relaxed">
                <code>{activeAgent.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
