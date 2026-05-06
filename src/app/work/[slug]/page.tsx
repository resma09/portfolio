import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs, getNextProject } from "@/data/projects";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { ProcessNav } from "@/components/ProcessNav";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";

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

/* ════════════════════════════════════════════════════════════
   CASE STUDY CONTENT FUNCTIONS
   ════════════════════════════════════════════════════════════ */

function MSTContent() {
  return (
    <>
      <Section id="research" number="01" title="UX Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Most digital learning platforms lean into passive content or replicate static
            textbooks without interactivity. Neither approach solves the core problem:
            students don&apos;t know where they stand, and teachers have no visibility
            into who&apos;s struggling.
          </p>
          <p className="body-base mb-10">
            mySecondTeacher was built to change that. The platform introduced diagnostic
            learning — a structured, curriculum-aligned approach where real feedback is
            embedded directly into the experience through an interactive video player
            with quiz checkpoints at every stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="eyebrow mb-2">THE MARKET GAP</span>
              <p className="body-base">
                Formal platforms in 2019 had terrible interfaces. The middle ground —
                curriculum-aligned content with diagnostic feedback — was unoccupied.
              </p>
            </div>
            <div>
              <span className="eyebrow mb-2">THE BUSINESS MODEL</span>
              <p className="body-base">
                School licensing required administrator reporting as a first-class feature
                for compliance. Student experience drove organic growth.
              </p>
            </div>
          </div>
        </Block>

        <Block eyebrow="COMPETITIVE MATRIX">
          <p className="body-base mb-6">
            Benchmarked against Udemy, Khan Academy, BYJU&apos;S across Asia. Qualitative
            research revealed formal ed-tech platforms replicated static textbook material
            with no real engagement.
          </p>
          <p className="body-sm font-semibold mb-4" style={{ color: "var(--color-text)" }}>
            Understanding the gap we were filling
          </p>
          <Table
            headers={["PRODUCT", "CURRICULUM", "ASSESSMENT", "TEACHER TOOLS"]}
            rows={[
              ["Udemy", "No structure", "No assessment", "No assessment"],
              ["Khan Academy", "Structured", "Basic quizzes", "No school admin"],
              ["BYJU's", "India-curric.", "Strong", "No teacher tools"],
              ["mySecondTeacher", "Curriculum-aligned", "IVY embedded", "Connected stack"],
            ]}
          />
        </Block>

        <Block eyebrow="EMPATHY MAP">
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
        </Block>
      </Section>

      <Section id="ux-design" number="02" title="UX Design">
        <p className="body-base lead -mt-8">
          The research pointed to a clear direction. Students needed orientation within
          lessons. Teachers needed control over content. Administrators needed visibility
          at scale. The value proposition came directly from those gaps.
        </p>

        <Block eyebrow="VALUE PROPOSITION MAP">
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              ["Learn curriculum content", "Passive video", "Interactive quizzes"],
              ["Track progress", "No real-time feedback", "Diagnostic tracking"],
              ["Manage school ops", "Fragmented admin", "Unified LMS"],
            ]}
          />
        </Block>

        <Block eyebrow="FEATURE ROADMAP">
          <Table
            headers={[
              { subtitle: "Phase 1 — MVP", label: "FOUNDATION" },
              { subtitle: "Phase 2 — Growth", label: "SCALE" },
              { subtitle: "Phase 3", label: "EXPAND" }
            ]}
            rows={[
              ["Curriculum-aligned content", "Ebook and annotation", "Testpaper"],
              ["IVY interactive player with Quiz embedded", "Classroom — Assignments, Video classroom, Chatroom", "TV app for offline classes for no wifi areas"],
              ["Mastery summary on completion", "Class-level progress dashboard", "—"],
              ["Student, Teacher and Parent portals and mobile apps", "Localized version for Indonesia — Jelajah Ilmu", "—"],
            ]}
          />
        </Block>

        <Block eyebrow="INFORMATION ARCHITECTURE">
          <p className="body-base mb-8">
            Designed for students, teachers, and parents across multiple products:
            mySecondTeacher, Apollo LMS, IVY video player, ebook reader, and Testpaper.
          </p>
          <IADiagram
            rootLabel="mySecondTeacher ecosystem"
            columns={[
              {
                portal: "Student portal",
                items: [
                  "Objective Oriented Dashboard",
                  "Course Library",
                  "Interactive Video Lessons",
                  "EBook Reader",
                  "Diagnostic report",
                  "Progress tracker",
                ],
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
            ]}
          />
        </Block>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">
        <DesignSystem
          intro="Diagnostic Learning Ecosystem"
          meta="A connected suite for students and teachers, emphasizing real-time feedback and curriculum alignment."
          swatches={[
            { name: "Brand Dark", hex: "#161616" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Muted", hex: "#707070" },
            { name: "Border", hex: "#E5E5E5" }
          ]}
          type={[
            { sample: "Diagnostic Learning", meta: "Display / Bold / 32px", sampleClass: "ds-type-sample--display" },
            { sample: "Curriculum Content", meta: "Heading / Bold / 22px", sampleClass: "ds-type-sample--h2" },
            { sample: "Real-time Feedback", meta: "Body / Medium / 16px", sampleClass: "ds-type-sample--h3" },
            { sample: "The platform introduced diagnostic learning — a structured approach.", meta: "Body / Regular / 14px", sampleClass: "ds-type-sample--body" },
            { sample: "PHASE 1 — MVP", meta: "Mono / Medium / 11px", sampleClass: "ds-type-sample--mono" }
          ]}
          components={[
            {
              label: "IVY CONTROLS",
              render: (
                <div className="ds-mst-ivy-controls">
                  <div className="ds-mst-ivy-play">▶</div>
                  <div className="ds-mst-ivy-progress" />
                  <span className="ds-mst-ivy-time">12:40</span>
                </div>
              )
            },
            {
              label: "IVY QUIZ",
              render: (
                <div className="ds-mst-quiz">
                  <span className="ds-mst-quiz-tag">Diagnostic</span>
                  <p className="ds-mst-quiz-q">What is the capital of Nepal?</p>
                  <div className="ds-mst-quiz-options">
                    <div className="ds-mst-quiz-option">Pokhara</div>
                    <div className="ds-mst-quiz-option is-selected">Kathmandu</div>
                  </div>
                </div>
              )
            },
            {
              label: "PROGRESS",
              render: (
                <div className="ds-mst-progress">
                  <p className="ds-mst-progress-label">Algebra I</p>
                  <p className="ds-mst-progress-value">72%</p>
                  <div className="ds-mst-progress-bar"><div className="ds-mst-progress-fill" /></div>
                  <span className="ds-mst-progress-meta">Mastery on track</span>
                </div>
              )
            },
            {
              label: "STUDENT CARD",
              render: (
                <div className="ds-mst-student">
                  <div className="ds-mst-student-avatar">JD</div>
                  <div className="ds-mst-student-info">
                    <p className="ds-mst-student-name">Jane Doe</p>
                    <p className="ds-mst-student-status">Active now</p>
                  </div>
                </div>
              )
            },
            {
              label: "BADGES",
              render: (
                <div className="ds-mst-badges">
                  <div className="ds-mst-badge is-active">Overview</div>
                  <div className="ds-mst-badge">Analytics</div>
                  <div className="ds-mst-badge">Reports</div>
                </div>
              )
            },
            {
              label: "TABS",
              render: (
                <div className="ds-mst-tabs">
                  <div className="ds-mst-tab is-active">Content</div>
                  <div className="ds-mst-tab">Assignments</div>
                </div>
              )
            }
          ]}
        />

        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-8">
            Designed for students, teachers, and parents across multiple products:
            mySecondTeacher, Apollo LMS, IVY video player, ebook reader, and Testpaper.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/mst/screen-1.png" alt="Student Dashboard" caption="Student dashboard — centralized learning hub." />
            <ImageWithCaption src="/images/mst/screen-2.png" alt="IVY Player" caption="IVY interactive video player with embedded quiz checkpoints." />
            <ImageWithCaption src="/images/mst/screen-3.png" alt="Teacher Dashboard" caption="Teacher dashboard — real-time class analytics." />
            <ImageWithCaption src="/images/mst/screen-4.png" alt="Ebook Reader" caption="Apollo LMS ebook reader with annotation tools." />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
        <div className="stat-grid">
          <StatBlock
            value="100+"
            label="SCHOOLS DEPLOYED"
            description="Rolled out across Nepal and Southeast Asia."
          />
          <StatBlock
            value="2"
            label="MARKETS LAUNCHED"
            description="Nepal and Indonesia — distinct UX approaches for each context."
          />
          <StatBlock
            value="#1"
            label="BEST eLEARNING APAC 2023"
            description="Recognized after four years of sustained product iteration."
          />
        </div>

        <Takeaways
          items={[
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
          ]}
        />
      </Section>
    </>
  );
}

