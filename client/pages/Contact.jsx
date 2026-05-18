import { useState } from 'react'

import toast from 'react-hot-toast'

import API from '../services/api'

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa'

function Contact() {

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const res = await API.post(
        '/contact/send',
        formData
      )

      toast.success(res.data.msg)

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (err) {

      console.log(err)

      toast.error('Failed to send message')

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className='min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex flex-col items-center justify-center p-10'>

      <div className='max-w-7xl mx-auto'>

        {/* HEADER */}

        <div className='text-center mb-20'>

          <h1 className='text-6xl font-bold'>
            Contact Us
          </h1>

          <p className='text-white mt-6 text-lg max-w-3xl mx-auto leading-8'>
            Have questions, suggestions, or feedback?
            We'd love to hear from you.
            Reach out and our team will respond as soon as possible.
          </p>

        </div>

        <div className='grid lg:grid-cols-2 gap-16'>

          {/* CONTACT INFO */}

          <div>

            <h2 className='text-4xl font-bold mb-10'>
              Get In Touch
            </h2>

            <div className='space-y-8'>

              <div className='flex items-start gap-5 bg-slate-900 border border-slate-800 p-6 rounded-3xl'>

                <FaEnvelope className='text-3xl text-cyan-400 mt-1' />

                <div>

                  <h3 className='text-2xl font-semibold'>
                    Email
                  </h3>

                  <p className='text-gray-400 mt-2'>
                    yourgmail@gmail.com
                  </p>

                </div>

              </div>

              <div className='flex items-start gap-5 bg-slate-900 border border-slate-800 p-6 rounded-3xl'>

                <FaPhoneAlt className='text-3xl text-cyan-400 mt-1' />

                <div>

                  <h3 className='text-2xl font-semibold'>
                    Phone
                  </h3>

                  <p className='text-gray-400 mt-2'>
                    +92 300 1234567
                  </p>

                </div>

              </div>

              <div className='flex items-start gap-5 bg-slate-900 border border-slate-800 p-6 rounded-3xl'>

                <FaMapMarkerAlt className='text-3xl text-cyan-400 mt-1' />

                <div>

                  <h3 className='text-2xl font-semibold'>
                    Location
                  </h3>

                  <p className='text-gray-400 mt-2'>
                    Karachi, Pakistan
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div className='bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl'>

            <h2 className='text-4xl font-bold mb-10'>
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className='space-y-6'
            >

              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none'
              />

              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none'
              />

              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none'
              />

              <textarea
                rows='6'
                name='message'
                placeholder='Write your message...'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none resize-none'
              />

              <button
                type='submit'
                disabled={loading}
                className='w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white hover:bg-cyan-600 transition-all py-4 rounded-2xl text-lg font-semibold'
              >

                {loading
                  ? 'Sending...'
                  : 'Send Message'
                }

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact