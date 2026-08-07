"use client";

import { useState } from "react";

export default function SeeItInAction() {
  const [selectedLang, setSelectedLang] = useState<"ts" | "tf" | "react">("ts");

  const codeSnippets = {
    ts: `// Synced TypeScript Spec
import { createCloudvynService } from "@cloudvyn/sdk";

export const authFlow = createCloudvynService({
  name: "AuthHandler",
  cluster: "us-east-1",
  jwtValidation: true,
});`,
    tf: `# Auto-Generated Terraform
resource "aws_lambda_function" "auth_middleware" {
  function_name = "cloudvyn-auth-handler"
  runtime       = "nodejs20.x"
}`,
    react: `export function AuthCard() {
  return (
    <div className="p-4 bg-white border rounded-xl">
      <span className="font-mono">Auth Handler</span>
    </div>
  );
}`,
  };

  return (
    <section id="see-it-in-action" className="py-24 bg-zinc-50 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            Canvas-to-Code Sync
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4 font-sans">
            Draw your architecture. <br />
            Watch the code write itself.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Every node and connector drawn on the infinite canvas instantly converts to production code.
          </p>
        </div>

        {/* Split Window */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-3 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">cloudvyn.com/canvas/code-sync</span>
            <div className="flex gap-1 bg-white p-1 rounded-full border border-zinc-200 text-xs font-medium">
              {(["ts", "tf", "react"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-3 py-0.5 rounded-full uppercase ${
                    selectedLang === lang ? "bg-zinc-900 text-white font-semibold" : "text-zinc-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px]">
            {/* Left */}
            <div className="lg:col-span-6 p-6 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-zinc-50/50 dot-pattern-light flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-4">
                  Whiteboard Canvas
                </span>
                <div className="space-y-3">
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-2xs font-semibold text-xs text-zinc-900">
                    Next.js Client App
                  </div>
                  <div className="p-3 bg-white border border-zinc-900 rounded-xl shadow-2xs font-semibold text-xs text-zinc-900 flex justify-between">
                    <span>Auth Middleware</span>
                    <span className="text-[10px] text-zinc-400 font-mono">AI Generated</span>
                  </div>
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-2xs font-semibold text-xs text-zinc-900">
                    PostgreSQL Database
                  </div>
                </div>
              </div>
              <div className="text-xs text-emerald-600 font-medium pt-4">
                ✓ Synced with GitHub repo
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-6 bg-zinc-900 p-6 text-zinc-200 font-mono text-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-zinc-400 font-semibold block mb-3 uppercase tracking-wider">
                  Generated Code Spec
                </span>
                <pre className="text-zinc-200 leading-relaxed">
                  <code>{codeSnippets[selectedLang]}</code>
                </pre>
              </div>
              <button className="self-end px-4 py-1.5 rounded-full bg-white text-zinc-900 font-sans text-xs font-bold hover:bg-zinc-100 transition-colors mt-6">
                Copy Code Spec
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
