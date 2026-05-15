import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import API from '../services/api'

import ModernTemplate from '../componenets/templates/Moderntemplate'
import MinimalTemplate from '../componenets/templates/MinimalTemplate'
import ProfessionalTemplate from '../componenets/templates/ProfessionalTemplate'

function CreateResume() {

  const resumeRef = useRef()
  const [loading, setLoading] = useState(false)

  // Template should come from dashboard (or default)
  const selectedTemplate = localStorage.getItem('template') || 'Professional'

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

  // =========================
  // INPUT HANDLER
  // =========================
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

    } catch (error) {
      console.log(error)
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
      <div className='flex justify-between items-center mb-8'>

        <div>
          <h1 className='text-4xl font-bold text-gray-800'>
            Create Resume
          </h1>

          <p className='text-gray-500 mt-2'>
            Template: {selectedTemplate}
          </p>
        </div>

        <button
          onClick={downloadPDF}
          className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl'
        >
          Download PDF
        </button>

      </div>

      {/* MAIN GRID */}
      <div className='grid lg:grid-cols-2 gap-10'>

        {/* =========================
            LEFT SIDE FORM
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className='bg-white p-8 rounded-3xl shadow-xl'
        >

          <h2 className='text-2xl font-bold mb-6'>
            Resume Information
          </h2>

          {/* INPUT STYLE (YOUR ORIGINAL STYLE KEPT) */}

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='name'
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='linkedin'
            placeholder='LinkedIn'
            value={formData.linkedin}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='github'
            placeholder='GitHub'
            value={formData.github}
            onChange={handleChange}
          />

          <input
            className='w-full border p-3 rounded-xl mb-4'
            name='jobTitle'
            placeholder='Job Title'
            value={formData.jobTitle}
            onChange={handleChange}
          />

          {/* SUMMARY */}
          <div className='mb-4'>

            <div className='flex justify-between items-center mb-2'>
              <h3 className='font-semibold'>Summary</h3>

              <button
                onClick={generateSummary}
                className='bg-blue-600 text-white px-3 py-1 rounded text-sm'
              >
                {loading ? 'Generating...' : 'AI'}
              </button>
            </div>

            <textarea
              className='w-full border p-3 rounded-xl'
              name='summary'
              placeholder='Summary'
              value={formData.summary}
              onChange={handleChange}
            />
          </div>

          <textarea
            className='w-full border p-3 rounded-xl mb-4'
            name='skills'
            placeholder='Skills'
            value={formData.skills}
            onChange={handleChange}
          />

          <textarea
            className='w-full border p-3 rounded-xl mb-4'
            name='education'
            placeholder='Education'
            value={formData.education}
            onChange={handleChange}
          />

          <textarea
            className='w-full border p-3 rounded-xl mb-4'
            name='experience'
            placeholder='Experience'
            value={formData.experience}
            onChange={handleChange}
          />

          <textarea
            className='w-full border p-3 rounded-xl'
            name='projects'
            placeholder='Projects'
            value={formData.projects}
            onChange={handleChange}
          />

        </motion.div>

        {/* =========================
            RIGHT SIDE PREVIEW
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <div
            ref={resumeRef}
            className='bg-white rounded-3xl shadow-2xl overflow-hidden'
          >

            {selectedTemplate === 'Modern' && (
              <ModernTemplate formData={formData} />
            )}

            {selectedTemplate === 'Minimal' && (
              <MinimalTemplate formData={formData} />
            )}

            {selectedTemplate === 'Professional' && (
              <ProfessionalTemplate formData={formData} />
            )}

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default CreateResume