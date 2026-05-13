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
};

export const projects: Project[] = [
  {
    slug: "mst",
    title: "mySecondTeacher",
    industry: "ED-TECH",
    tagline:
      "A formal education platform designed to support digital learning through diagnostic assessments, structured learning paths, and interactive educational experiences.",
    featuredThumbnail: "/images/mst-featured-thumb.png",
    coverImage: "/images/MST.png",
    featured: true,
    role: "Product Owner, Design Team Lead",
    timeline: "2019 — 2023",
    tools: "Figma, Sketch",
  },
  {
    slug: "meromomma",
    title: "MeroMomma",
    industry: "MATERNAL HEALTH / E-COMMERCE",
    tagline:
      "A mobile app and e-commerce platform offering health tools, curated products, and community support for expecting and new parents in Nepal.",
    featuredThumbnail: "/images/meromomma-featured-thumb.png",
    coverImage: "/images/meromomma.png",
    featured: true,
    role: "Product Owner, Project Manager",
    timeline: "2021 — 2023",
    tools: "Figma, Jira, Google Docs",
  },
  {
    slug: "medilink",
    title: "Medilink Network",
    industry: "HEALTHCARE",
    tagline:
      "A digital ecosystem designed to automate and streamline the healthcare industry in the Philippines across six interconnected portals.",
    featuredThumbnail: "/images/medilink-featured-thumb.png",
    coverImage: "/images/medilink.png",
    featured: true,
    role: "Design Team Lead",
    timeline: "2017 — 2019",
    tools: "Sketch, InVision, InDesign, HTML/CSS",
  },
  {
    slug: "inova",
    title: "Inova DD",
    industry: "BIOPHARMA",
    tagline:
      "Redesigned a legacy due diligence platform for scientists and experts in the fields, then led full-scale frontend and backend development.",
    featuredThumbnail: "/images/inova-featured-thumb.png",
    coverImage: "/images/inova.png",
    featured: true,
    role: "Design Team Lead, Project Manager",
    timeline: "2022 — 2024",
    tools: "Figma, Bootstrap, HTML/CSS, Jira, Teams",
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

/**
 * Order used for "Next project" navigation on case study pages.
 * MST → MeroMomma → Medilink → Inova → MST
 */
export function getNextProject(currentSlug: string): Project {
  const order = ["mst", "meromomma", "medilink", "inova"];
  const idx = order.indexOf(currentSlug);
  const nextSlug = order[(idx + 1) % order.length];
  return getProjectBySlug(nextSlug)!;
}