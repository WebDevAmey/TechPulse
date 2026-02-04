import { timelines } from "@/data/timelines";
import TimelineCard from "@/components/cards/TimelineCard";

export default function TimelineSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Trend Line
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Track the shifts before they surface.
          </h2>
        </div>
        <button className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-fuchsia-200 hover:text-white">
          View Archive
        </button>
      </div>
      <div className="mt-10 space-y-8">
        {timelines.map((t) => (
          <TimelineCard key={t.date} event={t} />
        ))}
      </div>
    </section>
  );
}
