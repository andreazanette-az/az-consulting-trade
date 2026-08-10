type EyebrowProps = {
  children: React.ReactNode;
  tone?: "ink" | "white" | "accent";
  className?: string;
};

export default function Eyebrow({ children, tone = "ink", className = "" }: EyebrowProps) {
  const toneClass =
    tone === "white" ? "text-white/70" : tone === "accent" ? "text-ink" : "text-gray";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={tone === "accent" ? "h-1.5 w-1.5 bg-accent" : "h-1.5 w-1.5 bg-gray"}
        aria-hidden="true"
      />
      <span
        className={`text-xs font-medium uppercase tracking-[0.24em] ${toneClass}`}
      >
        {children}
      </span>
    </div>
  );
}
