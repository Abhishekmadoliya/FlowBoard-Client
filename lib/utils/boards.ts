import type { Board } from "@/lib/store/useAppStore";

const adjectives = [
  "Bright",
  "Calm",
  "Creative",
  "Dynamic",
  "Efficient",
  "Focused",
  "Global",
  "Happy",
  "Innovative",
  "Joyful",
];

const nouns = [
  "Journey",
  "Roadmap",
  "Blueprint",
  "Sprint",
  "Workspace",
  "Plan",
  "Vision",
  "Flow",
  "Concept",
  "Project",
];

export function generateBoardName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}

export function generateBoardId(): string {
  return `board-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createBoard(name?: string, workspaceId = "default"): Board {
  const colors = ["#1a56db", "#34a853", "#fbbc04", "#a8364b", "#7c3aed"];
  const now = new Date().toISOString();
  return {
    id: generateBoardId(),
    name: name || generateBoardName(),
    workspaceId,
    createdAt: now,
    updatedAt: now,
    thumbnailColor: colors[Math.floor(Math.random() * colors.length)],
  };
}

export function formatRelativeDate(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.round(diffMs / 60000);
  const diffHours = Math.round(diffMs / 3600000);
  const diffDays = Math.round(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
