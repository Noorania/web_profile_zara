import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <section id="services" className="section section--alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" title="Layanan" intro="Pilih satu layanan atau gabungkan sesuai kebutuhan." />
        <div className="services__grid">
          {services.map(({ title, text, Icon }) => (
            <article key={title} className="card card--hover">
              <span className="icon-badge"><Icon size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
