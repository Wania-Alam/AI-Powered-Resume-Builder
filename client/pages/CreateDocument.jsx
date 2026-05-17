import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // Added useNavigate
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import toast from 'react-hot-toast'
import API from '../services/api'

import CoverLetterForm from '../components/forms/CoverLetterForm'
import InternshipProposalForm from '../components/forms/InternshipProposalForm'
import RecommendationLetterForm from '../components/forms/RecommendationLetterForm'
import JobApplicationForm from '../components/forms/JobApplicationForm'

import CoverLetterTemplate from '../components/templates/CoverLetterTemplate'
import InternshipProposalTemplate from '../components/templates/InternshipProposalTemplate'
import RecommendationLetterTemplate from '../components/templates/RecommendationLetterTemplate'
import JobApplicationTemplate from '../components/templates/JobApplicationTemplate'

function CreateDocument() {
  const { id } = useParams()
  const navigate = useNavigate() 
  const previewRef = useRef()

  const [documentType, setDocumentType] = useState(() => {
    // Intelligently default to selection screen state if coming through SelectDocument dashboard path
    const savedType = localStorage.getItem('documentType')
    localStorage.removeItem('documentType')
    return savedType || 'Cover Letter'
  })

  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    company: '',
    position: '',
    content: '',
    recipient: '',
    sender: '',
    skills: '',
    experience: ''
  })

  useEffect(() => {
    if (id) {
      fetchDocument()
    }
  }, [id])

  const fetchDocument = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await API.get(`/document/single/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setFormData(res.data)
      setDocumentType(res.data.type || 'Cover Letter')
    } catch (err) {
      console.log(err)
      toast.error('Failed to load document')
    }
  }

  // ==========================================
  // SAVE DOCUMENT (Matches CreateResume behavior)
  // ==========================================
  const saveDocument = async () => {
    try {
      const token = localStorage.getItem('token')
      
      if (!token) {
        return toast.error('Please login first')
      }

      // Default title matching strategy if input fields are empty strings
      const payload = {
        ...formData,
        title: formData.title.trim() || `My ${documentType}`,
        type: documentType
      }

      if (id) {
        await API.put(`/document/update/${id}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        toast.success('Document Updated')
      } else {
        await API.post('/document/create', payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        toast.success('Document Saved')
      }

      // Navigates directly back to dashboard to sync with document list UI view
      navigate('/dashboard')

    } catch (err) {
      console.log(err)
      toast.error('Failed to save document')
    }
  }

  // ==========================================
  // PDF DOWNLOAD (With active layout tree fixes)
  // ==========================================
  const downloadPDF = async () => {
    try {
      const element = previewRef.current

      if (!element) {
        return toast.error('Preview content not found')
      }

      toast.loading('Preparing PDF...', { id: 'pdf' })

      const clonedElement = element.cloneNode(true)
      const container = document.createElement('div')

      container.style.position = 'fixed'
      container.style.top = '-9999px'
      container.style.left = '-9999px'
      container.style.width = '794px' // Direct standard pixel dimension translation for A4 aspect ratio limits
      container.style.background = '#ffffff'
      container.style.padding = '40px'
      container.style.boxSizing = 'border-box'

      container.appendChild(clonedElement)
      document.body.appendChild(container)

      // Sanitize colors to avoid OKLCH color spaces crashing canvas engines
      container.querySelectorAll('*').forEach((el) => {
        el.style.color = '#111111'
        const bg = window.getComputedStyle(el).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          el.style.backgroundColor = '#ffffff'
        }
        el.style.borderColor = '#e5e7eb'
      })

      // CRITICAL BUG FIX: Pass container instead of clonedElement to guarantee non-blank exports
      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      })

      document.body.removeChild(container)

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = 210
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${formData.title.trim().replace(/\s+/g, '_') || 'document'}.pdf`)

      toast.success('PDF Downloaded', { id: 'pdf' })
    } catch (err) {
      console.log(err)
      toast.error('PDF download failed', { id: 'pdf' })
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800'>Create Your Document</h1>
          <p className='text-gray-500 mt-1'>Type: {documentType}</p>
        </div>

        <div className='flex gap-4'>
          <button
            onClick={saveDocument}
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition font-medium'
          >
            Save Document
          </button>

          <button
            onClick={downloadPDF}
            className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition font-medium'
          >
            Download PDF
          </button>
        </div>
      </div>
          <p className='text-gray-500 mt-1'>Change Your document Type:</p>

      <select
        value={documentType}
        onChange={(e) => setDocumentType(e.target.value)}
        className='mb-4 p-4 rounded-xl border border-gray-300 bg-white shadow-sm'
      >
        <option value='Cover Letter'>Cover Letter</option>
        <option value='Internship Proposal'>Internship Proposal</option>
        <option value='Recommendation Letter'>Recommendation Letter</option>
        <option value='Job Application'>Job Application</option>
      </select>

      <div className='grid lg:grid-cols-2 gap-10'>
        {/* INPUT STRUCTURE FORMS */}
        <div className='bg-white p-8 rounded-3xl shadow-xl'>
          {documentType === 'Cover Letter' && (
            <CoverLetterForm formData={formData} setFormData={setFormData} />
          )}
          {documentType === 'Internship Proposal' && (
            <InternshipProposalForm formData={formData} setFormData={setFormData} />
          )}
          {documentType === 'Recommendation Letter' && (
            <RecommendationLetterForm formData={formData} setFormData={setFormData} />
          )}
          {documentType === 'Job Application' && (
            <JobApplicationForm formData={formData} setFormData={setFormData} />
          )}
        </div>

        {/* OUTPUT LIVE PREVIEW VIEW */}
        <div ref={previewRef} className='bg-white p-10 rounded-3xl shadow-xl border border-gray-200'>
          {documentType === 'Cover Letter' && (
            <CoverLetterTemplate formData={formData} />
          )}
          {documentType === 'Internship Proposal' && (
            <InternshipProposalTemplate formData={formData} />
          )}
          {documentType === 'Recommendation Letter' && (
            <RecommendationLetterTemplate formData={formData} />
          )}
          {documentType === 'Job Application' && (
            <JobApplicationTemplate formData={formData} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateDocument