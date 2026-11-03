import { site } from "@/lib/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted">
            Dedicated Apple Silicon Mac mini rental in the United States.
            Operated by {site.operator}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={site.waitlistMailto}
            className="text-foreground hover:text-accent"
          >
            {site.email}
          </a>
          <a href="#compliance" className="text-muted hover:text-foreground">
            Licensing note
          </a>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {site.operator}
          </p>
          <p>Pilot farm · United States · Bare metal</p>
        </div>
      </div>
    </footer>
  );
}
