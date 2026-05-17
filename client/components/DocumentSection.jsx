import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'
import DocumentCard from './DocumentCard'
import toast from 'react-hot-toast'

function DocumentSection() {
  const navigate = useNavigate()
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const res = await API.get('/document/my-documents', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setDocuments(res.data || [])
    } catch (err) {
      console.error(err)
      toast.error('Could not load your saved documents')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900'>My Documents</h1>
          <p className='text-gray-500 mt-1'>Manage your Documents</p>
        </div>
        <button
          onClick={() => navigate('/create-document')}
          className='bg-[#0F172A] text-white px-6 py-3 rounded-xl'
        >
          + Create New
        </button>
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        </div>
      ) : documents.length === 0 ? (
        <div className='bg-white rounded-3xl p-12 text-center shadow-lg border border-gray-100 max-w-lg mx-auto mt-12 flex flex-col items-center'>
          <div className='bg-blue-50 text-blue-600 p-4 rounded-2xl mb-4 text-2xl font-bold w-14 h-14 flex items-center justify-center'>
            📄
          </div>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>No Saved Documents Found</h3>
          <p className='text-gray-500 text-sm mb-6 max-w-sm leading-relaxed'>
            You haven't generated or saved any official communications yet. Use our structured templates to export professional standard PDFs.
          </p>
          <button
            onClick={() => navigate('/create-document')}
            className='bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-md'
          >
            Create Your First Document
          </button>
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {documents.map((doc) => (
            <DocumentCard key={doc._id} document={doc} />
          ))}
        </div>
      )}
    </div>
  )
}

export default DocumentSection
