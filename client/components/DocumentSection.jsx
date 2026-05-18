import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import API from '../services/api'
import DocumentCard from './DocumentCard'

function DocumentSection() {

  const navigate = useNavigate()

  const [documents, setDocuments] = useState([])

  // =========================
  // FETCH DOCUMENTS
  // =========================

  useEffect(() => {

    fetchDocuments()

  }, [])

  const fetchDocuments = async () => {

    try {

      const token = localStorage.getItem('token')

      const res = await API.get(
        '/document/my-documents',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setDocuments(res.data)

    } catch (err) {

      console.log(err)
      toast.error('Failed to fetch documents')

    }
  }

  // =========================
  // DELETE FROM UI
  // =========================

  const handleDelete = (id) => {

    setDocuments(prev =>
      prev.filter(doc => doc._id !== id)
    )

  }

  return (

    <div className='p-8'>

      {/* HEADER */}

      <div className='flex justify-between items-center mb-10'>

        <div>

          <h1 className='text-4xl font-bold'>
            My Documents
          </h1>

          <p className='text-gray-500 mt-2'>
            Manage your professional documents
          </p>

        </div>

        <button
          onClick={() =>
            navigate('/select-document-template')
          }
          className='bg-[#0F172A] hover:bg-blue-700 text-white px-6 py-3 rounded-xl'
        >
          Create Document
        </button>

      </div>

      {/* EMPTY STATE */}

      {documents.length === 0 ? (

        <div className='bg-white p-20 rounded-3xl shadow text-center'>

          <h2 className='text-2xl font-bold mb-4'>
            No Documents Found
          </h2>

          <p className='text-gray-500'>
            Create your first professional document
          </p>

        </div>

      ) : (

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {documents.map((document) => (

            <DocumentCard
              key={document._id}
              document={document}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

    </div>
  )
}

export default DocumentSection