function MeroMommaContent() {
  return (
    <>
      <Section id="research" number="01" title="Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Expecting mothers in Nepal navigate pregnancy with fragmented resources.
            Health information comes from family advice, scattered web searches, and
            clinic visits with limited continuity. There&apos;s no single platform that
            combines pregnancy tracking, trusted health content, product shopping, and
            community support.
          </p>
          <p className="body-base mb-10">
            Most existing apps are designed for Western markets. The content
            doesn&apos;t account for local dietary practices, the health tools don&apos;t
            integrate with Nepali payment systems, and the community features assume
            levels of digital literacy and connectivity that don&apos;t match the local
            context.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pl-6">
              <span className="eyebrow mb-2">THE MARKET GAP</span>
              <p className="body-base">
                Nepal had no dedicated maternal health platform combining health
                tracking, e-commerce, and community in one app. Parents relied on
                WhatsApp groups, generic global apps, and in-person advice networks.
              </p>
            </div>
            <div className="pl-6">
              <span className="eyebrow mb-2">THE BUSINESS MODEL</span>
              <p className="body-base">
                Freemium health tools drive acquisition. E-commerce with local payment
                drives revenue. Community drives retention. Premium features create an
                upsell path.
              </p>
            </div>
          </div>
        </Block>

        <Block eyebrow="EMPATHY MAP">
          <div className="space-y-8">
            <EmpathyMap
              persona="Persona 1: Expecting Mother"
              items={[
                { q: "THINKS", a: '"Am I on track? Is this symptom normal for my week?"' },
                { q: "FEELS", a: "Anxious about doing things wrong with no reliable guide" },
                { q: "DOES", a: "Googles symptoms, asks family, screenshots advice from WhatsApp groups" },
                { q: "SAYS", a: '"I want one app that tells me what to expect this week."' },
              ]}
            />
            <EmpathyMap
              persona="Persona 2: New Parent"
              items={[
                { q: "THINKS", a: '"What products do I actually need vs. what\'s marketed to me?"' },
                { q: "FEELS", a: "Overwhelmed by choices without trusted local recommendations" },
                { q: "DOES", a: "Browses Instagram shops, asks friends, buys from whatever's available nearby" },
                { q: "SAYS", a: '"Show me what other Nepali parents are actually buying."' },
              ]}
            />
          </div>
        </Block>
      </Section>

      <Section id="ux-design" number="02" title="UX Design">
        <p className="body-base lead -mt-8">
          The research pointed to three core needs that had to work together: health
          guidance tied to pregnancy stage, a trustworthy shopping experience with local
          payment, and a community where parents could share honestly. The product
          roadmap phased these deliberately.
        </p>

        <Block eyebrow="VALUE PROPOSITION MAP">
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              ["Track pregnancy week by week", "Fragmented health info from unreliable sources", "Stage-aware health tools and content"],
              ["Buy baby and maternity products", "No local e-commerce for baby products", "Curated shop with eSewa/Khalti payment"],
              ["Connect with other parents", "Isolation without peer support network", "Moderated community forum"],
            ]}
          />
        </Block>

        <Block eyebrow="FEATURE ROADMAP">
          <Table
            headers={[
              { subtitle: "PHASE 1", label: "MVP HEALTH CORE" },
              { subtitle: "PHASE 2", label: "E-COMMERCE" },
              { subtitle: "PHASE 3", label: "COMMUNITY & SERVICES" }
            ]}
            rows={[
              ["Due date calculator", "Product catalog with categories", "Discussion forums"],
              ["BMI calculator (pre & during pregnancy)", "Cart and checkout flow", "Call a Doctor (teleconsult)"],
              ["Ovulation calculator", "Local payment (eSewa, Khalti)", "Recommended services directory"],
              ["Baby kick counter", "Wishlist and shopping lists", "Baby name generator"],
              ["Weekly pregnancy content", "Order tracking", "Shared wishlists / gift registry"],
            ]}
          />
        </Block>

        <Block eyebrow="INFORMATION ARCHITECTURE">
          <p className="body-base mb-8">
            Designed around pregnancy stage as the primary navigation anchor. The home
            screen adapts content, product recommendations, and health tools based on the
            user&apos;s current week.
          </p>
          <IADiagram
            rootLabel="MeroMomma app"
            columns={[
              {
                portal: "Home",
                items: ["Stage indicator", "Weekly content", "Featured products", "Nearby hospitals"],
              },
              {
                portal: "Health Tools",
                items: ["Due Date Calculator", "BMI Calculator", "Ovulation Calculator", "Kick Counter"],
              },
              {
                portal: "Shop",
                items: ["Catalog", "Checkout (eSewa/Khalti)", "Wishlist", "Order tracking"],
              },
              {
                portal: "Community",
                items: ["For You feed", "My Discussions", "Saved", "Create post"],
              },
              {
                portal: "Services",
                items: ["Call a Doctor", "Yoga & wellness", "Hospital directory"],
              },
            ]}
          />
        </Block>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">
        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-8">
            A warm, approachable visual language that felt trustworthy without being
            clinical. The UI adapts content based on pregnancy week — featured articles,
            health tips, and product recommendations change as the user progresses.
            Health tools prioritize clarity over decoration: the kick counter is a single
            large button, the BMI calculator shows results with plain-language guidance.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/meromomma/screen-1.png" alt="Pregnancy Dashboard" caption="Stage-aware home screen — week-by-week guidance." />
            <ImageWithCaption src="/images/meromomma/screen-2.png" alt="Health Tools" caption="Health tools — clarity over decoration." />
            <ImageWithCaption src="/images/meromomma/screen-3.png" alt="Shop" caption="Curated shop with eSewa and Khalti as first-class payment options." />
            <ImageWithCaption src="/images/meromomma/screen-4.png" alt="Community" caption="Card-based feed personalized by pregnancy stage." />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
        <p className="body-base lead -mt-8">
          A product built from scratch — from branding and pitch deck through MVP design
          to development collaboration with an external team.
        </p>

        <div className="stat-grid">
          <StatBlock
            value="6"
            label="PHASES PLANNED"
            description="From health MVP through e-commerce to community and services."
          />
          <StatBlock
            value="5"
            label="HEALTH TOOLS SHIPPED"
            description="Due date, BMI, ovulation, kick counter, and weekly content."
          />
          <StatBlock
            value="3"
            label="REVENUE STREAMS"
            description="E-commerce, premium features, and a service marketplace."
          />
        </div>

        <Takeaways
          items={[
            {
              num: "01",
              title: "Scope management is the real product skill",
              body: "The initial feature list was massive. Every stakeholder had a must-have. Phasing it into MVP, Growth, and Ecosystem kept the team focused and the client realistic. The hardest design decisions were about what not to build first.",
            },
            {
              num: "02",
              title: "Local context changes everything",
              body: "Designing for Nepal meant eSewa and Khalti payment integration, not Stripe. It meant pregnancy content that accounts for local dietary practices, not Western nutrition guides. A product that ignores local context, regardless of its quality, has no place in a local market.",
            },
            {
              num: "03",
              title: "The wishlist taught me about hidden use cases",
              body: "What started as a simple save-for-later feature evolved into a shareable gift registry when we realized expecting mothers were already sharing product lists with family over WhatsApp. The feature insight came from understanding behavior, not from a feature request.",
            },
          ]}
        />
      </Section>
    </>
  );
}

