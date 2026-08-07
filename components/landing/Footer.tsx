"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-zinc-950 text-white pt-16 pb-12 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="text-3xl font-extrabold tracking-tight text-white font-sans block">
              Flowboard
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm font-normal leading-relaxed">
              Multi-collaborator canvas powered by autonomous AI. Included under your cloudvyn.com subscription.
            </p>
          </div>

          {/* Link Columns (Right - Matching reference image 2 column link list) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-sm font-medium">
            {/* Column 1 */}
            <div className="space-y-3">
              <div><Link href="/excalidraw" className="hover:text-zinc-400 transition-colors">AI Canvas</Link></div>
              <div><Link href="#ai-agents" className="hover:text-zinc-400 transition-colors">AI Agents</Link></div>
              <div><Link href="#pricing" className="hover:text-zinc-400 transition-colors">Pricing</Link></div>
              <div><Link href="#see-it-in-action" className="hover:text-zinc-400 transition-colors">Code Sync</Link></div>
              <div><Link href="#templates" className="hover:text-zinc-400 transition-colors">Templates</Link></div>
              <div><a href="https://cloudvyn.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Cloudvyn Suite</a></div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div><a href="https://cloudvyn.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Contact</a></div>
              <div><a href="#" className="hover:text-zinc-400 transition-colors">Help center</a></div>
              <div><a href="#" className="hover:text-zinc-400 transition-colors">Careers</a></div>
              <div><a href="#" className="hover:text-zinc-400 transition-colors">X (Twitter)</a></div>
              <div><a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a></div>
              <div><a href="https://cloudvyn.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">cloudvyn.com →</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Matching reference image copyright & legal links) */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-normal">
          <div>
            © Flowboard 2018-2026. Subproduct of cloudvyn.com
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
