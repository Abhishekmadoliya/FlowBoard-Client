"use client";

import { useState, useEffect } from "react";
import { useWhiteboard } from "./WhiteboardContext";
import { Editor, type TLShapeId, type TLShape } from "tldraw";

const colorPalette = [
  { name: "Blue", value: "blue", hex: "#3b82f6" },
  { name: "Green", value: "green", hex: "#22c55e" },
  { name: "Yellow", value: "yellow", hex: "#eab308" },
  { name: "Orange", value: "orange", hex: "#f97316" },
  { name: "Red", value: "red", hex: "#ef4444" },
  { name: "Violet", value: "violet", hex: "#a855f7" },
  { name: "Grey", value: "grey", hex: "#6b7280" },
  { name: "Black", value: "black", hex: "#1f2937" },
];

function useSelectedShapes(editor: Editor | null): TLShape[] {
  const [selected, setSelected] = useState<TLShape[]>([]);

  useEffect(() => {
    if (!editor) return;
    const update = () => {
      setSelected(editor.getSelectedShapes());
    };
    update();
    editor.on("change", update);
    return () => {
      editor.off("change", update);
    };
  }, [editor]);

  return selected;
}

export default function PropertiesPanel() {
  const { editor } = useWhiteboard();
  const selectedShapes = useSelectedShapes(editor);

  if (!editor || selectedShapes.length === 0) {
    return (
      <div
        id="properties-panel"
        className="absolute top-16 right-4 z-20 w-[240px] bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="px-4 py-3 border-b border-fb-outline-variant/20 flex items-center justify-between">
          <span className="text-sm font-semibold text-fb-black">Properties</span>
        </div>
        <div className="px-4 py-8 text-center">
          <div className="w-10 h-10 mx-auto bg-fb-gray-100 rounded-xl flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777a87" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </div>
          <p className="text-sm text-fb-gray-500 mb-1">No selection</p>
          <p className="text-xs text-fb-gray-400">
            Select a shape to edit properties
          </p>
        </div>
      </div>
    );
  }

  const primaryShape = selectedShapes[0];
  const shapeType = primaryShape.type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const currentProps = (primaryShape.props || {}) as Record<string, unknown>;
  const currentColor = (currentProps.color as string) || "blue";

  const handleColorChange = (colorValue: string) => {
    if (!editor) return;
    selectedShapes.forEach((s) => {
      editor.updateShape({
        id: s.id,
        type: s.type,
        props: { ...s.props, color: colorValue },
      } as any);
    });
  };

  const handleDelete = () => {
    if (!editor) return;
    editor.deleteShapes(selectedShapes.map((s) => s.id));
  };

  const handleDuplicate = () => {
    if (!editor) return;
    editor.duplicateShapes(selectedShapes.map((s) => s.id));
  };

  const handleBringForward = () => {
    if (!editor) return;
    editor.bringForward(selectedShapes.map((s) => s.id));
  };

  const handleSendBackward = () => {
    if (!editor) return;
    editor.sendBackward(selectedShapes.map((s) => s.id));
  };

  return (
    <div
      id="properties-panel"
      className="absolute top-16 right-4 z-20 w-[240px] bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="px-4 py-3 border-b border-fb-outline-variant/20 flex items-center justify-between">
        <span className="text-sm font-semibold text-fb-black">Properties</span>
        <span className="text-[11px] font-medium text-fb-gray-500 bg-fb-gray-100 px-2 py-0.5 rounded-full">
          {selectedShapes.length} selected
        </span>
      </div>

      {/* Type display */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <span className="text-[11px] font-semibold text-fb-gray-400 uppercase tracking-wider block mb-1">
          Type
        </span>
        <span className="text-xs text-fb-gray-800 font-medium">{shapeType}</span>
      </div>

      {/* Color Palette */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <span className="text-[11px] font-semibold text-fb-gray-400 uppercase tracking-wider block mb-2">
          Color
        </span>
        <div className="grid grid-cols-4 gap-2">
          {colorPalette.map((c) => (
            <button
              key={c.value}
              title={c.name}
              onClick={() => handleColorChange(c.value)}
              className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                currentColor === c.value
                  ? "ring-2 ring-fb-primary ring-offset-2 scale-110"
                  : "hover:scale-105 border-fb-outline-variant/30"
              }`}
              style={{ backgroundColor: c.hex }}
            >
              {currentColor === c.value && (
                <span className="text-white text-[10px] font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Layer Order Controls */}
      <div className="px-4 py-3 border-b border-fb-outline-variant/10">
        <span className="text-[11px] font-semibold text-fb-gray-400 uppercase tracking-wider block mb-2">
          Layer Order
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleBringForward}
            className="flex-1 py-1.5 px-2 rounded-lg border border-fb-outline-variant/40 bg-fb-white text-xs font-medium text-fb-gray-700 hover:bg-fb-gray-50 transition-colors"
          >
            Bring Forward
          </button>
          <button
            onClick={handleSendBackward}
            className="flex-1 py-1.5 px-2 rounded-lg border border-fb-outline-variant/40 bg-fb-white text-xs font-medium text-fb-gray-700 hover:bg-fb-gray-50 transition-colors"
          >
            Send Backward
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-3 space-y-1">
        <button
          onClick={handleDuplicate}
          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-fb-gray-700 hover:bg-fb-gray-50 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Duplicate
        </button>

        <button
          onClick={handleDelete}
          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete Shape
        </button>
      </div>
    </div>
  );
}
