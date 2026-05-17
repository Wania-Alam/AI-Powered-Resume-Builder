import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import API from '../services/api'
import { FaTrash, FaEdit, FaClock } from 'react-icons/fa'

function ResumeCard({ resume, onDelete }) {

  const navigate = useNavigate()

  // =========================
  // FORMAT DATE
  // =========================

  const formattedDate = resume.createdAt
    ? new Date(resume.createdAt).toLocaleString()
    : 'No Date'

  // =========================
  // DELETE RESUME
  // =========================

  const deleteResume = async () => {

    try {

      const token = localStorage.getItem('token')

      if (!token) {
        return toast.error('Please login first')
      }

      await API.delete(
        `/resume/delete/${resume._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      toast.success('Resume Deleted')

      if (onDelete) {
        onDelete(resume._id)
      }

    } catch (err) {

      console.log(err)

      toast.error('Failed to delete resume')
    }
  }

  return (

    <div className='bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100'>

      {/* NAME */}

      <h2 className='text-2xl font-bold text-gray-800'>
        {resume.name || 'Untitled Resume'}
      </h2>

      {/* JOB TITLE */}

      <p className='text-blue-600 font-medium mt-2'>
        {resume.jobTitle || 'No Job Title'}
      </p>

      {/* TEMPLATE */}

      <div className='mt-4'>
        <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
          {resume.template || 'Unknown Template'}
        </span>
      </div>

      {/* TIMESTAMP */}

      <div className='flex items-center gap-2 text-gray-500 text-sm mt-4'>

        <FaClock />

        <span>
          {formattedDate}
        </span>

      </div>

      {/* BUTTONS */}

      <div className='flex gap-3 mt-6'>

        {/* EDIT */}

        <button
          onClick={() =>
            navigate(`/create-resume/${resume._id}`)
          }
          className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl'
        >
          <FaEdit />
          Edit
        </button>

        {/* DELETE */}

        <button
          onClick={deleteResume}
          className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl'
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  )
}

export default ResumeCard