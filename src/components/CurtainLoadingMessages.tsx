import type React from 'react'

export const LOADING_MESSAGES: { message: string; icon: React.ReactNode }[] = [
  {
    message: 'Tuning the piano',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Tuning the piano</title>
        <path d="M4 8h7v18H4zM12.5 8h7v18h-7zM21 8h7v18h-7z" />
        <path d="M8.5 8h5v12h-5zM17 8h5v12h-5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    message: 'Decorating the venue',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Decorating the venue</title>
        <path d="M16 14v14" />
        <path d="M16 3c1.5 2 3.5 3 3 6M16 3c-1.5 2-3.5 3-3 6" />
        <path d="M19 6c1.5 2 1 4-1 5M13 6c-1.5 2-1 4 1 5" />
        <path d="M20 9c0.5 2-1 5-4 5M12 9c-0.5 2 1 5 4 5" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
        <path d="M13 24c-3-0.5-5 1-6 0" />
        <path d="M19 24c3-0.5 5 1 6 0" />
      </svg>
    ),
  },
  {
    message: 'Setting up the stage',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Setting up the stage</title>
        <path d="M4 6v2c1 0 2 2 2 16h20c0-14 1-16 2-16V6H4z" />
        <path d="M6 18c-1 2-1 4 0 6" />
        <path d="M26 18c1 2 1 4 0 6" />
        <path d="M8 24h16" />
        <path d="M6 10c1-1 2-2 2-4" />
        <path d="M26 10c-1-1-2-2-2-4" />
      </svg>
    ),
  },
  {
    message: 'Adjusting the spotlights',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Adjusting the spotlights</title>
        <path d="M16 4l-7 14h14z" />
        <path d="M13 18l-3 4h12l-3-4" fill="currentColor" opacity="0.15" />
        <path d="M13 18l-3 4h12l-3-4" />
        <ellipse cx="16" cy="26" rx="6" ry="2" />
        <path d="M10 26c0 0-2 1-2 3M22 26c0 0 2 1 2 3" />
      </svg>
    ),
  },
  {
    message: 'Polishing the silverware',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Polishing the silverware</title>
        <path d="M10 6l2 6-0.5 18M16 6l-2 6 0.5 18" />
        <path d="M9 12h4" />
        <path d="M10 6c1 0 2-1 2-2" />
        <path d="M15.5 8l2 4v20" />
        <path d="M15 15c2 0 4 1 5 3" />
        <path d="M19.5 6l-1 7c0 2 1 3 2 3" />
        <path d="M18 10l-1-5c0-1 1-2 2-2" />
      </svg>
    ),
  },
  {
    message: 'Ironing the tablecloths',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Ironing the tablecloths</title>
        <path d="M4 10h24" />
        <path d="M5 18h22" />
        <path d="M4 10v-3c0-1 1-2 2-2h2" />
        <path d="M28 10v-3c0-1-1-2-2-2h-2" />
        <path d="M6 18l-1 5c0 1 1 2 2 2M26 18l1 5c0 1-1 2-2 2" />
        <path d="M8 25c1 0 2-1 2-2v-5" />
        <path d="M14 25c1 0 2-1 2-2v-5" />
        <path d="M20 25c1 0 2-1 2-2v-5" />
        <path d="M16 6v4" />
        <path d="M12 6v2M20 6v2" />
      </svg>
    ),
  },
  {
    message: 'Arranging the seating chart',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Arranging the seating chart</title>
        <path d="M9 6v12c0 2 1.5 3 3 3h1" />
        <path d="M9 8c1.5 0 3-1 3-1" />
        <path d="M14 18v2c0 1-1 2-2 2h-2" />
        <path d="M10 22v2" />
        <path d="M16 22v2" />
        <path d="M8 10h2v8h-2" />
        <path d="M8 14c-2 0-3 2-3 4v2c0 1 1 2 2 2" />
        <path d="M5 22v-2c0-1-1-1-1 0" />
      </svg>
    ),
  },
  {
    message: 'Rolling out the red carpet',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Rolling out the red carpet</title>
        <path d="M6 28c2-4 4-8 6-12s4-8 8-10c4-2 8 2 6 6" />
        <path d="M7 26c2-4 4-8 7-12s6-6 10-6" />
        <path d="M6 28c1-1 2-2 4-2s4 2 6 2s4-2 6-2s4 2 6 2" />
        <path d="M12 28c1-1 2-2 4-2" />
        <path d="M22 28c-1-1-2-2-4-2" />
      </svg>
    ),
  },
  {
    message: 'Testing the microphones',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Testing the microphones</title>
        <rect x="13" y="4" width="6" height="10" rx="3" />
        <path d="M12 14v4c0 2 2 4 4 4s4-2 4-4v-4" />
        <path d="M16 18v8" />
        <path d="M10 22h12" />
        <path d="M11 24c-1 1-1 3 0 4M21 24c1 1 1 3 0 4" />
      </svg>
    ),
  },
  {
    message: 'Cueing the bridal chorus',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Cueing the bridal chorus</title>
        <circle cx="10" cy="22" r="3" />
        <path d="M13 22v-12" />
        <path d="M13 10c2-1 4-4 4-4" />
        <path d="M13 14c2 0 4-2 5-4" />
        <circle cx="20" cy="18" r="3" />
        <path d="M23 18v-8" />
        <path d="M23 10c2-1 4-3 4-3" />
      </svg>
    ),
  },
  {
    message: 'Steaming the wedding dress',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Steaming the wedding dress</title>
        <path d="M14 5h4c0 2-1 3-1 4" />
        <path d="M13 9c0 2 1 4 3 4s3-2 3-4" />
        <path d="M11 9c-2 0-4 3-4 6l2 16h14l2-16c0-3-2-6-4-6" />
        <path d="M10 15h12" />
        <path d="M12 15v10M20 15v10" />
        <path d="M16 13v2" />
      </svg>
    ),
  },
  {
    message: 'Tying the bowties',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Tying the bowties</title>
        <path d="M16 14l-8-6 2-4 14 6-8 4z" />
        <path d="M16 14l8-6-2-4-14 6 8 4z" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
        <path d="M14 14l-2 4M18 14l2 4" />
        <path d="M12 18c-2 1-3 3-2 5" />
        <path d="M20 18c2 1 3 3 2 5" />
      </svg>
    ),
  },
  {
    message: "Shining the groom's shoes",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Shining the groom&apos;s shoes</title>
        <path d="M8 16c2-1 4-1 5 0l2 6c1 0 2 0 3 1l6 4" />
        <path d="M24 27c-1-1-2-3-2-5l-1-6h-4" />
        <path d="M8 16c-1 1-2 3-2 5v4c0 1 1 2 2 2" />
        <path d="M6 25c0-3 1-7 2-9" />
        <path d="M4 27h4" />
        <path d="M29 27h-5" />
      </svg>
    ),
  },
  {
    message: 'Fixing the bridal veil',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Fixing the bridal veil</title>
        <path d="M16 6c-4-3-10-1-10 4 0 5 6 8 10 4s8-9 10-4c2 5-6 8-10 4" fill="currentColor" opacity="0.12" />
        <path d="M16 6c-4-3-10-1-10 4 0 5 6 8 10 4s8-9 10-4c2 5-6 8-10 4" />
        <path d="M6 10c-2 4-1 8 2 10" />
        <path d="M26 10c2 4 1 8-2 10" />
        <path d="M8 14c-1 3 0 6 2 8" />
        <path d="M24 14c1 3 0 6-2 8" />
      </svg>
    ),
  },
  {
    message: 'Pinning the boutonnieres',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Pinning the boutonnieres</title>
        <circle cx="13" cy="11" r="3" />
        <path d="M10 14v4" />
        <path d="M13 9c1-1 2-2 2-3M16 6c1-1 2-2 2-1" />
        <path d="M22 6l-4 8" />
        <circle cx="22" cy="6" r="1.5" fill="currentColor" />
        <path d="M10 11c-1 1-2 3-1 4" />
        <path d="M16 11c1 1 2 3 1 4" />
        <circle cx="13" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    message: 'Frosting the wedding cake',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Frosting the wedding cake</title>
        <path d="M8 26h16v2H8z" />
        <path d="M10 18h12v8H10z" />
        <path d="M12 12h8v6h-8z" />
        <path d="M14 6h4v6h-4z" />
        <path d="M13 6l3-2 3 2" />
        <circle cx="16" cy="3" r="1" fill="currentColor" />
        <path d="M10 20c0 1-1 2-2 2M22 20c0 1 1 2 2 2" />
      </svg>
    ),
  },
  {
    message: 'Chilling the champagne',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Chilling the champagne</title>
        <path d="M12 6v4c0 4 2 6 2 8" />
        <path d="M14 18v6c0 2-1 3-2 3h-2" />
        <path d="M10 27h8" />
        <path d="M10 6h4c2 0 3 2 2 4" />
        <path d="M14 10c2-2 3-4 2-6" />
        <path d="M20 12l3-4" />
        <path d="M23 8h4v12c0 2-2 4-4 4" />
        <path d="M19 24h8" />
        <path d="M21 12l-1 12" />
      </svg>
    ),
  },
  {
    message: 'Stacking the cocktail glasses',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Stacking the cocktail glasses</title>
        <path d="M8 6l6 10-6 10" />
        <path d="M14 6l-6 10 6 10" />
        <path d="M11 26v2" />
        <path d="M8 28h6" />
        <path d="M18 4l5 9-5 9" />
        <path d="M23 4l-5 9 5 9" />
        <path d="M20.5 22v2" />
        <path d="M18 24h5" />
      </svg>
    ),
  },
  {
    message: 'Arranging the guest favors',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Arranging the guest favors</title>
        <path d="M8 18h16v10H8z" />
        <path d="M16 18v-8" />
        <path d="M8 18l-2-4h4M24 18l2-4h-4" />
        <path d="M10 14l2-3h8l2 3" />
        <path d="M16 11c-1-2-1-4 0-5s2-1 3 0c1 2 1 4-3 5z" />
        <circle cx="16" cy="6" r="1" fill="currentColor" />
        <path d="M13 11c-2 0-3 2-3 3s1 3 3 3M19 11c2 0 3 2 3 3s-1 3-3 3" />
      </svg>
    ),
  },
  {
    message: 'Lighting the banquet candles',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        <title>Lighting the banquet candles</title>
        <path d="M14 6h4v18h-4z" />
        <path d="M16 3c-1 0-2 1-2 2s1 1 2 1 2-1 2-2-1-2-2-2z" fill="currentColor" />
        <path d="M17 3.5c0.5-0.5 1.5-1 2-0.5M15 3.5c-0.5-0.5-1.5-1-2-0.5" />
        <path d="M18.5 3l0.5 2M13.5 3l-0.5 2" />
        <path d="M12 18c-3 0-4 2-3 4M20 18c3 0 4 2 3 4" />
        <path d="M10 22c-2 1-2 3-1 4M22 22c2 1 2 3 1 4" />
      </svg>
    ),
  },
]
