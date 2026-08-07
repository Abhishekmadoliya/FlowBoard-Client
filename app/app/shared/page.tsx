"use client";

import AppShell from "@/components/app/AppShell";
import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import { formatRelativeDate } from "@/lib/utils/boards";

const sharedBoards = [
  {
    id: "shared-1",
    name: "Design System & UI Components",
    owner: "Priya Sharma",
    avatar: "Priya Sharma",
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
    thumbnailColor: "#3b82f6",
    role: "Can Edit",
  },
  {
    id: "shared-2",
    name: "Q4 Marketing Roadmap",
    owner: "Marcus Chen",
    avatar: "Marcus Chen",
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    thumbnailColor: "#10b981",
    role: "Can View",
  },
  {
    id: "shared-3",
    name: "API Gateway Architecture",
    owner: "James Wright",
    avatar: "James Wright",
    updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    thumbnailColor: "#8b5cf6",
    role: "Can Edit",
  },
];

export default function SharedPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-fb-black" style={{ fontFamily: "Geist, sans-serif" }}>
            Shared with me
          </h1>
          <p className="text-sm text-fb-gray-500 mt-1">
            Whiteboards and collaborative spaces shared by team members across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sharedBoards.map((board) => (
            <Link
              key={board.id}
              href={`/board/${board.id}`}
              className="group bg-fb-white border border-fb-outline-variant/30 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div
                className="h-28 relative overflow-hidden"
                style={{ backgroundColor: board.thumbnailColor + "15" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${board.thumbnailColor} 1px, transparent 1px)`,
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute top-3 right-3 bg-fb-white/90 backdrop-blur-sm border border-fb-outline-variant/30 text-[11px] font-medium text-fb-gray-700 px-2.5 py-0.5 rounded-full shadow-xs">
                  {board.role}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-fb-black text-sm mb-3 group-hover:text-fb-primary transition-colors truncate">
                  {board.name}
                </h3>
                <div className="flex items-center justify-between border-t border-fb-outline-variant/20 pt-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={board.owner} size="sm" />
                    <span className="text-xs text-fb-gray-600 font-medium truncate max-w-[120px]">
                      {board.owner}
                    </span>
                  </div>
                  <span className="text-[11px] text-fb-gray-400">
                    {formatRelativeDate(board.updatedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
