type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, text, inverse = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl lg:mb-14">
      <p className={`mb-4 text-xs font-black uppercase tracking-[0.18em] ${inverse ? "text-lime" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2 className={`copy-balance text-4xl font-black leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl ${inverse ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 max-w-2xl text-base leading-7 ${inverse ? "text-white/64" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}
