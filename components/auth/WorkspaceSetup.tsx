"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const teamSizes = ["Just me", "2–10", "11–50", "50+"];
const useCases = [
  { label: "Design", icon: "🎨" },
  { label: "Engineering", icon: "⚙️" },
  { label: "Product", icon: "📦" },
  { label: "Education", icon: "📚" },
  { label: "Other", icon: "✨" },
];

export default function WorkspaceSetup() {
  return (
    <div id="workspace-setup">
      <h2
        className="text-3xl font-bold text-fb-black mb-2"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        Set up your workspace
      </h2>
      <p className="text-fb-gray-500 mb-8">
        Customize your team&apos;s home base.
      </p>

      <form className="space-y-6">
        <Input
          label="Workspace name"
          id="workspace-name"
          name="workspace"
          placeholder="Acme Inc."
        />

        {/* Team size */}
        <div>
          <label className="text-sm font-semibold text-fb-gray-800 block mb-2">
            Team size
          </label>
          <div className="flex gap-2">
            {teamSizes.map((size, i) => (
              <button
                key={size}
                type="button"
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  i === 0
                    ? "bg-fb-primary text-white border-fb-primary"
                    : "bg-fb-white text-fb-gray-600 border-fb-outline-variant hover:border-fb-primary hover:text-fb-primary"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Use case */}
        <div>
          <label className="text-sm font-semibold text-fb-gray-800 block mb-2">
            How will you use Flowboard?
          </label>
          <div className="grid grid-cols-5 gap-2">
            {useCases.map((useCase, i) => (
              <button
                key={useCase.label}
                type="button"
                className={`flex flex-col items-center gap-1.5 py-3 rounded-lg text-xs font-medium border transition-all ${
                  i === 2
                    ? "bg-fb-primary-light text-fb-primary border-fb-primary/30"
                    : "bg-fb-white text-fb-gray-600 border-fb-outline-variant hover:border-fb-primary/30 hover:bg-fb-primary-light/50"
                }`}
              >
                <span className="text-lg">{useCase.icon}</span>
                {useCase.label}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Continue →
        </Button>
      </form>
    </div>
  );
}
