import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { ProcessNav } from "@/components/ProcessNav";
import { FadeIn } from "@/components/FadeIn";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export default async function CaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (slug === "mst") {
    return (
      <>
        <CaseStudyHeader project={project} />
        <ProcessNav />

        {/* ── UX Research ── */}
        <section id="research" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
          <div className="content-width">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
              <FadeIn>
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                  UX Research
                </span>
              </FadeIn>

              <div className="space-y-20 max-w-[800px]">
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight mb-6">Scaling during a global crisis</h3>
                  <p className="text-[18px] md:text-[22px] font-semibold leading-tight mb-8">
                    Scaling school distance learning during the COVID-19 pandemic for over 100k+ students
                    was a challenging yet rewarding experience.
                  </p>
                  <p className="text-[var(--color-muted)] text-[16px] leading-[1.75] mb-8">
                    Research was a comprehensive process. We interviewed over 20+ teachers and students
                    across Nepal and Southeast Asia. We wanted to understand why current e-learning
                    platforms were failing in these regions — identifying key issues like hardware
                    limitations, inconsistent internet connectivity, and high dropout rates.
                  </p>

                  {/* Competitive Analysis Table */}
                  <div className="overflow-x-auto mt-12">
                    <table className="w-full text-left text-[13px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#e8e8e8]">
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider w-1/4">Product</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider w-1/4">Features</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider w-1/4">Platform</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider w-1/4">User Base</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#f5f5f5]">
                          <td className="py-5 font-bold">mySecondTeacher</td>
                          <td className="py-5 text-[var(--color-muted)]">E-learning, Offline, Analytics</td>
                          <td className="py-5 text-[var(--color-muted)]">Web, Mobile, App</td>
                          <td className="py-5 text-[var(--color-muted)]">Schools, Students</td>
                        </tr>
                        <tr className="border-b border-[#f5f5f5]">
                          <td className="py-5 font-bold">Product X</td>
                          <td className="py-5 text-[var(--color-muted)]">Video content only</td>
                          <td className="py-5 text-[var(--color-muted)]">Web only</td>
                          <td className="py-5 text-[var(--color-muted)]">Individual learners</td>
                        </tr>
                        <tr>
                          <td className="py-5 font-bold">Product Y</td>
                          <td className="py-5 text-[var(--color-muted)]">Live Classes, Chat</td>
                          <td className="py-5 text-[var(--color-muted)]">Mobile App</td>
                          <td className="py-5 text-[var(--color-muted)]">Tutors, Students</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border border-[#e8e8e8] p-8">
                    <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-4">Persona 1: Student</span>
                    <h4 className="text-[18px] font-bold mb-4">&ldquo;I want to learn at my own pace.&rdquo;</h4>
                    <p className="text-[var(--color-muted)] text-[14px] leading-relaxed">
                      Wants to access quality content but struggles with slow internet and outdated hardware.
                    </p>
                  </div>
                  <div className="border border-[#e8e8e8] p-8">
                    <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-4">Persona 2: Teacher</span>
                    <h4 className="text-[18px] font-bold mb-4">&ldquo;I need to track progress easily.&rdquo;</h4>
                    <p className="text-[var(--color-muted)] text-[14px] leading-relaxed">
                      Needs to manage multiple classes and track individual student performance without heavy admin work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── UX Design ── */}
        <section id="ux-design" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
          <div className="content-width">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
              <FadeIn>
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                  UX Design
                </span>
              </FadeIn>

              <div className="space-y-20 max-w-[800px]">
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight mb-8">Information Architecture</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#e8e8e8]">
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider">Module</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider">Sub-module</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider">Platform</th>
                          <th className="py-4 font-bold text-[var(--color-muted)] uppercase tracking-wider">User Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#f5f5f5]">
                          <td className="py-5 font-bold">Dashboard</td>
                          <td className="py-5 text-[var(--color-muted)]">Analytics, Assignments, Feedback</td>
                          <td className="py-5 text-[var(--color-muted)]">Web, Mobile</td>
                          <td className="py-5 text-[var(--color-muted)]">Teacher, Admin</td>
                        </tr>
                        <tr className="border-b border-[#f5f5f5]">
                          <td className="py-5 font-bold">Learning Space</td>
                          <td className="py-5 text-[var(--color-muted)]">Videos, Interactive Quizzes, Notes</td>
                          <td className="py-5 text-[var(--color-muted)]">Web, Mobile, App</td>
                          <td className="py-5 text-[var(--color-muted)]">Student</td>
                        </tr>
                        <tr>
                          <td className="py-5 font-bold">Assessment</td>
                          <td className="py-5 text-[var(--color-muted)]">Auto-grading, Performance Reports</td>
                          <td className="py-5 text-[var(--color-muted)]">Web</td>
                          <td className="py-5 text-[var(--color-muted)]">Teacher, Parent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-l-2 border-black pl-8 py-2">
                  <h3 className="text-[18px] font-bold mb-4">Key Decision</h3>
                  <p className="text-[var(--color-muted)] text-[16px] leading-[1.75]">
                    We prioritized an &quot;offline-first&quot; synchronization strategy for the mobile app,
                    allowing students to download lessons and sync their quiz progress when internet
                    becomes available — a direct response to the infrastructure constraints found during research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── UI Design ── */}
        <section id="ui-design" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
          <div className="content-width">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
              <FadeIn>
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                  UI Design
                </span>
              </FadeIn>

              <div className="space-y-20 max-w-[800px]">
                <div className="space-y-12 max-w-[800px]">
                  <p className="text-[var(--color-muted)] text-[16px] leading-[1.75]">
                    The goal was to create a consistent visual language across web and mobile platforms
                    with a heavy focus on accessibility, clarity, and ease of use for both children and educators.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ImageWithCaption
                      src="/images/mst/screen-1.png"
                      alt="Student Dashboard"
                      caption="Centralized learning dashboard for students."
                    />
                    <ImageWithCaption
                      src="/images/mst/screen-2.png"
                      alt="Video Player"
                      caption="Distraction-free learning environment."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ImageWithCaption
                      src="/images/mst/screen-3.png"
                      alt="Teacher Dashboard"
                      caption="Real-time analytics and class management."
                    />
                    <ImageWithCaption
                      src="/images/mst/screen-4.png"
                      alt="Quiz Interface"
                      caption="Interactive assessments with instant feedback."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section id="outcomes" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
          <div className="content-width">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
              <FadeIn>
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                  Outcomes
                </span>
              </FadeIn>

              <div className="space-y-16 max-w-[800px]">
                <div className="bg-[#f9f9f9] p-10 md:p-14">
                  <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-4">
                    Key Outcomes
                  </span>
                  <ul className="space-y-6 text-[18px] md:text-[22px] font-bold leading-tight tracking-tight text-black">
                    <li>• Successfully integrated with Google Classroom ecosystem.</li>
                    <li>• Adopted by 500+ schools across Nepal and SE Asia.</li>
                    <li>• Reduced teacher administrative workload by approximately 30%.</li>
                    <li>• Achieved a 4.8/5 rating on the App Store with 100k+ downloads.</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-[18px] font-bold mb-4">Reflection</h3>
                    <p className="text-[var(--color-muted)] text-[15px] leading-[1.7]">
                      Building for emerging markets taught me that accessibility isn&apos;t just
                      about UI — it&apos;s about understanding physical constraints like battery life
                      and data costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold mb-4">Moving forward</h3>
                    <p className="text-[var(--color-muted)] text-[15px] leading-[1.7]">
                      In the next phase, we would focus on AI-driven personalized learning paths
                      to further improve student engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <CaseStudyHeader project={project} />
      <ProcessNav />

      {/* ── UX Research ── */}
      <section id="research" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
            <FadeIn>
              <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                UX Research
              </span>
            </FadeIn>

            <div className="space-y-20 max-w-[720px]">
              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">Context</h3>
                <p className="text-[var(--color-muted)] text-[16px] leading-[1.75]">
                  Understanding the problem space before touching a screen. This
                  project required deep immersion into user behaviors and market
                  landscapes to ensure we were solving the right problems.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">Empathy mapping</h3>
                <ImageWithCaption
                  src={`/images/${project.slug}/empathy-map.png`}
                  alt={`Empathy map — ${project.title}`}
                  caption="Pain points, behaviors, and needs per user type."
                />
              </div>

              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">User journey</h3>
                <ImageWithCaption
                  src={`/images/${project.slug}/journey-map.png`}
                  alt={`User journey map — ${project.title}`}
                  caption="End-to-end experience arc across touchpoints."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UX Design ── */}
      <section id="ux-design" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
            <FadeIn>
              <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                UX Design
              </span>
            </FadeIn>

            <div className="space-y-20 max-w-[720px]">
              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">Value canvas</h3>
                <ImageWithCaption
                  src={`/images/${project.slug}/value-canvas.png`}
                  alt={`Value canvas — ${project.title}`}
                  caption="What value the product delivers to each user type."
                />
              </div>

              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">Information architecture</h3>
                <ImageWithCaption
                  src={`/images/${project.slug}/ia-sitemap.png`}
                  alt={`IA sitemap — ${project.title}`}
                  caption="Product structure — portals, modules, navigation hierarchy."
                />
              </div>

              <div className="border-l-2 border-black pl-8 py-2">
                <h3 className="text-[18px] font-bold mb-4">Key decision</h3>
                <p className="text-[var(--color-muted)] text-[16px] leading-[1.75]">
                  We chose to unify the portal experience rather than maintaining
                  fragmented entry points, reducing maintenance overhead and
                  improving cross-service discovery for the user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UI Design ── */}
      <section id="ui-design" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
            <FadeIn>
              <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                UI Design
              </span>
            </FadeIn>

            <div className="space-y-20 max-w-[720px]">
              <div>
                <h3 className="text-[20px] font-bold tracking-tight mb-6">Design system</h3>
                <ImageWithCaption
                  src={`/images/${project.slug}/design-system.png`}
                  alt={`Design system — ${project.title}`}
                  caption="Visual execution and component library highlights."
                />
              </div>

              <div className="space-y-12">
                {[1, 2, 3].map((n) => (
                  <ImageWithCaption
                    key={n}
                    src={`/images/${project.slug}/screen-${n}.png`}
                    alt={`Key screen ${n} — ${project.title}`}
                    caption={`Core interface screen ${n} highlighting key interactions.`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Outcomes ── */}
      <section id="outcomes" className="border-t border-[#e8e8e8] py-24 md:py-32 scroll-mt-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
            <FadeIn>
              <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mt-1">
                Key Outcomes
              </span>
            </FadeIn>

            <div className="space-y-16 max-w-[720px]">
              <div className="bg-[#f9f9f9] p-10 md:p-14">
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-4">
                  Top outcome
                </span>
                <p className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight text-black">
                  {project.topOutcome}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[18px] font-bold mb-4">Reflection</h3>
                  <p className="text-[var(--color-muted)] text-[15px] leading-[1.7]">
                    The biggest learning was balancing deep technical complexity
                    with simple user-facing mental models.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold mb-4">Moving forward</h3>
                  <p className="text-[var(--color-muted)] text-[15px] leading-[1.7]">
                    In future iterations, I would push for even more aggressive
                    data visualization to reduce table fatigue.
                  </p>
                </div>
              </div>

              {/* Next project link */}
              <div className="border-t border-[#e8e8e8] pt-12 mt-12">
                <span className="block font-mono text-[10px] tracking-[0.08em] text-[var(--color-muted)] uppercase mb-4">
                  Next project
                </span>
                <Link
                  href="/work/mst/"
                  className="text-[28px] md:text-[36px] font-bold tracking-tight text-black hover:opacity-60 transition-opacity no-underline"
                >
                  mySecondTeacher →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
