"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function InviteTeam() {
  return (
    <div id="invite-team">
      <h2
        className="text-3xl font-bold text-fb-black mb-2"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        Invite your team
      </h2>
      <p className="text-fb-gray-500 mb-8">
        Collaboration is better together. Add your teammates now or skip for later.
      </p>

      <form className="space-y-4 mb-6">
        {/* Email invites */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-2">
            <input
              type="email"
              placeholder="colleague@company.com"
              className="flex-1 px-4 py-3 rounded-lg border border-fb-outline-variant bg-fb-white text-fb-gray-800 placeholder:text-fb-gray-400 focus:outline-none focus:ring-2 focus:ring-fb-primary/30 focus:border-fb-primary transition-all text-sm"
            />
            {i === 1 && (
              <Button type="button" size="md">
                Send invite
              </Button>
            )}
          </div>
        ))}

        {/* Add more */}
        <button
          type="button"
          className="text-fb-primary text-sm font-medium hover:underline"
        >
          + Add another email
        </button>
      </form>

      {/* Copy link */}
      <div className="bg-fb-gray-50 rounded-lg p-4 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-fb-gray-700 mb-1">
              Or share an invite link
            </p>
            <p className="text-xs text-fb-gray-400 font-mono">
              flowboard.app/invite/acme-xyz123
            </p>
          </div>
          <Button variant="outline" size="sm">
            Copy link
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/app"
          className="text-fb-gray-500 text-sm hover:text-fb-gray-700 transition-colors"
        >
          Skip for now →
        </Link>
        <Button href="/app" size="lg">
          Get started →
        </Button>
      </div>
    </div>
  );
}
