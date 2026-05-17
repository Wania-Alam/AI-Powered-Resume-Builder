import {
  FaFileAlt,
  FaRobot,
  FaUserCircle,
  FaFolderOpen
} from 'react-icons/fa'

function Sidebar({ activeTab, setActiveTab, user }) {

  return (

    <div className='w-[300px] min-h-screen bg-[#0F172A] text-white flex flex-col p-6'>

      {/* LOGO */}

      <div className='flex items-center gap-3 border-b border-gray-700 pb-6'>

        <div className='w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center text-2xl font-bold'>
          AI
        </div>

        <div>
          <h1 className='text-2xl font-bold '>
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
            {user?.name || 'User'}
          </h2>

          <p className='text-gray-400 text-sm'>
            {user?.email || 'user@email.com'}
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

      {/* FOOTER */}

      <div className='mt-auto text-center text-gray-500 text-sm pt-10'>

        AI Resume Builder © 2026

      </div>

    </div>

  )
}

export default Sidebar