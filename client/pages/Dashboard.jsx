import { useState, useEffect } from 'react'

import Sidebar from '../componenets/Sidebar'
import ResumeSection from '../componenets/ResumeSection'
import DocumentsSection from '../componenets/DocumentSection'
import ChatbotSection from '../componenets/ChatbotSection'

function Dashboard() {

  const [activeTab, setActiveTab] = useState('resume')

  const [user, setUser] = useState(null)

  useEffect(() => {

    // TEMP USER
    // Later fetch from backend

    setUser({
      name: 'Wania Alam',
      email: 'wania@gmail.com'
    })

  }, [])

  return (

    <div className='flex bg-gray-100'>

      {/* SIDEBAR */}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
      />

      {/* MAIN CONTENT */}

      <div className='flex-1 p-10 overflow-y-auto h-screen'>

        {activeTab === 'resume' && <ResumeSection />}

        {activeTab === 'documents' && <DocumentsSection />}

        {activeTab === 'chatbot' && <ChatbotSection />}

      </div>

    </div>

  )
}

export default Dashboard