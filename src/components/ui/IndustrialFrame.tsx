"use client";

import Image from "next/image";
import { useState } from "react";

type IndustrialFrameProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Drop the real photograph at `src` (inside /public) and it renders
 * automatically. Until then, a styled technical placeholder is shown
 * so the layout is easy to review before assets are final.
 */
export default function IndustrialFrame({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
}: IndustrialFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-light ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col justify-between bg-[#e9e9e6] p-5">
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.35]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id={`grid-${src}`}
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M32 0H0V32"
                  fill="none"
                  stroke="#c6c6c1"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${src})`} />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#c6c6c1" strokeWidth="1" />
          </svg>
          <span className="relative text-[10px] font-medium uppercase tracking-[0.2em] text-gray">
            AZ · CT
          </span>
          <span className="relative max-w-[70%] text-[11px] uppercase tracking-[0.14em] text-gray">
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
