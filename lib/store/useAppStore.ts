import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Board {
  id: string;
  name: string;
  workspaceId: string;
  updatedAt: string;
  createdAt: string;
  thumbnailColor: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  workspaceName: string;
  avatar?: string;
}

interface AppState {
  user: User | null;
  boards: Board[];
  isSidebarOpen: boolean;
  activeTool: string;
}

interface AppActions {
  setUser: (user: User | null) => void;
  addBoard: (board: Board) => void;
  renameBoard: (id: string, name: string) => void;
  deleteBoard: (id: string) => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveTool: (tool: string) => void;
}

const initialBoards: Board[] = [
  {
    id: "board-demo-1",
    name: "Q3 Planning — Sprint 4",
    workspaceId: "default",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    thumbnailColor: "#1a56db",
  },
  {
    id: "board-demo-2",
    name: "User Journey Map",
    workspaceId: "default",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    thumbnailColor: "#34a853",
  },
  {
    id: "board-demo-3",
    name: "Architecture Review",
    workspaceId: "default",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    thumbnailColor: "#7c3aed",
  },
];

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      user: null,
      boards: initialBoards,
      isSidebarOpen: true,
      activeTool: "select",

      setUser: (user) => set({ user }),

      addBoard: (board) =>
        set((state) => ({
          boards: [board, ...state.boards],
        })),

      renameBoard: (id, name) =>
        set((state) => ({
          boards: state.boards.map((b) =>
            b.id === id
              ? { ...b, name, updatedAt: new Date().toISOString() }
              : b
          ),
        })),

      deleteBoard: (id) =>
        set((state) => ({
          boards: state.boards.filter((b) => b.id !== id),
        })),

      setSidebarOpen: (open) => set({ isSidebarOpen: open }),

      setActiveTool: (tool) => set({ activeTool: tool }),
    }),
    {
      name: "flowboard-store",
      partialize: (state) => ({
        user: state.user,
        boards: state.boards,
        isSidebarOpen: state.isSidebarOpen,
      }),
    }
  )
);
