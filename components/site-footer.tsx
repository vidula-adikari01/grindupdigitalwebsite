import Image from "next/image";
import Link from "next/link";
import { navItems } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Image
            src="/logo/GrindUp_logo_white.png"
            width={12345}
            height={4059}
            alt="GrindUp Digital"
            className="mb-5 h-auto w-48"
          />
          <p className="max-w-xl text-sm leading-6 text-white/62">
            Creative digital agency for startups and growing businesses that want to look credible, move faster, and
            build a stronger online presence.
          </p>
        </div>
        <div className="grid gap-3 text-sm font-black text-white/80 sm:grid-flow-col sm:gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-lime">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
