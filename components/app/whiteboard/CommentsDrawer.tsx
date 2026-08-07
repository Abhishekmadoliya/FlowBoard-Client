"use client";

import { useState } from "react";

interface CommentItem {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
  resolved: boolean;
}

interface CommentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialComments: CommentItem[] = [
  {
    id: "c1",
    author: "Priya Sharma",
    avatar: "Priya",
    text: "Should we add an alternative authentication provider block here?",
    timestamp: "10m ago",
    resolved: false,
  },
  {
    id: "c2",
    author: "Marcus Chen",
    avatar: "Marcus",
    text: "Great layout for the Q3 roadmap! Approved.",
    timestamp: "1h ago",
    resolved: true,
  },
];

export default function CommentsDrawer({
  isOpen,
  onClose,
}: CommentsDrawerProps) {
  const [comments, setComments] = useState<CommentItem[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  if (!isOpen) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [
      {
        id: "c-" + Date.now(),
        author: "You",
        avatar: "You",
        text: newComment.trim(),
        timestamp: "Just now",
        resolved: false,
      },
      ...prev,
    ]);
    setNewComment("");
  };

  const toggleResolve = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, resolved: !c.resolved } : c))
    );
  };

  return (
    <div className="absolute top-16 right-4 z-30 w-80 bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-right-4 duration-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-fb-outline-variant/20">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-sm font-semibold text-fb-black">
            Board Comments ({comments.filter((c) => !c.resolved).length})
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-fb-gray-400 hover:text-fb-gray-600 text-xs font-semibold"
        >
          ✕
        </button>
      </div>

      {/* Add comment form */}
      <form onSubmit={handleAddComment} className="p-3 border-b border-fb-outline-variant/15">
        <textarea
          rows={2}
          placeholder="Add a comment or feedback..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2.5 text-xs border border-fb-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-fb-primary/30 resize-none bg-fb-gray-50/50"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="px-3 py-1.5 rounded-lg bg-fb-primary text-white text-xs font-semibold hover:bg-fb-primary-hover disabled:opacity-50 transition-colors"
          >
            Post comment
          </button>
        </div>
      </form>

      {/* Comment list */}
      <div className="max-h-80 overflow-y-auto p-3 space-y-3">
        {comments.length === 0 ? (
          <p className="text-xs text-fb-gray-400 text-center py-6">
            No comments yet. Start the conversation!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className={`p-3 rounded-lg border text-xs transition-colors ${
                comment.resolved
                  ? "bg-fb-gray-50/60 border-fb-outline-variant/20 opacity-60"
                  : "bg-fb-white border-fb-outline-variant/30 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-fb-primary-light text-fb-primary font-bold flex items-center justify-center text-[9px]">
                    {comment.author.charAt(0)}
                  </div>
                  <span className="font-semibold text-fb-black">
                    {comment.author}
                  </span>
                </div>
                <span className="text-[10px] text-fb-gray-400">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-fb-gray-700 leading-relaxed mb-2 pl-7">
                {comment.text}
              </p>
              <div className="flex justify-end pl-7">
                <button
                  onClick={() => toggleResolve(comment.id)}
                  className="text-[10px] font-semibold text-fb-gray-500 hover:text-fb-primary transition-colors"
                >
                  {comment.resolved ? "Reopen thread" : "✓ Mark resolved"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
