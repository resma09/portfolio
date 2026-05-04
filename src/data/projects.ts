export type Project = {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  coverImage: string;
  featured: boolean;
  role: string;
  timeline: string;
  team: string;
  topOutcome: string;
  country?: string;
  platform?: string;
  heroColor?: string;
};

export const projects: Project[] = [
  {
    slug: "mst",
    title: "mySecondTeacher",
    industry: "ED-TECH",
    tagline:
      "Scaling a multi-role learning platform that scaled across Nepal and Southeast Asia.",
    coverImage: "/images/mst-featured-thumb.png",
    featured: true,
    role: "Product Design/Design Team Lead",
    timeline: "2019 — 2021",
    team: "3 Designers, 12 Engineers",
    topOutcome: "Scaled to 500+ schools across SEA",
    country: "Nepal",
    platform: "Web, Mobile",
    heroColor: "#7D42C1",
  },
  {
    slug: "meromomma",
    title: "Meromomma",
    industry: "CONSUMER",
    tagline:
      "Building a pregnancy and parenting platform that brings health tools, shopping, community, and expert access together for Nepali parents.",
    coverImage: "/images/meromomma-featured-thumb.png",
    featured: true,
    role: "Project Manager",
    timeline: "2022 — 2023",
    team: "2 Designers, 8 Engineers",
    topOutcome: "100k+ active users in Nepal",
  },
  {
    slug: "medilink",
    title: "Medilink Network",
    industry: "HEALTHCARE",
    tagline:
      "Unifying six fragmented healthcare portals into one consistent, trustworthy ecosystem for patients, doctors, and providers.",
    coverImage: "/images/medilink-featured-thumb.png",
    featured: true,
    role: "Design Team Lead",
    timeline: "2021 — 2022",
    team: "4 Designers, 15 Engineers",
    topOutcome: "Reduced patient check-in time by 40%",
  },
  {
    slug: "inova",
    title: "Inova DD",
    industry: "BIO PHARMA",
    tagline:
      "Redesigning a legacy biopharma compliance platform — replacing document-heavy workflows with a structured, intuitive system.",
    coverImage: "/images/inova-featured-thumb.png",
    featured: true,
    role: "Project Manager",
    timeline: "2020 — 2021",
    team: "2 Designers, 10 Engineers",
    topOutcome: "Improved compliance audit pass rate by 25%",
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

