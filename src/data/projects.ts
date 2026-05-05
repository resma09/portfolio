export type Project = {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  featuredThumbnail: string;
  coverImage: string;
  featured: boolean;
  role: string;
  timeline: string;
  tools: string;
  deliverable: string;
  topOutcome: string;
};

export const projects: Project[] = [
  {
    slug: "mst",
    title: "mySecondTeacher",
    industry: "ED-TECH",
    tagline:
      "Scaling Global Ed-Tech with Localized Design. An interactive video player with embedded quiz checkpoints and diagnostic tools.",
    featuredThumbnail: "/images/mst-featured-thumb.png",
    coverImage: "/images/mst.png",
    featured: true,
    role: "Product Owner, Design Team Lead",
    timeline: "2019 – 2023",
    tools: "Figma, Sketch",
    deliverable: "Ed-Tech",
    topOutcome: "500+ schools adopted across Nepal and SE Asia.",
  },
  {
    slug: "meromomma",
    title: "Meromomma",
    industry: "CONSUMER",
    tagline:
      "Building a pregnancy and parenting platform that brings health tools, shopping, community, and expert access together for Nepali parents.",
    featuredThumbnail: "/images/meromomma-featured-thumb.png",
    coverImage: "/images/meromomma.png",
    featured: true,
    role: "Project Manager",
    timeline: "2021 – 2022",
    tools: "Figma",
    deliverable: "Consumer App",
    topOutcome: "10k+ active users within 3 months of launch.",
  },
  {
    slug: "medilink",
    title: "Medilink Network",
    industry: "HEALTHCARE",
    tagline:
      "Unifying six fragmented healthcare portals into one consistent, trustworthy ecosystem for patients, doctors, and providers.",
    featuredThumbnail: "/images/medilink-featured-thumb.png",
    coverImage: "/images/medilink.png",
    featured: true,
    role: "Design Team Lead",
    timeline: "2020 – 2021",
    tools: "Figma, Miro",
    deliverable: "Web Platform",
    topOutcome: "Unified 6 portals into a single trusted ecosystem.",
  },
  {
    slug: "inova",
    title: "Inova DD",
    industry: "BIO PHARMA",
    tagline:
      "Redesigning a legacy biopharma compliance platform — replacing document-heavy workflows with a structured, intuitive system.",
    featuredThumbnail: "/images/inova-featured-thumb.png",
    coverImage: "/images/inova.png",
    featured: true,
    role: "Project Manager",
    timeline: "2022 – 2023",
    tools: "Figma",
    deliverable: "Enterprise SaaS",
    topOutcome: "Reduced compliance workflow time by 40%.",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}