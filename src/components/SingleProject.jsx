export default function SingleProject({data}) {
  return (
    <div className={`singleProject ${data.id % 2 === 0 ? "row-reverse" : ''}`}>
      <div className="img">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="links">
          <a href={data.link}>Live Link</a>
          <a href={data.repository}>Github Repository</a>
        </div>
      </div>
    </div>
  )
}
