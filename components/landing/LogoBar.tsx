export default function LogoBar() {
  const companies = [
    "Intercom",
    "Slack",
    "Notion",
    "Stripe",
    "Vercel",
    "Linear",
  ];

  return (
    <section id="logo-bar" className="py-12 border-b border-fb-outline-variant/20 bg-fb-surface">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-fb-gray-500 uppercase tracking-wider mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-40 hover:opacity-60 transition-opacity duration-500">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center gap-2 text-fb-gray-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" opacity="0.3" />
                <rect x="7" y="7" width="10" height="10" rx="2" opacity="0.5" />
              </svg>
              <span className="font-semibold text-sm tracking-wide">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
