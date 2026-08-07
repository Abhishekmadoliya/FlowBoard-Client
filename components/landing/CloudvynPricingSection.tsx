"use client";

import Link from "next/link";

const PRICING_CARDS = [
  {
    id: "free",
    title: "Free Starter",
    price: "$0",
    period: "forever",
    description: "Free for individual creators. Up to 3 active whiteboards and 50 AI agent prompts per month.",
    badge: "Individual",
    ctaText: "Start for free",
    ctaLink: "/excalidraw",
    visualMockup: (
      <div className="w-full h-full flex items-center justify-center">
        {/* Mockup 1: Dark pill action bar (matching reference image Card 1) */}
        <div className="bg-zinc-900 text-white rounded-2xl p-4 shadow-md w-full max-w-[200px] text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Free Plan
          </div>
          <div className="text-[11px] text-zinc-400 font-mono">
            3 Active Canvases
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pro",
    title: "Cloudvyn Pro (Unified)",
    price: "$19",
    period: "per user / mo",
    description: "Full ecosystem access. Unlocks Flowboard + Cloudvyn AI Workspace & cloud developer suite.",
    badge: "Most Popular",
    ctaText: "Get Pro with Cloudvyn",
    ctaLink: "/signup",
    visualMockup: (
      <div className="w-full h-full flex items-center justify-center">
        {/* Mockup 2: Clean collection card list (matching reference image Card 2) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm w-full max-w-[220px] space-y-2.5">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
            <span className="text-xs font-bold text-zinc-900 font-sans">Cloudvyn Suite</span>
            <span className="text-[10px] bg-zinc-900 text-white px-2 py-0.5 rounded-full font-semibold">
              PRO
            </span>
          </div>
          <div className="space-y-1.5 text-[11px] text-zinc-600 font-medium">
            <div className="flex items-center gap-2 bg-zinc-50 p-1.5 rounded-lg">
              <span className="text-zinc-900 font-bold">✓</span> Unlimited AI Canvas
            </div>
            <div className="flex items-center gap-2 bg-zinc-50 p-1.5 rounded-lg">
              <span className="text-zinc-900 font-bold">✓</span> 4 Autonomous Agents
            </div>
            <div className="flex items-center gap-2 bg-zinc-50 p-1.5 rounded-lg">
              <span className="text-zinc-900 font-bold">✓</span> Canvas-to-Code Sync
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "enterprise",
    title: "Cloudvyn Enterprise",
    price: "$49",
    period: "per user / mo",
    description: "Dedicated private AI models, custom Okta SSO, compliance logs, and 99.99% uptime SLA.",
    badge: "Enterprise",
    ctaText: "Contact Sales",
    ctaLink: "https://cloudvyn.com",
    visualMockup: (
      <div className="w-full h-full flex items-center justify-center">
        {/* Mockup 3: Comment card & security badge (matching reference image Card 3) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm w-full max-w-[220px] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
            <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-[10px]">
              S
            </div>
            <div>
              <div className="text-xs font-bold">Security & SLA</div>
              <div className="text-[10px] text-zinc-400 font-normal">Dedicated Instance</div>
            </div>
          </div>
          <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100 text-[11px] text-zinc-600">
            Private AI Models • SOC2 & Okta SSO Enabled
          </div>
        </div>
      </div>
    ),
  },
];

export default function CloudvynPricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-zinc-200/80 text-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Headline (Matching reference image "From inspiration to creation.") */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-sans mb-4">
            Included in cloudvyn.com pricing.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto font-normal">
            One subscription unlocks Flowboard alongside Cloudvyn AI Workspace and cloud developer tools.
          </p>
        </div>

        {/* 3 Visual Cards Grid (Identical layout to reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col justify-between"
            >
              {/* Top Visual Mockup Container (Matching reference image light gray container) */}
              <div className="bg-zinc-100/80 rounded-3xl h-[260px] border border-zinc-200/60 p-6 flex items-center justify-center mb-6 relative overflow-hidden transition-all group-hover:bg-zinc-100 group-hover:border-zinc-300">
                {card.visualMockup}
              </div>

              {/* Bottom Content Area */}
              <div className="text-center px-2">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="font-bold text-zinc-900 text-xl font-sans">
                    {card.title}
                  </h3>
                  <span className="text-xs font-semibold text-zinc-500">
                    ({card.price})
                  </span>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                <Link
                  href={card.ctaLink}
                  className="inline-block px-6 py-2.5 rounded-full bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  {card.ctaText} →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
