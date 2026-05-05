"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "RESEARCH", href: "#research" },
  { label: "UX DESIGN", href: "#ux-design" },
  { label: "UI DESIGN", href: "#ui-design" },
  { label: "KEY OUTCOMES", href: "#outcomes" },
];

export function ProcessNav() {
  const [activeSection, setActiveSection] = useState("research");

  useEffect(() => {
    const ids = ["research", "ux-design", "ui-design", "outcomes"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 148;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      className="sticky top-20 md:top-24 z-40 bg-white border-b border-[var(--color-border)]"
    >
      <div className="content-width">
        <div className="flex overflow-x-auto">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const active = activeSection === id;
            return (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[0.06em] py-5 pb-4 pr-8 bg-transparent border-none cursor-pointer transition-colors duration-150 text-left"
                style={{
                  color: active ? "#161616" : "var(--color-muted)",
                }}
              >
                <span className="relative inline-block">
                  {label}
                  {active && (
                    <span 
                      className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#161616]" 
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
