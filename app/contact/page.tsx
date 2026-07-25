import type { Metadata } from "next";
import { ContactForm } from "../../components/contact-form";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { contactDetails, socialLinks } from "../../data/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect width="16" height="16" x="4" y="4" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M15.8 3.5c.4 2.3 1.8 3.8 4.1 4.1v3.1a7.2 7.2 0 0 1-4-1.2v5.7c0 3.2-2.4 5.4-5.5 5.4-2.9 0-5.2-2-5.2-4.8 0-3 2.4-5 5.5-5 .4 0 .7 0 1 .1v3.3c-.3-.1-.7-.2-1.1-.2-1.2 0-2 .7-2 1.7s.8 1.7 1.9 1.7c1.2 0 2-.7 2-2.1V3.5h3.3Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.7 8.8H3.9v11h2.8v-11ZM5.3 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.3 4Zm15 9.5c0-3-1.6-4.9-4.1-4.9-1.7 0-2.7.9-3.1 1.7V8.8h-2.8v11h2.8v-6c0-1.6.8-2.7 2.2-2.7s2.1 1 2.1 2.7v6h2.9v-6.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14 8h2.3V4.4A15 15 0 0 0 13 4c-3.2 0-5.3 1.9-5.3 5.3V12H4.2v4h3.5v4h4.2v-4h3.4l.6-4h-4V9.7c0-1.1.3-1.7 2.1-1.7Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <section className="relative overflow-hidden px-4 pb-24 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_0.75fr] lg:items-start">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              Contact details
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Tell us what needs to change about your brand presence.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              Share where the brand feels stuck. We’ll help map the next practical move across content, video, brand,
              web, and growth strategy.
            </p>
            <div className="grid gap-3 text-zinc-400">
              <a href={`mailto:${contactDetails.email}`} className="text-white transition hover:text-lime">
                {contactDetails.email}
              </a>
              <a href={`tel:${contactDetails.phoneHref}`} className="text-white transition hover:text-lime">
                {contactDetails.phoneDisplay}
              </a>
              <span>Strategy, content, video, brand, web, and performance creative.</span>
            </div>

            <div className="inline-flex w-fit flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 backdrop-blur">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Follow our socials</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
