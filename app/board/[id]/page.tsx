"use client";

import { use } from "react";
import Whiteboard from "@/components/app/whiteboard/Whiteboard";

export default function BoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Whiteboard boardId={id} />
    </div>
  );
}
