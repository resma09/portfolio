import type { Project } from "@/data/projects";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="pt-24 pb-16 md:pt-36 md:pb-24">
      <div className="content-width">
        {/* Industry Label */}
        <span className="block font-mono text-[11px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-8">
          {project.industry}
        </span>

        {/* Title */}
        <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight max-w-[800px] mb-8">
          {project.title}
        </h1>

        {/* Tagline */}
        <p className="text-[var(--color-muted)] text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-16">
          {project.tagline}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[#e8e8e8] pt-12">
          <div>
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-3">
              Role
            </span>
            <p className="font-semibold text-[15px]">{project.role}</p>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-3">
              Timeline
            </span>
            <p className="font-semibold text-[15px]">{project.timeline}</p>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-3">
              Country
            </span>
            <p className="font-semibold text-[15px]">
              {project.country || "Nepal"}
            </p>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-3">
              Platform
            </span>
            <p className="font-semibold text-[15px]">
              {project.platform || "Web, Mobile"}
            </p>
          </div>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="content-width mt-20">
        <div 
          className="aspect-[16/8] flex items-center justify-center text-white/20 text-sm"
          style={{ backgroundColor: project.heroColor || "#f5f5f5" }}
        >
          Cover image — {project.title}
        </div>
      </div>
    </header>
  );
}
