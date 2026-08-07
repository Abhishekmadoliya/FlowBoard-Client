"use client";

import { createContext, useContext } from "react";
import { Editor } from "tldraw";

interface WhiteboardContextValue {
  editor: Editor | null;
  boardId: string;
}

export const WhiteboardContext = createContext<WhiteboardContextValue>({
  editor: null,
  boardId: "",
});

export function useWhiteboard() {
  return useContext(WhiteboardContext);
}
