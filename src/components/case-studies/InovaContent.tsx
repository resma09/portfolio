import React from "react";
import Image from "next/image";
import {
  Section,
  Block,
  Table,
  EmpathyMap,
  IADiagram,
  DesignSystem,
  Carousel,
  StatBlock,
  Callout,
  Takeaways
} from "@/components/CaseStudyBlocks";
import { ImageWithCaption } from "@/components/ImageWithCaption";

export function InovaContent() {
  return (
    <>
      <Section id="research" number="01" title="UX Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Due diligence workflows in biopharma relied heavily on disconnected
            documents, email communication, and manual reporting processes. Scientists,
            legal teams, and compliance officers often worked across fragmented systems
            that made collaboration and visibility difficult.
          </p>

          <p className="body-base mb-10">
            The existing platform lacked workflow clarity and required users to manually
            transfer information between documents and structured systems, increasing both
            operational complexity and the risk of errors.
          </p>

          <span className="eyebrow mb-2">THE CORE CHALLENGE</span>
          <p className="body-base">
            Create a centralized platform that combined structured assessments, expert
            reviews, and compliance workflows into a system that different teams could
            navigate efficiently without extensive onboarding.
          </p>


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
        <Block eyebrow="VALUE PROPOSITION">
          <p className="body-base mt-6 mb-8">
            The platform aimed to simplify due diligence workflows by centralizing
            assessments, expert reviews, project visibility, and compliance tracking
            within a structured digital system.
          </p>
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              [
                "Manage assessment workflows",
                "Disconnected tools and documents",
                "Centralized assessment dashboard"
              ],
              [
                "Track project progress",
                "Manual data transfer and reporting",
                "Structured digital workflows"
              ],
              [
                "Maintain compliance visibility",
                "Limited operational transparency",
                "Clear project and status tracking"
              ],
            ]}
          />
        </Block>

        <Block eyebrow="ROADMAP">
          <p className="body-base mb-6">
            The project expanded from a focused redesign initiative into a broader product
            and development engagement supporting frontend delivery, workflow management,
            and operational coordination.
          </p>
          <Table
            headers={[
              { subtitle: "PHASE 1", label: "REDESIGN SPRINT" },
              { subtitle: "PHASE 2", label: "FRONTEND DELIVERY" },
              { subtitle: "PHASE 3", label: "FULL DEVELOPMENT" }
            ]}
            rows={[
              [
                "Dashboard and project workflows",
                "Frontend implementation",
                "Backend integration support"
              ],
              [
                "Assessment and expert views",
                "Admin and reporting systems",
                "Project coordination workflows"
              ],
              [
                "Structured questionnaire flows",
                "Design-to-development handoff",
                "Operational scaling support"
              ],
            ]}
          />
        </Block>

        <Callout label="Key Decision">
          The platform was designed around shared project structures while supporting
          different operational views for scientists, compliance teams, and
          administrators. This helped maintain consistency without oversimplifying
          role-specific workflows.
        </Callout>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">

        <DesignSystem
          intro="Biopharma Due Diligence"
          meta="A structured visual system designed to support complex operational workflows, assessment management, and high-density information across scientific and compliance-focused interfaces."
          swatches={[
            { name: "Primary Blue", hex: "#0082FA" },
            { name: "Primary Blue+", hex: "#005DB2" },
            { name: "Secondary Yellow", hex: "#FFB03A" },
            { name: "Grey", hex: "#A3B3D0" },
            { name: "Grey+", hex: "#5A73A0" },
            { name: "Background", hex: "#F8FAFF" },
            { name: "Border", hex: "#DAE5F9" },
            { name: "Text", hex: "#384E7A" },
          ]}
          type={[
            {
              sample: "Accelerate more of the right leads.",
              meta: "Beatrice / H1 / 40px / Bold",
              sampleClass: "ds-type-sample--h1"
            },
            {
              sample: "Accelerate More Of The Right Leads.",
              meta: "Beatrice / H2 / 30px / Regular",
              sampleClass: "ds-type-sample--h2"
            },
            {
              sample: "Assessment Overview",
              meta: "Beatrice / H3 / 20px / Bold",
              sampleClass: "ds-type-sample--h3"
            },
            {
              sample: "Clinical Data Reliability",
              meta: "Beatrice / Body / 16px / Regular",
              sampleClass: "ds-type-sample--body"
            },
            {
              sample: "COMPLIANCE REVIEW",
              meta: "Beatrice / Label / 12px / Bold",
              sampleClass: "ds-type-sample--mono"
            }
          ]}

          components={[
            {
              label: "BUTTON STYLES",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/buttons.png" alt="Button Styles" width={240} height={180} style={{ width: "80%", height: "auto" }} className="max-w-[240px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "INPUT STYLES",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/Inputs.png" alt="Input Styles" width={320} height={240} style={{ width: "100%", height: "auto" }} className="max-w-[320px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "STATUS TAGS",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/tags.png" alt="Status Tags" width={100} height={60} style={{ width: "50%", height: "auto" }} className="max-w-[280px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "SEARCH & SELECTION",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/search.png" alt="Search & Selection" width={200} height={320} style={{ width: "100%", height: "auto" }} className="max-w-[480px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "PROJECT CARD",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/card.png" alt="Project Card" width={200} height={240} style={{ width: "100%", height: "auto" }} className="max-w-[480px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "NAVIGATION",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/inova/ds/navigation.png" alt="Navigation" width={480} height={120} style={{ width: "60%", height: "auto" }} className="max-w-[480px] object-contain drop-shadow-sm" />
              )
            }
          ]}
        />
        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-10">
            Key interfaces focused on assessment workflows, project visibility,
            structured reporting, and expert collaboration across operational due
            diligence processes.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/inova/screen-1.png" alt="Dashboard" caption="Dashboard — assessments, notifications, and projects in one view." />
            <ImageWithCaption src="/images/inova/screen-2.png" alt="Project Listing" caption="Project listing — structured view replacing document chaos." />
            <ImageWithCaption src="/images/inova/screen-3.png" alt="Assessment View" caption="Assessment view — structured questionnaire flow." />
            <ImageWithCaption src="/images/inova/screen-4.png" alt="Expert Panel" caption="Expert opinions panel — centralized review and report generation." />
            <ImageWithCaption src="/images/inova/screen-5.png" alt="Reporting" caption="Structured reporting — professional layouts generated from assessment data." />
            <ImageWithCaption src="/images/inova/screen-6.png" alt="Mobile View" caption="Project tracking on the go — optimized for mobile review." />
            <ImageWithCaption src="/images/inova/screen-7.png" alt="Admin View" caption="Platform administration — managing questionnaire templates and user roles." />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">

        <Takeaways
          items={[
            {
              num: "01",
              title: "Development handoff is a two-way street",
              body: "The project reinforced the importance of strong collaboration between design and development teams. Delivering frontend-ready assets and structured implementation support helped reduce gaps during handoff and development."
            },
            {
              num: "02",
              title: "Design-to-PM is a natural transition",
              body: "As the project expanded, my responsibilities naturally evolved from design leadership into project coordination, prioritization, and cross-functional workflow management."
            },
            {
              num: "03",
              title: "Proactive communication builds distributed trust",
              body: "Clear documentation, regular updates, and structured communication became essential for maintaining alignment across distributed teams and complex operational workflows."
            },
          ]}
        />
      </Section>
    </>
  );
}
