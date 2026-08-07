"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store/useAppStore";
import { createBoard, formatRelativeDate } from "@/lib/utils/boards";
import { useState } from "react";

export default function BoardGrid() {
  const router = useRouter();
  const boards = useAppStore((state) => state.boards);
  const addBoard = useAppStore((state) => state.addBoard);
  const deleteBoard = useAppStore((state) => state.deleteBoard);
  const [search, setSearch] = useState("");

  const filtered = boards.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNewBoard = () => {
    const board = createBoard();
    addBoard(board);
    router.push(`/board/${board.id}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-fb-black" style={{ fontFamily: "Geist, sans-serif" }}>
            Your boards
          </h1>
          <p className="text-sm text-fb-gray-500 mt-1">
            {boards.length} board{boards.length !== 1 ? "s" : ""} in your workspace
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-fb-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search boards..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-lg border border-fb-outline-variant bg-fb-white text-sm text-fb-gray-800 placeholder:text-fb-gray-400 focus:outline-none focus:ring-2 focus:ring-fb-primary/30 focus:border-fb-primary transition-all w-56"
            />
          </div>
          <button
            onClick={handleNewBoard}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fb-primary hover:bg-fb-primary-hover text-white font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New board
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-fb-gray-100 rounded-2xl flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ea1ad" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-fb-black mb-1">
            {search ? "No boards match your search" : "No boards yet"}
          </h3>
          <p className="text-sm text-fb-gray-500 mb-6">
            {search ? "Try a different search term." : "Create your first board to get started."}
          </p>
          {!search && (
            <button
              onClick={handleNewBoard}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fb-primary hover:bg-fb-primary-hover text-white font-semibold text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Create your first board
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((board) => (
            <Link
              key={board.id}
              href={`/board/${board.id}`}
              className="group bg-fb-white border border-fb-outline-variant/30 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div
                className="h-32 relative overflow-hidden"
                style={{ backgroundColor: board.thumbnailColor + "15" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${board.thumbnailColor} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl opacity-30" style={{ backgroundColor: board.thumbnailColor }} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-fb-black text-sm mb-1 group-hover:text-fb-primary transition-colors truncate">
                  {board.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-fb-gray-400">
                    {formatRelativeDate(board.updatedAt)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteBoard(board.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-fb-gray-400 hover:text-fb-error transition-all p-1"
                    title="Delete board"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
