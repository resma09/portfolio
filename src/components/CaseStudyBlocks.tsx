import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="content-width">
        <div className="section-grid">
          <FadeIn>
            <div>
              <span className="eyebrow mb-4">{number}</span>
              <h2 className="h2-section">{title}</h2>
            </div>
          </FadeIn>
          <div className="section-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Block({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      {children}
    </div>
  );
}

export type TableHeader = string | { subtitle: string; label: string };

export function Table({
  headers,
  rows,
}: {
  headers: TableHeader[];
  rows: string[][];
}) {
  const colWidth = `${100 / headers.length}%`;
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <colgroup>
          {headers.map((_, i) => (
            <col key={i} style={{ width: colWidth }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((h, i) =>
              typeof h === "string" ? (
                <th key={i} className="data-th">
                  <span className="eyebrow">{h}</span>
                </th>
              ) : (
                <th key={i} className="data-th data-th--stacked">
                  <span className="data-th-subtitle">{h.subtitle}</span>
                  <span className="eyebrow">{h.label}</span>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`data-td${j === 0 ? " data-td--first" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type EmpathyItem = { q: string; a: string };

export function EmpathyMap({
  persona,
  items,
}: {
  persona: string;
  items: EmpathyItem[];
}) {
  return (
    <div>
      <p className="empathy-persona">{persona}</p>
      <div className="empathy-grid">
        {items.map(({ q, a }) => (
          <div key={q} className="empathy-cell">
            <span className="eyebrow">{q}</span>
            <p className="empathy-quote">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Callout({
  label = "Key Decision",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="callout">
      <h3 className="h4-card mb-3">{label}</h3>
      <p className="body-base">{children}</p>
    </div>
  );
}

export function StatBlock({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="stat-block">
      <p className="stat-value">{value}</p>
      <span className="eyebrow mb-3">{label}</span>
      <p className="body-sm">{description}</p>
    </div>
  );
}

export type Takeaway = { num: string; title: string; body: string };

export function Takeaways({ items }: { items: Takeaway[] }) {
  return (
    <div>
      <span className="eyebrow mb-8">KEY LEARNINGS</span>
      <div className="space-y-10">
        {items.map(({ num, title, body }) => (
          <div key={num} className="grid grid-cols-[40px_1fr] gap-6">
            <span className="eyebrow pt-0.5">{num}</span>
            <div>
              <h3 className="h4-card mb-2">{title}</h3>
              <p className="body-base">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type IAColumn = {
  portal: string;
  items: string[];
};

export function IADiagram({
  rootLabel,
  columns,
}: {
  rootLabel: string;
  columns: IAColumn[];
}) {
  const cols = columns.length;
  const colsClass =
    cols === 2
      ? "grid-cols-2"
      : cols === 3
        ? "grid-cols-3"
        : cols === 4
          ? "grid-cols-4"
          : cols === 5
            ? "grid-cols-5"
            : "grid-cols-6";

  return (
    <div className="ia-diagram">
      <div className="ia-root-row">
        <div className="ia-root-pill">
          {rootLabel}
          <div className="ia-root-drop" />
        </div>
      </div>

      <div className={`grid ${colsClass} ia-connector-row`}>
        {columns.map((_, i) => {
          const isFirst = i === 0;
          const isLast = i === columns.length - 1;
          return (
            <div key={i} className="ia-connector-cell">
              {!isFirst && <div className="ia-connector-half ia-connector-half--left" />}
              {!isLast && <div className="ia-connector-half ia-connector-half--right" />}
              <div className="ia-connector-drop" />
            </div>
          );
        })}
      </div>

      <div className={`grid ${colsClass} gap-4`}>
        {columns.map(({ portal, items }) => (
          <div key={portal} className="ia-column">
            <div className="ia-portal-header">{portal}</div>
            <div className="ia-portal-items">
              {items.map((item) => (
                <div key={item} className="ia-portal-item">
                  <div className="ia-portal-item-drop" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type DesignSystemSwatch = { name: string; hex: string };
export type DesignSystemTypeRow = {
  sample: string;
  meta: string;
  sampleClass: string;
};
export type DesignSystemComponent = {
  label: string;
  render: React.ReactNode;
};

export function DesignSystem({
  intro,
  meta,
  swatches,
  type,
  components,
}: {
  intro: string;
  meta?: string;
  swatches: DesignSystemSwatch[];
  type: DesignSystemTypeRow[];
  components: DesignSystemComponent[];
}) {
  return (
    <div className="ds-panel">
      <div className="ds-panel-header">
        <div className="ds-panel-title-group">
          <span className="eyebrow">Design System</span>
          <h3 className="ds-panel-title">{intro}</h3>
        </div>
        {meta && <p className="ds-panel-meta">{meta}</p>}
      </div>

      <div className="ds-grid">
        <div className="ds-card ds-card--color">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Color</h4>
            <span className="ds-card-num">01</span>
          </div>
          <div className="ds-swatches">
            {swatches.map(({ name, hex }) => (
              <div key={name} className="ds-swatch">
                <div
                  className="ds-swatch-chip"
                  style={{ "--swatch": hex } as React.CSSProperties}
                />
                <span className="ds-swatch-name">{name}</span>
                <span className="ds-swatch-hex">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-card ds-card--type">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Type</h4>
            <span className="ds-card-num">02</span>
          </div>
          <div className="ds-type-rows">
            {type.map(({ sample, meta: rowMeta, sampleClass }) => (
              <div key={rowMeta} className="ds-type-row">
                <span className={`ds-type-sample ${sampleClass}`}>{sample}</span>
                <span className="ds-type-meta">{rowMeta}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-card ds-card--components">
          <div className="ds-card-header">
            <h4 className="ds-card-title">Components</h4>
            <span className="ds-card-num">03</span>
          </div>
          <div className="ds-components-grid">
            {components.map(({ label, render }) => (
              <div key={label} className="ds-component-cell">
                <div className="ds-component-canvas">{render}</div>
                <span className="ds-component-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="carousel-container">
      <div className="carousel-scroll">
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <div key={i} className="carousel-item">
              {child}
            </div>
          ))
        ) : (
          <div className="carousel-item">{children}</div>
        )}
      </div>
    </div>
  );
}

export function CaseStudyFooter({ nextHref, nextLabel }: { nextHref: string; nextLabel: string }) {
  return (
    <>
      {/* ── Next Project ── */}
      <section className="section pb-12 md:pb-16">
        <div className="content-width">
          <span className="eyebrow mb-6">NEXT PROJECT</span>
          <Link
            href={nextHref}
            className="h2-section no-underline transition-opacity duration-200 hover:opacity-50 text-header"
          >
            {nextLabel} →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
