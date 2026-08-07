"use client";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

interface CollaboratorBarProps {
  collaborators?: Array<{ name: string; color: string }>;
  overflowCount?: number;
  onShare?: () => void;
  onPresent?: () => void;
}

export default function CollaboratorBar({
  collaborators = [
    { name: "Priya Sharma", color: "ring-fb-primary" },
    { name: "Marcus Chen", color: "ring-emerald-500" },
    { name: "Leila Ahmed", color: "ring-amber-500" },
    { name: "James Wright", color: "ring-rose-500" },
  ],
  overflowCount = 2,
  onShare,
  onPresent,
}: CollaboratorBarProps) {
  return (
    <div id="collaborator-bar" className="absolute top-4 right-4 z-30 flex items-center gap-3">
      {/* Collaborator avatars */}
      <div className="flex items-center -space-x-2">
        {collaborators.map((collab) => (
          <Avatar
            key={collab.name}
            name={collab.name}
            size="sm"
            ringColor={collab.color}
            className="border-2 border-fb-white"
          />
        ))}
        {overflowCount > 0 && (
          <div className="w-7 h-7 rounded-full bg-fb-gray-100 border-2 border-fb-white flex items-center justify-center text-[10px] font-semibold text-fb-gray-500">
            +{overflowCount}
          </div>
        )}
      </div>

      {/* Share button */}
      <Button variant="outline" size="sm" className="text-xs" onClick={onShare}>
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
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share
      </Button>

      {/* Present button */}
      <Button size="sm" className="text-xs" onClick={onPresent}>
        Present
      </Button>
    </div>
  );
}
