import Link from "next/link";
import type { ReactNode } from "react";

type ArrowCtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "onDark";
  className?: string;
};

const variantClasses: Record<NonNullable<ArrowCtaProps["variant"]>, string> = {
  primary:
    "bg-ink text-bg hover:bg-black",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/60",
  onDark:
    "bg-white text-black hover:bg-accent",
};

export default function ArrowCta({
  href,
  children,
  variant = "primary",
  className = "",
}: ArrowCtaProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="relative inline-flex h-4 w-4 items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute h-4 w-4 -translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-5"
          aria-hidden="true"
        >
          <path
            d="M2 8H14M14 8L9 3M14 8L9 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute h-4 w-4 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0"
          aria-hidden="true"
        >
          <path
            d="M2 8H14M14 8L9 3M14 8L9 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
