function MinimalTemplate({ formData }) {

  return (

    <div className='p-10 text-gray-800 bg-white min-h-screen'>

      {/* HEADER */}

      <div className='border-b pb-5'>

        <h1 className='text-4xl font-bold'>
          {formData.name || 'Your Name'}
        </h1>
        <p className='mt-2 text-blue-100'>
          {formData.jobTitle || 'Job Title'}
        </p>
        <p className='text-gray-600 mt-2'>
          {formData.email}
        </p>

      </div>

      {/* SUMMARY */}

      {formData.summary && (

        <div className='mt-8'>

          <h2 className='text-xl font-bold border-b pb-2'>
            Summary
          </h2>

          <p className='mt-3 whitespace-pre-line leading-7'>
            {formData.summary}
          </p>

        </div>

      )}

      {/* SKILLS */}

      {formData.skills && (

        <div className='mt-8'>

          <h2 className='text-xl font-bold border-b pb-2'>
            Skills
          </h2>

          <p className='mt-3 whitespace-pre-line'>
            {formData.skills}
          </p>

        </div>

      )}

      {/* EXPERIENCE */}

      {formData.experience && (

        <div className='mt-8'>

          <h2 className='text-xl font-bold border-b pb-2'>
            Experience
          </h2>

          <p className='mt-3 whitespace-pre-line leading-7'>
            {formData.experience}
          </p>

        </div>

      )}

      {/* EDUCATION */}

      {formData.education && (

        <div className='mt-8'>

          <h2 className='text-xl font-bold border-b pb-2'>
            Education
          </h2>

          <p className='mt-3 whitespace-pre-line leading-7'>
            {formData.education}
          </p>

        </div>

      )}

    </div>
  )
}

export default MinimalTemplate