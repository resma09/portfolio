export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-border)] py-16"
    >
      <div className="content-width">
        <p className="font-[family-name:var(--font-heading)] text-2xl mb-4">
          Let&apos;s work together
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="mailto:reshma.manandhar.np@gmail.com"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors no-underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/reshmamanandhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors no-underline"
          >
            LinkedIn
          </a>
          <a
            href="/reshma-resume.pdf"
            target="_blank"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors no-underline"
          >
            Resume
          </a>
        </div>
        <p className="text-xs text-[var(--color-muted)] mt-12">
          &copy; {new Date().getFullYear()} Reshma Manandhar
        </p>
      </div>
    </footer>
  );
}
