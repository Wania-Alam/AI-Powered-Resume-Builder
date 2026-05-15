function ModernTemplate({ formData }) {
  return (
    <div className="grid grid-cols-3 gap-6 p-10">

      {/* LEFT SIDE */}
      <div className="col-span-1 bg-gray-50 p-5 rounded-xl">

        <h1 className="text-2xl font-bold">{formData.name}</h1>
        <p className="text-blue-600">{formData.jobTitle}</p>

        <div className="mt-4 text-sm space-y-1">
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <p>{formData.address}</p>
          <p>{formData.linkedin}</p>
          <p>{formData.github}</p>
        </div>

        <h2 className="mt-6 font-bold">Skills</h2>
        <p className="text-sm whitespace-pre-line">{formData.skills}</p>

      </div>

      {/* RIGHT SIDE */}
      <div className="col-span-2">

        <h2 className="font-bold text-lg border-b">Summary</h2>
        <p className="mt-2">{formData.summary}</p>

        <h2 className="font-bold text-lg border-b mt-6">Experience</h2>
        <p className="mt-2 whitespace-pre-line">{formData.experience}</p>

        <h2 className="font-bold text-lg border-b mt-6">Education</h2>
        <p className="mt-2 whitespace-pre-line">{formData.education}</p>

        <h2 className="font-bold text-lg border-b mt-6">Projects</h2>
        <p className="mt-2 whitespace-pre-line">{formData.projects}</p>

      </div>

    </div>
  )
}

export default ModernTemplate