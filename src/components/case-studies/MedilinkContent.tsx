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

export function MedilinkContent() {
  return (
    <>
      <Section id="research" number="01" title="UX Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Healthcare workflows were often fragmented across providers, administrative
            systems, and patient-facing services. Members struggled with disconnected
            appointment experiences, while healthcare teams relied on manual and
            inconsistent operational processes.
          </p>

          <p className="body-base mb-10">
            The challenge was creating a connected ecosystem that could support patients,
            providers, administrators, and insurance workflows through clearer operational
            visibility and scalable service coordination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="eyebrow mb-2">THE CORE CHALLENGE</span>
              <p className="body-base">
                Design a unified healthcare ecosystem across multiple platforms while
                supporting different operational workflows for patients, doctors, providers,
                administrators, and insurance systems.
              </p>
            </div>
            <div>
              <span className="eyebrow mb-2">THE PARTNERSHIP</span>
              <p className="body-base">
                The project involved close collaboration across distributed teams through
                structured reviews, iterative feedback, and coordinated product workflows
                across multiple healthcare platforms.
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
          </div>
        </Block>
      </Section>

      <Section id="ux-design" number="02" title="UX Design">
        <Block eyebrow="VALUE PROPOSITION">
          <p className="body-base mt-6 mb-8">
            Medilink aimed to simplify healthcare coordination through a connected
            ecosystem that unified provider management, operational workflows,
            scheduling systems, and patient-facing experiences across multiple platforms.
          </p>
          <Table
            headers={["CUSTOMER JOBS", "PAINS", "GAINS"]}
            rows={[
              [
                "Find and verify providers",
                "Disconnected systems and workflows",
                "Unified role-based experiences"
              ],
              [
                "Process claims and LOA",
                "Manual coordination and tracking",
                "Simplified operational workflows"
              ],
              [
                "Manage healthcare operations",
                "Inconsistent tools across platforms",
                "Connected ecosystem structure"
              ],
            ]}
          />
        </Block>

        <Block eyebrow="PRODUCT SCOPE">
          <p className="body-base mb-8">
            Over five years, the engagement expanded across branding, platform design,
            operational systems, mobile experiences, and healthcare ecosystem tools
            supporting multiple user groups and workflows.
          </p>

          <Table
            headers={["AREA", "FOCUS", "DELIVERABLES"]}
            rows={[
              [
                "Brand & Identity",
                "Healthcare platform positioning",
                "Branding, collaterals, visual assets"
              ],
              [
                "Member Experience",
                "Patient-facing workflows",
                "MemberLink portal, provider search, LOA tracking"
              ],
              [
                "Provider Systems",
                "Operational and healthcare workflows",
                "DoctorLink, ProviderLink, DentalLink"
              ],
              [
                "Administrative Tools",
                "Claims and operational management",
                "AccountLink, PayorLink, reporting systems"
              ],
              [
                "Platform Expansion",
                "Cross-platform scalability",
                "Mobile experiences, frontend implementation support"
              ],
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
        <Block eyebrow="PLATFORM ECOSYSTEM">
          <p className="body-base mb-10">
            Medilink was designed as a connected healthcare ecosystem consisting of
            multiple platforms supporting patients, healthcare providers, insurance
            workflows, and administrative operations.
          </p>

          <div className="grid items-center">
            <img src="/images/medilink/medilink-logos.png" alt="Medilink Logos" />
          </div>
        </Block>

        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-10">
            Key interfaces focused on provider management, operational visibility,
            scheduling workflows, patient coordination, and administrative systems across
            multiple healthcare platforms.
          </p>
          <Carousel>
            <ImageWithCaption src="/images/medilink/screen-1.png" alt="Member Dashboard" caption="MemberLink — Doctor and Hospital search" />
            <ImageWithCaption src="/images/medilink/screen-2.png" alt="Payorlink" caption="Payorlink — claims and authorization tracking" />
            <ImageWithCaption src="/images/medilink/screen-3.png" alt="Accountlink" caption="Accountlink — billing and reporting dashboards" />
            <ImageWithCaption src="/images/medilink/screen-4.png" alt="Dentallink" caption="Dentallink — With the teeth structure illustration" />
            <ImageWithCaption src="/images/medilink/screen-5.png" alt="PayorLink" caption="PayorLink — settings page" />
            <ImageWithCaption src="/images/medilink/screen-6.png" alt="AccountLink" caption="AccountLink — Account profile page" />
            <ImageWithCaption src="/images/medilink/screen-7.png" alt="DentalLink" caption="DentalLink — Calender view of appointments" />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
        <div className="stat-grid">
          <StatBlock
            value="20+"
            label="PROJECTS COMPLETED"
            description="Expanded from a single platform into a broader healthcare ecosystem."
          />
          <StatBlock
            value="6"
            label="PORTALS DESIGNED"
            description="Designed across provider, member, doctor, insurance, and administrative workflows."
          />
          <StatBlock
            value="#1"
            label="HALL OF FAME"
            description="Recognized for innovation in connected healthcare experiences."
          />
        </div>

        <Takeaways
          items={[
            {
              num: "01",
              title: "Design is the business strategy",
              body: "The project reinforced how operational systems directly influence user experience. Improving healthcare workflows required balancing patient needs, provider efficiency, and administrative visibility across the ecosystem."
            },
            {
              num: "02",
              title: "Cross-timezone collaboration needs structure",
              body: "Working across distributed teams highlighted the importance of structured collaboration, iterative feedback, and alignment across multiple product workflows and delivery streams."
            },
            {
              num: "03",
              title: "Scope growth is earned trust",
              body: "As the ecosystem expanded across multiple platforms, maintaining consistency across workflows, dashboards, and operational systems became essential for scalable product growth."
            },
          ]}
        />
      </Section>
    </>
  );
}
