import Image from "next/image";

/**
 * Intrinsic dimensions of each blueprint asset, so next/image can compute
 * layout without cropping/stretching — display size is then driven purely
 * by the `width` prop via CSS, independent of the source resolution.
 */
const ASSETS = {
  "robotic-arm": {
    src: "/assets/images/blueprints/robotic-arm.png",
    width: 1100,
    height: 733,
  },
  "technical-drawing": {
    src: "/assets/images/blueprints/technical-drawing.png",
    width: 674,
    height: 918,
  },
  press: {
    src: "/assets/images/blueprints/press.png",
    width: 710,
    height: 910,
  },
  "assembly-line": {
    src: "/assets/images/blueprints/assembly-line.png",
    width: 682,
    height: 920,
  },
} as const;

type BlueprintDecorationProps = {
  image: keyof typeof ASSETS;
  /** Which side of the section it hugs and bleeds toward. */
  position?: "left" | "right";
  /** Target display width in px at desktop; scales down fluidly below that. */
  width?: number;
  opacity?: number;
  rotation?: number;
  /** Vertical center of the decoration, as a CSS length (e.g. "50%", "40%"). */
  top?: string;
  /** "radial" fades on all sides; "edge" stays fuller near the bled edge and fades toward the content. */
  mask?: "radial" | "edge";
  className?: string;
};

export default function BlueprintDecoration({
  image,
  position = "right",
  width = 640,
  opacity = 0.1,
  rotation = 0,
  top = "50%",
  mask = "radial",
  className = "",
}: BlueprintDecorationProps) {
  const asset = ASSETS[image];

  const maskImage =
    mask === "edge"
      ? position === "right"
        ? "linear-gradient(to left, black 20%, transparent 85%)"
        : "linear-gradient(to right, black 20%, transparent 85%)"
      : "radial-gradient(ellipse at center, black 25%, transparent 72%)";

  const bleed = position === "right" ? "14%" : "-14%";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden select-none md:block ${
        position === "right" ? "right-0" : "left-0"
      } ${className}`}
      style={{
        top,
        width: `clamp(300px, 40vw, ${width}px)`,
        opacity,
        transform: `translateY(-50%) translateX(${bleed}) rotate(${rotation}deg)`,
        maskImage,
        WebkitMaskImage: maskImage,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        mixBlendMode: "screen",
        filter: "grayscale(1)",
      }}
    >
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        className="h-auto w-full"
        sizes={`${width}px`}
      />
    </div>
  );
}
