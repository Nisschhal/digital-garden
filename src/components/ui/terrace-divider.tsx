/**
 * The page's one signature geometric motif: a smooth, gently-curved
 * diagonal edge, reused everywhere two section colors meet. Same overall
 * tilt/direction as the original stepped terrace idea, just resolved as
 * one continuous sweep instead of a hard staircase.
 */
export default function TerraceDivider({
  fill = "#E7EFE3",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute left-0 right-0 -bottom-px w-full h-[clamp(24px,4vw,52px)] leading-none z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
        className={`w-full h-full block ${flip ? "-scale-x-100" : ""}`}
      >
        <path
          d="M0,60 C 400,55 750,10 1200,0 L1200,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
