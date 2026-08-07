"use client";

import { useState } from "react";
import AppShell from "@/components/app/AppShell";
import { formatRelativeDate } from "@/lib/utils/boards";

interface TrashedBoard {
  id: string;
  name: string;
  deletedAt: string;
  thumbnailColor: string;
}

const initialTrashed: TrashedBoard[] = [
  {
    id: "trash-1",
    name: "Old Wireframe Draft (Deprecated)",
    deletedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    thumbnailColor: "#ef4444",
  },
  {
    id: "trash-2",
    name: "Unused Sprint 2 Notes",
    deletedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    thumbnailColor: "#f59e0b",
  },
];

export default function TrashPage() {
  const [items, setItems] = useState<TrashedBoard[]>(initialTrashed);

  const handleRestore = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeletePermanently = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEmptyTrash = () => {
    setItems([]);
  };

  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-fb-black" style={{ fontFamily: "Geist, sans-serif" }}>
              Trash
            </h1>
            <p className="text-sm text-fb-gray-500 mt-1">
              Items in trash will be permanently deleted after 30 days.
            </p>
          </div>
          {items.length > 0 && (
            <button
              onClick={handleEmptyTrash}
              className="px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              Empty trash
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-fb-gray-100 rounded-2xl flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ea1ad" strokeWidth="1.5">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-fb-black mb-1">
              Trash is empty
            </h3>
            <p className="text-sm text-fb-gray-500">
              Boards deleted from your workspace will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-fb-white border border-fb-outline-variant/30 rounded-xl overflow-hidden shadow-xs p-4 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm opacity-90"
                    style={{ backgroundColor: item.thumbnailColor }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-fb-black text-sm truncate mb-0.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-fb-gray-400">
                      Deleted {formatRelativeDate(item.deletedAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-fb-outline-variant/20">
                  <button
                    onClick={() => handleRestore(item.id)}
                    className="flex-1 py-1.5 px-3 rounded-lg border border-fb-outline-variant text-fb-gray-700 hover:bg-fb-gray-50 font-medium text-xs transition-colors"
                  >
                    Restore
                  </button>
                  <button
                    onClick={() => handleDeletePermanently(item.id)}
                    className="py-1.5 px-3 rounded-lg text-red-600 hover:bg-red-50 font-medium text-xs transition-colors"
                  >
                    Delete forever
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
