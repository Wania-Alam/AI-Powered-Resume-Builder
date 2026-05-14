function ResumePreview({ formData }) {

  return (
    <div className='bg-white min-h-[800px] shadow-2xl p-10 rounded-xl'>

      <h1 className='text-4xl font-bold'>
        {formData.name}
      </h1>

      <p className='text-gray-500 mt-2'>
        {formData.email}
      </p>

      <div className='mt-8'>

        <h2 className='text-2xl font-bold border-b pb-2'>
          Professional Summary
        </h2>

        <p className='mt-3 text-gray-700'>
          {formData.summary}
        </p>

      </div>

      <div className='mt-8'>

        <h2 className='text-2xl font-bold border-b pb-2'>
          Skills
        </h2>

        <p className='mt-3 text-gray-700'>
          {formData.skills}
        </p>

      </div>

    </div>
  )
}

export default ResumePreview