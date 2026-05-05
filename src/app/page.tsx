"use client";

import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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

          {/* Label */}
          <motion.span
            className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Product Designer · Kathmandu, Nepal
          </motion.span>

          {/* H1 */}
          <motion.h1
            className="text-[48px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] max-w-[860px] mb-8"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Hi, I&apos;m Reshma. I enjoy designing digital products that are
            clear, structured, and built for real people.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-[var(--color-body)] text-[16px] max-w-[560px] mb-12 leading-[1.75]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            I&apos;ve worked across health, education, and fintech — always
            focused on making complex products feel simple.
          </motion.p>

          {/* CTA */}
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
      <section id="work" className="border-t border-[var(--color-border)] pt-24 pb-0">
        <div className="content-width">
          <FadeIn>
            <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">
              SELECTED PROJECTS
            </span>
            <h2 className="text-[36px] font-bold tracking-[-0.01em] mb-14">
              THE WORKS
            </h2>
          </FadeIn>

          <div>
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
            {/* Closing border */}
            <div className="border-t border-[var(--color-border)]" />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="border-t border-[var(--color-border)] py-4 md:py-16">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
            <FadeIn>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mt-1">
                ABOUT ME
              </span>
            </FadeIn>

            <div className="space-y-6 max-w-[680px]">
              {aboutParagraphs.map((text, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <p className="text-[var(--color-body)] text-[16px] leading-[1.75]">
                    {text}
                  </p>
                </FadeIn>
              ))}
              <FadeIn delay={aboutParagraphs.length * 0.15}>
                <p className="italic text-[var(--color-body)] text-[14px] leading-[1.65] pt-4">
                  &ldquo;Good design doesn&apos;t have to shout — It just has
                  to work.&rdquo;
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="border-t border-[var(--color-border)] py-4">
        <div className="content-width">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

            <div>
              <span className="block font-mono text-[14px] leading-5 font-normal uppercase tracking-normal text-[var(--color-muted)] mb-3">
                GET IN TOUCH
              </span>
              <motion.a
                href="mailto:reshma.manandhar.np@gmail.com"
                className="text-[14px] text-[var(--color-body)] relative inline-flex flex-col"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                reshma.manandhar.np@gmail.com
                <motion.span
                  className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-black origin-left"
                  variants={{
                    rest: { scaleX: 1 },
                    hover: { scaleX: 0 },
                  }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                />
              </motion.a>
            </div>

            <div className="flex gap-8 text-[13px] font-medium text-[var(--color-body)]">
              <a
                href="https://linkedin.com/in/reshmamanandhar"
                target="_blank"
                className="hover:opacity-50 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="hover:opacity-50 transition-opacity"
              >
                Resume
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}