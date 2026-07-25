"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { strategySteps } from "../data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function StrategySection() {
  const [active, setActive] = useState(strategySteps[0]);

  return (
    <section className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our strategy"
            title="Audit the gaps. Build the assets. Scale the presence."
            text="A practical sequence for moving from scattered online activity to a brand system that compounds."
            inverse
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[0.78fr_1fr]">
          <Reveal>
            <div className="grid gap-3">
              {strategySteps.map((step) => {
                const isActive = active.key === step.key;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => setActive(step)}
                    className={`rounded-[8px] border p-5 text-left transition ${
                      isActive
                        ? "border-lime bg-lime text-ink"
                        : "border-white/14 bg-white/6 text-white/68 hover:bg-white/10"
                    }`}
                  >
                    <span className="block text-2xl font-black tracking-[-0.03em]">{step.title}</span>
                    <span className="mt-2 block text-sm font-semibold leading-6">{step.text}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[390px] overflow-hidden rounded-[8px] border border-white/14 bg-white/8 p-6">
              <div className="surface-grid absolute inset-0 opacity-20" aria-hidden="true" />
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative grid h-full content-between"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan">Current phase</p>
                  <h3 className="mt-4 text-5xl font-black tracking-[-0.05em]">{active.title}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{active.text}</p>
                </div>
                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                  {["Clarity", "Creative", "Conversion"].map((item) => (
                    <div key={item} className="rounded-[8px] border border-white/14 bg-ink/50 p-4">
                      <p className="text-sm font-black">{item}</p>
                      <div className="mt-5 h-2 rounded-full bg-white/12">
                        <div className="h-2 rounded-full bg-brand" style={{ width: item === "Creative" ? "82%" : "68%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
