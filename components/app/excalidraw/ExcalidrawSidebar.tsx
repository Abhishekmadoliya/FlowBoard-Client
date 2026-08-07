"use client";

import { useState, useEffect } from "react";
import { ExcalidrawImperativeAPI } from "@/lib/excalidrawTypes";

interface ExcalidrawSidebarProps {
  excalidrawAPI: ExcalidrawImperativeAPI | null;
  isOpen?: boolean;
}

export default function ExcalidrawSidebar({
  excalidrawAPI,
  isOpen = true,
}: ExcalidrawSidebarProps) {
  const [elements, setElements] = useState<
    Array<{ id: string; type: string; text?: string }>
  >([]);

  useEffect(() => {
    if (!excalidrawAPI) return;

    const interval = setInterval(() => {
      const sceneEls = excalidrawAPI.getSceneElements();
      const mapped = sceneEls.map((el: any) => ({
        id: el.id,
        type: el.type,
        text: (el as unknown as { text?: string }).text,
      }));
      setElements(mapped);
    }, 1000);

    return () => clearInterval(interval);
  }, [excalidrawAPI]);

  if (!isOpen) return null;

  const handleSelectElement = (id: string) => {
    if (!excalidrawAPI) return;
    const allEls = excalidrawAPI.getSceneElements();
    const target = allEls.find((e: any) => e.id === id);
    if (target) {
      excalidrawAPI.updateScene({
        appState: {
          selectedElementIds: { [id]: true },
        },
      });
      excalidrawAPI.scrollToContent([target]);
    }
  };

  return (
    <div
      id="excalidraw-sidebar"
      className="absolute top-16 left-4 z-20 w-[200px] bg-[#FAF9F6] border border-[#111111]/15 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-3">
        <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider block mb-2">
          Scene Elements ({elements.length})
        </span>
        <div className="space-y-1 max-h-[260px] overflow-y-auto">
          {elements.length === 0 ? (
            <p className="text-xs text-[#111111]/40 py-4 text-center">
              Canvas is empty
            </p>
          ) : (
            elements.map((el) => (
              <button
                key={el.id}
                onClick={() => handleSelectElement(el.id)}
                className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#111111] hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] transition-colors truncate flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                <span className="truncate">
                  {el.text ? el.text.slice(0, 16) : el.type}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
