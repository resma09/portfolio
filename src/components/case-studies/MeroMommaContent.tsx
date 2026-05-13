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
import Image from "next/image";

export function MeroMommaContent() {
  return (
    <>
      <Section id="research" number="01" title="Research">
        <Block eyebrow="THE PROBLEM">
          <p className="body-base mb-6">
            Expecting mothers in Nepal often rely on fragmented resources including family
            advice, social media groups, scattered web searches, and disconnected clinic
            visits. There was no single platform combining pregnancy guidance, parenting
            tools, trusted products, and community support in one experience.
          </p>

          <p className="body-base mb-10">
            Most existing solutions were designed for Western markets and did not reflect
            local behaviors, payment systems, or everyday parenting needs within the
            Nepali context.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="eyebrow mb-2">THE MARKET GAP</span>
              <p className="body-base">
                Nepal lacked a localized parenting platform that combined health tools,
                educational content, ecommerce, and community support within a single mobile
                experience.
              </p>

            </div>
            <div>
              <span className="eyebrow mb-2">THE BUSINESS MODEL</span>
              <p className="body-base">
                The platform combined free health and parenting tools with ecommerce,
                community engagement, and service-based features to support long-term user
                retention and product growth.
              </p>
            </div>
          </div>
        </Block>

        <Block eyebrow="MARKET CONTEXT">
          <p className="body-base">
            Existing parenting platforms such as What to Expect and BabyCenter provided
            useful references for stage-based guidance, community interaction, and
            health tracking experiences. However, most products were designed for
            Western audiences and did not reflect local payment systems, parenting
            behaviors, or accessibility needs relevant to Nepali users.
          </p>
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
        <Block eyebrow="VALUE PROPOSITION">
          <p className="body-base mt-6 mb-8">
            The platform aimed to support parents through different stages of pregnancy
            and early parenting by combining health guidance, curated products, localized
            content, and community-based support within a single mobile experience.
          </p>
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
          <p className="body-base mb-6">
            The roadmap evolved from core health tools into commerce, services, and
            community-driven experiences as the platform expanded.
          </p>
          <Table
            headers={[
              { subtitle: "Phase 1", label: "FOUNDATION" },
              { subtitle: "Phase 2", label: "PLATFORM & COMMERCE" },
              { subtitle: "Phase 3", label: "ENGAGEMENT & SCALING" }
            ]}
            rows={[
              [
                "Pregnancy tracking tools",
                "Website redesign and ecommerce",
                "Community discussions"
              ],
              [
                "Due date and BMI calculators",
                "Vendor onboarding",
                "Wishlist redesign"
              ],
              [
                "Weekly parenting content",
                "Product catalog and checkout",
                "Global search"
              ],
              [
                "Doctor and hospital directory",
                "Local payment integration",
                "Baby name suggestions"
              ],
              [
                "Blog and educational resources",
                "Order and inventory workflows",
                "Recommended services"
              ],
              [
                "Gallery and shared moments",
                "Content and admin management",
                "Notification system"
              ],
            ]}
          />
        </Block>

        <Block eyebrow="INFORMATION ARCHITECTURE">
          <p className="body-base mb-8">
            Designed around pregnancy stages and everyday parenting needs. Content, tools,
            products, and recommendations adapted based on the user’s journey and
            priorities.
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
                items: ["For You feed", "My Discussions"],
              },
              {
                portal: "Services",
                items: ["Call a Doctor", "Hospital directory", "Event"],
              },
            ]}
          />
        </Block>
      </Section>

      <Section id="ui-design" number="03" title="UI Design">
        <DesignSystem
          intro="Maternal Health Platform"
          meta="A warm and approachable visual system designed to feel supportive without becoming clinical. The interface prioritizes clarity and accessibility for everyday mobile interactions."
          /* Updated to 3 colors per row */
          swatches={[
            { name: "Primary", hex: "#E9ACBD" },
            { name: "Secondary", hex: "#88B9F2" },
            { name: "Focus", hex: "#EFC950" },
            { name: "Surface Light", hex: "#F9FAFA" },
            { name: "Light Blue BG", hex: "#E8F3FF" },
            { name: "Header Text", hex: "#43485A" }
          ]}
          /* Updated to stacked layout: Text on top, Meta info on a new line */
          type={[
            {
              sample: "You are on your 36 weeks of pregnancy",
              meta: "H2 / Nunito / SemiBold / 18px (LH: 30px, PS: 8px)",
              sampleClass: "block font-nunito font-semibold text-[18px] leading-[30px] text-[#43485A] mb-1"
            },
            {
              sample: "Shop by Category",
              meta: "H3 / Nunito / Bold / 20px (LH: 24px, PS: 8px)",
              sampleClass: "block font-nunito font-bold text-[20px] leading-[24px] text-[#43485A] mb-1"
            },
            {
              sample: "When coping with the loss of your expected birth plan, it’s important to remember that you are not alone.",
              meta: "Body / Proxima Nova / Regular / 16px",
              sampleClass: "block font-proxima text-[16px] leading-relaxed text-[#4E4E52] mb-1"
            }
          ]}
          components={[
            {
              label: "Card- Store Item",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/meromomma/ds/Card-%20Store%20Item.png" alt="Card- Store Item" width={220} height={300} className="w-full h-auto max-w-[220px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "Wish Icon - Interaction",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/meromomma/ds/wish%20Icon.png" alt="Wish Icon - Interaction" width={160} height={80} className="w-full h-auto max-w-[160px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "Buttons",
              className: "w-full md:w-[30%]",
              render: (
                <Image src="/images/meromomma/ds/Buttons.png" alt="Buttons" width={220} height={220} className="w-full h-auto max-w-[220px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "Mobile Nav Bar",
              className: "w-full md:w-[48%]",
              render: (
                <Image src="/images/meromomma/ds/bottom-nav.png" alt="Mobile Nav Bar" width={480} height={180} className="w-full h-auto max-w-[480px] object-contain drop-shadow-sm" />
              )
            },
            {
              label: "Tab Bar/Action",
              className: "w-full md:w-[48%]",
              render: (
                <Image src="/images/meromomma/ds/Action.png" alt="Tab Bar/Action" width={480} height={180} className="w-full h-auto max-w-[480px] object-contain drop-shadow-sm" />
              )
            }
          ]}
        />
        <Block eyebrow="KEY SCREENS">
          <p className="body-base mb-10">
            The mobile experience combined pregnancy tracking, educational content,
            curated commerce, and community interactions within a calm and approachable
            interface designed for everyday use.
          </p>
          <Carousel className="carousel--mobile-peek">
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-1.png" alt="Pregnancy Dashboard" caption="Stage-aware home screen — week-by-week guidance." />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-2.png" alt="Week View" caption="Week 32 View of the fetus" />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-3.png" alt="Shop" caption="Shop listing all essentials by category" />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-4.png" alt="Article Feed" caption="Card-based feed personalized by pregnancy stage." />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-5.png" alt="Baby Name Suggestion" caption="Baby Name Suggestions based with different setting" />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-6.png" alt="BMI Calculator" caption="BMI Calculator for pregnant women" />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-7.png" alt="Baby Kick Counter" caption="Record and track baby kicks" />
            <ImageWithCaption showBg={false} aspectRatio="9/19" src="/images/meromomma/screen-8.png" alt="Photography service Details" caption="Book photography services for maternity and newborn shoots" />
          </Carousel>
        </Block>
      </Section>

      <Section id="outcomes" number="04" title="Outcomes">
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
              body: "The project included a wide range of ideas spanning health tools, ecommerce, community features, and service integrations. Prioritizing what delivered the most immediate value became essential throughout the product planning process.",
            },
            {
              num: "02",
              title: "Local context changes everything",
              body: "Designing for Nepal required understanding local behaviors, payment systems, content expectations, and how parents discover and trust information in everyday life. Local context shaped both product decisions and user experience patterns.",
            },
            {
              num: "03",
              title: "The wishlist taught me about hidden use cases",
              body: "User behavior often revealed opportunities that were not part of the original feature plan. Small interactions around saved products and shared lists showed how parents naturally involved friends and family throughout the purchasing and decision-making process.",
            },
          ]}
        />
      </Section>
    </>
  );
}
