function CoverLetterTemplate({ formData }) {

  return (

    <div className='text-gray-800 leading-8'>

      <h1 className='text-3xl font-bold mb-10'>
        Cover Letter
      </h1>

      <p>
        {formData.fullName}
      </p>

      <p className='mt-8'>
        Dear Hiring Manager,
      </p>

      <p className='mt-8 whitespace-pre-line'>
        {formData.content}
      </p>

      <p className='mt-10'>
        Sincerely,
      </p>

      <p className='font-semibold mt-2'>
        {formData.fullName}
      </p>

    </div>
  )
}

export default CoverLetterTemplate