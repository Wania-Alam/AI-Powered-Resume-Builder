import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaDownload,
  FaFileAlt
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import toast from 'react-hot-toast'

import API from '../services/api'

function ResumeSection() {

  const navigate = useNavigate()

  const [resumes, setResumes] = useState([])

  const [loading, setLoading] = useState(true)

  // =========================
  // FETCH RESUMES
  // =========================

  useEffect(() => {

    fetchResumes()

  }, [])

  const fetchResumes = async () => {

    try {

      const user = JSON.parse(localStorage.getItem('user'))

      if (!user) return

      const res = await API.get(`/resume/${user._id}`)

      setResumes(res.data)

    } catch (error) {

      console.log(error)

      toast.error('Failed To Fetch Resumes')

    } finally {

      setLoading(false)

    }

  }

  // =========================
  // DELETE RESUME
  // =========================

  const deleteResume = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this resume?'
    )

    if (!confirmDelete) return

    try {

      await API.delete(`/resume/delete/${id}`)

      toast.success('Resume Deleted')

      fetchResumes()

    } catch (error) {

      console.log(error)

      toast.error('Delete Failed')

    }

  }

  // =========================
  // DOWNLOAD PDF
  // =========================

  const downloadResume = (resumeId) => {

    navigate(`/edit-resume/${resumeId}`)

    toast.success(
      'Open Resume And Click Download PDF'
    )

  }

  // =========================
  // CREATE RESUME
  // =========================

  const createResume = () => {

    navigate('/select-template')

  }

  // =========================
  // LOADING SCREEN
  // =========================

  if (loading) {

    return (

      <div className='flex justify-center items-center h-[80vh]'>

        <div className='w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>

      </div>

    )

  }

  return (

    <div>

      {/* HEADER */}

      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>

        <div>

          <h1 className='text-4xl font-bold text-gray-800'>
            My Resumes
          </h1>

          <p className='text-gray-500 mt-2'>
            Create, manage, edit and download resumes
          </p>

        </div>

        <button
          onClick={createResume}
          className='bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl flex items-center gap-3 transition'
        >

          <FaPlus />

          Create Resume

        </button>

      </div>

      {/* NO RESUMES */}

      {resumes.length === 0 && (

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white rounded-3xl shadow-lg mt-16 p-16 text-center'
        >

          <div className='flex justify-center'>

            <div className='w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center'>

              <FaFileAlt className='text-5xl text-blue-600' />

            </div>

          </div>

          <h2 className='text-3xl font-bold mt-8 text-gray-800'>
            No Resume Found
          </h2>

          <p className='text-gray-500 mt-4 text-lg'>
            Start building your professional AI-powered resume
          </p>

          <button
            onClick={createResume}
            className='mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition'
          >
            Create Your First Resume
          </button>

        </motion.div>

      )}

      {/* RESUME CARDS */}

      {resumes.length > 0 && (

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12'>

          {resumes.map((resume, index) => (

            <motion.div
              key={resume._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100'
            >

              {/* TOP SECTION */}

              <div className='bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white'>

                <h2 className='text-2xl font-bold'>

                  {resume.title || 'Untitled Resume'}

                </h2>

                <p className='mt-2 text-blue-100'>

                  {resume.template} Template

                </p>

              </div>

              {/* BODY */}

              <div className='p-6'>

                <div className='space-y-3'>

                  <div className='flex justify-between'>

                    <span className='text-gray-500'>
                      ATS Score
                    </span>

                    <span className='font-bold text-green-600'>
                      {resume.atsScore || 85}%
                    </span>

                  </div>

                  <div className='flex justify-between'>

                    <span className='text-gray-500'>
                      Created
                    </span>

                    <span className='font-semibold'>
                      {
                        new Date(
                          resume.createdAt
                        ).toLocaleDateString()
                      }
                    </span>

                  </div>

                </div>

                {/* BUTTONS */}

                <div className='grid grid-cols-3 gap-3 mt-8'>

                  {/* EDIT */}

                  <button
                    onClick={() =>
                      navigate(`/edit-resume/${resume._id}`)
                    }
                    className='bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 rounded-xl flex items-center justify-center gap-2 transition'
                  >

                    <FaEdit />

                    Edit

                  </button>

                  {/* DELETE */}

                  <button
                    onClick={() =>
                      deleteResume(resume._id)
                    }
                    className='bg-red-100 hover:bg-red-200 text-red-700 py-3 rounded-xl flex items-center justify-center gap-2 transition'
                  >

                    <FaTrash />

                    Delete

                  </button>

                  {/* DOWNLOAD */}

                  <button
                    onClick={() =>
                      downloadResume(resume._id)
                    }
                    className='bg-green-100 hover:bg-green-200 text-green-700 py-3 rounded-xl flex items-center justify-center gap-2 transition'
                  >

                    <FaDownload />

                    PDF

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </div>

  )

}

export default ResumeSection