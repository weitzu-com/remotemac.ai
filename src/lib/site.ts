export const site = {
  name: "remotemac.ai",
  url: "https://remotemac.ai",
  operator: "CNPS.COM LIMITED",
  email: "hello@remotemac.ai",
  title: "remotemac.ai — Dedicated US Apple Silicon Mac mini rental",
  description:
    "Dedicated Apple Silicon Mac mini bare-metal rental in the United States for remote macOS, AI, CI, and build workloads. Exclusive machines — not shared, not virtualized.",
  waitlistMailto:
    "mailto:hello@remotemac.ai?subject=Waitlist%20request&body=Hello%2C%0A%0AI%20would%20like%20to%20join%20the%20remotemac.ai%20waitlist.%0A%0AName%3A%0AWorkload%20(macOS%20%2F%20AI%20%2F%20CI%20%2F%20build)%3A%0AAccess%20needs%3A%0A",
} as const;

export const nav = [
  { href: "#for", label: "Who it's for" },
  { href: "#dedicated", label: "Why dedicated" },
  { href: "#how", label: "How it works" },
  { href: "#waitlist", label: "Waitlist" },
] as const;
