/**
 * Two fixed vertical hairlines pinned to the edges of the page's 1180px
 * content column, running the full height of the page. Deliberately a
 * `position: fixed` overlay rather than a wrapping container — a
 * wrapping div would cap every section's own full-bleed background
 * (mist, terrace-deep, the hero gradient) at 1180px along with it.
 * This way the rails mark the column without touching layout or
 * backgrounds at all: content and layout are fixed, backgrounds aren't.
 */
export default function GridRails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5]" aria-hidden="true">
      <div className="relative mx-auto h-full max-w-[1180px]">
        <div className="absolute inset-y-0 left-0 w-px bg-border/20" />
        <div className="absolute inset-y-0 right-0 w-px bg-border/20" />
      </div>
    </div>
  );
}
