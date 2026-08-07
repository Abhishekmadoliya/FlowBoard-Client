"use client";

import { useRef, useCallback, useState } from "react";
import { Tldraw, Editor, AssetRecordType } from "tldraw";
import "tldraw/tldraw.css";
import { WhiteboardContext } from "./WhiteboardContext";
import { useAppStore } from "@/lib/store/useAppStore";
import TopToolbar from "./TopToolbar";
import BoardHeader from "./BoardHeader";
import CollaboratorBar from "./CollaboratorBar";
import LeftSidebar from "./LeftSidebar";
import PropertiesPanel from "./PropertiesPanel";
import MiniMap from "./MiniMap";
import StatusBar from "./StatusBar";
import ComponentsModal from "./ComponentsModal";
import ShareModal from "./ShareModal";
import CommentsDrawer from "./CommentsDrawer";

interface WhiteboardProps {
  boardId: string;
}

const tldrawToUiToolMap: Record<string, string> = {
  note: "sticky",
  geo: "shape",
  arrow: "connector",
  draw: "pen",
};

const uiToTldrawToolMap: Record<string, string> = {
  select: "select",
  hand: "hand",
  frame: "frame",
  sticky: "note",
  shape: "geo",
  connector: "arrow",
  pen: "draw",
  text: "text",
  eraser: "eraser",
};

export default function Whiteboard({ boardId }: WhiteboardProps) {
  const editorRef = useRef<Editor | null>(null);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [zoom, setZoom] = useState(100);

  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);

  const activeTool = useAppStore((s) => s.activeTool);
  const setActiveTool = useAppStore((s) => s.setActiveTool);
  const renameBoard = useAppStore((s) => s.renameBoard);
  const board = useAppStore((s) => s.boards.find((b) => b.id === boardId));

  const handleMount = useCallback(
    (ed: Editor) => {
      editorRef.current = ed;
      setEditor(ed);

      ed.on("change", () => {
        const rawToolId = ed.getCurrentToolId();
        const normalizedToolId = tldrawToUiToolMap[rawToolId] || rawToolId;
        setActiveTool(normalizedToolId);

        const cam = ed.getCamera();
        setZoom(Math.round(cam.z * 100));
      });
    },
    [setActiveTool]
  );

  const handleToolChange = useCallback(
    (toolId: string) => {
      const ed = editorRef.current;
      if (!ed) return;

      const mappedTool = uiToTldrawToolMap[toolId] || toolId;
      try {
        ed.setCurrentTool(mappedTool);
      } catch (err) {
        console.warn("Tool set fallback:", err);
      }
      setActiveTool(toolId);
    },
    [setActiveTool]
  );

  const handleZoomIn = useCallback(() => {
    const ed = editorRef.current;
    if (!ed) return;
    const cam = ed.getCamera();
    const newZ = Math.min(cam.z + 0.25, 5);
    ed.setCamera({ x: cam.x, y: cam.y, z: newZ });
  }, []);

  const handleZoomOut = useCallback(() => {
    const ed = editorRef.current;
    if (!ed) return;
    const cam = ed.getCamera();
    const newZ = Math.max(cam.z - 0.25, 0.1);
    ed.setCamera({ x: cam.x, y: cam.y, z: newZ });
  }, []);

  const handleRename = useCallback(
    (name: string) => {
      renameBoard(boardId, name);
    },
    [boardId, renameBoard]
  );

  const handleImageSelect = useCallback((file: File) => {
    const ed = editorRef.current;
    if (!ed) return;

    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result as string;
      const img = new Image();
      img.onload = () => {
        const w = Math.min(img.width, 500);
        const h = Math.round(w * (img.height / img.width));
        const assetId = AssetRecordType.createId();
        const center = ed.getViewportScreenCenter();
        const point = ed.screenToPage(center);

        ed.createAssets([
          {
            id: assetId,
            type: "image",
            typeName: "asset",
            props: {
              src,
              name: file.name,
              w,
              h,
              isAnimated: false,
              mimeType: file.type,
            },
            meta: {},
          },
        ] as any[]);

        ed.createShape({
          type: "image",
          x: point.x - w / 2,
          y: point.y - h / 2,
          props: { assetId, w, h },
        } as any);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleStartPresentation = useCallback(() => {
    setIsPresenting(true);
    if (editorRef.current) {
      editorRef.current.zoomToFit({ animation: { duration: 300 } });
    }
  }, []);

  const providerValue = { editor, boardId };

  return (
    <WhiteboardContext.Provider value={providerValue}>
      <div className="relative w-full h-full overflow-hidden bg-fb-white">
        {!isPresenting ? (
          <>
            <BoardHeader
              boardTitle={board?.name || "Untitled"}
              onRename={handleRename}
            />
            <TopToolbar
              activeTool={activeTool}
              onToolChange={handleToolChange}
              zoom={zoom}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onImageSelect={handleImageSelect}
              onOpenComponents={() => setIsComponentsOpen(true)}
            />
            <CollaboratorBar
              onShare={() => setIsShareOpen(true)}
              onPresent={handleStartPresentation}
            />
            <LeftSidebar />
            <PropertiesPanel />
            <MiniMap />
            <StatusBar onToggleComments={() => setIsCommentsOpen((prev) => !prev)} />
          </>
        ) : (
          /* Presentation Mode Floating Control */
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-fb-black/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-6 duration-200">
            <span className="text-xs font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Presentation Mode
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

        <ComponentsModal
          isOpen={isComponentsOpen}
          onClose={() => setIsComponentsOpen(false)}
          editor={editor}
        />

        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          boardTitle={board?.name}
        />

        <CommentsDrawer
          isOpen={isCommentsOpen}
          onClose={() => setIsCommentsOpen(false)}
        />

        <div style={{ position: "absolute", inset: 0 }}>
          <Tldraw onMount={handleMount} hideUi />
        </div>
      </div>
    </WhiteboardContext.Provider>
  );
}
