"use client";

const TESTIMONIALS = [
  {
    name: "Sebastian Speier",
    company: "Shopify",
    role: "Head of Product",
    quote: "Flowboard is an incredible resource. Having live multiplayer combined with autonomous AI agents on the same canvas makes our design sprints 2x faster.",
    avatar: "S",
    avatarBg: "bg-blue-600",
  },
  {
    name: "Haerin Song",
    company: "Visa",
    role: "Lead UX Designer",
    quote: "By using Flowboard, I save both research time and canvas space. The AI Wireframe Agent turns sticky notes into Figma-ready component flows seamlessly.",
    avatar: "H",
    avatarBg: "bg-purple-600",
  },
  {
    name: "Marco Cornacchia",
    company: "Figma",
    role: "Design Systems Lead",
    quote: "Flowboard is one of my favorite tools for product design and microservices architecture. The canvas-to-code sync is unmatched.",
    avatar: "M",
    avatarBg: "bg-emerald-600",
  },
  {
    name: "Daryl Ginn",
    company: "Endless",
    role: "Product Architect",
    quote: "Flowboard has quickly become our primary canvas for system design at Endless. Being included under cloudvyn.com pricing is an unbelievable value.",
    avatar: "D",
    avatarBg: "bg-amber-600",
  },
  {
    name: "Oykun Yilmaz",
    company: "Vanguard",
    role: "Principal Solutions Architect",
    quote: "Designing feasible cloud infrastructure based on real-world specs is crucial. The Architect Agent generates AWS and K8s topologies on the fly.",
    avatar: "O",
    avatarBg: "bg-indigo-600",
  },
  {
    name: "Taha Hossain",
    company: "Daybreak",
    role: "Staff Software Engineer",
    quote: "We can't imagine our sprint planning process without Flowboard. The clarity and speed provided by the strategy agent make it indispensable.",
    avatar: "T",
    avatarBg: "bg-rose-600",
  },
  {
    name: "Meng To",
    company: "DesignCode",
    role: "Founder",
    quote: "Flowboard is a game-changer for product teams looking to step up their architecture and UI design flows. Metiulous, fast, and intuitive.",
    avatar: "M",
    avatarBg: "bg-zinc-800",
  },
  {
    name: "Bobby Giangeruso",
    company: "Heart Hands Inc",
    role: "Engineering Director",
    quote: "Flowboard is one of those tabs I never close. It's the largest up-to-date canvas for our cloud systems and UI components.",
    avatar: "B",
    avatarBg: "bg-cyan-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-zinc-200/80 text-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Headline (Matching reference image "What our users are saying.") */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-sans">
            What our users are saying.
          </h2>
        </div>

        {/* 4-Column Masonry Card Grid (Identical layout to reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50/90 border border-zinc-200/80 rounded-3xl p-6 space-y-4 hover:border-zinc-300 hover:bg-white transition-all shadow-2xs"
            >
              {/* User Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-bold text-zinc-900 text-xs font-sans leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-normal">
                    {item.company}
                  </div>
                </div>
              </div>

              {/* Quote Body */}
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
