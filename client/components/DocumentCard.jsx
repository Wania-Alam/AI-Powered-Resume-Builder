import { useNavigate } from 'react-router-dom'

function DocumentCard({ document }) {

  const navigate = useNavigate()

  return (

    <div className='bg-white p-6 rounded-3xl shadow-lg'>

      <h2 className='text-2xl font-bold text-gray-800'>
        {document.title}
      </h2>

      <p className='text-gray-500 mt-2'>
        {document.type}
      </p>

      <p className='text-sm text-gray-400 mt-3'>
        {new Date(document.createdAt).toLocaleDateString()}
      </p>

      <button
        onClick={() => navigate(`/create-document/${document._id}`)}
        className='mt-6 bg-blue-600 text-white px-5 py-2 rounded-xl'
      >
        View
      </button>

    </div>
  )
}

export default DocumentCard