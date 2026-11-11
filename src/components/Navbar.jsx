import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav id="primary-nav" className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            aria-pressed={isDark}
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            className="icon-btn navbar__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
