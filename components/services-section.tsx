import { services } from "../data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Creative systems for brands that are ready to look serious."
            text="One connected team for strategy, content, production, design, and launch execution."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04} className={index < 2 ? "lg:col-span-2" : ""}>
                <article className="group h-full rounded-[8px] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_70px_rgba(17,19,33,0.08)]">
                  <div className="mb-12 inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-ink text-white transition group-hover:bg-brand">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
