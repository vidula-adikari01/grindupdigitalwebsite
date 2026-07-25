import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PortfolioGrid } from "../../components/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 pb-24 pt-32">
      <Navbar />
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">Portfolio</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Creative work built to make brands credible.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Sort through posts, videos, brand systems, and web directions shaped for growth-ready teams.
          </p>
        </div>
        <PortfolioGrid />
      </section>
      <Footer />
    </main>
  );
}
