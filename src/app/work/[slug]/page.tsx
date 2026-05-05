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

// ── Section shell ──
function Section({
  id, number, title, children,
}: {
  id: string; number: string; title: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[var(--color-border)] scroll-mt-[148px]">
      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 py-16 md:py-24">
          <FadeIn>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">
              {number}
            </span>
            <h2 className="text-[40px] md:text-[48px] font-bold tracking-[-0.01em] leading-[1.1]">
              {title}
            </h2>
          </FadeIn>
          <div className="space-y-16">{children}</div>
        </div>
      </div>
    </section>
  );
}

// ── Table ──
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-[13px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            {headers.map((h) => (
              <th key={h} className="pb-3 pr-8 font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--color-surface-secondary)]">
              {row.map((cell, j) => (
                <td key={j} className={`py-3.5 pr-8 ${j === 0 ? "text-[13px] font-semibold text-[var(--color-body)]" : "text-[13px] text-[var(--color-muted)]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Empathy map quadrant ──
function EmpathyMap({ persona, items }: { persona: string; items: { q: string; a: string }[] }) {
  return (
    <div>
      <p className="text-[14px] font-semibold mb-3">{persona}</p>
      <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
        {items.map(({ q, a }) => (
          <div key={q} className="bg-white p-5">
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-2">{q}</span>
            <p className="text-[16px] text-[var(--color-body)] leading-[1.75]">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Key decision callout ──
function KeyDecision({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-black pl-8 py-2">
      <h3 className="text-[16px] font-bold mb-3">Key Decision</h3>
      <p className="text-[var(--color-body)] text-[16px] leading-[1.75]">{children}</p>
    </div>
  );
}

// ── Stat block ──
function StatBlock({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="p-6 md:p-10 border-l first:border-l-0 border-[var(--color-border)]">
      <p className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-none mb-5">{value}</p>
      <span className="block font-mono text-[11px] leading-4 uppercase tracking-[0.06em] text-[var(--color-muted)] mb-3">
        {label}
      </span>
      <p className="text-[var(--color-body)] text-[14px] leading-relaxed">{description}</p>
    </div>
  );
}

// ── Next project ──
function NextProject({ href, label }: { href: string; label: string }) {
  return (
    <div className="pt-8 border-t border-[var(--color-border)]">
      <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">NEXT PROJECT</span>
      <Link href={href} className="text-[36px] font-bold tracking-[-0.01em] text-black hover:opacity-50 transition-opacity no-underline">
        {label} →
      </Link>
    </div>
  );
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // ════════════════════════════════════════
  //  MST
  // ════════════════════════════════════════
  if (slug === "mst") {
    return (
      <>
        <CaseStudyHeader project={project} />
        <ProcessNav />

        {/* ── 01 Research ── */}
        <Section id="research" number="01" title="Research">

          {/* Problem */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">THE PROBLEM</span>
            <p className="text-[16px] leading-[1.75] text-[var(--color-body)] mb-6">
              Most digital learning platforms lean into passive content or replicate static textbooks without
              interactivity. Neither approach solves the core problem: students don&apos;t know where they stand,
              and teachers have no visibility into who&apos;s struggling.
            </p>
            <p className="text-[16px] leading-[1.75] text-[var(--color-body)] mb-10">
              mySecondTeacher was built to change that. The platform introduced diagnostic learning — a structured,
              curriculum-aligned approach where real feedback is embedded directly into the experience through an
              interactive video player with quiz checkpoints at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l border-[var(--color-border)] pl-6">
                <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-2">THE MARKET GAP</span>
                <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                  Formal platforms in 2019 had terrible interfaces. The middle ground — curriculum-aligned content
                  with diagnostic feedback — was unoccupied.
                </p>
              </div>
              <div className="border-l border-[var(--color-border)] pl-6">
                <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-2">THE BUSINESS MODEL</span>
                <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                  School licensing required administrator reporting as a first-class feature for compliance.
                  Student experience drove organic growth.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive matrix */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">COMPETITIVE MATRIX</span>
            <p className="text-[16px] leading-[1.75] text-[var(--color-body)] mb-6">
              Benchmarked against Udemy, Khan Academy, BYJU&apos;S across Asia. Qualitative research revealed
              formal ed-tech platforms replicated static textbook material with no real engagement.
            </p>
            <p className="text-[14px] font-semibold mb-4">Understanding the gap we were filling</p>
            <Table
              headers={["PRODUCT", "CURRICULUM", "ASSESSMENT", "TEACHER TOOLS"]}
              rows={[
                ["Udemy", "No structure", "No assessment", "No assessment"],
                ["Khan Academy", "Structure", "Basic quizzes", "No school admin"],
                ["BYJU's", "India-curric.", "Strong", "No teacher tools"],
                ["mySecondTeacher", "Curriculum-aligned", "IVY embedded", "Connected stack"],
              ]}
            />
          </div>

          {/* Empathy maps */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-6">EMPATHY MAP</span>
            <div className="space-y-8">
              <EmpathyMap
                persona="Persona 1: Student"
                items={[
                  { q: "THINKS", a: '"Online classes feel like reading a textbook on a screen."' },
                  { q: "FEELS", a: "Disengaged and unsure if learning" },
                  { q: "DOES", a: "Skips through videos, ignores checkpoints" },
                  { q: "SAYS", a: '"I want to know where I stand."' },
                ]}
              />
              <EmpathyMap
                persona="Persona 2: Teacher"
                items={[
                  { q: "THINKS", a: '"I can\'t tell who\'s falling behind until the exam."' },
                  { q: "FEELS", a: "Blind to what students actually absorb" },
                  { q: "DOES", a: "Grades manually, tracks attendance in spreadsheets" },
                  { q: "SAYS", a: '"Show me who\'s struggling now, not after."' },
                ]}
              />
            </div>
          </div>

        </Section>

        {/* ── 02 UX Design ── */}
        <Section id="ux-design" number="02" title="UX Design">

          <p className="text-[16px] leading-[1.75] text-[var(--color-body)] -mt-8">
            The research pointed to a clear direction. Students needed orientation within lessons. Teachers needed
            control over content. Administrators needed visibility at scale. The value proposition came directly
            from those gaps.
          </p>

          {/* Value proposition */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">VALUE PROPOSITION MAP</span>
            <Table
              headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
              rows={[
                ["Learn curriculum content", "Passive video", "Interactive quizzes"],
                ["Track progress", "No real-time feedback", "Diagnostic tracking"],
                ["Manage school ops", "Fragmented admin", "Unified LMS"],
              ]}
            />
          </div>

          {/* Feature phases */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">FEATURE ROADMAP</span>
            <Table
              headers={["PHASE 1 — MVP FOUNDATION", "PHASE 2 — GROWTH SCALE", "PHASE 3 — EXPAND"]}
              rows={[
                ["Curriculum-aligned content", "Ebook and annotation", "Testpaper"],
                ["IVY interactive player with quiz embedded", "Classroom — Assignments, Video classroom, Chatroom", "TV app for offline classes (no-wifi areas)"],
                ["Mastery summary on completion", "Class-level progress dashboard", "—"],
                ["Student, Teacher and Parent portals + mobile apps", "Localized version for Indonesia — Jelajah Ilmu", "—"],
              ]}
            />
          </div>

          {/* IA */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">INFORMATION ARCHITECTURE</span>
            <p className="text-[16px] leading-[1.75] text-[var(--color-body)] mb-8">
              Designed for students, teachers, and parents across multiple products: mySecondTeacher, Apollo LMS,
              and IVY video player, ebook reader, and Testpaper.
            </p>
            <div className="py-12 relative overflow-hidden">
              {/* Root */}
              <div className="flex justify-center mb-16">
                <div className="bg-[#161616] text-white font-mono text-[11px] tracking-[0.06em] uppercase py-4 px-10 relative z-10">
                  mySecondTeacher ecosystem
                  <div className="absolute top-full left-1/2 w-px h-16 bg-[var(--color-border)] -translate-x-1/2" />
                </div>
              </div>

              {/* Horizontal Connector */}
              <div className="relative">
                <div className="absolute top-0 left-[11.75%] right-[11.75%] h-px bg-[var(--color-border)]" />
                <div className="grid grid-cols-4 gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-px h-12 bg-[var(--color-border)]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    portal: "Student portal",
                    items: ["Objective Oriented Dashboard", "Course Library", "Interactive Video Lessons", "EBook Reader", "Diagnostic report", "Progress tracker"],
                  },
                  {
                    portal: "Teacher portal",
                    items: ["Dashboard", "Class Overview", "Assignment", "Student analytics", "Content Library"],
                  },
                  {
                    portal: "Backoffice",
                    items: ["User management", "School Management", "Course Management", "IVY API", "Ebook API", "System Settings"],
                  },
                  {
                    portal: "Jelajah Ilmu",
                    items: ["Localized Content", "Interactive Ebooks"],
                  },
                ].map(({ portal, items }) => (
                  <div key={portal} className="flex flex-col items-center">
                    <div className="w-full bg-[#5A5A5A] text-white text-[13px] font-semibold py-3 px-4 text-center mb-6">
                      {portal}
                    </div>
                    <div className="w-full space-y-6">
                      {items.map((item, idx) => (
                        <div key={item} className="relative flex flex-col items-center">
                          {/* Vertical connector line */}
                          <div className="absolute bottom-full left-1/2 w-px h-6 bg-[var(--color-border)] -translate-x-1/2" />
                          <div className="w-full bg-[#F7F7F7] p-4 text-[13px] text-[var(--color-body)] text-center leading-tight">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </Section>

        {/* ── 03 UI Design ── */}
        <Section id="ui-design" number="03" title="UI Design">
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">KEY SCREENS</span>
            <p className="text-[16px] leading-[1.75] text-[var(--color-body)] mb-8">
              Designed for students, teachers, and parents across multiple products: mySecondTeacher, Apollo LMS,
              and IVY video player, ebook reader, and Testpaper.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/mst/screen-1.png" alt="Student Dashboard" caption="Student dashboard — centralized learning hub." />
            <ImageWithCaption src="/images/mst/screen-2.png" alt="IVY Player" caption="IVY interactive video player with embedded quiz checkpoints." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/mst/screen-3.png" alt="Teacher Dashboard" caption="Teacher dashboard — real-time class analytics." />
            <ImageWithCaption src="/images/mst/screen-4.png" alt="Ebook Reader" caption="Apollo LMS ebook reader with annotation tools." />
          </div>
        </Section>

        {/* ── 04 Outcomes ── */}
        <Section id="outcomes" number="04" title="Key Outcomes">

          {/* Stat blocks */}
          <div className="border border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <StatBlock
                value="100+"
                label="Schools deployed"
                description="Rolled out across Nepal and Southeast Asia."
              />
              <StatBlock
                value="2"
                label="Markets launched"
                description="Nepal and Indonesia — distinct UX approaches for each context."
              />
              <StatBlock
                value="#1"
                label="Best eLearning APAC 2023"
                description="Recognized after four years of sustained product iteration and design leadership."
              />
            </div>
          </div>

          {/* Learnings */}
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-8">KEY LEARNINGS</span>
            <div className="space-y-10">
              {[
                {
                  num: "01",
                  title: "Engagement is architecture, not animation",
                  body: "The improvement in lesson completion came from structural changes — progress bars and checkpoints — not visual polish. The player looked almost identical before and after. What changed was how students understood their place within it.",
                },
                {
                  num: "02",
                  title: "Product ownership changed my design decisions",
                  body: "Acting as Product Owner for Jelajah Ilmu meant writing user stories, running sprint reviews, and owning the backlog — not just designing screens. I made better design decisions because I understood the trade-offs firsthand, not from a brief.",
                },
                {
                  num: "03",
                  title: "Localization is pedagogy, not translation",
                  body: "Adapting for Indonesia meant rethinking assessment structure, lesson flow pacing, and mastery logic — not just swapping text. A culturally misaligned product, regardless of its quality, has no place in a local classroom.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="grid grid-cols-[40px_1fr] gap-6">
                  <span className="font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] pt-0.5">{num}</span>
                  <div>
                    <h3 className="text-[16px] font-bold mb-2">{title}</h3>
                    <p className="text-[var(--color-body)] text-[16px] leading-[1.75]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <NextProject href="/work/meromomma/" label="Meromomma" />

        </Section>
      </>
    );
  }

  // ════════════════════════════════════════
  //  MEROMOMMA
  // ════════════════════════════════════════
  if (slug === "meromomma") {
    return (
      <>
        <CaseStudyHeader project={project} />
        <ProcessNav />
        <Section id="research" number="01" title="Research">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">THE PROBLEM</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                Nepali parents faced a fragmented digital landscape where health tools, e-commerce, and expert advice
                lived in separate, often unreliable silos. Information was rarely localized or contextually relevant.
              </p>
            </div>
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">THE IMPACT</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                By unifying these pillars into a single mobile ecosystem, we achieved 10k+ active users within 3
                months, becoming the primary digital companion for thousands of expectant mothers in Nepal.
              </p>
            </div>
          </div>
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-6">EMPATHY MAP</span>
            <div className="space-y-8">
              <EmpathyMap
                persona="Persona 1: Expectant Mother"
                items={[
                  { q: "THINKS", a: "Is my baby growing normally? Am I doing everything right?" },
                  { q: "FEELS", a: "Anxious, overwhelmed, and isolated from reliable guidance" },
                  { q: "SAYS", a: '"I don\'t know who to trust for advice online."' },
                  { q: "DOES", a: "Searches Facebook groups and WhatsApp for pregnancy tips" },
                ]}
              />
              <EmpathyMap
                persona="Persona 2: Healthcare Provider"
                items={[
                  { q: "THINKS", a: "Patients need consistent guidance between appointments" },
                  { q: "FEELS", a: "Limited ability to reach patients between consultations" },
                  { q: "SAYS", a: '"I wish there was a way to stay connected with my patients."' },
                  { q: "DOES", a: "Relies on phone calls and paper pamphlets for follow-ups" },
                ]}
              />
            </div>
          </div>
        </Section>
        <Section id="ux-design" number="02" title="UX Design">
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">VALUE PROPOSITION MAP</span>
            <Table
              headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
              rows={[
                ["Track pregnancy week-by-week", "Generic, non-localized content", "Nepali-context weekly updates"],
                ["Access expert advice", "No affordable consultations", "In-app doctor chat"],
                ["Buy pregnancy products", "No trusted local source", "Curated e-commerce store"],
              ]}
            />
          </div>
          <KeyDecision>
            We designed a &quot;Daily Journey&quot; feed that adapted content based on pregnancy week, ensuring
            users only saw information relevant to their current stage — reducing cognitive load and improving trust.
          </KeyDecision>
        </Section>
        <Section id="ui-design" number="03" title="UI Design">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/meromomma/screen-1.png" alt="Home" caption="Adaptive daily journey feed." />
            <ImageWithCaption src="/images/meromomma/screen-2.png" alt="Expert Chat" caption="Direct access to pediatricians." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/meromomma/screen-3.png" alt="Shop" caption="Curated maternity e-commerce." />
            <ImageWithCaption src="/images/meromomma/screen-4.png" alt="Community" caption="Community forums and expert Q&A." />
          </div>
        </Section>
        <Section id="outcomes" number="04" title="Key Outcomes">
          <div className="border border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <StatBlock value="10k+" label="Active users" description="Acquired within 3 months of launch." />
              <StatBlock value="50+" label="Healthcare partners" description="Certified providers onboarded at launch." />
              <StatBlock value="4.7" label="App store rating" description="Across iOS and Android platforms." />
            </div>
          </div>
          <NextProject href="/work/medilink/" label="Medilink Network" />
        </Section>
      </>
    );
  }

  // ════════════════════════════════════════
  //  MEDILINK
  // ════════════════════════════════════════
  if (slug === "medilink") {
    return (
      <>
        <CaseStudyHeader project={project} />
        <ProcessNav />
        <Section id="research" number="01" title="Research">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">THE PROBLEM</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                The healthcare network relied on six separate portals, each with its own design language and user
                flow. This fragmentation led to patient confusion, data silos, and decreased trust in digital services.
              </p>
            </div>
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">THE IMPACT</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                We unified these portals into a single, cohesive ecosystem, streamlining the patient journey and
                improving administrative efficiency by consolidating cross-platform data.
              </p>
            </div>
          </div>
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-6">EMPATHY MAP</span>
            <div className="space-y-8">
              <EmpathyMap
                persona="Persona 1: Patient"
                items={[
                  { q: "THINKS", a: "Why do I need separate logins for appointments and lab results?" },
                  { q: "FEELS", a: "Confused and frustrated by inconsistent experiences" },
                  { q: "SAYS", a: '"The systems never talk to each other."' },
                  { q: "DOES", a: "Calls the clinic instead of using the digital portal" },
                ]}
              />
              <EmpathyMap
                persona="Persona 2: Doctor"
                items={[
                  { q: "THINKS", a: "Patient data is scattered across too many systems" },
                  { q: "FEELS", a: "Frustrated by inefficient admin before each consultation" },
                  { q: "SAYS", a: '"I spend 20 minutes before each appointment just finding records."' },
                  { q: "DOES", a: "Keeps personal notes to compensate for poor system integration" },
                ]}
              />
            </div>
          </div>
        </Section>
        <Section id="ux-design" number="02" title="UX Design">
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">VALUE PROPOSITION MAP</span>
            <Table
              headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
              rows={[
                ["Book appointments", "Multiple logins, confusing flows", "Single unified portal"],
                ["View lab results", "Results in separate system", "Centralized health record"],
                ["Consult a doctor", "No digital continuity", "Seamless cross-service history"],
              ]}
            />
          </div>
          <KeyDecision>
            We implemented a centralized &quot;Universal Profile&quot; that synchronized patient data across all
            services — ensuring a patient&apos;s medical history was consistent whether booking an appointment or
            viewing lab results.
          </KeyDecision>
        </Section>
        <Section id="ui-design" number="03" title="UI Design">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/medilink/screen-1.png" alt="Patient Portal" caption="Unified patient dashboard." />
            <ImageWithCaption src="/images/medilink/screen-2.png" alt="Lab Results" caption="Consistent data visualization." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/medilink/screen-3.png" alt="Doctor View" caption="Streamlined consultation view." />
            <ImageWithCaption src="/images/medilink/screen-4.png" alt="Booking" caption="Simplified appointment flow." />
          </div>
        </Section>
        <Section id="outcomes" number="04" title="Key Outcomes">
          <div className="border border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <StatBlock value="6→1" label="Portals unified" description="Six fragmented portals into a single trusted ecosystem." />
              <StatBlock value="35%" label="Fewer support calls" description="Patient support calls reduced in the first quarter." />
              <StatBlock value="3" label="Hospital networks" description="Adopted by major networks within 6 months." />
            </div>
          </div>
          <NextProject href="/work/inova/" label="Inova DD" />
        </Section>
      </>
    );
  }

  // ════════════════════════════════════════
  //  INOVA DD
  // ════════════════════════════════════════
  if (slug === "inova") {
    return (
      <>
        <CaseStudyHeader project={project} />
        <ProcessNav />
        <Section id="research" number="01" title="Research">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">THE PROBLEM</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                The legacy compliance platform was heavily reliant on document-based workflows that were prone to
                human error and extremely time-consuming for auditors and lab researchers alike.
              </p>
            </div>
            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">THE IMPACT</span>
              <p className="text-[16px] leading-[1.75] text-[var(--color-body)]">
                By introducing structured data entry with automated validation, we reduced compliance workflow
                time by 40% and significantly improved audit pass rates.
              </p>
            </div>
          </div>
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-6">EMPATHY MAP</span>
            <div className="space-y-8">
              <EmpathyMap
                persona="Persona 1: Auditor"
                items={[
                  { q: "THINKS", a: "Finding the right document version takes too long" },
                  { q: "FEELS", a: "Stressed by tight compliance deadlines and manual processes" },
                  { q: "SAYS", a: '"Everything is buried in folders."' },
                  { q: "DOES", a: "Maintains personal checklists to compensate for system gaps" },
                ]}
              />
              <EmpathyMap
                persona="Persona 2: Lab Researcher"
                items={[
                  { q: "THINKS", a: "Data entry is slowing down my actual research work" },
                  { q: "FEELS", a: "Frustrated by repetitive, error-prone manual forms" },
                  { q: "SAYS", a: '"I fill in the same information three different times."' },
                  { q: "DOES", a: "Uses workarounds like copy-paste from spreadsheets" },
                ]}
              />
            </div>
          </div>
        </Section>
        <Section id="ux-design" number="02" title="UX Design">
          <div>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-4">VALUE PROPOSITION MAP</span>
            <Table
              headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
              rows={[
                ["Submit compliance data", "Manual document uploads", "Structured inline data entry"],
                ["Track audit status", "No real-time visibility", "Live compliance dashboard"],
                ["Manage submissions", "Version confusion", "Automated version control"],
              ]}
            />
          </div>
          <KeyDecision>
            We moved away from &quot;document uploads&quot; to &quot;structured data entry,&quot; which allowed
            for real-time compliance checking and instant feedback during submission — eliminating post-submission
            correction cycles entirely.
          </KeyDecision>
        </Section>
        <Section id="ui-design" number="03" title="UI Design">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/inova/screen-1.png" alt="Audit Dashboard" caption="Real-time compliance tracking." />
            <ImageWithCaption src="/images/inova/screen-2.png" alt="Data Entry" caption="Structured entry with live validation." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption src="/images/inova/screen-3.png" alt="Review Queue" caption="Auditor review and approval flow." />
            <ImageWithCaption src="/images/inova/screen-4.png" alt="Reports" caption="Compliance trend reporting." />
          </div>
        </Section>
        <Section id="outcomes" number="04" title="Key Outcomes">
          <div className="border border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <StatBlock value="40%" label="Faster compliance workflows" description="Reduced submission time across all researcher roles." />
              <StatBlock value="28%" label="Better audit pass rate" description="Improved in the first compliance cycle post-launch." />
              <StatBlock value="4" label="Facilities adopted" description="Biopharma research facilities onboarded at launch." />
            </div>
          </div>
          <NextProject href="/work/mst/" label="mySecondTeacher" />
        </Section>
      </>
    );
  }

  return (
    <>
      <CaseStudyHeader project={project} />
      <ProcessNav />
      <div className="content-width py-32 text-center">
        <p className="text-[var(--color-body)]">Content coming soon for {project.title}.</p>
      </div>
    </>
  );
}