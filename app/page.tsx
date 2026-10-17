import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoGrid } from "../components/bento-grid";
import { FinalCTA } from "../components/final-cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { PricingSection } from "../components/pricing-section";
import { VideoShowcase } from "../components/video-showcase";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <BentoGrid />
      <section className="py-24">
        <div className="mx-auto mb-12 max-w-6xl space-y-4 px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">Real results from content we&apos;ve made.</p>
        </div>
        <VideoShowcase />
        <div className="mt-12 flex justify-center px-4">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-8 text-base font-semibold text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <PricingSection />
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">What our clients say</h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Built for teams that need clarity, quality, and consistent output.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["GrindUp helped us finally look like the company we were becoming.", "Startup founder"],
              ["The strategy was clear, the content looked sharp, and the process was easy to follow.", "Local service brand"],
              ["They turned scattered ideas into a brand presence we could actually use every week.", "Growing business owner"],
            ].map(([quote, name]) => (
              <blockquote key={quote} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="mb-8 text-lg font-semibold leading-8 text-white">“{quote}”</p>
                <cite className="not-italic text-sm font-medium text-zinc-500">{name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
