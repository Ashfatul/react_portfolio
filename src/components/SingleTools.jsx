export default function SingleTools({data}) {
  return (
    <div className="singleTools">
        <img src={data.icon} alt={data.title} />
        <span>{data.title}</span>
    </div>
  )
}
