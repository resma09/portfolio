import React from "react";
import {
  Section,
  Block,
  Table,
  EmpathyMap,
  IADiagram,
  Carousel,
  StatBlock,
  Takeaways
} from "@/components/CaseStudyBlocks";
import { ImageWithCaption } from "@/components/ImageWithCaption";

export function MedilinkContent() {
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
