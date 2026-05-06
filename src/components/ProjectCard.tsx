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
      {/* Top border for desktop list view */}
      <div className="hidden md:block border-t border-[var(--color-border-soft)]" />

      <Link
        href={`/work/${project.slug}/`}
        className="group block no-underline"
      >
        <div className="flex flex-col md:grid md:grid-cols-[220px_1fr_auto] items-start md:items-center gap-6 md:gap-10 py-10 md:py-10 px-0 border-b md:border-b-0 border-[var(--color-border-soft)]">

          {/* Thumbnail */}
          <div className="w-full md:w-[220px] h-[240px] md:h-[148px] bg-surface-secondary overflow-hidden relative flex-shrink-0 rounded-lg md:rounded-none">
            <Image
              src={project.featuredThumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 220px"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Industry + title + tagline */}
          <div className="flex-grow">
            <span className="block font-mono text-[11px] md:text-[13px] leading-tight uppercase tracking-wider text-muted mb-2 md:mb-3">
              {project.industry}
            </span>
            <h3 className="text-[20px] md:text-[24px] font-semibold leading-tight tracking-tight text-header mb-2 md:mb-3">
              {project.title}
            </h3>
            <p className="text-body text-[14px] md:text-[15px] leading-relaxed max-w-[480px]">
              {project.tagline}
            </p>
          </div>

          {/* Role + arrow */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-6 pt-2 md:pt-0">
            <div className="md:pl-4">
              <span className="block font-mono text-[11px] md:text-[13px] leading-tight uppercase tracking-wider text-muted mb-1 md:mb-2">
                ROLE
              </span>
              <p className="text-muted font-semibold text-[13px] md:text-[14px] leading-tight whitespace-nowrap">
                {project.role}
              </p>
            </div>

            {/* Arrow box */}
            <div className="w-10 h-10 md:w-9 md:h-9 border border-[var(--color-border-soft)] flex items-center justify-center flex-shrink-0 rounded-full md:rounded-none group-hover:bg-black group-hover:border-black transition-all duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-header group-hover-white transition-colors duration-200"
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