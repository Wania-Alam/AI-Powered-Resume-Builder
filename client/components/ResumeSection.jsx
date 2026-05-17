import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'
import ResumeCard from './ResumeCard'

function ResumeSection() {

  const navigate = useNavigate()

  const [resumes, setResumes] = useState([])

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {

    try {

      const token = localStorage.getItem('token')

      const res = await API.get('/resume/my-resumes', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setResumes(res.data)

    } catch (error) {

      console.log(error)

    }
  }

  // =========================
  // REMOVE FROM UI AFTER DELETE
  // =========================

  const handleDelete = (id) => {

    setResumes(prev =>
      prev.filter(resume => resume._id !== id)
    )
  }

  return (

    <div className='p-8'>

      <div className='flex justify-between items-center mb-10'>

        <div>

          <h1 className='text-4xl font-bold'>
            My Resumes
          </h1>

          <p className='text-gray-500 mt-2'>
            Manage your resumes
          </p>

        </div>

        <button
          onClick={() => navigate('/select-template')}
          className='bg-[#0F172A] text-white px-6 py-3 rounded-xl'
        >
          Create Resume
        </button>

      </div>

      {resumes.length === 0 ? (

        <div className='bg-white p-20 rounded-3xl shadow text-center'>

          <h2 className='text-2xl font-bold mb-4'>
            No Resume Found
          </h2>

          <p className='text-gray-500'>
            Create your first Resume by clicking the button above
          </p>

        </div>

      ) : (

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {resumes.map((resume) => (

            <ResumeCard
              key={resume._id}
              resume={resume}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

    </div>
  )
}

export default ResumeSection