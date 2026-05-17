function JobApplicationTemplate({
  formData
}) {

  return (

    <div className='text-gray-800 leading-8'>

      <h1 className='text-3xl font-bold mb-10'>
        Job Application Letter
      </h1>

      <p>
        Position: {formData.position}
      </p>

      <p className='mt-8 whitespace-pre-line'>
        {formData.content}
      </p>

      <p className='mt-10'>
        Best Regards,
      </p>

      <p className='font-semibold'>
        {formData.fullName}
      </p>

    </div>
  )
}

export default JobApplicationTemplate