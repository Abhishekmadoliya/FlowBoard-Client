import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden dot-pattern hero-gradient"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Headline */}
        <h1
          className="font-bold text-5xl md:text-6xl lg:text-7xl text-fb-black tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Where ideas{" "}
          <span className="text-fb-primary relative inline-block">
            flow
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-fb-primary-container opacity-50 z-[-1]"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q50,15 100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          together.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-fb-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Real-time collaborative whiteboard for async and live team sessions.
          Build wireframes, plan sprints, and brainstorm without limits.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button href="/signup" size="lg">
            Start for free
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#demo"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
            }
          >
            Watch demo
          </Button>
        </div>

        {/* Browser Frame Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass p-2 rounded-xl shadow-xl relative z-10">
            <div className="bg-fb-white rounded-lg overflow-hidden border border-fb-outline-variant/20">
              {/* Browser chrome bar */}
              <div className="bg-fb-surface-container-high px-4 py-3 flex items-center border-b border-fb-outline-variant/20 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-fb-error/70" />
                  <div className="w-3 h-3 rounded-full bg-fb-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-fb-success/70" />
                </div>
                <div className="bg-fb-surface-container flex-1 mx-4 rounded text-xs text-fb-gray-500 text-center py-1 font-mono hidden sm:block">
                  flowboard.app/board/acme-sprint
                </div>
              </div>
              {/* Canvas preview mockup */}
              <div className="relative bg-fb-white p-6 min-h-[320px] md:min-h-[420px]">
                {/* Dot grid */}
                <div className="absolute inset-0 dot-pattern opacity-30" />

                {/* Frame */}
                <div className="relative z-10">
                  <div className="border-2 border-fb-primary rounded-lg p-4 mb-4 max-w-lg mx-auto">
                    <div className="text-xs font-semibold text-fb-primary mb-3">
                      User Journey Map
                    </div>
                    <div className="flex gap-3 items-center justify-center flex-wrap">
                      {["Awareness", "Consider", "Select", "Checkout", "Retain"].map(
                        (step, i) => (
                          <div key={step} className="flex items-center gap-2">
                            <div className="bg-fb-surface-container border border-fb-outline-variant/40 rounded-md px-3 py-1.5 text-xs text-fb-gray-700 font-medium">
                              {step}
                            </div>
                            {i < 4 && (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#aeb2bf"
                                strokeWidth="2"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Sticky Notes */}
                  <div className="flex gap-3 justify-center mt-6">
                    <div className="w-24 h-20 bg-amber-100 border border-amber-200 rounded-md p-2 text-[10px] text-amber-900 shadow-sm transform -rotate-2">
                      Users drop off here frequently.
                    </div>
                    <div className="w-24 h-20 bg-blue-100 border border-blue-200 rounded-md p-2 text-[10px] text-blue-900 shadow-sm transform rotate-1">
                      Need more info?
                    </div>
                    <div className="w-24 h-20 bg-amber-100 border border-amber-200 rounded-md p-2 text-[10px] text-amber-900 shadow-sm transform rotate-3">
                      Add feedback loop here
                    </div>
                    <div className="hidden md:block w-24 h-20 bg-blue-100 border border-blue-200 rounded-md p-2 text-[10px] text-blue-900 shadow-sm transform -rotate-1">
                      Review with PM team
                    </div>
                  </div>
                </div>

                {/* Cursors */}
                <div className="absolute top-[30%] left-[20%] z-20">
                  <CursorLabel name="Priya" color="#1a56db" />
                </div>
                <div className="absolute top-[55%] right-[25%] z-20 hidden md:block">
                  <CursorLabel name="Marcus" color="#34a853" />
                </div>
                <div className="absolute bottom-[20%] left-[40%] z-20 hidden sm:block">
                  <CursorLabel name="Leila" color="#e8364b" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div
            className="absolute -left-6 top-1/4 glass p-3 rounded-lg shadow-lg animate-float hidden lg:block"
            style={{ "--rotate": "-12deg" } as React.CSSProperties}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div
            className="absolute -right-4 top-1/3 glass p-2.5 rounded-full shadow-lg animate-float hidden lg:block"
            style={{ "--rotate": "15deg", animationDelay: "1s" } as React.CSSProperties}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
          </div>
          <div
            className="absolute right-12 -bottom-4 glass p-3 rounded-xl shadow-lg animate-float hidden lg:block"
            style={{ "--rotate": "-6deg", animationDelay: "2s" } as React.CSSProperties}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a8364b" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function CursorLabel({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-start gap-0">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
        <path
          d="M1 1L5.5 16L7.5 10L13 8L1 1Z"
          fill={color}
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <span
        className="text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-sm -ml-0.5 mt-3"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}
