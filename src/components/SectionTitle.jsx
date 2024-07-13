import "../assets/scss/sectionTitle.scss"

export default function SectionTitle({title = "Title", subtitle = "Sub Title"}) {
  return (
    <div className="sectionTitle">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
    </div>
  )
}