function MedilinkContent() {
  return (
    <>
      <Section id="research" number="01" title="Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Medilink&apos;s platform was a series of disconnected applications. Members
            couldn&apos;t find providers. Doctors couldn&apos;t access patient history.
            Administrators reconciled billing across spreadsheets. Every user role had
            the same complaint: nothing talked to anything else.
          </p>
          <p className="body-base mb-10">
            The client saw this clearly. This wasn&apos;t a visual problem. It was a
            business problem. The fragmentation was costing them efficiency, trust, and
            growth. Her conviction was that user-centric design was the answer to
            modernizing the entire ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pl-6">
              <span className="eyebrow mb-2">THE CORE CHALLENGE</span>
              <p className="body-base">
                Create a unified digital product suite that was intuitive for end-users
                and easy for employees to manage. Six portals, six user types, one
                coherent experience.
              </p>
            </div>
            <div className="pl-6">
              <span className="eyebrow mb-2">THE PARTNERSHIP</span>
              <p className="body-base">
                Our Nepal-based design team worked directly with Medilink&apos;s
                Philippines team. Regular design reviews maintained alignment across time
                zones and ensured both design fidelity and technical feasibility.
              </p>
            </div>
          </div>
        </Block>

        <Block eyebrow="EMPATHY MAP">
          <div className="space-y-8">
            <EmpathyMap
              persona="Persona 1: Healthcare Member"
              items={[
                { q: "THINKS", a: '"Why can\'t I find my provider in one place?"' },
                { q: "FEELS", a: "Frustrated by disconnected tools and confusing navigation" },
                { q: "DOES", a: "Calls the hotline because the portal doesn't answer basic questions" },
                { q: "SAYS", a: '"I just want to check my LOA status without switching apps."' },
              ]}
            />
            <EmpathyMap
              persona="Persona 2: Doctor"
              items={[
                { q: "THINKS", a: '"I shouldn\'t need three systems to see one patient\'s history."' },
                { q: "FEELS", a: "Slowed down by tools that don't match clinical workflow" },
                { q: "DOES", a: "Writes notes on paper, enters data into the system later" },
                { q: "SAYS", a: '"Give me one screen with everything I need for this patient."' },
              ]}
            />
            <EmpathyMap
              persona="Persona 3: Administrator"
              items={[
                { q: "THINKS", a: '"Every department runs on a different tool."' },
                { q: "FEELS", a: "Overwhelmed reconciling data across disconnected portals" },
                { q: "DOES", a: "Exports data to Excel, manually cross-references between systems" },
                { q: "SAYS", a: '"I need one dashboard to manage the entire network."' },
              ]}
            />
          </div>
        </Block>
      </Section>

      <Section id="ux-design" number="02" title="UX Design">
        <Block eyebrow="VALUE PROPOSITION MAP">
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              ["Find and verify providers", "Disconnected portals per role", "Role-specific unified dashboards"],
              ["Process claims and LOA", "Manual data reconciliation", "Automated claims workflow"],
              ["Manage network operations", "Inconsistent UI across tools", "Shared design system"],
            ]}
          />
        </Block>

        <Block eyebrow="ROADMAP">
          <Table
            headers={[
              { subtitle: "PHASE 1", label: "FOUNDATION" },
              { subtitle: "PHASE 2", label: "EXPANSION" },
              { subtitle: "PHASE 3", label: "SCALE" }
            ]}
            rows={[
              ["MemberLink portal", "ProviderLink portal", "DentalLink portal"],
              ["DoctorLink portal", "AccountLink portal", "PayorLink portal"],
              ["Brand and visual system", "Mobile apps (Doctor, Member)", "Kiosk interface"],
              ["Core component library", "Marketing collaterals", "Frontend HTML/CSS/JS delivery"],
            ]}
          />
        </Block>

        <Block eyebrow="INFORMATION ARCHITECTURE">
          <p className="body-base mb-8">
            Designed role-specific portals for six user types: MemberLink, DoctorLink,
            ProviderLink, AccountLink, DentalLink, and PayorLink. Each portal shares a
            common design system but has task flows tailored to its audience.
          </p>
          <IADiagram
            rootLabel="Medilink ecosystem"
            columns={[
              { portal: "MemberLink", items: ["Find provider", "LOA status", "Claims", "Profile"] },
              { portal: "DoctorLink", items: ["Patient queue", "Prescriptions", "Schedule", "Reports"] },
              { portal: "ProviderLink", items: ["Claims mgmt", "Verification", "Analytics"] },
              { portal: "AccountLink", items: ["Billing", "Reports", "Audit logs"] },
              { portal: "DentalLink", items: ["Dental claims", "Treatment tracking"] },
              { portal: "PayorLink", items: ["Claims processing", "Network mgmt"] },
            ]}
          />
        </Block>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">
        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-8">
            Established a unified visual language with a shared component library across
            all six portals. Responsive dashboards, mobile apps for DoctorLink and
            MemberLink, a kiosk interface for the member gateway, and frontend
            HTML/CSS/JS for development handoff.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/medilink/screen-1.png" alt="Member Dashboard" caption="MemberLink — unified provider lookup and LOA status." />
            <ImageWithCaption src="/images/medilink/screen-2.png" alt="Doctor Dashboard" caption="DoctorLink — patient queue and clinical workflow." />
            <ImageWithCaption src="/images/medilink/screen-3.png" alt="Provider Dashboard" caption="ProviderLink — claims management and analytics." />
            <ImageWithCaption src="/images/medilink/screen-4.png" alt="Mobile App" caption="DoctorLink mobile — clinical workflow on the go." />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
        <p className="body-base lead -mt-8">
          A multi-year partnership that grew from a single deliverable to a complete
          digital ecosystem.
        </p>

        <div className="stat-grid">
          <StatBlock
            value="20+"
            label="PROJECTS COMPLETED"
            description="Scope grew from one deliverable to over 20 spanning multiple platforms."
          />
          <StatBlock
            value="6"
            label="PORTALS DESIGNED"
            description="MemberLink, DoctorLink, ProviderLink, AccountLink, DentalLink, PayorLink."
          />
          <StatBlock
            value="#1"
            label="HALL OF FAME"
            description="2017 International Innovation Awards — recognition for the ecosystem approach."
          />
        </div>

        <Takeaways
          items={[
            {
              num: "01",
              title: "Design is the business strategy",
              body: "The client didn't hire us to make things pretty. She hired us because fragmented UX was a business problem. Every dashboard we designed, every flow we unified, directly impacted operational efficiency. The product looked better because it worked better.",
            },
            {
              num: "02",
              title: "Cross-timezone collaboration needs structure",
              body: "Working with a Philippines-based team from Nepal meant design reviews had to be deliberate, not casual. We built a rhythm of structured reviews and async feedback that kept both teams aligned without blocking each other.",
            },
            {
              num: "03",
              title: "Scope growth is earned trust",
              body: "Going from one deliverable to over 20 wasn't scope creep. It was proof that the design foundation worked. Each new portal was faster to build because the system was already there. The engagement extended to Medilink's parent company, Equicom.",
            },
          ]}
        />
      </Section>
    </>
  );
}

