"use client";

import Link from "next/link";

const TEMPLATES = [
  {
    title: "AWS Cloud Infrastructure",
    category: "System Design",
    description: "Multi-region AWS setup with load balancers and RDS database replicas.",
    nodes: ["Cloudflare", "ALB", "EKS Pods", "PostgreSQL"],
  },
  {
    title: "Sprint Retrospective & Backlog",
    category: "Agile Planning",
    description: "Organize sprint cards, map ticket dependencies, and synthesize retro items.",
    nodes: ["Went Well", "Needs Work", "Action Items", "Kudos"],
  },
  {
    title: "SaaS Product UX Journey",
    category: "UX & Product",
    description: "Full funnel customer journey map with conversion touchpoints.",
    nodes: ["Discovery", "Sign Up", "Onboarding", "Upgrade"],
  },
  {
    title: "Autonomous AI Flowchart",
    category: "AI & Workflow",
    description: "Map agentic AI decision loops and prompt fallback execution branches.",
    nodes: ["Prompt Input", "LLM Router", "Tool Call", "Output"],
  },
];

export default function TemplateGallery() {
  return (
    <section id="templates" className="py-24 bg-white border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              Templates
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-sans">
              100+ Production Templates
            </h2>
            <p className="text-zinc-500 text-base mt-2">
              Start with a blank canvas or jumpstart your session with AI-assisted industry templates.
            </p>
          </div>

          <Link
            href="/excalidraw"
            className="px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-xs hover:bg-zinc-50 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            Explore all templates →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.title}
              className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-300 hover:bg-white transition-all"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                  {tpl.category}
                </span>
                <h3 className="font-bold text-zinc-900 text-base mb-2">{tpl.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6">{tpl.description}</p>
                <div className="flex flex-wrap gap-1 mb-6">
                  {tpl.nodes.map((n) => (
                    <span key={n} className="text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded-md text-zinc-600 font-mono">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/excalidraw"
                className="w-full py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold text-center hover:bg-zinc-800 transition-colors"
              >
                Use template
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
