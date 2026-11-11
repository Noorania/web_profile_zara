import { FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/content.js'
import foto from '../assets/foto.png'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__role">{profile.name}, {profile.role}</p>
          <h1 id="hero-title">Desain yang membuat brand Anda diingat.</h1>
          <p className="hero__lead">
            Saya membantu bisnis membangun identitas visual dan website yang rapi, jelas, dan terasa premium.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Mulai proyek <FiArrowRight aria-hidden="true" /></a>
            <a href="#portfolio" className="btn btn--ghost">Lihat portofolio</a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <span className="orb orb--petal" />
          <span className="orb orb--ring" />
          <span className="orb orb--rose" />
          <div className="monogram">
            <img src={foto} alt="Foto profil" className="monogram__image" />
          </div>
          <div className="badge">Terbuka untuk proyek baru</div>
        </div>
      </div>
    </section>
  )
}
