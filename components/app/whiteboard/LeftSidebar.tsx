"use client";

import { useState } from "react";

interface LeftSidebarProps {
  isOpen?: boolean;
}

const pages = [
  { id: "1", name: "Page 1", active: true },
  { id: "2", name: "Prototypes", active: false },
];

const layers = [
  {
    id: "frame1",
    name: "User Journey Map",
    type: "frame" as const,
    expanded: true,
    children: [
      { id: "rect1", name: "Step Container", type: "rect" as const },
      { id: "text1", name: "Step Label", type: "text" as const },
      { id: "arrow1", name: "Connector 1", type: "connector" as const },
    ],
  },
  {
    id: "frame2",
    name: "Feedback Cluster",
    type: "frame" as const,
    expanded: false,
    children: [],
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  frame: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
  rect: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="1" />
    </svg>
  ),
  text: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </svg>
  ),
  connector: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

export default function LeftSidebar({ isOpen = true }: LeftSidebarProps) {
  const [expandedLayers, setExpandedLayers] = useState<string[]>(["frame1"]);

  if (!isOpen) return null;

  const toggleLayer = (id: string) => {
    setExpandedLayers((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  return (
    <div
      id="left-sidebar"
      className="absolute top-16 left-4 z-20 w-[220px] bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Pages */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Pages
          </span>
          <button className="text-fb-gray-400 hover:text-fb-gray-600 text-xs">•••</button>
        </div>
        <div className="space-y-0.5">
          {pages.map((page) => (
            <button
              key={page.id}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                page.active
                  ? "bg-fb-primary text-white font-medium"
                  : "text-fb-gray-600 hover:bg-fb-gray-50"
              }`}
            >
              {page.name}
            </button>
          ))}
          <button className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm text-fb-gray-400 hover:text-fb-gray-600 hover:bg-fb-gray-50 transition-colors">
            + Add page
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-fb-outline-variant/30 mx-3" />

      {/* Layers */}
      <div className="p-3">
        <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          Layers
        </span>
        <div className="space-y-0.5">
          {layers.map((layer) => (
            <div key={layer.id}>
              <button
                onClick={() => toggleLayer(layer.id)}
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-fb-gray-700 hover:bg-fb-gray-50 transition-colors"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`transition-transform ${
                    expandedLayers.includes(layer.id) ? "rotate-90" : ""
                  }`}
                >
                  <path d="M8 5l8 7-8 7z" />
                </svg>
                {typeIcons[layer.type]}
                <span className="truncate text-xs">{layer.name}</span>
              </button>
              {expandedLayers.includes(layer.id) && (
                <div className="ml-5 space-y-0.5">
                  {layer.children.map((child) => (
                    <button
                      key={child.id}
                      className="w-full flex items-center gap-2 px-2 py-1 rounded text-xs text-fb-gray-500 hover:bg-fb-gray-50 hover:text-fb-gray-700 transition-colors"
                    >
                      {typeIcons[child.type]}
                      <span className="truncate">{child.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
