import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import API from '../services/api'
import { FaEdit,FaTrash } from 'react-icons/fa'

function DocumentCard({ document, onDelete }) {

  const navigate = useNavigate()

  // =========================
  // DELETE DOCUMENT
  // =========================

  const deleteDocument = async () => {

    try {

      const token = localStorage.getItem('token')

      await API.delete(
        `/document/delete/${document._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      toast.success('Document Deleted')

      if (onDelete) {
        onDelete(document._id)
      }

    } catch (err) {

      console.log(err)

      toast.error('Failed to delete')

    }
  }

  return (

    <div className='bg-white p-6 rounded-3xl shadow-lg border border-gray-100'>

      {/* TITLE */}

      <h2 className='text-2xl font-bold text-gray-800'>

        {document.title || 'Untitled Document'}

      </h2>

      {/* TYPE */}

      <p className='text-blue-600 font-medium mt-2'>

        {document.type}

      </p>

      {/* COMPANY */}

      <p className='text-gray-500 mt-2'>

        Company:
        {' '}
        {document.company || 'Not specified'}

      </p>

      {/* DATE */}

      <p className='text-sm text-gray-400 mt-2'>

        Created:
        {' '}
        {new Date(
          document.createdAt
        ).toLocaleDateString()}

      </p>

      {/* BUTTONS */}

      <div className='flex gap-3 mt-6'>

        {/* EDIT */}

        <button
          onClick={() =>
            navigate(
              `/create-document/${document._id}`
            )
          }
          className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl'
        >
          <FaEdit />
                    Edit
        </button>

        {/* DELETE */}

        <button
          onClick={deleteDocument}
          className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl'
        >
          <FaTrash />
                    Delete
        </button>

      </div>

    </div>
  )
}

export default DocumentCard