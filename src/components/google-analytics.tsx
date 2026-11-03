"use client";

import Script from "next/script";

const FALLBACK_MEASUREMENT_ID = "G-4VHD9PYCJV";

function measurementId(): string | null {
  const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? FALLBACK_MEASUREMENT_ID;
  const id = raw.trim();
  return id.length > 0 ? id : null;
}

export function GoogleAnalytics() {
  const id = measurementId();
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
