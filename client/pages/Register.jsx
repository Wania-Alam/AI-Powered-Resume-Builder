import { useState } from 'react'
import API from '../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await API.post('/auth/register', form)

      toast.success('Registration Successful')

      navigate('/login')

    } catch (err) {
      toast.error('Registration Failed')
    }
  }

   return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-10 rounded-2xl w-[400px] shadow-xl'
      >

        <h1 className='text-3xl font-bold mb-8 text-center'>
          Register
        </h1>

        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          className='w-full p-3 border rounded-lg mb-5'
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className='w-full p-3 border rounded-lg mb-5'
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          className='w-full p-3 border rounded-lg mb-5'
        />

        <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700'>
          Register
        </button>

      </form>

    </div>
  )
}

export default Register