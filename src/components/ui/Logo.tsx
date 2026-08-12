import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "ink" | "white";
  priority?: boolean;
};

const MARK_ASPECT = 574 / 420;

const markSrc: Record<NonNullable<LogoProps["tone"]>, string> = {
  ink: "/assets/logo-mark-black.png",
  white: "/assets/logo-mark-white.png",
};

export function LogoMark({
  className = "h-6 w-auto",
  tone = "ink",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={markSrc[tone]}
      alt=""
      aria-hidden="true"
      width={574}
      height={420}
      priority={priority}
      className={className}
      style={{ aspectRatio: MARK_ASPECT }}
    />
  );
}

export default function Logo({ className = "", tone = "ink", priority = false }: LogoProps) {
  const textColor = tone === "white" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-6 w-auto sm:h-7" tone={tone} priority={priority} />
      <span
        className={`font-display text-[13px] font-semibold uppercase leading-none tracking-[0.08em] sm:text-[14px] ${textColor}`}
      >
        AZ Consulting
        <span className="mx-1 font-normal opacity-50">&amp;</span>
        Trade
      </span>
    </span>
  );
}
