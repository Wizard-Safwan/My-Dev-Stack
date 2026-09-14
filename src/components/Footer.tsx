import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Dev Stack home"
              className="inline-block"
            >
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-5 text-sm font-medium text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Projects
              </a>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Careers
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-xs text-slate-400 transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-slate-400 transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;