import { nav } from "@/lib/site";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { WaitlistLink } from "@/components/waitlist-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo className="shrink-0" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm text-muted md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WaitlistLink />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
