function InternshipProposalTemplate({
  formData
}) {

  return (

    <div className='text-gray-800 leading-8'>

      <h1 className='text-3xl font-bold mb-10'>
        Internship Proposal
      </h1>

      <p>
        Applicant: {formData.fullName}
      </p>

      <p className='mt-6'>
        Company: {formData.company}
      </p>

      <p className='mt-10 whitespace-pre-line'>
        {formData.content}
      </p>

    </div>
  )
}

export default InternshipProposalTemplate