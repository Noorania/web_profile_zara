export default function SectionHeading({ id, title, intro }) {
  return (
    <div className="section-heading">
      <h2 id={id} className="gradient-text">{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}