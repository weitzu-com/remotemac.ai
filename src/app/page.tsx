import { MacMini } from "@/components/mac-mini";
import { WaitlistLink } from "@/components/waitlist-link";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: site.name,
  url: site.url,
  description: site.description,
  serviceType: "Dedicated Apple Silicon Mac mini rental",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  provider: {
    "@type": "Organization",
    name: site.operator,
    url: site.url,
    email: site.email,
  },
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Audience />
      <Differentiators />
      <HowItWorks />
      <Compliance />
      <Waitlist />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
            Pilot · United States · Bare metal
          </p>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
            <span className="italic">Dedicated</span> Apple Silicon.
            <span className="mt-1 block">
              Mac mini rental{" "}
              <span className="block">in the United States.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Bare-metal Mac mini machines for remote macOS, AI, CI, and build
            workloads. Exclusive access — not shared, not virtualized. A small
            US farm of about three to five machines.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WaitlistLink className="min-h-12 px-6">Join the waitlist</WaitlistLink>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
            >
              How it works
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2 text-xs text-muted">
            {[
              "Apple Silicon",
              "Bare metal",
              "US-hosted",
              "Exclusive access",
            ].map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <MacMini className="mx-auto w-full max-w-md" />
          <MachinePlate />
        </div>
      </div>
    </section>
  );
}

function MachinePlate() {
  const rows = [
    ["Form", "Mac mini"],
    ["Compute", "Apple Silicon"],
    ["Tenancy", "Dedicated · exclusive"],
    ["Host", "United States"],
    ["Farm", "About 3–5 machines"],
    ["Minimum term", "24 hours"],
  ] as const;

  return (
    <aside
      aria-label="Machine profile"
      className="mx-auto mt-2 w-full max-w-md rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-[0_24px_80px_-32px_rgb(0_0_0/0.9)] backdrop-blur-sm"
    >
      <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted uppercase">
        Machine profile
      </p>
      <dl className="mt-4 space-y-2.5">
        {rows.map(([key, value]) => (
          <div
            key={key}
            className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3 border-b border-white/6 py-1.5 last:border-b-0"
          >
            <dt className="font-mono text-xs text-muted">{key}</dt>
            <dd className="text-sm text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function Audience() {
  const items = [
    {
      kicker: "01",
      title: "CI and native builds",
      body: "Run continuous integration and native build pipelines on a real Apple Silicon Mac mini — the whole machine, for the length of the rental.",
    },
    {
      kicker: "02",
      title: "AI on Apple Silicon",
      body: "Use dedicated hardware for local models, conversion, and other AI workloads that belong on Apple Silicon rather than a shared host.",
    },
    {
      kicker: "03",
      title: "Remote macOS",
      body: "A dedicated macOS machine you reach remotely, for development and production tasks that need the real operating system.",
    },
  ];

  return (
    <section
      id="for"
      aria-labelledby="for-heading"
      className="scroll-mt-20 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
          Who it is for
        </p>
        <h2
          id="for-heading"
          className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
        >
          Work that needs a real Mac.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          remotemac.ai rents dedicated Apple Silicon Mac minis for teams whose
          workloads do not fit a shared or virtualized environment.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <p className="font-mono text-xs text-accent">{item.kicker}</p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    {
      title: "Dedicated Apple Silicon",
      body: "Each rental is a physical Mac mini. CPU, GPU, memory, and storage are yours for the term — not a slice of a larger host.",
    },
    {
      title: "Hosted in the United States",
      body: "The farm is in the United States. Built for teams that want US-hosted Apple hardware for remote macOS, AI, CI, and build work.",
    },
    {
      title: "Exclusive, not a shared VM",
      body: "Bare metal, end to end. No hypervisor tax, no noisy neighbors, no shared tenancy. The machine is exclusive to you while you have it.",
    },
  ];

  return (
    <section
      id="dedicated"
      aria-labelledby="dedicated-heading"
      className="scroll-mt-20 border-t border-white/8 bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
          Why dedicated
        </p>
        <h2
          id="dedicated-heading"
          className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
        >
          A whole machine. Not a virtual one.
        </h2>
        <ol className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-4 py-8 md:grid-cols-[6rem_minmax(0,16rem)_1fr] md:items-start md:gap-10"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="max-w-xl text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Request",
      body: "Email the waitlist with your workload and access needs. The farm is small, so we take requests in order as machines open.",
    },
    {
      title: "Provision",
      body: "We allocate a dedicated Mac mini from the US farm. The machine is yours exclusively for the rental term.",
    },
    {
      title: "Remote access",
      body: "Connect to the machine and run macOS, AI, CI, or build jobs. When the term ends, the machine returns to the farm.",
    },
  ];

  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="scroll-mt-20 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
          How it works
        </p>
        <h2
          id="how-heading"
          className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
        >
          Request. Provision. Connect.
        </h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-surface p-6"
            >
              <span className="font-mono text-xs text-accent">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section
      id="compliance"
      aria-labelledby="compliance-heading"
      className="scroll-mt-20 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-surface px-6 py-8 sm:px-8">
          <p className="font-mono text-[0.7rem] tracking-[0.22em] text-muted uppercase">
            Term and licensing
          </p>
          <h2
            id="compliance-heading"
            className="mt-3 font-display text-2xl tracking-tight"
          >
            24-hour minimum. You stay responsible for Apple’s licenses.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
            Rentals last at least 24 hours. remotemac.ai supplies dedicated
            Apple hardware; you remain responsible for complying with Apple’s
            software license terms, including commercial-use requirements that
            apply to your situation. This note is practical context, not legal
            advice.
          </p>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="scroll-mt-20 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-accent/15 blur-3xl"
          />
          <p className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase">
            Limited capacity
          </p>
          <h2
            id="waitlist-heading"
            className="mt-4 max-w-xl font-display text-3xl tracking-tight sm:text-5xl"
          >
            A small US farm. Join the waitlist.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            About three to five dedicated Mac mini machines in the United
            States. Tell us what you need and we will follow up as machines
            become available.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WaitlistLink className="min-h-12 px-6">
              Email {site.email}
            </WaitlistLink>
            <p className="text-sm text-muted">No account required to inquire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
