import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { FadeIn } from "./FadeIn";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      {/* Top border for every row */}
      <div className="border-t border-[var(--color-border)]" />

      <Link
        href={`/work/${project.slug}/`}
        className="group block no-underline"
      >
        <div className="grid grid-cols-[220px_1fr_auto] items-center gap-10 py-10">

          {/* Thumbnail */}
          <div className="w-[220px] h-[148px] bg-[var(--color-surface-secondary)] overflow-hidden relative flex-shrink-0">
            <Image
              src={project.featuredThumbnail}
              alt={project.title}
              fill
              sizes="220px"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Industry + title + tagline */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">
              {project.industry}
            </span>
            <h3 className="text-[20px] font-semibold leading-[1.25] tracking-tight text-[var(--color-text)] mb-3">
              {project.title}
            </h3>
            <p className="text-[var(--color-body)] text-[14px] leading-[1.65] max-w-[400px]">
              {project.tagline}
            </p>
          </div>

          {/* Role + arrow */}
          <div className="flex items-center gap-6 pl-4">
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-2">
                ROLE
              </span>
              <p className="text-[var(--color-muted)] font-semibold text-[14px] leading-[1.3] whitespace-nowrap">
                {project.role}
              </p>
            </div>

            {/* Arrow box */}
            <div className="w-9 h-9 border border-[#e0e0e0] flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all duration-200">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--color-text)] group-hover:text-white transition-colors duration-200"
              >
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </Link>
    </FadeIn>
  );
}