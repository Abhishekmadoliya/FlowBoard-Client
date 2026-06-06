import Avatar from "@/components/ui/Avatar";

export default function AuthSidePanel() {
  return (
    <div className="relative flex flex-col justify-between h-full p-10 overflow-hidden"
      style={{ backgroundColor: "#0d0f14" }}
    >
      {/* Logo */}
      <div>
        <span
          className="text-xl font-bold text-white"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Flowboard
        </span>
      </div>

      {/* Quote */}
      <div className="my-auto">
        <blockquote
          className="text-3xl lg:text-4xl text-white font-bold italic leading-snug mb-8"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          The fastest path from idea to alignment.
        </blockquote>

        {/* Users */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar name="Sarah C" size="sm" className="border-2 border-gray-800" />
            <Avatar name="James W" size="sm" className="border-2 border-gray-800" />
            <Avatar name="Priya S" size="sm" className="border-2 border-gray-800" />
          </div>
          <span className="text-gray-400 text-sm">
            Join 50,000+ teams already flowing
          </span>
        </div>
      </div>

      {/* Decorative canvas preview */}
      <div className="relative rounded-xl overflow-hidden bg-gray-900/50 p-4 mt-auto">
        <div className="flex gap-3 transform -rotate-3">
          <div className="w-20 h-16 bg-amber-200/80 rounded-lg p-2 text-[8px] text-amber-900 shadow-md transform rotate-2">
            User Journey Mapping
          </div>
          <div className="w-20 h-16 bg-blue-200/80 rounded-lg p-2 text-[8px] text-blue-900 shadow-md transform -rotate-1">
            Sprint Planning Q3
          </div>
          <div className="w-20 h-16 bg-rose-200/80 rounded-lg p-2 text-[8px] text-rose-900 shadow-md transform rotate-3">
            UI Refresh 2024
          </div>
        </div>
      </div>
    </div>
  );
}
