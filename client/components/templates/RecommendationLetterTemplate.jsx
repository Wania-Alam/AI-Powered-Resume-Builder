function RecommendationLetterTemplate({
  formData
}) {

  return (

    <div className='text-gray-800 leading-8'>

      <h1 className='text-3xl font-bold mb-10'>
        Recommendation Letter
      </h1>

      <p>
        To Whom It May Concern,
      </p>

      <p className='mt-8 whitespace-pre-line'>
        {formData.content}
      </p>

      <p className='mt-10'>
        Regards,
      </p>

      <p className='font-semibold'>
        {formData.sender}
      </p>

    </div>
  )
}

export default RecommendationLetterTemplate