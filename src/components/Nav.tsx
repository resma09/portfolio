"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
];

export function Nav() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="content-width flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          className="font-bold text-xs tracking-widest text-[var(--color-text)] no-underline flex items-center gap-2 font-mono"
        >
          <span>RESHMA</span>
          <span className="text-[var(--color-border)]">/</span>
          <span className="text-[var(--color-muted)]">PORTFOLIO</span>
        </Link>

        <ul className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[10px] md:text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors no-underline font-mono"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
