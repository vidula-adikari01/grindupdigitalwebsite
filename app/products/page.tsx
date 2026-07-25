import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PricingSection } from "../../components/pricing-section";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-20">
      <Navbar />
      <PricingSection />
      <Footer />
    </main>
  );
}
