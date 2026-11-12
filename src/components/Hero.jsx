import { FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/content.js'
import foto from '../assets/foto.png'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--rose" />
        <span className="blob blob--petal" />
        <span className="blob blob--raspberry" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__role">{profile.name}, {profile.role}</p>
          <h1 id="hero-title" className="gradient-text">
            Organized Process, Better Results.
          </h1>
          <p className="hero__lead">
            Menggabungkan teknologi, kreativitas, dan analisis untuk membangun website, mengelola data, serta merancang pengalaman digital yang modern, fungsional, dan berorientasi pada pengguna.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Mulai proyek <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#portfolio" className="btn btn--ghost">Lihat portofolio</a>
          </div>
        </div>

        <div className="hero__art">
          <span className="orb orb--petal" aria-hidden="true" />
          <span className="orb orb--ring" aria-hidden="true" />
          <span className="orb orb--rose" aria-hidden="true" />
          <div className="monogram">
            <img src={foto} alt={`Foto ${profile.name}`} className="monogram__image" />
          </div>
          <div className="badge">Terbuka untuk proyek baru</div>
        </div>
      </div>
    </section>
  )
}