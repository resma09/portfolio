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

export function MeroMommaContent() {
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
