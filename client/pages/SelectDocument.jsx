import { useNavigate } from 'react-router-dom'

function SelectDocument() {

  const navigate = useNavigate()

  const selectDocument = (type) => {

    localStorage.setItem(
      'documentType',
      type
    )

    navigate('/create-document')
  }

  const documents = [

    'Cover Letter',

    'Internship Proposal',

    'Recommendation Letter',

    'Job Application Letter'
  ]

  return (

    <div className='min-h-screen p-10 bg-gray-100'>

      <h1 className='text-5xl font-bold mb-10'>
        Select Document
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>

        {documents.map((doc) => (

          <div
            key={doc}
            className='bg-white p-8 rounded-3xl shadow-xl'
          >

            <h2 className='text-3xl font-bold'>
              {doc}
            </h2>

            <button
              onClick={() => selectDocument(doc)}
              className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl'
            >
              Create
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default SelectDocument