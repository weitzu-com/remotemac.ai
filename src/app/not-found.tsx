import Link from "next/link";
import { WaitlistLink } from "@/components/waitlist-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That URL is not part of remotemac.ai. Head back to the landing page or
        email the waitlist.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
        >
          Back to home
        </Link>
        <WaitlistLink className="min-h-12">Join the waitlist</WaitlistLink>
      </div>
    </main>
  );
}
