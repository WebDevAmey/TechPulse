import { launches } from "@/data/launches";
import LaunchCard from "@/components/cards/LaunchCard";

export default function LaunchGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Launch Radar
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            New drops worth your bandwidth.
          </h2>
          <p className="mt-3 text-white/60">
            A quick look at notable AI launches and what they change.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span className="rounded-full border border-white/10 px-4 py-2">
            Filter: All
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2">
            Saved
          </span>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {launches.map((launch) => (
          <LaunchCard key={launch.slug} launch={launch} />
        ))}
      </div>
    </section>
  );
}
