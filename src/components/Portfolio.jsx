import { FaGithub } from 'react-icons/fa'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/content.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading
          id="portfolio-title"
          title="Portofolio"
          intro="Beberapa proyek pilihan. Klik kartu untuk melihat kodenya di GitHub."
        />
        <div className="portfolio__grid">
          {projects.map((p) => {
            const Tag = p.github ? 'a' : 'article'
            const extra = p.github
              ? { href: p.github, target: '_blank', rel: 'noreferrer', 'aria-label': `${p.title}, buka di GitHub` }
              : { tabIndex: 0 }

            return (
              <Tag key={p.title} className={`tile tile--${p.tone} ${p.image ? 'tile--img' : ''}`} {...extra}>
                {p.image ? (
                  <img className="tile__img" src={p.image} alt={`Tampilan proyek ${p.title}`} loading="lazy" />
                ) : (
                  <span className="tile__initial" aria-hidden="true">{p.title.charAt(0)}</span>
                )}
                <div className="tile__info">
                  <p className="tile__cat">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p className="tile__text">{p.text}</p>
                  {p.github && (
                    <span className="tile__link"><FaGithub aria-hidden="true" /> Lihat di GitHub</span>
                  )}
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}