import Avatar from "@/components/ui/Avatar";

const testimonials = [
  {
    quote: "Flowboard replaced three tools for us. Our design sprints are 2x faster now and everyone actually enjoys the process.",
    name: "Sarah Chen",
    handle: "@sarah_designs",
    role: "Head of Product, Meridian",
    avatar: "S",
    color: "bg-blue-500",
    size: "col-span-1 md:col-span-2 lg:col-span-1 row-span-2",
  },
  {
    quote: "The live cursors make remote collaboration feel natural. It's the closest thing to being in the same room with sticky notes on a wall.",
    name: "James Wright",
    handle: "@jwright_eng",
    role: "Engineering Manager",
    avatar: "J",
    color: "bg-emerald-500",
    size: "col-span-1 md:col-span-1",
  },
  {
    quote: "We use Flowboard for everything — retros, brainstorms, architecture diagrams. The infinite canvas is a game changer.",
    name: "Priya Sharma",
    handle: "@priya_tech",
    role: "Design Lead, NovaTech",
    avatar: "P",
    color: "bg-rose-500",
    size: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    quote: "I didn't think I needed another whiteboard tool until I tried the code sync feature. It actually understands my architecture.",
    name: "David Kim",
    handle: "@dkim_dev",
    role: "Staff Engineer",
    avatar: "D",
    color: "bg-violet-500",
    size: "col-span-1 md:col-span-1 lg:col-span-2",
  },
  {
    quote: "The most beautiful SaaS product I've used this year. Fast, snappy, and the smart connectors are basically magic.",
    name: "Elena Rodriguez",
    handle: "@elena_ux",
    role: "UX Researcher",
    avatar: "E",
    color: "bg-amber-500",
    size: "col-span-1 md:col-span-2 lg:col-span-1",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-fb-surface border-t border-fb-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fb-primary/10 border border-fb-primary/20 text-fb-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            Wall of Love
          </div>
          <h2
            className="font-bold text-4xl md:text-5xl text-fb-black mb-6"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Secure and govern seamlessly
          </h2>
          <p className="text-lg text-fb-gray-600 max-w-2xl mx-auto">
            Join thousands of product teams who have upgraded their workflow. Don&apos;t just take our word for it.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`bg-fb-white border border-fb-outline-variant/30 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow ${t.size} flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-lg shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-fb-black font-semibold">{t.name}</div>
                  <div className="text-fb-gray-500 text-sm">{t.handle}</div>
                </div>
                {/* Twitter icon */}
                <div className="ml-auto text-fb-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>
              <blockquote className="text-fb-gray-800 text-lg leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="text-sm text-fb-gray-500 font-medium">
                {t.role}
              </div>
            </div>
          ))}

          {/* Video / Interactive Demo Card integrated into masonry */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 bg-gradient-to-br from-fb-primary-light/50 to-fb-white border border-fb-outline-variant/30 rounded-2xl p-1 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="w-full h-full bg-fb-white/80 backdrop-blur-sm rounded-xl p-6 flex flex-col relative z-10 border border-fb-outline-variant/20">
               <div className="flex-1 flex items-center justify-center mb-6">
                 <div className="w-16 h-16 rounded-full bg-fb-primary flex items-center justify-center shadow-md cursor-pointer group-hover:scale-110 transition-transform">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
               </div>
               <h3 className="text-fb-black font-bold text-xl mb-2" style={{ fontFamily: "Geist, sans-serif" }}>See it in 60 seconds</h3>
               <p className="text-fb-gray-600 text-sm">Watch how Meridian Labs uses Flowboard to ship features 2x faster.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
