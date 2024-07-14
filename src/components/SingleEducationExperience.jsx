export default function SingleEducationExperience({data}) {
  return (
    <div className="educationExperience_item">
        <i>{data.dataType === 'exp' ? `${data?.startDate} - ${data?.endDate}` : `${data?.startYear} - ${data?.endYear}`}</i>
        <p className="org">{data.dataType === 'exp' ? `${data?.company}` : `${data?.institution}`}</p>
        <p className="status">{data.dataType === 'exp' ? `${data?.position}` : `${data?.degree}`}</p>
        <p className="topic">{data.dataType === 'edu' && `${data.fieldOfStudy}`}</p>
    </div>
  )
}
