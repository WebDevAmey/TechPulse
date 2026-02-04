import Hero from "@/components/hero/Hero";
import LaunchGrid from "@/components/sections/LaunchGrid";
import DebateSection from "@/components/sections/DebateSection";
import ExpertSection from "@/components/sections/ExpertSection";
import TimelineSection from "@/components/sections/TimelineSection";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <Navbar />
      <main className="relative">
        <Hero />
        <LaunchGrid />
        <DebateSection />
        <ExpertSection />
        <TimelineSection />
      </main>
    </div>
  );
}
