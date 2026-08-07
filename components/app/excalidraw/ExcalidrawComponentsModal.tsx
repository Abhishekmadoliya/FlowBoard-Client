"use client";

import { ExcalidrawImperativeAPI } from "@/lib/excalidrawTypes";

interface ExcalidrawComponentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  excalidrawAPI: ExcalidrawImperativeAPI | null;
}

function createEl(
  type: "rectangle" | "ellipse" | "diamond" | "arrow" | "text",
  x: number,
  y: number,
  width: number,
  height: number,
  extra: Record<string, unknown> = {}
) {
  return {
    type,
    id: "el-" + Math.random().toString(36).substr(2, 9),
    x,
    y,
    width,
    height,
    angle: 0,
    strokeColor: (extra.strokeColor as string) || "#4F46E5",
    backgroundColor: (extra.backgroundColor as string) || "transparent",
    fillStyle: (extra.fillStyle as string) || "hachure",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    seed: Math.floor(Math.random() * 100000),
    version: 1,
    versionNonce: Math.floor(Math.random() * 100000),
    isDeleted: false,
    groupIds: [],
    frameId: null,
    boundElements: [],
    updated: Date.now(),
    link: null,
    locked: false,
    text: extra.text as string | undefined,
    fontSize: (extra.fontSize as number) || 16,
    fontFamily: 1,
    textAlign: "center",
    verticalAlign: "middle",
    ...extra,
  };
}

const presets = [
  {
    id: "flowchart",
    name: "Flowchart Diagram",
    description: "Start node, Process box, Decision diamond, and End node connected with arrows.",
    badge: "Diagram",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <rect x="3" y="4" width="7" height="6" rx="1" />
        <path d="M10 7h4" />
        <rect x="14" y="4" width="7" height="6" rx="1" />
      </svg>
    ),
    insert: (api: ExcalidrawImperativeAPI) => {
      const current = api.getSceneElements();
      const newEls = [
        createEl("ellipse", 100, 200, 120, 70, { text: "Start", strokeColor: "#10B981", backgroundColor: "#D1FAE5" }),
        createEl("arrow", 230, 235, 70, 0, { strokeColor: "#111111" }),
        createEl("rectangle", 310, 195, 140, 80, { text: "Process Data", strokeColor: "#4F46E5", backgroundColor: "#EEF2FF" }),
        createEl("arrow", 460, 235, 70, 0, { strokeColor: "#111111" }),
        createEl("ellipse", 540, 200, 120, 70, { text: "Complete", strokeColor: "#EF4444", backgroundColor: "#FEE2E2" }),
      ];
      api.updateScene({ elements: [...current, ...(newEls as unknown as typeof current)] });
    },
  },
  {
    id: "sticky-grid",
    name: "Brainstorming Sticky Grid",
    description: "Hand-drawn multi-colored sticky notes for team ideation.",
    badge: "Agile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1" fill="#FEF3C7" />
        <rect x="13" y="3" width="8" height="8" rx="1" fill="#D1FAE5" />
      </svg>
    ),
    insert: (api: ExcalidrawImperativeAPI) => {
      const current = api.getSceneElements();
      const newEls = [
        createEl("rectangle", 150, 150, 180, 180, { text: "Feature: AI Diagramming", strokeColor: "#F59E0B", backgroundColor: "#FEF3C7", fillStyle: "solid" }),
        createEl("rectangle", 360, 150, 180, 180, { text: "Task: Realtime Sync", strokeColor: "#10B981", backgroundColor: "#D1FAE5", fillStyle: "solid" }),
        createEl("rectangle", 150, 360, 180, 180, { text: "Idea: Mobile Sketching", strokeColor: "#4F46E5", backgroundColor: "#EEF2FF", fillStyle: "solid" }),
        createEl("rectangle", 360, 360, 180, 180, { text: "Design: Hand-drawn Palette", strokeColor: "#8B5CF6", backgroundColor: "#F3E8FF", fillStyle: "solid" }),
      ];
      api.updateScene({ elements: [...current, ...(newEls as unknown as typeof current)] });
    },
  },
  {
    id: "system-arch",
    name: "System Architecture",
    description: "Client Web App, Express API Gateway, and MongoDB Database nodes.",
    badge: "Tech",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
        <rect x="2" y="9" width="5" height="6" rx="1" />
        <rect x="9" y="4" width="6" height="16" rx="1" />
        <rect x="17" y="9" width="5" height="6" rx="1" />
      </svg>
    ),
    insert: (api: ExcalidrawImperativeAPI) => {
      const current = api.getSceneElements();
      const newEls = [
        createEl("rectangle", 100, 200, 150, 100, { text: "Next.js Frontend\n(#FAF9F6)", strokeColor: "#0EA5E9", backgroundColor: "#E0F2FE" }),
        createEl("arrow", 260, 250, 80, 0, { strokeColor: "#111111" }),
        createEl("rectangle", 350, 200, 160, 100, { text: "API Gateway\n(Express / Node)", strokeColor: "#4F46E5", backgroundColor: "#EEF2FF" }),
        createEl("arrow", 520, 250, 80, 0, { strokeColor: "#111111" }),
        createEl("rectangle", 610, 200, 150, 100, { text: "MongoDB\nDatabase", strokeColor: "#10B981", backgroundColor: "#D1FAE5" }),
      ];
      api.updateScene({ elements: [...current, ...(newEls as unknown as typeof current)] });
    },
  },
];

export default function ExcalidrawComponentsModal({
  isOpen,
  onClose,
  excalidrawAPI,
}: ExcalidrawComponentsModalProps) {
  if (!isOpen) return null;

  const handleSelect = (preset: (typeof presets)[0]) => {
    if (excalidrawAPI) {
      preset.insert(excalidrawAPI);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-[#FAF9F6] rounded-2xl border border-[#111111]/20 shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#111111]/10">
          <div>
            <h2 className="text-base font-bold text-[#111111]">
              Excalidraw Preset Library
            </h2>
            <p className="text-xs text-[#111111]/60 mt-0.5">
              Insert pre-styled hand-drawn component blocks into your active scene.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111]/40 hover:text-[#111111] hover:bg-black/5 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-3 max-h-[65vh] overflow-y-auto">
          {presets.map((preset) => (
            <div
              key={preset.id}
              onClick={() => handleSelect(preset)}
              className="group border border-[#111111]/15 rounded-xl p-4 cursor-pointer hover:border-[#4F46E5] hover:shadow-md bg-white transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 group-hover:bg-[#4F46E5]/10 flex items-center justify-center transition-colors">
                  {preset.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#111111] text-sm group-hover:text-[#4F46E5] transition-colors">
                      {preset.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-[#4F46E5] bg-[#4F46E5]/10 px-2 py-0.5 rounded-md">
                      {preset.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#111111]/60 mt-0.5">
                    {preset.description}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#4F46E5] group-hover:translate-x-1 transition-transform flex-shrink-0">
                Insert →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
