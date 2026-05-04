type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-muted)] mt-2 max-w-[540px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
