import { Github, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  project: [
    { label: 'GitHub Repository', href: 'https://github.com/AmirrezaRezaie/Goalixa' },
    { label: 'Documentation', href: '#' },
    { label: 'Releases', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/AmirrezaRezaie/Goalixa', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-light-surface border-t border-light-border">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src="/assets/goalixa-logo.png"
              alt="Goalixa"
              className="h-8 w-auto mb-4"
            />
            <p className="text-light-muted mb-6 max-w-sm">
              Achieve your goals with focused planning, time tracking, and habit
              building - all in one place.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-white rounded-lg border border-light-border flex items-center justify-center text-light-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-light-text mb-4">Project</h4>
            <ul className="space-y-2">
              {footerLinks.project.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-light-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-text mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-light-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-text mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-light-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-border text-center text-sm text-light-muted">
          <p>
            © {new Date().getFullYear()} Goalixa. Created by Amirreza Rezaie.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
