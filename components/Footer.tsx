'use client'

export function Footer() {
  return (
    <footer id="contact" className="bg-primary border-t border-border px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-3 gap-16 mb-12">
          {/* About Column */}
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-accent-teal">
              Let's Build Something
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl">
              Currently seeking full-time robotics, embedded systems, or ML engineering roles—preferably in medical technology. Graduating May 2026 from UMass Amherst.
            </p>
            <a 
              href="mailto:sidharth@sidjain.co"
              className="font-mono text-sm text-accent-teal hover:text-accent-green transition-colors"
            >
              sidharth@sidjain.co
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-text-dim mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
                { label: 'GitHub', href: 'https://github.com/yourprofile' },
                { label: 'Email', href: 'mailto:sidharth@sidjain.co' },
                { label: 'Resume', href: '/resume.pdf' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-text-secondary hover:text-accent-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex justify-between items-center">
          <p className="font-mono text-xs text-text-dim">
            © 2026 SIDHARTH JAIN // SYSTEMS ENGINEER
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-teal transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-teal transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
