import React from "react";
import {
  Section,
  Block,
  Table,
  EmpathyMap,
  IADiagram,
  DesignSystem,
  Carousel,
  StatBlock,
  Takeaways
} from "@/components/CaseStudyBlocks";
import { ImageWithCaption } from "@/components/ImageWithCaption";

export function MSTContent() {
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
