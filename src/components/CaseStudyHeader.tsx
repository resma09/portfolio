"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export function CaseStudyHeader({ project }: Props) {
  return (
    <header>
      {/* ── Title block — padded below fixed nav (h-24 = 96px) ── */}
      <div
        className="content-width"
        style={{ paddingTop: "136px", paddingBottom: "32px" }}
      >
        <span className="block font-mono text-[11px] leading-4 uppercase tracking-[0.06em] text-[var(--color-muted)] mb-4">
          {project.industry}
        </span>

        <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] max-w-[720px] mb-5">
          {project.title}
        </h1>

        <p className="text-[16px] leading-[1.75] text-[#2D2D2D] max-w-[520px] mb-10">
          {project.tagline}
        </p>

        {/* Cover image — inside content-width */}
        <div
          className="w-full relative overflow-hidden bg-[#F7F7F7]"
          style={{ height: "min(55vw, 560px)" }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Metadata row */}
        <div className="flex flex-wrap border-t border-[var(--color-border)] mt-12">
          {[
            { label: "ROLE", value: project.role },
            { label: "TIMELINE", value: project.timeline },
            { label: "INDUSTRY", value: project.industry },
            { label: "TOOLS USED", value: project.tools },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="py-8 pr-12 md:pr-24 last:pr-0"
            >
              <span className="block font-mono text-[11px] leading-4 uppercase tracking-[0.06em] text-[var(--color-muted)] mb-2">
                {label}
              </span>
              <p className="text-[16px] font-semibold text-[#161616] leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}