import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md text-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="relative grid size-7 place-items-center rounded-[0.55rem] border border-white/15 bg-surface-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
      >
        <span className="led absolute top-1.5 right-1.5 size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
      </span>
      <span className="font-medium tracking-tight">{site.name}</span>
    </Link>
  );
}
