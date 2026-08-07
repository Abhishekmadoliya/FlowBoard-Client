"use client";

import ExcalidrawWhiteboard from "@/components/app/excalidraw/ExcalidrawWhiteboard";

export default function AppExcalidrawPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <ExcalidrawWhiteboard boardId="app-excalidraw-board" />
    </div>
  );
}
