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
            Most digital learning platforms either relied on passive content or replicated
            textbook-style experiences without meaningful interaction. Students struggled
            to understand their learning progress, while teachers lacked visibility into
            classroom performance and engagement.
          </p>

          <p className="body-base mb-10">
            mySecondTeacher was designed to support formal education through diagnostic
            learning, structured coursework, and digital classroom experiences. The
            challenge was creating an experience that balanced usability, engagement, and
            educational clarity for younger learners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="eyebrow mb-2">THE MARKET GAP</span>
              <p className="body-base">
                Formal platforms in 2019 had terrible interfaces. Learning progression was not always clear to students, and teachers faced difficulty tracking performance efficiently.
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

        <Block eyebrow="Market Study ">
          <p className="body-base mb-6">
            The research included reviewing educational platforms and digital learning
            products to better understand learning progression, engagement models,
            dashboard structures, and accessibility patterns commonly used in formal
            education platforms.
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

        <Block eyebrow="VALUE PROPOSITION">
          <p className="body-base mt-6 mb-6">
            The platform aimed to create a structured and approachable learning experience
            that supported both educational outcomes and usability. The focus was on
            improving learning progression, simplifying navigation, and giving teachers
            clearer visibility into student performance while supporting future platform
            scalability.
          </p>
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
          <p className="body-base mb-6">
            The platform evolved across multiple phases, expanding from core learning
            experiences into classroom tools, localized products, and supporting
            educational ecosystems.
          </p>
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
            Special attention was given to scalability, content organization, and
            consistency across modules.
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
          intro="Web App Design System"
          meta="A lightweight design system was introduced to improve consistency across the platform and support scalable product development. The system included reusable UI components, typography hierarchy, spacing guidelines, dashboard patterns, and accessible visual structures designed for younger learners." swatches={[
            { name: "Primary", hex: "#985DEC" },
            { name: "Secondary", hex: "#39C9A7" },
            { name: "Red", hex: "#F15366" },
            { name: "Highlight", hex: "#FAF7FE" },
            { name: "Surface Light", hex: "#F9FAFA" },
            { name: "Text-Light", hex: "#A7A7A7" },
            { name: "Body Text", hex: "#383838" },
            { name: "Border Color", hex: "#EBEBEB" }
          ]}
          type={[
            { sample: "Diagnostic Learning", meta: "WebApp - Title / Work Sans / 36px", sampleClass: "ds-type-sample--display font-work-sans" },
            { sample: "Diagnostic Learning", meta: "WebApp - Work Sans / Text / Regular / 16px", sampleClass: "ds-type-sample--body font-work-sans" },
            { sample: "Diagnostic Learning", meta: "WebApp - Work Sans / Text / Regular / 16px", sampleClass: "ds-type-sample--body font-work-sans" }
          ]}
          components={[
            {
              label: "VIDEO CARD",
              render: (
                <div className="ds-mst-video-card">
                  <div className="ds-mst-video-thumb" />
                  <p className="ds-mst-video-title">Introduction to Algebra I: Linear Equations</p>
                  <div className="ds-mst-video-meta">
                    <span>1.2k Views</span>
                    <span>12 Pages</span>
                    <span>4.8 Rating</span>
                  </div>
                </div>
              )
            },
            {
              label: "PRIMARY BUTTON",
              render: (
                <button className="ds-mst-btn-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  Go to Subject Catalogue
                </button>
              )
            },
            {
              label: "CLASSROOM CARD",
              render: (
                <div className="ds-mst-classroom-card">
                  <p className="ds-mst-classroom-time">10:00 AM — 11:00 AM</p>
                  <p className="ds-mst-classroom-title">English 102 Classroom</p>
                  <a href="#" className="ds-mst-classroom-join">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    Join
                  </a>
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
          <p className="body-base mb-10">
            Key interfaces were designed across the student, teacher, and administrative
            ecosystem, including learning dashboards, classroom experiences, interactive
            video lessons, reporting tools, and ebook workflows.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/mst/screen-1.png" alt="Teacher Dashboard" caption="Teacher dashboard — Object-oriented learning." />
            <ImageWithCaption src="/images/mst/screen-2.png" alt="Ebook Page" caption="Ebook overview page with the meta and subscribe button." />
            <ImageWithCaption src="/images/mst/screen-3.png" alt="Course with IVY stat" caption="Showing the progress of a student for the particular IVY Subject" />
            <ImageWithCaption src="/images/mst/screen-4.png" alt="Jelajah Ilmu Onboarding Screens" caption="Jelajah Ilmu - Indonesian version of the platform for schools in Indonesia" />
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
              title: "Engagement is driven by learning clarity",
              body: "The improvement in lesson completion came from making learning progress easier to understand through structured checkpoints, progress visibility, and guided interactions. Small UX decisions helped students better understand where they were, what came next, and how they were progressing.",
            },
            {
              num: "02",
              title: "Product ownership strengthened design decisions",
              body: "Working as Product Owner for Jelajah Ilmu involved writing user stories, running sprint reviews, and managing product priorities alongside design responsibilities. Being closely involved in product decisions helped shape more practical and scalable design solutions grounded in real implementation constraints.",
            },
            {
              num: "03",
              title: "Learning experiences must support real classroom behavior",
              body: "Designing for formal education required understanding how students learn, how teachers manage classrooms, and how educational workflows operate beyond the interface itself. The platform needed to support structured learning experiences that felt approachable, adaptable, and practical for everyday classroom use.",
            },
          ]}
        />
      </Section>
    </>
  );
}
