import type { SVGProps } from "react";

// Shared line-icon set. Minimal, stroke-based, inherits currentColor
// so icons pick up section context automatically.

export const IconAdmin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" fill="none" aria-hidden="true" {...props}>
    <rect x="6" y="8" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 15H26M12 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M13 26L10 31L17 26" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const IconTeacher = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" fill="none" aria-hidden="true" {...props}>
    <path d="M9 9H21C24.3 9 27 11.7 27 15C27 18.3 24.3 21 21 21H14V30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 21V9" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="14" cy="26" r="2" fill="currentColor" />
  </svg>
);

export const IconParent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" fill="none" aria-hidden="true" {...props}>
    <path d="M19 30C19 30 7 23.5 7 15C7 10.5 10.5 8 14 8C16.5 8 18.3 9.4 19 11C19.7 9.4 21.5 8 24 8C27.5 8 31 10.5 31 15C31 23.5 19 30 19 30Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const IconStudent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" fill="none" aria-hidden="true" {...props}>
    <path d="M19 6L23 15L32 16L25 22.5L27 32L19 27L11 32L13 22.5L6 16L15 15L19 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const IconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
    <path d="M3 9L7 13L15 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" {...props}>
    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconSpark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 2L12.2 7.4L18 9L12.2 10.6L10 16L7.8 10.6L2 9L7.8 7.4L10 2Z" fill="currentColor" />
  </svg>
);

export const IconLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 2L18 6L10 10L2 6L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M2 10L10 14L18 10M2 14L10 18L18 14" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconSystem = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 8H18" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const IconStreak = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
    <path d="M9 2C9 2 5 6 5 10.5C5 13.5 6.8 16 9 16C11.2 16 13 13.5 13 10.5C13 9.5 12.6 8.5 12 7.7C12 9 11.3 9.5 10.8 9.2C11.3 6.5 9.8 4 9 2Z" fill="currentColor" />
  </svg>
);

export const IconLevel = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
    <path d="M9 2L11 6.6L16 7.3L12.4 10.6L13.3 15.5L9 13.2L4.7 15.5L5.6 10.6L2 7.3L7 6.6L9 2Z" fill="currentColor" />
  </svg>
);

export const IconBoss = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="8" width="12" height="7" rx="1.5" fill="currentColor" />
    <path d="M6 8V5.5C6 4.1 7.1 3 8.5 3H9.5C10.9 3 12 4.1 12 5.5V8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const IconBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
    <path d="M11 2L13.4 8L20 9L15 13.2L16.5 20L11 16.4L5.5 20L7 13.2L2 9L8.6 8L11 2Z" fill="currentColor" />
  </svg>
);

export const IconFlame = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
    <path d="M11 2C11 2 5 8 5 13C5 16.9 7.7 20 11 20C14.3 20 17 16.9 17 13C17 11.4 16.3 9.9 15.3 8.7C15.3 10.5 14.3 11.2 13.6 10.8C14.3 7.3 12.2 4.3 11 2Z" fill="currentColor" />
  </svg>
);

export const IconTrophy = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
    <rect x="4" y="10" width="14" height="8" rx="2" fill="currentColor" />
    <path d="M7 10V7C7 4.8 8.8 3 11 3C13.2 3 15 4.8 15 7V10" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const IconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 3V17M3 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 34 34" fill="none" aria-hidden="true" {...props}>
    <path d="M17 30C17 30 6 25 6 15C6 9.5 10.5 6 17 6C23.5 6 28 9.5 28 15C28 25 17 30 17 30Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M17 30V17M17 17L11 11M17 17L23 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconDoc = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M5 2.5H12L16 6.5V17.5H5V2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M12 2.5V6.5H16" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7.5 10.5H13.5M7.5 13.5H13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const IconFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M5 2.5V17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M5 3.5H14.5L12 7L14.5 10.5H5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconBellCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M5 14.5V9C5 6.24 6.79 4 10 4C13.21 4 15 6.24 15 9V14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 14.5H16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 17C8.4 17.6 9.1 18 10 18C10.9 18 11.6 17.6 12 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconShieldCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 2.5L16.5 5V9.5C16.5 13.5 13.7 16.7 10 17.5C6.3 16.7 3.5 13.5 3.5 9.5V5L10 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 10L9 12L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconWarnTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 3L18 16.5H2L10 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M10 8.5V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="10" cy="14.3" r="0.9" fill="currentColor" />
  </svg>
);

export const IconWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M2.5 6.5C2.5 5.4 3.4 4.5 4.5 4.5H15.5C16.6 4.5 17.5 5.4 17.5 6.5V14C17.5 15.1 16.6 16 15.5 16H4.5C3.4 16 2.5 15.1 2.5 14V6.5Z" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2.5 8.5H17.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14" cy="12" r="1.1" fill="currentColor" />
  </svg>
);

export const IconFunnel = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M3 3.5H17L12 10.5V16L8 14V10.5L3 3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M3 4.5C3 3.7 3.7 3 4.5 3H15.5C16.3 3 17 3.7 17 4.5V12C17 12.8 16.3 13.5 15.5 13.5H8L4.5 16.5V13.5H4.5C3.7 13.5 3 12.8 3 12V4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconHome = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M3 9.5L10 3.5L17 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8V16H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const IconGradCap = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path d="M10 4L18 8L10 12L2 8L10 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M5.5 9.7V13.5C5.5 14.6 7.5 15.5 10 15.5C12.5 15.5 14.5 14.6 14.5 13.5V9.7" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const LogoMark = ({ dark = false, ...props }: { dark?: boolean } & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
    <path d="M13 24C13 24 4 20 4 12C4 7 8 3 13 3C18 3 22 7 22 12C22 20 13 24 13 24Z" fill={dark ? "#3C8058" : "#2F6844"} />
    <path d="M13 24V14M13 14L8 9M13 14L18 9" stroke={dark ? "#16241D" : "#FAF8F3"} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
