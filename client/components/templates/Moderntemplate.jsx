function ModernTemplate({ formData }) {

  return (

    <div className='grid grid-cols-3 min-h-screen bg-white'>

      {/* LEFT SIDEBAR */}

      <div className='col-span-1 bg-blue-700 text-white p-8'>

        <h1 className='text-3xl font-bold'>
          {formData.name || 'Your Name'}
        </h1>

        <p className='mt-2 text-blue-100'>
          {formData.jobTitle || 'Job Title'}
        </p>

        {/* CONTACT */}

        <div className='mt-10'>

          <h2 className='text-xl font-semibold mb-4'>
            Contact
          </h2>

          <div className='space-y-3 text-sm'>

            <p>{formData.email}</p>

            <p>{formData.phone}</p>

            <p>{formData.address}</p>

            <p>{formData.linkedin}</p>

            <p>{formData.github}</p>

          </div>

        </div>

        {/* SKILLS */}

        {formData.skills && (

          <div className='mt-10'>

            <h2 className='text-xl font-semibold mb-4'>
              Skills
            </h2>

            <p className='whitespace-pre-line text-sm leading-7'>
              {formData.skills}
            </p>

          </div>

        )}

      </div>

      {/* RIGHT CONTENT */}

      <div className='col-span-2 p-10 text-gray-800'>

        {/* SUMMARY */}

        {formData.summary && (

          <div>

            <h2 className='text-2xl font-bold border-b pb-2'>
              Professional Summary
            </h2>

            <p className='mt-4 leading-7 whitespace-pre-line'>
              {formData.summary}
            </p>

          </div>

        )}

        {/* EXPERIENCE */}

        {formData.experience && (

          <div className='mt-10'>

            <h2 className='text-2xl font-bold border-b pb-2'>
              Experience
            </h2>

            <p className='mt-4 leading-7 whitespace-pre-line'>
              {formData.experience}
            </p>

          </div>

        )}

        {/* PROJECTS */}

        {formData.projects && (

          <div className='mt-10'>

            <h2 className='text-2xl font-bold border-b pb-2'>
              Projects
            </h2>

            <p className='mt-4 leading-7 whitespace-pre-line'>
              {formData.projects}
            </p>

          </div>

        )}

        {/* EDUCATION */}

        {formData.education && (

          <div className='mt-10'>

            <h2 className='text-2xl font-bold border-b pb-2'>
              Education
            </h2>

            <p className='mt-4 leading-7 whitespace-pre-line'>
              {formData.education}
            </p>

          </div>

        )}

      </div>

    </div>
  )
}

export default ModernTemplate