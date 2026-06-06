"use client";

export default function MiniMap() {
  return (
    <div
      id="mini-map"
      className="absolute bottom-4 left-4 z-20 w-[120px] h-[80px] bg-fb-white border border-fb-outline-variant/30 rounded-lg shadow-md overflow-hidden"
    >
      <div className="w-full h-full relative bg-fb-gray-50">
        {/* Miniature canvas representation */}
        <div className="absolute inset-1">
          <div className="absolute top-1 left-2 w-12 h-8 border border-fb-primary/30 rounded-sm bg-fb-primary/5" />
          <div className="absolute bottom-2 left-4 w-3 h-3 bg-amber-200/60 rounded-[1px]" />
          <div className="absolute bottom-2 left-8 w-3 h-3 bg-blue-200/60 rounded-[1px]" />
        </div>
        {/* Viewport indicator */}
        <div className="absolute top-1 left-1 w-8 h-6 border-2 border-fb-primary/50 rounded-sm bg-fb-primary/5" />
      </div>
    </div>
  );
}
