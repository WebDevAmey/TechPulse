import { experts } from "@/data/experts";
import ExpertQuoteCard from "@/components/cards/ExpertQuoteCard";

export default function ExpertSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Expert Layer
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Signals from the people building the future.
          </h2>
        </div>
        <div className="text-sm text-white/60">
          Curated notes, refreshed weekly.
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experts.map((e) => (
          <ExpertQuoteCard key={e.name} quote={e} />
        ))}
      </div>
    </section>
  );
}
