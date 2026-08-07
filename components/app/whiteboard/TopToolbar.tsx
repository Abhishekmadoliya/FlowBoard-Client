"use client";

import { useRef } from "react";

interface TopToolbarProps {
  activeTool?: string;
  onToolChange?: (tool: string) => void;
  zoom?: number;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onImageSelect?: (file: File) => void;
  onOpenComponents?: () => void;
}

const tools = [
  { id: "select", label: "Select", icon: <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /> },
  { id: "hand", label: "Pan", icon: <><path d="M18 11V6a2 2 0 0 0-4 0v5" /><path d="M14 10V4a2 2 0 0 0-4 0v6" /><path d="M10 10.5V6a2 2 0 0 0-4 0v8" /><path d="M18 11a2 2 0 0 1 4 0v5a8 8 0 0 1-8 8H9a8 8 0 0 1-8-8V9" /></> },
  { id: "frame", label: "Frame", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /></> },
  { id: "sticky", label: "Sticky Note", icon: <><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" /><path d="M14 3v4a2 2 0 0 0 2 2h4" /></> },
  { id: "shape", label: "Shape", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /></> },
  { id: "connector", label: "Connector", icon: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></> },
  { id: "pen", label: "Pen", icon: <><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></> },
  { id: "text", label: "Text", icon: <><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></> },
  { id: "image", label: "Image", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></> },
  { id: "eraser", label: "Eraser", icon: <><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" /><path d="M22 21H7" /><path d="m5 11 9 9" /></> },
  { id: "components", label: "Components", icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></> },
];

function isToolActive(toolId: string, activeTool: string): boolean {
  if (toolId === activeTool) return true;
  if (toolId === "sticky" && (activeTool === "note" || activeTool === "sticky")) return true;
  if (toolId === "shape" && (activeTool === "geo" || activeTool === "rectangle")) return true;
  if (toolId === "connector" && (activeTool === "arrow" || activeTool === "connector")) return true;
  if (toolId === "pen" && (activeTool === "draw" || activeTool === "pen")) return true;
  return false;
}

export default function TopToolbar({
  activeTool = "select",
  onToolChange,
  zoom = 100,
  onZoomIn,
  onZoomOut,
  onImageSelect,
  onOpenComponents,
}: TopToolbarProps) {
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
      id="top-toolbar"
      className="absolute top-4 left-1/2 -translate-x-1/2 z-30 glass rounded-full shadow-lg px-2 py-1.5 flex items-center gap-0.5"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {tools.map((tool) => {
        const active = isToolActive(tool.id, activeTool);
        return (
          <button
            key={tool.id}
            title={tool.label}
            onClick={() => handleToolClick(tool.id)}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-150 ${
              active
                ? "bg-fb-primary text-white shadow-sm"
                : "text-fb-gray-600 hover:bg-fb-gray-100 hover:text-fb-gray-800"
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
      <div className="w-px h-6 bg-fb-outline-variant/40 mx-1" />

      {/* Zoom controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onZoomOut}
          className="w-7 h-7 flex items-center justify-center rounded-full text-fb-gray-500 hover:bg-fb-gray-100 transition-colors text-sm font-medium"
        >
          −
        </button>
        <span className="text-xs font-medium text-fb-gray-600 min-w-[36px] text-center">
          {zoom}%
        </span>
        <button
          onClick={onZoomIn}
          className="w-7 h-7 flex items-center justify-center rounded-full text-fb-gray-500 hover:bg-fb-gray-100 transition-colors text-sm font-medium"
        >
          +
        </button>
      </div>
    </div>
  );
}
