import { useState } from 'react'
import API from '../services/api'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'

import { GoogleLogin } from '@react-oauth/google'

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

  // NORMAL REGISTER

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

  // GOOGLE REGISTER

  const handleGoogleSuccess = async (credentialResponse) => {

    try {

      const res = await API.post('/auth/google', {
        credential: credentialResponse.credential
      })

      localStorage.setItem('token', res.data.token)

      toast.success('Google Signup Successful')

      navigate('/dashboard')

    } catch (err) {

      toast.error('Google Signup Failed')

    }

  }

  return (

    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 px-6'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md'
      >

        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
          Create Account
        </h1>

        <input
          type='text'
          name='name'
          placeholder='Full Name'
          onChange={handleChange}
          className='w-full border p-3 rounded-xl mb-5'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className='w-full border p-3 rounded-xl mb-5'
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          className='w-full border p-3 rounded-xl mb-5'
          required
        />

        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition'>
          Register
        </button>

        <div className='my-2 text-center text-gray-500'>
          OR
        </div>

        <div className='flex justify-center'>
                  <button className='w-full  text-white py-3 rounded-xl transition'>
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => toast.error('Google Login Failed')}
                  />
                </button>
        </div>

        <p className='text-center mt-8 text-gray-600'>

          Already have an account?

          <Link
            to='/login'
            className='text-blue-600 font-semibold ml-2'
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  )
}

export default Register