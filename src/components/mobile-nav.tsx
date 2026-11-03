"use client";

import { useState } from "react";
import { nav } from "@/lib/site";
import { WaitlistLink } from "@/components/waitlist-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-white/12 bg-surface-2 text-foreground"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={`block h-px w-4 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-4 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </span>
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute top-[calc(100%+0.75rem)] right-0 w-64 rounded-2xl border border-white/10 bg-surface-2 p-3 shadow-2xl"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <WaitlistLink className="mt-2 w-full" />
        </div>
      ) : null}
    </div>
  );
}
