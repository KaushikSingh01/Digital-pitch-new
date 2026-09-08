// Decorative animated background — abstract gradient "aurora" blobs.
// Pure CSS, fixed behind content, motion-safe (still if reduced-motion).
export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-[10%] -top-[10%] h-[45rem] w-[45rem] rounded-full bg-electric-500/20 blur-[120px] motion-safe:animate-aurora-a" />
      <div className="absolute right-[-15%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-violet-500/16 blur-[130px] motion-safe:animate-aurora-b" />
      <div className="absolute bottom-[-15%] left-[25%] h-[38rem] w-[38rem] rounded-full bg-cyan-500/14 blur-[120px] motion-safe:animate-aurora-c" />
      {/* faint moving grid for depth */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35]" />
    </div>
  );
}
