"use client";

import { useState, useEffect, useCallback } from "react";
import { useWhiteboard } from "./WhiteboardContext";
import { Editor, type TLPageId } from "tldraw";

interface LayerNode {
  id: string;
  name: string;
  type: string;
  children?: LayerNode[];
}

function getShapeDisplayName(shape: { type: string; meta?: unknown; props?: unknown }): string {
  const meta = shape.meta as Record<string, unknown> | undefined;
  const props = shape.props as Record<string, unknown> | undefined;
  const metaName = meta?.name;
  const propsName = props?.name;
  const textVal = props?.text;
  if (typeof metaName === "string" && metaName) return metaName;
  if (typeof propsName === "string" && propsName) return propsName;
  if (typeof textVal === "string" && textVal) return textVal.slice(0, 16);
  return shape.type.replace("geo-", "").replace(/-/g, " ") || shape.type;
}

function buildLayerTree(editor: Editor): LayerNode[] {
  const pageIds = editor.getCurrentPageShapeIds();
  const nodes: LayerNode[] = [];

  for (const id of pageIds) {
    const shape = editor.getShape(id);
    if (!shape) continue;
    const children = shape.type === "frame" ? editor.getSortedChildIdsForParent(id) : [];
    const childNodes: LayerNode[] = [];
    for (const childId of children) {
      const childShape = editor.getShape(childId);
      if (childShape) {
        childNodes.push({
          id: childId,
          name: getShapeDisplayName(childShape),
          type: childShape.type,
        });
      }
    }
    nodes.push({
      id,
      name: getShapeDisplayName(shape),
      type: shape.type,
      children: childNodes.length > 0 ? childNodes : undefined,
    });
  }

  return nodes;
}

const typeIcons: Record<string, React.ReactNode> = {
  frame: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
  rectangle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="1" />
    </svg>
  ),
  text: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  draw: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  ),
  note: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
    </svg>
  ),
  geo: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
};

function getIcon(type: string): React.ReactNode {
  const base = type.split("-")[0] || type;
  return typeIcons[base] || (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="1" />
    </svg>
  );
}

interface LeftSidebarProps {
  isOpen?: boolean;
}

export default function LeftSidebar({ isOpen = true }: LeftSidebarProps) {
  const { editor } = useWhiteboard();
  const [layers, setLayers] = useState<LayerNode[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [pages, setPages] = useState<Array<{ id: TLPageId; name: string }>>([]);
  const [currentPageId, setCurrentPageId] = useState<TLPageId | null>(null);

  useEffect(() => {
    if (!editor) return;

    const update = () => {
      setLayers(buildLayerTree(editor));
      const pList = editor.getPages().map((p) => ({ id: p.id, name: p.name }));
      setPages(pList);
      setCurrentPageId(editor.getCurrentPageId());
    };

    update();
    editor.on("change", update);
    return () => {
      editor.off("change", update);
    };
  }, [editor]);

  const toggleLayerExpand = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleSelectLayer = useCallback(
    (shapeId: string) => {
      if (!editor) return;
      editor.setSelectedShapes([shapeId as any]);
      editor.zoomToSelection({ animation: { duration: 200 } });
    },
    [editor]
  );

  const handleAddPage = useCallback(() => {
    if (!editor) return;
    const newPage = editor.createPage({ name: `Page ${pages.length + 1}` });
    if (newPage) {
      editor.setCurrentPage(newPage as any);
    }
  }, [editor, pages.length]);

  const handleSelectPage = useCallback(
    (pageId: TLPageId) => {
      if (!editor) return;
      editor.setCurrentPage(pageId as any);
    },
    [editor]
  );

  if (!isOpen) return null;

  return (
    <div
      id="left-sidebar"
      className="absolute top-16 left-4 z-20 w-[220px] bg-fb-white border border-fb-outline-variant/30 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Pages Section */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Pages
          </span>
        </div>
        <div className="space-y-1">
          {pages.map((page) => {
            const active = page.id === currentPageId;
            return (
              <button
                key={page.id}
                onClick={() => handleSelectPage(page.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  active
                    ? "bg-fb-primary text-white"
                    : "text-fb-gray-700 hover:bg-fb-gray-100"
                }`}
              >
                {page.name}
              </button>
            );
          })}
          <button
            onClick={handleAddPage}
            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-fb-gray-500 hover:text-fb-primary hover:bg-fb-primary-light transition-colors font-medium flex items-center gap-1"
          >
            + Add page
          </button>
        </div>
      </div>

      <div className="h-px bg-fb-outline-variant/30 mx-3" />

      {/* Layers Section */}
      <div className="p-3">
        <span className="text-xs font-semibold text-fb-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          Layers
        </span>
        <div className="space-y-0.5 max-h-[260px] overflow-y-auto">
          {layers.length === 0 ? (
            <p className="text-xs text-fb-gray-400 px-2 py-4 text-center">
              Canvas is empty
            </p>
          ) : (
            layers.map((layer) => (
              <div key={layer.id}>
                <div
                  onClick={() => handleSelectLayer(layer.id)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-fb-gray-700 hover:bg-fb-gray-100 transition-colors cursor-pointer group"
                >
                  {layer.children ? (
                    <button
                      onClick={(e) => toggleLayerExpand(layer.id, e)}
                      className="p-0.5 hover:bg-fb-gray-200 rounded"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`transition-transform ${
                          expanded.has(layer.id) ? "rotate-90" : ""
                        }`}
                      >
                        <path d="M8 5l8 7-8 7z" />
                      </svg>
                    </button>
                  ) : (
                    <span className="w-[10px]" />
                  )}
                  {getIcon(layer.type)}
                  <span className="truncate group-hover:text-fb-primary">
                    {layer.name}
                  </span>
                </div>
                {expanded.has(layer.id) && layer.children && (
                  <div className="ml-5 space-y-0.5">
                    {layer.children.map((child) => (
                      <div
                        key={child.id}
                        onClick={() => handleSelectLayer(child.id)}
                        className="w-full flex items-center gap-2 px-2 py-1 rounded text-xs text-fb-gray-500 hover:bg-fb-gray-100 hover:text-fb-primary transition-colors cursor-pointer"
                      >
                        {getIcon(child.type)}
                        <span className="truncate">{child.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
