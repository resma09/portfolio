"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
  showBg?: boolean;
  aspectRatio?: string;
};

export function ImageWithCaption({
  src,
  alt,
  caption,
  wide = false,
  showBg = true,
  aspectRatio = "16/10"
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={wide ? "image-width" : ""}>
      <div
        className={`relative overflow-hidden group ${showBg ? 'bg-[#F7F7F7]' : ''}`}
        style={{ aspectRatio }}
      >
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          /* Placeholder shown when image file doesn't exist yet */
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-muted)]">
              {alt}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-[13px] text-[var(--color-muted)] mt-3 leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}