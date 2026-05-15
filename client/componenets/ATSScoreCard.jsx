function ATSScoreCard({ score }) {

  return (

    <div className='bg-white p-6 rounded-3xl shadow-lg'>

      <h2 className='text-2xl font-bold'>
        ATS Score
      </h2>

      <div className='mt-6'>

        <div className='w-full bg-gray-200 h-5 rounded-full overflow-hidden'>

          <div
            className='bg-green-500 h-full'
            style={{ width: `${score}%` }}
          ></div>

        </div>

        <p className='mt-4 text-3xl font-bold text-green-600'>
          {score}%
        </p>

      </div>

    </div>

  )
}

export default ATSScoreCard