import { useState } from 'react'
import API from '../services/api'

function MockInterview() {

  const [role, setRole] = useState('')

  const [questions, setQuestions] = useState('')

  const generateQuestions = async () => {

    const res = await API.post('/ai/mock-interview', {
      role
    })

    setQuestions(res.data.questions)
  }

  return (

    <div className='p-10'>

      <h1 className='text-4xl font-bold'>
        AI Mock Interview
      </h1>

      <input
        type='text'
        placeholder='Enter Job Role'
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className='border p-4 rounded-xl mt-8 w-full'
      />

      <button
        onClick={generateQuestions}
        className='mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl'
      >
        Generate Questions
      </button>

      <div className='bg-white p-8 rounded-3xl shadow-lg mt-10 whitespace-pre-line'>

        {questions}

      </div>

    </div>

  )
}

export default MockInterview