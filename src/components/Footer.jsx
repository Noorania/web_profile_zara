import { navLinks, profile, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="navbar__logo">{profile.name}</a>
          <p className="footer__role">{profile.role}</p>
        </div>
        <nav aria-label="Navigasi footer" className="footer__nav">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="socials">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} className="icon-btn" aria-label={label} target="_blank" rel="noreferrer">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="container footer__copy">© {new Date().getFullYear()} {profile.name}. Hak cipta dilindungi.</p>
    </footer>
  )
}
