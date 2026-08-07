"use client";

import { use } from "react";
import ExcalidrawWhiteboard from "@/components/app/excalidraw/ExcalidrawWhiteboard";

export default function ExcalidrawBoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <ExcalidrawWhiteboard boardId={id} />
    </div>
  );
}
