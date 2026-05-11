import React from "react";
import {
  Section,
  Block,
  Table,
  EmpathyMap,
  Carousel,
  StatBlock,
  Takeaways,
  Callout
} from "@/components/CaseStudyBlocks";
import { ImageWithCaption } from "@/components/ImageWithCaption";

export function InovaContent() {
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
              title: "Development handoff is a two-way street",
              body: "Delivering Figma files wasn't enough for a backend-heavy team. We had to bridge the gap by delivering static HTML/CSS (Bootstrap) pages. Good design doesn't survive bad handoff.",
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
