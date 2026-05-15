function ProfessionalTemplate({ formData }) {
  return (
    <div className="p-10 text-sm leading-7">

      {/* HEADER */}
      <div className="border-b pb-4">

        <h1 className="text-3xl font-bold">
          {formData.name}
        </h1>

        <p className="text-blue-600 text-lg">
          {formData.jobTitle}
        </p>

        <p className="text-gray-600 mt-1">
          {formData.email} | {formData.phone}
        </p>

        <p className="text-gray-600">
          {formData.address}
        </p>

      </div>

      {/* SECTIONS */}
      <h2 className="mt-6 font-bold border-b">Professional Summary</h2>
      <p className="whitespace-pre-line">{formData.summary}</p>

      <h2 className="mt-6 font-bold border-b">Skills</h2>
      <p className="whitespace-pre-line">{formData.skills}</p>

      <h2 className="mt-6 font-bold border-b">Experience</h2>
      <p className="whitespace-pre-line">{formData.experience}</p>

      <h2 className="mt-6 font-bold border-b">Education</h2>
      <p className="whitespace-pre-line">{formData.education}</p>

      <h2 className="mt-6 font-bold border-b">Projects</h2>
      <p className="whitespace-pre-line">{formData.projects}</p>

    </div>
  )
}

export default ProfessionalTemplate