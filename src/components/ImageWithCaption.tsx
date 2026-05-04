type ImageWithCaptionProps = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
};

export function ImageWithCaption({
  src,
  alt,
  caption,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      {/* Placeholder for actual image */}
      <div className="aspect-[16/10] bg-[#f5f5f5] flex items-center justify-center text-[var(--color-muted)] text-[10px] font-mono tracking-widest text-center px-10 uppercase">
        {alt}
      </div>
      {caption && (
        <figcaption className="text-[12px] text-[var(--color-muted)] mt-4 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
