import React from 'react'

export function AppleLogo({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-3.014 1.57-.12 0-.24-.02-.34-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.207-2.98.804-.94 2.142-1.64 3.204-1.68.03.13.06.28.06.43zm2.564 15.44c-.05.13-.79 2.62-2.62 4.53-1.13 1.16-2.31 1.83-3.6 1.83-1.36 0-2.02-.86-3.66-.86-1.62 0-2.42.86-3.66.88-1.24.02-2.5-.75-3.63-1.9-2.13-2.14-3.68-6.02-3.68-9.62 0-3.98 2.6-6.09 5.06-6.11 1.28-.02 2.34.86 3.16.86.79 0 2.09-.93 3.63-.93 1.06 0 3.42.42 5.02 3.19-.13.08-2.99 1.75-2.99 5.04 0 3.86 3.36 5.22 3.44 5.09z" />
    </svg>
  )
}

export function FolderIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M4 16a4 4 0 0 1 4-4h14l6 6h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V16z" fill="#5AC8FA" />
      <path d="M4 22h56v26a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V22z" fill="#34AADC" />
    </svg>
  )
}

export function GridIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#1c1c1e" />
      {[10, 27, 44].map((x) =>
        [10, 27, 44].map((y) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" rx="2" fill="#f2f2f7" />
        ))
      )}
    </svg>
  )
}

export function DownloadIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#34C759" />
      <path d="M32 14v24m0 0-9-9m9 9 9-9" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="44" width="32" height="6" rx="2" fill="#fff" />
    </svg>
  )
}

export function MailIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#0A84FF" />
      <rect x="12" y="20" width="40" height="26" rx="3" fill="#fff" />
      <path d="M12 22l20 14 20-14" stroke="#0A84FF" strokeWidth="3" fill="none" />
    </svg>
  )
}

export function CodeIcon({ className = 'w-full h-full', color = '#FF9F0A' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill={color} />
      <path d="M24 20 12 32l12 12M40 20l12 12-12 12" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BrainIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#BF5AF2" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="32" cy="32" r="6" fill="#fff" />
    </svg>
  )
}

export function SpringIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#30D158" />
      <path d="M18 46c8-16 22-16 28-28M18 46c4-2 8-2 12 0" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function BookIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#FF375F" />
      <path d="M32 16c-6-4-14-4-18 0v28c4-4 12-4 18 0 6-4 14-4 18 0V16c-4-4-12-4-18 0z" fill="#fff" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="14" fill="#8E8E93" />
      <rect x="14" y="26" width="36" height="22" rx="3" fill="#fff" />
      <path d="M24 26v-4a8 8 0 0 1 16 0v4" stroke="#fff" strokeWidth="3" fill="none" />
    </svg>
  )
}

export const projectIconMap = {
  sign: (props) => <BrainIcon {...props} />,
  resume: (props) => <CodeIcon {...props} color="#FF453A" />,
  taskflow: (props) => <SpringIcon {...props} />,
}
