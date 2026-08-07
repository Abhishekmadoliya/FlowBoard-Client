"use client";

import { useRef } from "react";

interface ExcalidrawToolbarProps {
  activeTool?: string;
  onToolChange?: (tool: string) => void;
  zoom?: number;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onImageSelect?: (file: File) => void;
  onOpenComponents?: () => void;
}

const tools = [
  { id: "selection", label: "Select", icon: <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /> },
  { id: "hand", label: "Pan", icon: <><path d="M18 11V6a2 2 0 0 0-4 0v5" /><path d="M14 10V4a2 2 0 0 0-4 0v6" /><path d="M10 10.5V6a2 2 0 0 0-4 0v8" /><path d="M18 11a2 2 0 0 1 4 0v5a8 8 0 0 1-8 8H9a8 8 0 0 1-8-8V9" /></> },
  { id: "rectangle", label: "Rectangle", icon: <rect x="3" y="3" width="18" height="18" rx="2" /> },
  { id: "diamond", label: "Diamond", icon: <polygon points="12 2 22 12 12 22 2 12" /> },
  { id: "ellipse", label: "Ellipse", icon: <circle cx="12" cy="12" r="9" /> },
  { id: "arrow", label: "Arrow", icon: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></> },
  { id: "line", label: "Line", icon: <line x1="4" y1="20" x2="20" y2="4" /> },
  { id: "freedraw", label: "Draw", icon: <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /> },
  { id: "text", label: "Text", icon: <><polyline points="4 7 4 4 20 4 20 7" /><line x1="12" y1="4" x2="12" y2="20" /></> },
  { id: "image", label: "Image", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></> },
  { id: "eraser", label: "Eraser", icon: <><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" /><path d="M22 21H7" /></> },
  { id: "components", label: "Components", icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></> },
];

export default function ExcalidrawToolbar({
  activeTool = "selection",
  onToolChange,
  zoom = 100,
  onZoomIn,
  onZoomOut,
  onImageSelect,
  onOpenComponents,
}: ExcalidrawToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleToolClick = (id: string) => {
    if (id === "image") {
      fileInputRef.current?.click();
    } else if (id === "components") {
      onOpenComponents?.();
    } else {
      onToolChange?.(id);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageSelect) {
      onImageSelect(file);
    }
    e.target.value = "";
  };

  return (
    <div
      id="excalidraw-toolbar"
      className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-[#FAF9F6] border border-[#111111]/15 rounded-full shadow-lg px-2 py-1.5 flex items-center gap-0.5"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {tools.map((tool) => {
        const active = activeTool === tool.id;
        return (
          <button
            key={tool.id}
            title={tool.label}
            onClick={() => handleToolClick(tool.id)}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-150 ${
              active
                ? "bg-[#4F46E5] text-white shadow-sm"
                : "text-[#111111]/70 hover:bg-black/5 hover:text-[#111111]"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {tool.icon}
            </svg>
          </button>
        );
      })}

      {/* Separator */}
      <div className="w-px h-6 bg-[#111111]/15 mx-1" />

      {/* Zoom controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onZoomOut}
          className="w-7 h-7 flex items-center justify-center rounded-full text-[#111111]/70 hover:bg-black/5 transition-colors text-sm font-medium"
        >
          −
        </button>
        <span className="text-xs font-semibold text-[#111111]/80 min-w-[36px] text-center">
          {zoom}%
        </span>
        <button
          onClick={onZoomIn}
          className="w-7 h-7 flex items-center justify-center rounded-full text-[#111111]/70 hover:bg-black/5 transition-colors text-sm font-medium"
        >
          +
        </button>
      </div>
    </div>
  );
}
