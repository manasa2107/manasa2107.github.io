type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-accent-cyan shadow-soft backdrop-blur">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-300">{subtitle}</p> : null}
    </div>
  );
}
