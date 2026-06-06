"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "#templates" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-sm border-b border-fb-outline-variant/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-fb-black"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {/* Flowboard Logo Icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#1a56db" />
              <path
                d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V14H8V12Z"
                fill="white"
                opacity="0.9"
              />
              <rect x="8" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
              <rect x="17" y="15" width="7" height="7" rx="1.5" fill="white" opacity="0.5" />
              <circle cx="26" cy="8" r="4" fill="#4878fd" />
              <path
                d="M25 6L27 8L25 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Flowboard
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-fb-gray-600 hover:text-fb-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:block text-fb-gray-600 font-semibold hover:text-fb-primary transition-colors duration-200"
          >
            Log in
          </Link>
          <Button href="/signup" size="md">
            Get started free
          </Button>
        </div>
      </div>
    </nav>
  );
}
