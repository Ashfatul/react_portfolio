export default function SingleTechnology({data}) {
  return (
    <div className="singleTechnology">
        <img src={data.icon} alt={data.title} />
        <span>{data.title}</span>
    </div>
  )
}
