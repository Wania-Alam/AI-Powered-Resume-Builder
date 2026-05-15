function MinimalTemplate({ formData }) {
  return (
    <div className="p-10 text-sm leading-7">

      <h1 className="text-3xl font-bold">{formData.name}</h1>
      <p className="text-gray-600">{formData.jobTitle}</p>

      <div className="mt-2 text-gray-600">
        <p>{formData.email} | {formData.phone}</p>
        <p>{formData.address}</p>
      </div>

      <h2 className="mt-6 font-bold border-b">Summary</h2>
      <p className="whitespace-pre-line">{formData.summary}</p>

      <h2 className="mt-6 font-bold border-b">Skills</h2>
      <p className="whitespace-pre-line">{formData.skills}</p>

      <h2 className="mt-6 font-bold border-b">Education</h2>
      <p className="whitespace-pre-line">{formData.education}</p>

      <h2 className="mt-6 font-bold border-b">Experience</h2>
      <p className="whitespace-pre-line">{formData.experience}</p>

    </div>
  )
}

export default MinimalTemplate