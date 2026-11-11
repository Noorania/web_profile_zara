import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { profile, socials } from '../data/content.js'

const empty = { name: '', email: '', message: '' }
const fields = [
  { name: 'name', label: 'Nama', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
]

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setSent(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Isi nama Anda.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Masukkan email yang valid.'
    if (form.message.trim().length < 10) err.message = 'Tulis pesan minimal 10 karakter.'
    return err
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length) return
    // Hubungkan ke layanan form (Formspree, EmailJS, dll.) di sini.
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" title="Kontak" intro="Ceritakan kebutuhan Anda. Saya balas dalam 1 hari kerja." />
        <div className="contact__grid">

          <div className="card contact__info">
            <h3>Informasi kontak</h3>
            <ul className="contact__list">
              <li><FiMail aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><FiPhone aria-hidden="true" /><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
              <li><FiMapPin aria-hidden="true" /><span>{profile.location}</span></li>
            </ul>
            <div className="socials">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} className="icon-btn" aria-label={label} target="_blank" rel="noreferrer">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
