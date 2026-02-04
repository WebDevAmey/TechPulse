import { debates } from "@/data/debates";
import DebateCard from "@/components/cards/DebateCard";

export default function DebateSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Debates
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              The arguments shaping tomorrow.
            </h2>
          </div>
          <div className="grid gap-6">
            {debates.map((d) => (
              <DebateCard key={d.topic} debate={d} />
            ))}
          </div>
        </div>
        <div className="glass-panel neon-border rounded-3xl p-6">
          <h3 className="text-lg font-semibold">Live Pulse</h3>
          <p className="mt-2 text-sm text-white/60">
            Community sentiment on the hottest question.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <div>
              <div className="flex items-center justify-between">
                <span>Speed wins</span>
                <span>46%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[46%] rounded-full bg-gradient-to-r from-cyan-200 to-fuchsia-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span>Safety first</span>
                <span>54%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[54%] rounded-full bg-gradient-to-r from-fuchsia-200 to-cyan-200" />
              </div>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full border border-white/15 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-cyan-200 hover:text-white">
            Join Debate
          </button>
        </div>
      </div>
    </section>
  );
}
