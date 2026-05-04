"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "research", label: "UX Research" },
  { id: "ux-design", label: "UX Design" },
  { id: "ui-design", label: "UI Design" },
  { id: "outcomes", label: "Key Outcomes" },
];

export function ProcessNav() {
  const [active, setActive] = useState("research");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140; // Nav height + ProcessNav height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-20 md:top-24 z-40 border-b border-[#e8e8e8] bg-white/95 backdrop-blur-sm">
      <div className="content-width flex gap-10 overflow-x-auto py-5">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase transition-colors whitespace-nowrap ${
              active === id
                ? "text-[var(--color-text)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
