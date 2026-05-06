"use client";

import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Footer } from "@/components/Footer";

export default function Home() {
  const featured = getFeaturedProjects();
  const shouldReduceMotion = useReducedMotion();

  const aboutParagraphs = [
    "Over the years, I've worked across different industries and teams, helping turn ideas into digital products that work. I started in frontend, moved into UX, and now spend most of my time leading product design and guiding teams.",
    "What I care about most is making things simpler — for the user, for the team, and for the business. That means building clear flows, asking the right questions, and staying grounded in how people actually use things.",
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-48 md:pb-20">
        <div className="content-width">
          <motion.span
            className="eyebrow mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Product Designer · Kathmandu, Nepal
          </motion.span>

          <motion.h1
            className="h1-display max-w-[860px] mb-8"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Hi, I&apos;m Reshma. I enjoy designing digital products that are
            clear, structured, and built for real people.
          </motion.h1>

          <motion.p
            className="body-base max-w-[560px] mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            I&apos;ve worked across health, education, and fintech — always
            focused on making complex products feel simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.55 }}
          >
            <Link href="#work" className="btn-primary">
              View Works
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="section pt-24 pb-0 divider-soft">
        <div className="content-width">
          <FadeIn>
            <span className="eyebrow mb-3">SELECTED PROJECTS</span>
            <h2 className="h2-section mb-14">The Works</h2>
          </FadeIn>

          <div>
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
            <div className="hidden md:block divider" />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section py-16 md:py-24">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
            <FadeIn>
              <span className="eyebrow mt-1">ABOUT ME</span>
            </FadeIn>

            <div className="space-y-6 max-w-[680px]">
              {aboutParagraphs.map((text, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <p className="body-base">{text}</p>
                </FadeIn>
              ))}
              <FadeIn delay={aboutParagraphs.length * 0.15}>
                <p
                  className="italic body-sm pt-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  &ldquo;Good design doesn&apos;t have to shout — it just has
                  to work.&rdquo;
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}