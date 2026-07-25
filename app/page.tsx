import { BentoGrid } from "../components/bento-grid";
import { FinalCTA } from "../components/final-cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { LogoMarquee } from "../components/logo-marquee";
import { Navbar } from "../components/navbar";
import { PortfolioGrid } from "../components/portfolio-grid";
import { PricingSection } from "../components/pricing-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Our Work</h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">Selected work directions</p>
          </div>
          <PortfolioGrid />
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
