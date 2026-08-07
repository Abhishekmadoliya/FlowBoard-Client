"use client";

import { useRef, useCallback, useEffect } from "react";
import Link from "next/link";

interface ExcalidrawHeaderProps {
  boardTitle?: string;
  onRename?: (name: string) => void;
}

export default function ExcalidrawHeader({
  boardTitle = "Excalidraw Sketchboard",
  onRename,
}: ExcalidrawHeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleBlur = useCallback(() => {
    if (titleRef.current && onRename) {
      const newName = titleRef.current.textContent?.trim() || "Excalidraw Sketchboard";
      if (newName !== boardTitle) {
        onRename(newName);
      }
    }
  }, [boardTitle, onRename]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      titleRef.current?.blur();
    }
  }, []);

  useEffect(() => {
    if (titleRef.current && titleRef.current.textContent !== boardTitle) {
      titleRef.current.textContent = boardTitle;
    }
  }, [boardTitle]);

  return (
    <div id="excalidraw-header" className="flex items-center gap-3">
      <Link href="/app" className="flex-shrink-0 flex items-center gap-2 group">
        <div className="w-7 h-7 rounded-lg bg-[#4F46E5] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          </svg>
        </div>
      </Link>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-[10px] text-[#111111]/50 font-medium">
          <Link href="/app" className="hover:text-[#4F46E5] transition-colors">Workspace</Link>
          <span>›</span>
          <span className="bg-[#4F46E5]/10 text-[#4F46E5] px-1 py-0.2 rounded font-semibold text-[9px]">
            EXCALIDRAW SDK
          </span>
        </div>
        <h1
          ref={titleRef}
          className="text-xs font-bold text-[#111111] cursor-text hover:bg-black/5 px-1 -ml-1 rounded transition-colors"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        >
          {boardTitle}
        </h1>
      </div>
    </div>
  );
}
