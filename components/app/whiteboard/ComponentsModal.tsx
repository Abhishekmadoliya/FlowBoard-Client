"use client";

import { Editor, createShapeId } from "tldraw";

interface ComponentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  editor: Editor | null;
}

const componentPresets = [
  {
    id: "flowchart",
    name: "Flowchart Process",
    description: "Start, Process box, Decision diamond, and End node connected with arrows.",
    badge: "Diagram",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2">
        <rect x="3" y="4" width="7" height="6" rx="1" />
        <path d="M10 7h4" />
        <rect x="14" y="4" width="7" height="6" rx="1" />
        <path d="M17.5 10v4" />
        <rect x="14" y="14" width="7" height="6" rx="1" />
      </svg>
    ),
    insert: (editor: Editor) => {
      const center = editor.getViewportScreenCenter();
      const point = editor.screenToPage(center);
      const startId = createShapeId();
      const processId = createShapeId();
      const endId = createShapeId();

      editor.createShapes([
        {
          id: startId,
          type: "geo",
          x: point.x - 250,
          y: point.y - 40,
          props: { geo: "ellipse", text: "Start", w: 120, h: 80, color: "green" },
        },
        {
          id: processId,
          type: "geo",
          x: point.x - 60,
          y: point.y - 40,
          props: { geo: "rectangle", text: "Process Data", w: 150, h: 80, color: "blue" },
        },
        {
          id: endId,
          type: "geo",
          x: point.x + 150,
          y: point.y - 40,
          props: { geo: "ellipse", text: "Complete", w: 120, h: 80, color: "red" },
        },
        {
          type: "arrow",
          x: point.x - 130,
          y: point.y,
          props: {
            start: { x: 0, y: 0 },
            end: { x: 70, y: 0 },
          },
        },
        {
          type: "arrow",
          x: point.x + 90,
          y: point.y,
          props: {
            start: { x: 0, y: 0 },
            end: { x: 60, y: 0 },
          },
        },
      ] as any[]);
    },
  },
  {
    id: "sticky-grid",
    name: "Brainstorm Sticky Grid",
    description: "4-quadrant colorful sticky notes for rapid team ideation.",
    badge: "Agile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1" fill="#fef08a" />
        <rect x="13" y="3" width="8" height="8" rx="1" fill="#bbf7d0" />
        <rect x="3" y="13" width="8" height="8" rx="1" fill="#bfdbfe" />
        <rect x="13" y="13" width="8" height="8" rx="1" fill="#fbcfe8" />
      </svg>
    ),
    insert: (editor: Editor) => {
      const center = editor.getViewportScreenCenter();
      const point = editor.screenToPage(center);

      editor.createShapes([
        {
          type: "note",
          x: point.x - 200,
          y: point.y - 200,
          props: { text: "Idea 1: User Onboarding", color: "yellow" },
        },
        {
          type: "note",
          x: point.x + 20,
          y: point.y - 200,
          props: { text: "Idea 2: Realtime Sync", color: "green" },
        },
        {
          type: "note",
          x: point.x - 200,
          y: point.y + 20,
          props: { text: "Idea 3: Mobile Layout", color: "blue" },
        },
        {
          type: "note",
          x: point.x + 20,
          y: point.y + 20,
          props: { text: "Idea 4: AI Diagram Assistant", color: "violet" },
        },
      ] as any[]);
    },
  },
  {
    id: "system-arch",
    name: "System Architecture Nodes",
    description: "Client App, API Gateway, Auth Service, and DB Database nodes.",
    badge: "Tech",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
        <rect x="2" y="9" width="5" height="6" rx="1" />
        <rect x="9" y="4" width="6" height="16" rx="1" />
        <rect x="17" y="9" width="5" height="6" rx="1" />
      </svg>
    ),
    insert: (editor: Editor) => {
      const center = editor.getViewportScreenCenter();
      const point = editor.screenToPage(center);

      editor.createShapes([
        {
          type: "geo",
          x: point.x - 260,
          y: point.y - 50,
          props: { geo: "rectangle", text: "React Frontend", w: 140, h: 100, color: "blue" },
        },
        {
          type: "geo",
          x: point.x - 70,
          y: point.y - 50,
          props: { geo: "rectangle", text: "API Gateway\n(Express / Node)", w: 150, h: 100, color: "violet" },
        },
        {
          type: "geo",
          x: point.x + 130,
          y: point.y - 50,
          props: { geo: "rectangle", text: "MongoDB\nDatabase", w: 140, h: 100, color: "green" },
        },
      ] as any[]);
    },
  },
  {
    id: "scrum-board",
    name: "Kanban Columns Frame",
    description: "To Do, In Progress, and Done columns inside an overarching frame.",
    badge: "Management",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    insert: (editor: Editor) => {
      const center = editor.getViewportScreenCenter();
      const point = editor.screenToPage(center);
      const frameId = createShapeId();

      editor.createShapes([
        {
          id: frameId,
          type: "frame",
          x: point.x - 300,
          y: point.y - 180,
          props: { name: "Sprint Board", w: 600, h: 360 },
        },
        {
          type: "note",
          parentId: frameId,
          x: 20,
          y: 60,
          props: { text: "Task A: Setup Auth", color: "yellow" },
        },
        {
          type: "note",
          parentId: frameId,
          x: 210,
          y: 60,
          props: { text: "Task B: Whiteboard Canvas", color: "blue" },
        },
        {
          type: "note",
          parentId: frameId,
          x: 400,
          y: 60,
          props: { text: "Task C: UI Design Tokens", color: "green" },
        },
      ] as any[]);
    },
  },
];

export default function ComponentsModal({
  isOpen,
  onClose,
  editor,
}: ComponentsModalProps) {
  if (!isOpen) return null;

  const handleSelect = (preset: (typeof componentPresets)[0]) => {
    if (editor) {
      preset.insert(editor);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-fb-white rounded-2xl border border-fb-outline-variant/30 shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-fb-outline-variant/20">
          <div>
            <h2 className="text-lg font-bold text-fb-black">
              Components & Templates Library
            </h2>
            <p className="text-xs text-fb-gray-500 mt-0.5">
              Select a pre-built component block to insert onto your canvas.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-fb-gray-400 hover:text-fb-gray-700 hover:bg-fb-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {componentPresets.map((preset) => (
            <div
              key={preset.id}
              onClick={() => handleSelect(preset)}
              className="group border border-fb-outline-variant/30 rounded-xl p-4 cursor-pointer hover:border-fb-primary hover:shadow-md bg-fb-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-fb-gray-50 group-hover:bg-fb-primary-light flex items-center justify-center transition-colors">
                    {preset.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-fb-gray-400 border border-fb-outline-variant/30 px-2 py-0.5 rounded-md">
                    {preset.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-fb-black text-sm mb-1 group-hover:text-fb-primary transition-colors">
                  {preset.name}
                </h3>
                <p className="text-xs text-fb-gray-500 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-fb-outline-variant/15 flex items-center justify-between text-xs font-semibold text-fb-primary">
                <span>Insert on Canvas</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
