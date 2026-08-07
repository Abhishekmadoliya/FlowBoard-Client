"use client";

import dynamic from "next/dynamic";
import React from "react";
import "@excalidraw/excalidraw/index.css";

export const ExcalidrawComp = dynamic(
  async () => {
    const mod = await import("@excalidraw/excalidraw");
    return mod.Excalidraw;
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-[#FAF9F6]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-[#111111]/70 tracking-wide font-sans">
            Loading Excalidraw Canvas...
          </p>
        </div>
      </div>
    ),
  }
);

export default ExcalidrawComp;
