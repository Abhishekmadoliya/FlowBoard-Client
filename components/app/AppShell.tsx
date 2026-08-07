"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "@/components/ui/Avatar";
import { useAppStore } from "@/lib/store/useAppStore";

interface AppShellProps {
  children: React.ReactNode;
}

const navItems = [
  {
    label: "Boards",
    href: "/app",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    label: "Templates",
    href: "/app/templates",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Shared with me",
    href: "/app/shared",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Excalidraw Mode",
    href: "/excalidraw",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      </svg>
    ),
  },
  {
    label: "Trash",
    href: "/app/trash",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const user = useAppStore((state) => state.user);

  return (
    <div className="min-h-screen bg-fb-surface flex">
      {/* Sidebar */}
      <aside className="w-64 bg-fb-white border-r border-fb-outline-variant/30 flex-shrink-0 hidden md:flex flex-col">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-fb-black">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#1a56db" />
              <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V14H8V12Z" fill="white" opacity="0.9" />
              <rect x="8" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
              <rect x="17" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.5" />
            </svg>
            Flowboard
          </Link>
        </div>

        <div className="px-3 py-2">
          <Link
            href="/app/new"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-fb-primary hover:bg-fb-primary-hover text-white font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New board
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-fb-primary-light text-fb-primary"
                    : "text-fb-gray-600 hover:bg-fb-gray-50 hover:text-fb-gray-800"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-fb-outline-variant/30">
          <div className="flex items-center gap-3">
            <Avatar name={user?.name || "Guest User"} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-fb-black truncate">
                {user?.name || "Guest User"}
              </p>
              <p className="text-xs text-fb-gray-500 truncate">
                {user?.workspaceName || "Personal"}
              </p>
            </div>
            <Link
              href="/login"
              className="text-fb-gray-400 hover:text-fb-gray-600"
              title="Log out"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {children}
      </main>
    </div>
  );
}
