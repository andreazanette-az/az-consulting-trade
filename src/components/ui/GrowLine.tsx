"use client";

import { useEffect, useRef, useState } from "react";

type GrowLineProps = {
  className?: string;
  delay?: number;
};

export default function GrowLine({ className = "", delay = 0 }: GrowLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-line={revealed ? "revealed" : undefined}
      style={{ transitionDelay: `${delay}ms` }}
      className={`h-px w-full bg-gray-light ${className}`}
    />
  );
}
