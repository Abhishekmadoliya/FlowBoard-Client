import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section
      id="cta-banner"
      className="py-24 md:py-32 relative overflow-hidden bg-fb-surface-container-low"
    >
      {/* Dynamic background lighting - Adapted for light theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fb-primary-light blur-[120px] rounded-full pointer-events-none opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fb-primary/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-30 dot-pattern" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* Floating App Icon */}
        <div className="mx-auto w-24 h-24 mb-8 relative">
          <div className="absolute inset-0 bg-fb-primary blur-[15px] opacity-20 animate-pulse" />
          <div className="relative w-full h-full bg-fb-white border border-fb-outline-variant/30 rounded-2xl flex items-center justify-center shadow-lg">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#1a56db" />
              <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V14H8V12Z" fill="white" opacity="0.9" />
              <rect x="8" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
              <rect x="17" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.5" />
            </svg>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 -left-8 w-10 h-10 bg-fb-white border border-fb-outline-variant/30 rounded-lg transform -rotate-12 flex items-center justify-center animate-float shadow-sm">
            <span className="text-[10px]">✨</span>
          </div>
          <div className="absolute -bottom-2 -right-6 w-12 h-12 bg-fb-white border border-fb-outline-variant/30 rounded-full transform rotate-12 flex items-center justify-center animate-float shadow-sm" style={{ animationDelay: "1s" }}>
            <span className="text-[10px]">🚀</span>
          </div>
        </div>

        <h2
          className="font-bold text-4xl md:text-6xl text-fb-black mb-6 leading-tight"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Jump on the Canvas.
          <br />
          <span className="text-fb-gray-500">Build something amazing.</span>
        </h2>

        <p className="text-fb-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join over 50,000 teams who have already upgraded their workflow. Free for individuals, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/app"
            size="lg"
            className="text-base px-10 shadow-md hover:shadow-lg"
          >
            Create your first board
          </Button>
          <Button
            href="#demo"
            size="lg"
            variant="outline"
            className="bg-fb-white"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
