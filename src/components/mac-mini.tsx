export function MacMini({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      role="img"
      aria-label="Dedicated Apple Silicon Mac mini"
    >
      <defs>
        <linearGradient id="chassis-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3f4c" />
          <stop offset="42%" stopColor="#1c2028" />
          <stop offset="100%" stopColor="#12151c" />
        </linearGradient>
        <linearGradient id="chassis-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#232731" />
          <stop offset="100%" stopColor="#0c0e12" />
        </linearGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="under-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#70e0c4" stopOpacity="0.38" />
          <stop offset="70%" stopColor="#70e0c4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#70e0c4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="262" rx="132" ry="26" fill="url(#under-glow)" />
      <ellipse cx="180" cy="258" rx="108" ry="12" fill="#000" opacity="0.55" />

      <rect
        x="68"
        y="38"
        width="224"
        height="196"
        rx="38"
        fill="url(#chassis-top)"
        stroke="#4a5160"
        strokeWidth="1.2"
      />
      <rect
        x="76"
        y="46"
        width="208"
        height="180"
        rx="32"
        fill="none"
        stroke="url(#edge)"
        strokeWidth="1"
      />
      <path
        d="M92 54h136"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M68 198h224c0 18-16 36-38 36H106c-22 0-38-18-38-36z"
        fill="url(#chassis-front)"
      />
      <path
        d="M80 198h200"
        stroke="#ffffff"
        strokeOpacity="0.08"
        strokeWidth="1"
      />

      <circle cx="262" cy="216" r="5.5" fill="#70e0c4" className="led" />
      <circle cx="262" cy="216" r="11" fill="#70e0c4" opacity="0.22" />
    </svg>
  );
}
