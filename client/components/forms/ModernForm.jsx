function ModernForm({ formData, setFormData }) {

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div className='space-y-5'>

      <h2 className='text-3xl font-bold mb-8 text-blue-700'>
        Modern Resume
      </h2>

      {/* PERSONAL INFO */}

      <input
        type='text'
        name='name'
        placeholder='Full Name'
        value={formData.name || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      <input
        type='text'
        name='jobTitle'
        placeholder='Job Title'
        value={formData.jobTitle || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      <input
        type='email'
        name='email'
        placeholder='Email Address'
        value={formData.email || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      <input
        type='text'
        name='phone'
        placeholder='Phone Number'
        value={formData.phone || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      <input
        type='text'
        name='linkedin'
        placeholder='LinkedIn URL'
        value={formData.linkedin || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      <input
        type='text'
        name='github'
        placeholder='GitHub URL'
        value={formData.github || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* SUMMARY */}

      <textarea
        name='summary'
        placeholder='Professional Summary'
        value={formData.summary || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* SKILLS */}

      <textarea
        name='skills'
        placeholder='Skills'
        value={formData.skills || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-28 outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* PROJECTS */}

      <textarea
        name='projects'
        placeholder='Projects'
        value={formData.projects || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* EXPERIENCE */}

      <textarea
        name='experience'
        placeholder='Experience'
        value={formData.experience || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-40 outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* EDUCATION */}

      <textarea
        name='education'
        placeholder='Education'
        value={formData.education || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-28 outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* CERTIFICATIONS */}

      <textarea
        name='certifications'
        placeholder='Certifications'
        value={formData.certifications || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-28 outline-none focus:ring-2 focus:ring-blue-500'
      />

    </div>
  )
}

export default ModernForm