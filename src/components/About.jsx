import { FiEye, FiTarget } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { facts, missions, vision } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          title="Tentang saya"
          intro="Desainer yang percaya bahwa tampilan yang baik dimulai dari pemahaman yang baik tentang bisnis Anda."
        />
        <div className="about__grid">
          <article className="card about__bio">
            <p>
              Saya Azzahra, desainer brand dan web dengan pengalaman lebih dari enam tahun bersama
              startup, UMKM, dan komunitas. Saya bekerja langsung dengan pemilik bisnis, jadi setiap
              keputusan desain punya alasan yang bisa dijelaskan.
            </p>
            <ul className="facts">
              {facts.map((f) => (
                <li key={f.label}><strong>{f.value}</strong><span>{f.label}</span></li>
              ))}
            </ul>
          </article>

          <article className="card">
            <FiEye className="card__icon" size={26} aria-hidden="true" />
            <h3>Visi</h3>
            <p>{vision}</p>
          </article>

          <article className="card">
            <FiTarget className="card__icon" size={26} aria-hidden="true" />
            <h3>Misi</h3>
            <ul className="list">
              {missions.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
