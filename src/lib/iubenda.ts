// Forces the banner to the bottom of the viewport instead of Iubenda's
// default top/float placement, which was rendering on top of our fixed
// header navigation. `slideDown: false` is required alongside the CSS
// override in globals.css for the bottom position to actually apply —
// per Iubenda's own documented fix: https://jsfiddle.net/iSimone/74rwq24p/
export const IUBENDA_BANNER_CONFIG = {
  position: "bottom",
  slideDown: false,
} as const;
