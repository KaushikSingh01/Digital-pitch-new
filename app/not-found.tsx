import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
      <div className="container-x text-center">
        <p className="text-7xl font-black tracking-tighter text-gradient-blue sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">Back to Home</Button>
          <Link href="/#services" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            Browse services →
          </Link>
        </div>
      </div>
    </section>
  );
}
