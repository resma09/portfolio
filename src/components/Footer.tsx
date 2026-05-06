export function Footer() {
  return (
    <footer id="contact" className="divider py-8">
      <div className="content-width">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="eyebrow mb-3 text-header">GET IN TOUCH</span>
            <a
              href="mailto:reshma.manandhar.np@gmail.com"
              className="link-underline body-sm"
            >
              reshma.manandhar.np@gmail.com
            </a>
          </div>

          <div className="flex gap-8">
            <a
              href="https://linkedin.com/in/reshmamanandhar"
              target="_blank"
              rel="noreferrer"
              className="body-sm font-medium no-underline transition-opacity duration-200 hover:opacity-50 text-body"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="body-sm font-medium no-underline transition-opacity duration-200 hover:opacity-50 text-body"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="pt-8">
          <p className="body-sm text-muted">
            © {new Date().getFullYear()} Reshma Manandhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
