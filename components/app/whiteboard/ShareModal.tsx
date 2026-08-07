"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardTitle?: string;
}

export default function ShareModal({
  isOpen,
  onClose,
  boardTitle = "Untitled Board",
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [accessLevel, setAccessLevel] = useState<"edit" | "view">("edit");
  const [email, setEmail] = useState("");
  const [invitedList, setInvitedList] = useState<
    Array<{ email: string; role: string }>
  >([
    { email: "priya@flowboard.app", role: "Owner" },
    { email: "marcus@company.com", role: "Can Edit" },
  ]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setInvitedList((prev) => [
      ...prev,
      { email: email.trim(), role: accessLevel === "edit" ? "Can Edit" : "Can View" },
    ]);
    setEmail("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-fb-white rounded-2xl border border-fb-outline-variant/30 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-150">
        <div className="flex items-center justify-between px-5 py-4 border-b border-fb-outline-variant/20">
          <div>
            <h2 className="text-base font-bold text-fb-black">
              Share &ldquo;{boardTitle}&rdquo;
            </h2>
            <p className="text-xs text-fb-gray-500 mt-0.5">
              Invite team members or copy a direct share link.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-fb-gray-400 hover:text-fb-gray-700 hover:bg-fb-gray-100 transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Invite via Email */}
          <form onSubmit={handleInvite} className="space-y-3">
            <label className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider block">
              Invite Collaborators
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="colleague@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-fb-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-fb-primary/30"
              />
              <select
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value as "edit" | "view")}
                className="px-2 py-2 text-xs border border-fb-outline-variant rounded-lg bg-fb-gray-50 font-medium text-fb-gray-700"
              >
                <option value="edit">Can Edit</option>
                <option value="view">Can View</option>
              </select>
              <Button type="submit" size="sm" className="text-xs">
                Invite
              </Button>
            </div>
          </form>

          {/* Direct Link Share */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider block">
              Copy Board Link
            </label>
            <div className="flex items-center gap-2 p-2 bg-fb-gray-50 border border-fb-outline-variant/30 rounded-lg">
              <span className="flex-1 text-xs font-mono text-fb-gray-600 truncate px-1">
                {typeof window !== "undefined" ? window.location.href : "https://flowboard.app/board/..."}
              </span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded bg-fb-primary text-white text-xs font-semibold hover:bg-fb-primary-hover transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  "Copy link"
                )}
              </button>
            </div>
          </div>

          {/* People with access list */}
          <div className="space-y-2 pt-2 border-t border-fb-outline-variant/20">
            <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider block">
              People with access
            </span>
            <div className="space-y-2 max-h-36 overflow-y-auto">
              {invitedList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-1 px-1 rounded hover:bg-fb-gray-50 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-fb-primary-light text-fb-primary font-bold flex items-center justify-center text-[10px]">
                      {item.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-fb-gray-800 truncate max-w-[200px]">
                      {item.email}
                    </span>
                  </div>
                  <span className="text-fb-gray-400 text-[11px] font-medium">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
