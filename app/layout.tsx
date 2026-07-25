import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "../components/smooth-scroll";

export const metadata: Metadata = {
  title: {
    default: "GrindUp Digital | Creative Digital Agency",
    template: "%s | GrindUp Digital",
  },
  description:
    "GrindUp Digital helps startups and growing businesses build polished, credible, growth-ready digital brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
