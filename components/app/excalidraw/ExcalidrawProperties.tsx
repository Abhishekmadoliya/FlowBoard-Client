"use client";

import { ExcalidrawImperativeAPI } from "@/lib/excalidrawTypes";

interface ExcalidrawPropertiesProps {
  excalidrawAPI: ExcalidrawImperativeAPI | null;
  selectedElementsCount?: number;
}

const colorPalette = [
  { name: "Primary Indigo", value: "#4F46E5" },
  { name: "Emerald", value: "#10B981" },
  { name: "Amber", value: "#F59E0B" },
  { name: "Rose", value: "#EF4444" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Sky", value: "#0EA5E9" },
  { name: "Gray", value: "#6B7280" },
  { name: "Dark Neutral", value: "#111111" },
];

const fillStyles = [
  { label: "Hachure", value: "hachure" },
  { label: "Solid", value: "solid" },
  { label: "Cross Hatch", value: "cross-hatch" },
];

export default function ExcalidrawProperties({
  excalidrawAPI,
  selectedElementsCount = 0,
}: ExcalidrawPropertiesProps) {
  if (!excalidrawAPI || selectedElementsCount === 0) {
    return (
      <div
        id="excalidraw-properties"
        className="absolute top-16 right-4 z-20 w-[240px] bg-[#FAF9F6] border border-[#111111]/15 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="px-4 py-3 border-b border-[#111111]/10 flex items-center justify-between">
          <span className="text-xs font-bold text-[#111111]">Element Styles</span>
        </div>
        <div className="px-4 py-8 text-center">
          <div className="w-10 h-10 mx-auto bg-black/5 rounded-xl flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </div>
          <p className="text-xs font-medium text-[#111111]/70 mb-1">No selection</p>
          <p className="text-[11px] text-[#111111]/50">
            Select elements to edit stroke, fill, and sketchy roughness
          </p>
        </div>
      </div>
    );
  }

  const updateSelectedElements = (updateFn: (elem: Record<string, unknown>) => Record<string, unknown>) => {
    const elements = excalidrawAPI.getSceneElements();
    const appState = excalidrawAPI.getAppState();
    const selectedIds = appState.selectedElementIds;

    const updatedElements = elements.map((elem: any) => {
      if (selectedIds[elem.id]) {
        return updateFn(elem as unknown as Record<string, unknown>);
      }
      return elem;
    });

    excalidrawAPI.updateScene({ elements: updatedElements as typeof elements });
  };

  const handleStrokeColor = (color: string) => {
    updateSelectedElements((elem: any) => ({ ...elem, strokeColor: color }));
  };

  const handleBackgroundColor = (color: string) => {
    updateSelectedElements((elem: any) => ({ ...elem, backgroundColor: color }));
  };

  const handleFillStyle = (fillStyle: string) => {
    updateSelectedElements((elem: any) => ({ ...elem, fillStyle }));
  };

  const handleRoughness = (roughness: number) => {
    updateSelectedElements((elem: any) => ({ ...elem, roughness }));
  };

  const handleDelete = () => {
    const elements = excalidrawAPI.getSceneElements();
    const appState = excalidrawAPI.getAppState();
    const selectedIds = appState.selectedElementIds;
    const nextElements = elements.filter((elem: any) => !selectedIds[elem.id]);
    excalidrawAPI.updateScene({ elements: nextElements, appState: { selectedElementIds: {} } });
  };

  return (
    <div
      id="excalidraw-properties"
      className="absolute top-16 right-4 z-20 w-[240px] bg-[#FAF9F6] border border-[#111111]/15 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="px-4 py-3 border-b border-[#111111]/10 flex items-center justify-between">
        <span className="text-xs font-bold text-[#111111]">Element Styles</span>
        <span className="text-[10px] font-semibold text-[#4F46E5] bg-[#4F46E5]/10 px-2 py-0.5 rounded-full">
          {selectedElementsCount} selected
        </span>
      </div>

      {/* Stroke Color */}
      <div className="px-4 py-3 border-b border-[#111111]/10">
        <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider block mb-2">
          Stroke Color
        </span>
        <div className="grid grid-cols-4 gap-2">
          {colorPalette.map((c) => (
            <button
              key={c.value}
              title={c.name}
              onClick={() => handleStrokeColor(c.value)}
              className="w-7 h-7 rounded-full border border-black/10 hover:scale-105 transition-transform"
              style={{ backgroundColor: c.value }}
            />
          ))}
        </div>
      </div>

      {/* Background Fill Color */}
      <div className="px-4 py-3 border-b border-[#111111]/10">
        <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider block mb-2">
          Background Fill
        </span>
        <div className="grid grid-cols-4 gap-2">
          {colorPalette.map((c) => (
            <button
              key={c.value}
              title={c.name}
              onClick={() => handleBackgroundColor(c.value + "22")}
              className="w-7 h-7 rounded-full border border-black/10 hover:scale-105 transition-transform"
              style={{ backgroundColor: c.value + "33" }}
            />
          ))}
        </div>
      </div>

      {/* Fill Style */}
      <div className="px-4 py-3 border-b border-[#111111]/10">
        <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider block mb-2">
          Fill Style
        </span>
        <div className="flex gap-1.5">
          {fillStyles.map((fs) => (
            <button
              key={fs.value}
              onClick={() => handleFillStyle(fs.value)}
              className="flex-1 py-1 px-1.5 text-[10px] font-semibold rounded border border-[#111111]/20 bg-white text-[#111111] hover:bg-[#4F46E5] hover:text-white transition-colors"
            >
              {fs.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sketchy Roughness */}
      <div className="px-4 py-3 border-b border-[#111111]/10">
        <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider block mb-2">
          Sketchy Aesthetic
        </span>
        <div className="flex gap-1.5">
          {[
            { label: "Smooth", val: 0 },
            { label: "Artist", val: 1 },
            { label: "Cartoon", val: 2 },
          ].map((r) => (
            <button
              key={r.val}
              onClick={() => handleRoughness(r.val)}
              className="flex-1 py-1 px-1.5 text-[10px] font-semibold rounded border border-[#111111]/20 bg-white text-[#111111] hover:bg-[#4F46E5] hover:text-white transition-colors"
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Delete Action */}
      <div className="p-3">
        <button
          onClick={handleDelete}
          className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete Elements
        </button>
      </div>
    </div>
  );
}
