function ProfessionalTemplate({ formData }) {

  return (

    <div className='bg-white min-h-screen p-12 text-gray-900'>

      {/* HEADER */}

      <div className='text-center border-b pb-6'>

        <h1 className='text-5xl font-bold uppercase tracking-wide'>
          {formData.name || 'Your Name'}
        </h1>

        <p className='text-lg text-gray-600 mt-3'>
          {formData.jobTitle || 'Professional Title'}
        </p>

        <div className='flex justify-center flex-wrap gap-6 mt-5 text-sm text-gray-700'>

          <p>{formData.email}</p>

          <p>{formData.phone}</p>

          <p>{formData.address}</p>

          <p>{formData.linkedin}</p>

        </div>

      </div>

      {/* SUMMARY */}

      {formData.summary && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Professional Summary
          </h2>

          <p className='mt-4 leading-8 whitespace-pre-line text-gray-700'>
            {formData.summary}
          </p>

        </div>

      )}

      {/* SKILLS */}

      {formData.skills && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Core Skills
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.skills}
          </p>

        </div>

      )}

      {/* EXPERIENCE */}

      {formData.experience && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Professional Experience
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.experience}
          </p>

        </div>

      )}

      {/* EDUCATION */}

      {formData.education && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Education
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.education}
          </p>

        </div>

      )}

      {/* CERTIFICATIONS */}

      {formData.certifications && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Certifications
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.certifications}
          </p>

        </div>

      )}

      {/* ACHIEVEMENTS */}

      {formData.achievements && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Achievements
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.achievements}
          </p>

        </div>

      )}

      {/* LANGUAGES */}

      {formData.languages && (

        <div className='mt-10'>

          <h2 className='text-2xl font-bold uppercase border-b pb-2'>
            Languages
          </h2>

          <p className='mt-4 whitespace-pre-line leading-8 text-gray-700'>
            {formData.languages}
          </p>

        </div>

      )}

    </div>
  )
}

export default ProfessionalTemplate