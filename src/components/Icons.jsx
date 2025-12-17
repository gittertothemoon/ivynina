export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 5h10v10" strokeLinecap="round" />
      <path d="M5 15 15 5" strokeLinecap="round" />
    </svg>
  )
}

export function PornhubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <title>Pornhub</title>
      <rect x="2" y="4" width="18" height="16" rx="4" fill="#0d0d0d" />
      <rect x="18" y="4" width="12" height="16" rx="4" fill="#f49020" />
      <path
        fill="#ffffff"
        d="M7 8h4.1c2.3 0 3.9 1.4 3.9 3.6 0 2.3-1.6 3.6-3.9 3.6H9.2v2.8H7zm4.1 5.2c1 0 1.5-.6 1.5-1.6s-.6-1.6-1.6-1.6H9.3v3.2z"
      />
      <path
        fill="#151515"
        d="M21 8h2.1v4.1c.4-.9 1.3-1.5 2.5-1.5 1.9 0 3.4 1.4 3.4 3.7v5.7H27v-5.1c0-1.1-.6-1.8-1.7-1.8-1.1 0-1.9.7-1.9 1.8v5.1H21Z"
      />
    </svg>
  )
}