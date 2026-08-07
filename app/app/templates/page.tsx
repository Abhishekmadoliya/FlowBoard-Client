"use client";

import AppShell from "@/components/app/AppShell";
import { useAppStore } from "@/lib/store/useAppStore";
import { createBoard } from "@/lib/utils/boards";
import { useRouter } from "next/navigation";

const templates = [
  {
    id: "template-1",
    title: "Sprint Planning & Backlog",
    category: "Agile",
    description: "Organize user stories, backlog columns, sprint goals, and task assignments.",
    color: "#1a56db",
    badge: "Popular",
  },
  {
    id: "template-2",
    title: "Brainstorming & Sticky Grid",
    category: "Ideation",
    description: "Multi-color sticky note grid for quick team ideation and affinity mapping.",
    color: "#34a853",
    badge: "Essential",
  },
  {
    id: "template-3",
    title: "System Architecture Diagram",
    category: "Engineering",
    description: "Flowchart layout with frontend, backend, gateway, and database service nodes.",
    color: "#7c3aed",
    badge: "Tech",
  },
  {
    id: "template-4",
    title: "Customer Journey Map",
    category: "UX Research",
    description: "Map user touchpoints, emotions, pain points, and opportunities across phases.",
    color: "#d97706",
    badge: "Design",
  },
  {
    id: "template-5",
    title: "Retrospective Board (Start, Stop, Continue)",
    category: "Team",
    description: "Classic retro framework for sprint reviews and team process improvement.",
    color: "#dc2626",
    badge: "Agile",
  },
  {
    id: "template-6",
    title: "Mind Map & Concept Map",
    category: "Product",
    description: "Central topic node with connecting sub-branches and feature breakdowns.",
    color: "#0891b2",
    badge: "Strategy",
  },
];

export default function TemplatesPage() {
  const router = useRouter();
  const addBoard = useAppStore((state) => state.addBoard);

  const handleUseTemplate = (title: string, color: string) => {
    const board = createBoard();
    board.name = title;
    board.thumbnailColor = color;
    addBoard(board);
    router.push(`/board/${board.id}`);
  };

  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-fb-black" style={{ fontFamily: "Geist, sans-serif" }}>
            Board Templates
          </h1>
          <p className="text-sm text-fb-gray-500 mt-1">
            Kickstart your collaborative workspace with pre-built diagram layouts and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-fb-white border border-fb-outline-variant/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: tpl.color }}
                  >
                    {tpl.category}
                  </span>
                  <span className="text-[11px] font-medium text-fb-gray-400 border border-fb-outline-variant/40 px-2 py-0.5 rounded">
                    {tpl.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-fb-black text-base mb-2">
                  {tpl.title}
                </h3>
                <p className="text-xs text-fb-gray-500 leading-relaxed mb-6">
                  {tpl.description}
                </p>
              </div>

              <button
                onClick={() => handleUseTemplate(tpl.title, tpl.color)}
                className="w-full py-2 px-4 rounded-lg bg-fb-primary-light hover:bg-fb-primary hover:text-white text-fb-primary font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
