"use client";

import ExcalidrawWhiteboard from "@/components/app/excalidraw/ExcalidrawWhiteboard";

export default function ExcalidrawMainPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <ExcalidrawWhiteboard boardId="default-sketchboard" />
    </div>
  );
}
