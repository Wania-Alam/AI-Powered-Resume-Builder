import {
  FaFileAlt,
  FaRobot,
  FaUserCircle,
  FaFolderOpen,
  FaSignOutAlt
} from 'react-icons/fa'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import API from '../services/api'

function Sidebar({ activeTab, setActiveTab }) {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  // =========================
  // FETCH USER
  // =========================

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const token =
          localStorage.getItem('token')

        if (!token) return

        const res = await API.get(
          '/user/me',
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        )

        setUser(res.data)

      } catch (err) {

        console.log(err)

      }
    }

    fetchUser()

  }, [])

  // =========================
  // LOGOUT
  // =========================

  const logout = () => {

    localStorage.removeItem('token')

    toast.success('Logged Out')

    navigate('/')
  }

  return (

    <div className='w-[300px] min-h-screen bg-[#0F172A] text-white flex flex-col p-6'>

      {/* LOGO */}

      <div className='flex items-center gap-3 border-b border-gray-700 pb-6'>

        <div className='w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center text-2xl font-bold'>
          AI
        </div>

        <div>

          <h1 className='text-2xl font-bold'>
            CV Forge
          </h1>

          <p className='text-gray-400 text-sm'>
            Career Assistant
          </p>

        </div>

      </div>

      {/* PROFILE */}

      <div className='mt-8 flex items-center gap-4 bg-[#1E293B] p-4 rounded-2xl'>

        <FaUserCircle className='text-5xl text-blue-400' />

        <div>

          <h2 className='font-semibold text-lg'>
            {user?.name || 'Loading...'}
          </h2>

          <p className='text-gray-400 text-sm'>
            {user?.email || 'Loading...'}
          </p>

        </div>

      </div>

      {/* MENU */}

      <div className='mt-10 flex flex-col gap-4'>

        <button
          onClick={() => setActiveTab('resume')}
          className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
          ${activeTab === 'resume'
            ? 'bg-blue-600'
            : 'bg-[#1E293B] hover:bg-blue-500'
          }`}
        >

          <FaFileAlt />

          <span className='text-lg'>
            Resumes
          </span>

        </button>

        <button
          onClick={() => setActiveTab('documents')}
          className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
          ${activeTab === 'documents'
            ? 'bg-blue-600'
            : 'bg-[#1E293B] hover:bg-blue-500'
          }`}
        >

          <FaFolderOpen />

          <span className='text-lg'>
            Documents
          </span>

        </button>

        <button
          onClick={() => setActiveTab('chatbot')}
          className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
          ${activeTab === 'chatbot'
            ? 'bg-blue-600'
            : 'bg-[#1E293B] hover:bg-blue-500'
          }`}
        >

          <FaRobot />

          <span className='text-lg'>
            AI Career Chatbot
          </span>

        </button>

      </div>

      {/* LOGOUT BUTTON */}

      <button
        onClick={logout}
        className='mt-8 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 p-4 rounded-2xl'
      >

        <FaSignOutAlt />

        Logout

      </button>

      {/* FOOTER */}

      <div className='mt-auto text-center text-gray-500 text-sm pt-10'>

        CV Forge © 2026

      </div>

    </div>

  )
}

export default Sidebar