function InovaContent() {
  return (
    <>
      <Section id="research" number="01" title="Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Due diligence in biopharma is inherently complex. But the tools were making
            it worse. Scientists conducted assessments using Word documents, email
            threads, and a UI that didn&apos;t reflect how they actually worked. Critical
            data lived in documents and had to be manually converted into the
            application&apos;s fields. Every transfer was a chance for error.
          </p>
          <p className="body-base mb-10">
            The existing platform was built on a legacy stack — Spring Boot, Freemarker,
            Bootstrap — and the UX reflected it: clunky, fragmented, and disorienting for
            anyone who wasn&apos;t already trained on it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pl-6">
              <span className="eyebrow mb-2">THE CORE CHALLENGE</span>
              <p className="body-base">
                Centralize expert reports and structured questionnaires into one cohesive
                platform that scientists, legal teams, and compliance officers could all
                navigate without training.
              </p>
            </div>
            <div className="pl-6">
              <span className="eyebrow mb-2">THE ROLE SHIFT</span>
              <p className="body-base">
                This started as a UI/UX redesign engagement. Within months it expanded to
                full-scale development, and my role shifted from Design Team Lead to
                Project Manager coordinating a distributed external team.
              </p>
            </div>
          </div>
        </Block>

        <Block eyebrow="EMPATHY MAP">
          <div className="space-y-8">
            <EmpathyMap
              persona="Persona 1: Scientist / Expert"
              items={[
                { q: "THINKS", a: '"This assessment data is scattered across five documents."' },
                { q: "FEELS", a: "Overwhelmed by manual processes and compliance pressure" },
                { q: "DOES", a: "Copies data from Word docs into fragmented UI fields" },
                { q: "SAYS", a: '"I need a centralized view of all my projects."' },
              ]}
            />
            <EmpathyMap
              persona="Persona 2: Compliance Officer"
              items={[
                { q: "THINKS", a: '"I can\'t see where any project actually stands right now."' },
                { q: "FEELS", a: "Anxious about missing deadlines without a clear pipeline view" },
                { q: "DOES", a: "Asks scientists for status updates over email, compiles manually" },
                { q: "SAYS", a: '"Give me one dashboard with every project\'s status."' },
              ]}
            />
          </div>
        </Block>
      </Section>

      <Section id="ux-design" number="02" title="UX Design">
        <Block eyebrow="VALUE PROPOSITION MAP">
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              ["Manage expert reports", "Fragmented tools and documents", "Unified assessment dashboard"],
              ["Track assessment progress", "Manual Word-to-UI data transfer", "Structured digital questionnaires"],
              ["Ensure regulatory compliance", "No centralized project overview", "Automated status tracking"],
            ]}
          />
        </Block>

        <Block eyebrow="ROADMAP">
          <Table
            headers={[
              { subtitle: "PHASE 1", label: "REDESIGN SPRINT" },
              { subtitle: "PHASE 2", label: "FRONTEND DELIVERY" },
              { subtitle: "PHASE 3", label: "FULL DEVELOPMENT" }
            ]}
            rows={[
              ["Dashboard and project listing", "HTML/CSS pages (Bootstrap)", "Backend (Spring Boot, MySQL)"],
              ["Project details view", "Admin management views", "Async communication protocols"],
              ["Assessment and expert views", "Design-to-dev handoff specs", "Scope management framework"],
            ]}
          />
        </Block>

        <Callout label="Key Decision">
          We mapped dual-persona journeys for scientists and compliance officers — a
          dashboard-first experience where each role saw a different default view but
          navigated the same underlying project structure. One IA, two mental models.
        </Callout>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">
        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-8">
            A two-week sprint redesign in Figma. Mockups for Dashboard, Project Listing,
            Project Details, Assessment View, Expert Opinions, and Expert View.
            HTML/CSS static pages using Bootstrap framework for direct dev integration.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/inova/screen-1.png" alt="Dashboard" caption="Dashboard — assessments, notifications, and projects in one view." />
            <ImageWithCaption src="/images/inova/screen-2.png" alt="Project Listing" caption="Project listing — structured view replacing document chaos." />
            <ImageWithCaption src="/images/inova/screen-3.png" alt="Assessment View" caption="Assessment view — structured questionnaire flow." />
            <ImageWithCaption src="/images/inova/screen-4.png" alt="Expert Panel" caption="Expert opinions panel — centralized review and report generation." />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
        <p className="body-base some-style lead -mt-8">
          A project that started as a design engagement and grew into a full product
          delivery, with lessons in distributed team management.
        </p>

        <div className="stat-grid">
          <StatBlock
            value="2"
            label="WEEK REDESIGN SPRINT"
            description="Delivered complete UI mockups for all critical views in a focused sprint."
          />
          <StatBlock
            value="1"
            label="PLATFORM SHIPPED"
            description="Cohesive platform replacing fragmented document-based workflows."
          />
          <StatBlock
            value="ORG"
            label="ADOPTION"
            description="Async communication protocols adopted as organizational standard."
          />
        </div>

        <Takeaways
          items={[
            {
              num: "01",
              title: "Early risk assessment is everything",
              body: "Working with an external distributed team means surprises are inevitable. The projects that survive them are the ones that identified risks before they became blockers. I learned to run risk assessments in the first week, not after the first missed deadline.",
            },
            {
              num: "02",
              title: "Design-to-PM is a natural transition",
              body: "Moving from Design Lead to Project Manager wasn't a role change — it was a scope change. I was already making prioritization decisions, managing stakeholder expectations, and sequencing work. The title just caught up to the reality.",
            },
            {
              num: "03",
              title: "Proactive communication builds distributed trust",
              body: "Weekly update logs and async standups weren't process overhead. They were how we built trust across time zones. When a team member in a different country can see exactly what happened this week without asking, that's when distributed work actually works.",
            },
          ]}
        />
      </Section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   CASE STUDY COMPONENTS (PRIMITIVES & FOOTER)
   ════════════════════════════════════════════════════════════ */

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="content-width">
        <div className="section-grid">
          <FadeIn>
            <div>
              <span className="eyebrow mb-4">{number}</span>
              <h2 className="h2-section">{title}</h2>
            </div>
          </FadeIn>
          <div className="section-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Block({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      {children}
    </div>
  );
}

