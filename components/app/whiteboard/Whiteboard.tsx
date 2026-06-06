"use client";

import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import TopToolbar from "./TopToolbar";
import BoardHeader from "./BoardHeader";
import CollaboratorBar from "./CollaboratorBar";
import LeftSidebar from "./LeftSidebar";
import PropertiesPanel from "./PropertiesPanel";
import MiniMap from "./MiniMap";
import StatusBar from "./StatusBar";

export default function Whiteboard() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-fb-white">
      {/* Custom UI Chrome */}
      <BoardHeader />
      <TopToolbar />
      <CollaboratorBar />
      <LeftSidebar />
      <PropertiesPanel />
      <MiniMap />
      <StatusBar />

      {/* tldraw Canvas */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Tldraw />
      </div>
    </div>
  );
}