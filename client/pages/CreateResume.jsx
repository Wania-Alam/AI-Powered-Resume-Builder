import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import API from '../services/api'

function CreateResume() {

  const resumeRef = useRef()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    jobTitle: '',
    summary: '',
    skills: '',
    education: '',
    experience: '',
    projects: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // =========================
  // AI SUMMARY GENERATION
  // =========================

  const generateSummary = async () => {

    try {

      setLoading(true)

      const res = await API.post('/ai/summary', {
        jobTitle: formData.jobTitle,
        skills: formData.skills
      })

      setFormData({
        ...formData,
        summary: res.data.summary
      })

      toast.success('AI Summary Generated')

    } catch (err) {

      console.log(err)

      toast.error('Failed To Generate Summary')

    } finally {

      setLoading(false)

    }
  }

  // =========================
  // DOWNLOAD PDF
  // =========================

  const downloadPDF = async () => {

    const input = resumeRef.current

    const canvas = await html2canvas(input)

    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

    pdf.save('resume.pdf')

    toast.success('Resume Downloaded')
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6 lg:p-10'>

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className='flex flex-col lg:flex-row justify-between items-center mb-10 gap-5'
      >

        <div>
          <h1 className='text-4xl font-bold text-gray-800'>
            Create Resume
          </h1>

          <p className='text-gray-500 mt-2'>
            Build professional AI-powered resumes
          </p>
        </div>

        <button
          onClick={downloadPDF}
          className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition'
        >
          Download PDF
        </button>

      </motion.div>

      {/* MAIN GRID */}

      <div className='grid lg:grid-cols-2 gap-10'>

        {/* LEFT SIDE FORM */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-white p-8 rounded-3xl shadow-xl'
        >

          <h2 className='text-2xl font-bold mb-8'>
            Resume Information
          </h2>

          {/* PERSONAL INFO */}

          <div className='space-y-5'>

            <input
              type='text'
              name='name'
              placeholder='Full Name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='text'
              name='address'
              placeholder='Address'
              value={formData.address}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='text'
              name='linkedin'
              placeholder='LinkedIn URL'
              value={formData.linkedin}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='text'
              name='github'
              placeholder='GitHub URL'
              value={formData.github}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
              type='text'
              name='jobTitle'
              placeholder='Job Title'
              value={formData.jobTitle}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

            {/* SKILLS */}

            <textarea
              name='skills'
              placeholder='Skills (React, Node.js, MongoDB)'
              value={formData.skills}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-28'
            />

            {/* SUMMARY */}

            <div>

              <div className='flex justify-between items-center mb-3'>

                <h3 className='text-lg font-semibold'>
                  Professional Summary
                </h3>

                <button
                  type='button'
                  onClick={generateSummary}
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition'
                >
                  {loading ? 'Generating...' : 'Generate AI'}
                </button>

              </div>

              <textarea
                name='summary'
                placeholder='Professional Summary'
                value={formData.summary}
                onChange={handleChange}
                className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-40'
              />

            </div>

            {/* EDUCATION */}

            <textarea
              name='education'
              placeholder='Education'
              value={formData.education}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-28'
            />

            {/* EXPERIENCE */}

            <textarea
              name='experience'
              placeholder='Experience'
              value={formData.experience}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-40'
            />

            {/* PROJECTS */}

            <textarea
              name='projects'
              placeholder='Projects'
              value={formData.projects}
              onChange={handleChange}
              className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-32'
            />

          </div>

        </motion.div>

        {/* RIGHT SIDE PREVIEW */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          <div
            ref={resumeRef}
            className='bg-white min-h-screen p-10 rounded-3xl shadow-2xl'
          >

            {/* HEADER */}

            <div className='border-b pb-6'>

              <h1 className='text-5xl font-bold text-gray-800'>
                {formData.name || 'Your Name'}
              </h1>

              <p className='text-xl text-blue-600 mt-2'>
                {formData.jobTitle || 'Job Title'}
              </p>

              <div className='mt-4 text-gray-600 space-y-1'>

                <p>{formData.email}</p>
                <p>{formData.phone}</p>
                <p>{formData.address}</p>
                <p>{formData.linkedin}</p>
                <p>{formData.github}</p>

              </div>

            </div>

            {/* SUMMARY */}

            <div className='mt-8'>

              <h2 className='text-2xl font-bold border-b pb-2'>
                Professional Summary
              </h2>

              <p className='mt-4 text-gray-700 leading-7 whitespace-pre-line'>
                {formData.summary}
              </p>

            </div>

            {/* SKILLS */}

            <div className='mt-8'>

              <h2 className='text-2xl font-bold border-b pb-2'>
                Skills
              </h2>

              <p className='mt-4 text-gray-700 whitespace-pre-line'>
                {formData.skills}
              </p>

            </div>

            {/* EDUCATION */}

            <div className='mt-8'>

              <h2 className='text-2xl font-bold border-b pb-2'>
                Education
              </h2>

              <p className='mt-4 text-gray-700 whitespace-pre-line'>
                {formData.education}
              </p>

            </div>

            {/* EXPERIENCE */}

            <div className='mt-8'>

              <h2 className='text-2xl font-bold border-b pb-2'>
                Experience
              </h2>

              <p className='mt-4 text-gray-700 whitespace-pre-line'>
                {formData.experience}
              </p>

            </div>

            {/* PROJECTS */}

            <div className='mt-8'>

              <h2 className='text-2xl font-bold border-b pb-2'>
                Projects
              </h2>

              <p className='mt-4 text-gray-700 whitespace-pre-line'>
                {formData.projects}
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default CreateResume