export type TableHeader = string | { subtitle: string; label: string };

function Table({
  headers,
  rows,
}: {
  headers: TableHeader[];
  rows: string[][];
}) {
  const colWidth = `${100 / headers.length}%`;
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <colgroup>
          {headers.map((_, i) => (
            <col key={i} style={{ width: colWidth }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((h, i) =>
              typeof h === "string" ? (
                <th key={i} className="data-th">
                  <span className="eyebrow">{h}</span>
                </th>
              ) : (
                <th key={i} className="data-th data-th--stacked">
                  <span className="data-th-subtitle">{h.subtitle}</span>
                  <span className="eyebrow">{h.label}</span>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`data-td${j === 0 ? " data-td--first" : ""}`}>
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

export type EmpathyItem = { q: string; a: string };

function EmpathyMap({
  persona,
  items,
}: {
  persona: string;
  items: EmpathyItem[];
}) {
  return (
    <div>
      <p className="empathy-persona">{persona}</p>
      <div className="empathy-grid">
        {items.map(({ q, a }) => (
          <div key={q} className="empathy-cell">
            <span className="eyebrow">{q}</span>
            <p className="empathy-quote">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout({
  label = "Key Decision",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="callout">
      <h3 className="h4-card mb-3">{label}</h3>
      <p className="body-base">{children}</p>
    </div>
  );
}

function StatBlock({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="stat-block">
      <p className="stat-value">{value}</p>
      <span className="eyebrow mb-3">{label}</span>
      <p className="body-sm">{description}</p>
    </div>
  );
}

export type Takeaway = { num: string; title: string; body: string };

function Takeaways({ items }: { items: Takeaway[] }) {
  return (
    <div>
      <span className="eyebrow mb-8">KEY LEARNINGS</span>
      <div className="space-y-10">
        {items.map(({ num, title, body }) => (
          <div key={num} className="grid grid-cols-[40px_1fr] gap-6">
            <span className="eyebrow pt-0.5">{num}</span>
            <div>
              <h3 className="h4-card mb-2">{title}</h3>
              <p className="body-base">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type IAColumn = {
  portal: string;
  items: string[];
};

function IADiagram({
  rootLabel,
  columns,
}: {
  rootLabel: string;
  columns: IAColumn[];
}) {
  const cols = columns.length;
  const colsClass =
    cols === 2
      ? "grid-cols-2"
      : cols === 3
        ? "grid-cols-3"
        : cols === 4
          ? "grid-cols-2 md:grid-cols-4"
          : cols === 5
            ? "grid-cols-2 md:grid-cols-5"
            : "grid-cols-2 md:grid-cols-6";

  return (
    <div className="ia-diagram">
      <div className="ia-root-row">
        <div className="ia-root-pill">
          {rootLabel}
          <div className="ia-root-drop" />
        </div>
      </div>

      <div className={`grid ${colsClass} ia-connector-row`}>
        {columns.map((_, i) => {
          const isFirst = i === 0;
          const isLast = i === columns.length - 1;
          return (
            <div key={i} className="ia-connector-cell">
              {!isFirst && <div className="ia-connector-half ia-connector-half--left" />}
              {!isLast && <div className="ia-connector-half ia-connector-half--right" />}
              <div className="ia-connector-drop" />
            </div>
          );
        })}
      </div>

      <div className={`grid ${colsClass} gap-4`}>
        {columns.map(({ portal, items }) => (
          <div key={portal} className="ia-column">
            <div className="ia-portal-header">{portal}</div>
            <div className="ia-portal-items">
              {items.map((item) => (
                <div key={item} className="ia-portal-item">
                  <div className="ia-portal-item-drop" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type DesignSystemSwatch = { name: string; hex: string };
export type DesignSystemTypeRow = {
  sample: string;
  meta: string;
  sampleClass: string;
};
export type DesignSystemComponent = {
  label: string;
  render: React.ReactNode;
};

function DesignSystem({
  intro,
  meta,
  swatches,
  type,
  components,
}: {
  intro: string;
  meta?: string;
  swatches: DesignSystemSwatch[];
  type: DesignSystemTypeRow[];
  components: DesignSystemComponent[];
}) {
  return (
    <div className="ds-panel">
      <div className="ds-panel-header">
        <div className="ds-panel-title-group">
          <span className="eyebrow">Design System</span>
          <h3 className="ds-panel-title">{intro}</h3>
        </div>
        {meta && <p className="ds-panel-meta">{meta}</p>}
      </div>

      <div className="ds-grid">
        <div className="ds-card ds-card--color">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Color</h4>
            <span className="ds-card-num">01</span>
          </div>
          <div className="ds-swatches">
            {swatches.map(({ name, hex }) => (
              <div key={name} className="ds-swatch">
                <div
                  className="ds-swatch-chip"
                  style={{ "--swatch": hex } as React.CSSProperties}
                />
                <span className="ds-swatch-name">{name}</span>
                <span className="ds-swatch-hex">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-card ds-card--type">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Type</h4>
            <span className="ds-card-num">02</span>
          </div>
          <div className="ds-type-rows">
            {type.map(({ sample, meta: rowMeta, sampleClass }) => (
              <div key={rowMeta} className="ds-type-row">
                <span className={`ds-type-sample ${sampleClass}`}>{sample}</span>
                <span className="ds-type-meta">{rowMeta}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-card ds-card--components">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Components</h4>
            <span className="ds-card-num">03</span>
          </div>
          <div className="ds-components-grid">
            {components.map(({ label, render }) => (
              <div key={label} className="ds-component-cell">
                <div className="ds-component-canvas">{render}</div>
                <span className="ds-component-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="carousel-container">
      <div className="carousel-scroll">
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <div key={i} className="carousel-item">
              {child}
            </div>
          ))
        ) : (
          <div className="carousel-item">{children}</div>
        )}
      </div>
    </div>
  );
}

function CaseStudyFooter({ nextHref, nextLabel }: { nextHref: string; nextLabel: string }) {
  return (
    <>
      {/* ── Next Project ── */}
      <section className="section pb-12 md:pb-16">
        <div className="content-width">
          <span className="eyebrow mb-6">NEXT PROJECT</span>
          <Link
            href={nextHref}
            className="h2-section no-underline transition-opacity duration-200 hover:opacity-50 text-header"
          >
            {nextLabel} →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}