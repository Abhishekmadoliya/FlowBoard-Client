"use client";

import { useState, useEffect } from "react";
import { useWhiteboard } from "./WhiteboardContext";

interface StatusBarProps {
  onToggleComments?: () => void;
}

export default function StatusBar({ onToggleComments }: StatusBarProps) {
  const { editor } = useWhiteboard();
  const [shapeCount, setShapeCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const update = () => {
      setShapeCount(editor.getCurrentPageShapeIds().size);
      setSelectedCount(editor.getSelectedShapeIds().length);
    };
    update();

    editor.on("change", update);
    return () => {
      editor.off("change", update);
    };
  }, [editor]);

  return (
    <div
      id="status-bar"
      className="absolute bottom-4 right-4 z-20 flex items-center gap-3"
    >
      <div className="flex items-center gap-3 bg-fb-white border border-fb-outline-variant/30 rounded-lg px-3 py-2 shadow-sm">
        {selectedCount > 0 && (
          <span className="text-xs text-fb-gray-600 font-medium">
            {selectedCount} selected
          </span>
        )}
        <span className="text-xs text-fb-gray-400">
          {shapeCount} shapes
        </span>
        <div className="flex items-center gap-1.5 pl-2 border-l border-fb-outline-variant/20">
          <div className="w-2 h-2 rounded-full bg-fb-success animate-pulse" />
          <span className="text-xs text-fb-gray-600 font-medium">
            Connected
          </span>
        </div>
      </div>

      <button
        id="comments-button"
        onClick={onToggleComments}
        className="flex items-center gap-2 bg-fb-primary text-white rounded-lg px-3 py-2 shadow-sm hover:bg-fb-primary-hover transition-colors text-xs font-medium"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Comments
      </button>
    </div>
  );
}
