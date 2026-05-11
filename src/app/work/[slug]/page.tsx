import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs, getNextProject } from "@/data/projects";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { ProcessNav } from "@/components/ProcessNav";
import { CaseStudyFooter } from "@/components/CaseStudyBlocks";
import { MSTContent } from "@/components/case-studies/MSTContent";
import { MeroMommaContent } from "@/components/case-studies/MeroMommaContent";
import { MedilinkContent } from "@/components/case-studies/MedilinkContent";
import { InovaContent } from "@/components/case-studies/InovaContent";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      <CaseStudyHeader project={project} />
      <ProcessNav />

      {slug === "mst" && <MSTContent />}
      {slug === "meromomma" && <MeroMommaContent />}
      {slug === "medilink" && <MedilinkContent />}
      {slug === "inova" && <InovaContent />}

      <CaseStudyFooter nextHref={`/work/${next.slug}/`} nextLabel={next.title} />
    </>
  );
}