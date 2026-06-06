import Button from "@/components/ui/Button";

const templates = [
  {
    title: "System Architecture",
    description: "Map out your cloud infrastructure and microservices with smart connectors.",
    color: "bg-blue-500",
    glow: "shadow-[0_10px_30px_rgba(59,130,246,0.15)]",
    preview: (
      <div className="relative w-full h-full bg-fb-white overflow-hidden group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#9ea1ad 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center scale-75">
           <div className="relative w-[300px] h-[200px]">
              <div className="absolute top-10 left-10 w-16 h-16 bg-fb-white rounded-lg border border-blue-200 flex items-center justify-center shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <div className="absolute top-10 right-10 w-16 h-16 bg-fb-white rounded-lg border border-emerald-200 flex items-center justify-center shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-16 bg-fb-white rounded-lg border border-violet-200 flex items-center justify-center shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
              </div>
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                 <path d="M 60 70 Q 150 70 150 140" fill="none" stroke="#d6d9e8" strokeWidth="2" strokeDasharray="4 4" />
                 <path d="M 240 70 Q 150 70 150 140" fill="none" stroke="#d6d9e8" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
           </div>
        </div>
      </div>
    ),
  },
  {
    title: "Sprint Planning",
    description: "Organize tasks, map dependencies, and visually manage your agile sprints.",
    color: "bg-emerald-500",
    glow: "shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
    preview: (
      <div className="relative w-full h-full bg-fb-gray-50 overflow-hidden group-hover:scale-105 transition-transform duration-700">
        <div className="absolute top-6 left-6 right-6 bottom-6 flex gap-3">
          <div className="flex-1 bg-fb-white rounded border border-fb-outline-variant/30 p-2 flex flex-col gap-2 shadow-sm">
            <div className="w-10 h-2 bg-fb-gray-300 rounded-full mb-1" />
            <div className="w-full h-8 bg-emerald-50 border border-emerald-200 rounded" />
            <div className="w-full h-12 bg-fb-gray-100 border border-fb-outline-variant/20 rounded" />
          </div>
          <div className="flex-1 bg-fb-white rounded border border-fb-outline-variant/30 p-2 flex flex-col gap-2 shadow-sm">
            <div className="w-12 h-2 bg-fb-gray-300 rounded-full mb-1" />
            <div className="w-full h-10 bg-amber-50 border border-amber-200 rounded" />
            <div className="w-full h-8 bg-fb-gray-100 border border-fb-outline-variant/20 rounded" />
            <div className="w-full h-10 bg-rose-50 border border-rose-200 rounded" />
          </div>
          <div className="flex-1 bg-fb-white rounded border border-fb-outline-variant/30 p-2 flex flex-col gap-2 shadow-sm">
            <div className="w-8 h-2 bg-fb-gray-300 rounded-full mb-1" />
            <div className="w-full h-16 bg-fb-gray-100 border border-fb-outline-variant/20 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "User Journey Map",
    description: "Trace the customer experience across all touchpoints in your product.",
    color: "bg-rose-500",
    glow: "shadow-[0_10px_30px_rgba(244,63,94,0.15)]",
    preview: (
      <div className="relative w-full h-full bg-fb-surface overflow-hidden group-hover:scale-105 transition-transform duration-700">
         <div className="absolute inset-0 flex items-center justify-center scale-90">
            <div className="flex gap-4">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-fb-white border border-rose-200 flex items-center justify-center font-medium text-rose-500 shadow-sm">1</div>
                  <div className="w-16 h-20 bg-amber-50 border border-amber-200 rounded-lg transform -rotate-3 shadow-sm" />
               </div>
               <div className="h-0.5 w-8 bg-fb-gray-300 self-center mt-[-60px]" />
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-fb-white border border-rose-200 flex items-center justify-center font-medium text-blue-500 shadow-sm">2</div>
                  <div className="w-16 h-20 bg-blue-50 border border-blue-200 rounded-lg transform rotate-2 shadow-sm" />
               </div>
               <div className="h-0.5 w-8 bg-fb-gray-300 self-center mt-[-60px]" />
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-fb-white border border-rose-200 flex items-center justify-center font-medium text-emerald-500 shadow-sm">3</div>
                  <div className="w-16 h-20 bg-emerald-50 border border-emerald-200 rounded-lg transform rotate-1 shadow-sm" />
               </div>
            </div>
         </div>
      </div>
    ),
  },
];

export default function TemplateGallery() {
  return (
    <section id="templates" className="py-24 bg-fb-white relative border-t border-fb-outline-variant/20 overflow-hidden">
      
      {/* Decorative text background */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none text-fb-black">
        <h2 className="text-[200px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>TEMPLATES TEMPLATES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-block relative mb-4">
                <span className="relative z-10 text-fb-primary font-serif italic text-4xl md:text-5xl">enjoy</span>
                <svg className="absolute -bottom-2 -left-2 w-full h-full text-fb-primary/20 z-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M 0 30 Q 50 40 100 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <h2
                className="font-bold text-4xl md:text-5xl lg:text-6xl text-fb-black mb-6"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Documentation you will actually use.
              </h2>
              <p className="text-lg text-fb-gray-600">
                Start with a blank canvas or jumpstart your workflow with over 100+ community templates.
              </p>
            </div>
            <Button variant="outline" size="md" className="whitespace-nowrap shrink-0">
              Browse all templates →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.title}
              className="group cursor-pointer flex flex-col"
            >
              <div
                className={`relative bg-fb-gray-50 border border-fb-outline-variant/30 rounded-2xl h-64 mb-6 overflow-hidden transition-all duration-500 group-hover:border-fb-outline-variant group-hover:${template.glow}`}
              >
                {/* Tool bar mockup */}
                <div className="absolute top-0 left-0 w-full h-8 bg-fb-white border-b border-fb-outline-variant/30 flex items-center px-3 z-10 shadow-sm">
                   <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-fb-gray-200" />
                      <div className="w-2 h-2 rounded-full bg-fb-gray-200" />
                   </div>
                </div>
                <div className="mt-8 w-full h-full">
                  {template.preview}
                </div>
              </div>
              <div className="flex items-start gap-4 mt-auto">
                <div className={`mt-1 w-2 h-2 rounded-full ${template.color} shrink-0`} />
                <div>
                  <h3 className="font-bold text-xl text-fb-black mb-2" style={{ fontFamily: "Geist, sans-serif" }}>
                    {template.title}
                  </h3>
                  <p className="text-fb-gray-600 text-sm leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
