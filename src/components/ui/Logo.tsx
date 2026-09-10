import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "ink" | "white";
  priority?: boolean;
  markClassName?: string;
  textClassName?: string;
};

const MARK_ASPECT = 719 / 374;

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
      width={719}
      height={374}
      priority={priority}
      className={className}
      style={{ aspectRatio: MARK_ASPECT }}
    />
  );
}

export default function Logo({
  className = "",
  tone = "ink",
  priority = false,
  markClassName = "h-6 w-auto sm:h-7",
  textClassName = "text-[13px] sm:text-[14px]",
}: LogoProps) {
  const textColor = tone === "white" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} tone={tone} priority={priority} />
      <span
        className={`font-display font-semibold uppercase leading-none tracking-[0.08em] ${textClassName} ${textColor}`}
      >
        AZ Consulting
        <span className="mx-1 font-normal opacity-50">&amp;</span>
        Trade
      </span>
    </span>
  );
}
