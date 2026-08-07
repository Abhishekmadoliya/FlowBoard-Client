"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is Flowboard and how does it relate to cloudvyn.com?",
    a: "Flowboard is an autonomous AI infinite canvas app under cloudvyn.com. All Cloudvyn account holders get access to Flowboard as part of their unified Cloudvyn plan.",
  },
  {
    q: "How do Autonomous AI Canvas Agents work?",
    a: "Flowboard AI agents operate directly on your whiteboard canvas. You type natural language prompts, and agents draw architecture diagrams, wireframes, and code specs in real time alongside human team members.",
  },
  {
    q: "Is Flowboard included under cloudvyn.com pricing?",
    a: "Yes! Flowboard comes included with Cloudvyn ecosystem pricing. With a single Cloudvyn subscription, your team unlocks Flowboard alongside Cloudvyn AI Workspace.",
  },
  {
    q: "Can I export canvas elements into code?",
    a: "Yes. Whiteboard nodes and connected architecture flow diagrams convert instantly to clean React components, TypeScript specs, or Terraform manifests.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-50 border-t border-zinc-200/80 text-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 font-sans">
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-zinc-900 text-sm flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <span className="text-zinc-400 font-normal ml-2">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
