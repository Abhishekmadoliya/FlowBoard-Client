"use client";

import { useRef, useCallback, useEffect } from "react";
import Link from "next/link";

interface BoardHeaderProps {
  boardTitle?: string;
  workspace?: string;
  team?: string;
  onRename?: (name: string) => void;
}

export default function BoardHeader({
  boardTitle = "Untitled",
  workspace = "Workspaces",
  team = "Product Team",
  onRename,
}: BoardHeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleBlur = useCallback(() => {
    if (titleRef.current && onRename) {
      const newName = titleRef.current.textContent?.trim() || "Untitled";
      if (newName !== boardTitle) {
        onRename(newName);
      }
    }
  }, [boardTitle, onRename]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        titleRef.current?.blur();
      }
    },
    []
  );

  useEffect(() => {
    if (titleRef.current && titleRef.current.textContent !== boardTitle) {
      titleRef.current.textContent = boardTitle;
    }
  }, [boardTitle]);

  return (
    <div id="board-header" className="absolute top-4 left-4 z-30 flex items-center gap-3">
      <Link href="/app" className="flex-shrink-0">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="#1a56db" />
          <path
            d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V14H8V12Z"
            fill="white"
            opacity="0.9"
          />
          <rect x="8" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
          <rect x="17" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.5" />
        </svg>
      </Link>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-xs text-fb-gray-400">
          <Link href="/app" className="hover:text-fb-primary transition-colors">{workspace}</Link>
          <span>›</span>
          <span>{team}</span>
        </div>
        <h1
          ref={titleRef}
          className="text-sm font-semibold text-fb-black cursor-text hover:bg-fb-gray-50 px-1 -ml-1 rounded transition-colors"
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
