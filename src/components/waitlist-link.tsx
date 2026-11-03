import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-fg hover:bg-[#8aecd0] shadow-[0_0_0_1px_rgb(112_224_196/0.35),0_10px_30px_-12px_rgb(112_224_196/0.7)]",
  secondary:
    "border border-white/15 bg-white/3 text-foreground hover:border-white/25 hover:bg-white/6",
  text: "text-accent hover:text-[#8aecd0]",
} as const;

type Variant = keyof typeof variants;

export function WaitlistLink({
  children = "Join the waitlist",
  variant = "primary",
  className,
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={site.waitlistMailto}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
