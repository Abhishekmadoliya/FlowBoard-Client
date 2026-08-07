"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store/useAppStore";
import { createBoard } from "@/lib/utils/boards";

export default function NewBoardPage() {
  const router = useRouter();
  const addBoard = useAppStore((state) => state.addBoard);

  useEffect(() => {
    const board = createBoard();
    addBoard(board);
    router.replace(`/board/${board.id}`);
  }, [router, addBoard]);

  return (
    <div className="flex items-center justify-center h-screen bg-fb-surface">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-fb-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-fb-gray-500">Creating board...</p>
      </div>
    </div>
  );
}
