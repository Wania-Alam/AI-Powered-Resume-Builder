import { useState } from 'react'
import API from '../services/api'

function ChatbotSection() {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  const sendMessage = async () => {

    if (!message) return

    const userMessage = {
      role: 'user',
      text: message
    }

    setChat(prev => [...prev, userMessage])

    try {

      const res = await API.post('/ai/chat', {
        message
      })

      const botMessage = {
        role: 'bot',
        text: res.data.reply
      }

      setChat(prev => [...prev, botMessage])

    } catch (err) {

      console.log(err)

    }

    setMessage('')
  }

  return (

    <div className='h-[85vh] flex flex-col'>

      <h1 className='text-4xl font-bold text-gray-800'>
        AI Career Assistant
      </h1>

      <p className='text-gray-500 mt-2'>
        Ask anything about resumes, interviews, careers, and jobs
      </p>

      {/* CHAT AREA */}

      <div className='flex-1 bg-white rounded-3xl shadow-lg p-6 mt-8 overflow-y-auto'>

        {chat.map((msg, index) => (

          <div
            key={index}
            className={`mb-4 flex ${
              msg.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >

            <div
              className={`max-w-[70%] p-4 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >

              {msg.text}

            </div>

          </div>

        ))}

      </div>

      {/* INPUT */}

      <div className='flex gap-4 mt-6'>

        <input
          type='text'
          placeholder='Ask career related questions...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='flex-1 border p-4 rounded-2xl'
        />

        <button
          onClick={sendMessage}
          className='bg-blue-600 text-white px-8 rounded-2xl hover:bg-blue-700'
        >
          Send
        </button>

      </div>

    </div>

  )
}

export default ChatbotSection