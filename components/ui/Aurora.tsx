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
      {/* film grain — breaks digital flatness for a premium feel */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
