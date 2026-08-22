// Renders the banner as a compact floating box docked bottom-center,
// instead of a full-width bar. Being bottom-anchored, it doesn't overlap
// our fixed header navigation (unlike Iubenda's default top placement).
export const IUBENDA_BANNER_CONFIG = {
  position: "float-bottom-center",
} as const;
