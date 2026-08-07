"use client";

import { useState, useCallback } from "react";
import ExcalidrawComp from "./ExcalidrawWrapper";
import ExcalidrawHeader from "./ExcalidrawHeader";
import ExcalidrawComponentsModal from "./ExcalidrawComponentsModal";
import CollaboratorBar from "@/components/app/whiteboard/CollaboratorBar";
import StatusBar from "@/components/app/whiteboard/StatusBar";
import ShareModal from "@/components/app/whiteboard/ShareModal";
import CommentsDrawer from "@/components/app/whiteboard/CommentsDrawer";
import { ExcalidrawImperativeAPI } from "@/lib/excalidrawTypes";
import "@excalidraw/excalidraw/index.css";

interface ExcalidrawWhiteboardProps {
  boardId: string;
}

export default function ExcalidrawWhiteboard({ boardId }: ExcalidrawWhiteboardProps) {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);

  const handleAPIReady = useCallback((api: ExcalidrawImperativeAPI) => {
    setExcalidrawAPI(api);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FAF9F6] font-sans">
      {!isPresenting ? (
        <>
          {/* Header Card */}
          <div className="absolute top-3 left-3 z-30 bg-white/80 backdrop-blur-md border border-[#111111]/15 rounded-xl px-3 py-2 shadow-md">
            <ExcalidrawHeader boardTitle={`Excalidraw Sketchboard (${boardId})`} />
          </div>

          {/* Collaborator Bar */}
          <div className="absolute top-3 right-3 z-30">
            <CollaboratorBar
              onShare={() => setIsShareOpen(true)}
              onPresent={() => setIsPresenting(true)}
            />
          </div>

          {/* Quick Preset Components Button */}
          <div className="absolute top-16 left-3 z-30">
            <button
              onClick={() => setIsComponentsOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#4F46E5] text-white text-xs font-semibold shadow-md hover:bg-[#4338CA] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              Presets Library
            </button>
          </div>

          {/* Status Bar */}
          <div className="absolute bottom-3 right-3 z-30">
            <StatusBar onToggleComments={() => setIsCommentsOpen((prev) => !prev)} />
          </div>
        </>
      ) : (
        /* Presentation Mode Control */
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#111111] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-6 duration-200">
          <span className="text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            Excalidraw Presentation Mode
          </span>
          <div className="w-px h-4 bg-white/20" />
          <button
            onClick={() => setIsPresenting(false)}
            className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
          >
            Exit Presentation
          </button>
        </div>
      )}

      {/* Modals & Overlays */}
      <ExcalidrawComponentsModal
        isOpen={isComponentsOpen}
        onClose={() => setIsComponentsOpen(false)}
        excalidrawAPI={excalidrawAPI}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        boardTitle="Excalidraw Board"
      />

      <CommentsDrawer
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
      />

      {/* Main Excalidraw Engine */}
      <div style={{ position: "absolute", inset: 0 }}>
        <ExcalidrawComp
          excalidrawAPI={handleAPIReady}
          UIOptions={{
            canvasActions: {
              changeViewBackgroundColor: true,
              clearCanvas: true,
              export: false,
              loadScene: true,
              toggleTheme: false,
            },
          } as any}
          theme="light"
        />
      </div>
    </div>
  );
}
