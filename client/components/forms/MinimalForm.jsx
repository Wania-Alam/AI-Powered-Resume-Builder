function MinimalForm({ formData, setFormData }) {

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div className='space-y-5'>

      <h2 className='text-3xl font-bold mb-8'>
        Minimal Resume
      </h2>

      {/* PERSONAL INFO */}

      <input
        type='text'
        name='name'
        placeholder='Full Name'
        value={formData.name || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black'
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
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black'
      />

      <input
        type='text'
        name='phone'
        placeholder='Phone Number'
        value={formData.phone || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black'
      />

      {/* SUMMARY */}

      <textarea
        name='summary'
        placeholder='Professional Summary'
        value={formData.summary || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-32 outline-none focus:ring-2 focus:ring-black'
      />

      {/* SKILLS */}

      <textarea
        name='skills'
        placeholder='Skills'
        value={formData.skills || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-28 outline-none focus:ring-2 focus:ring-black'
      />

      {/* EXPERIENCE */}

      <textarea
        name='experience'
        placeholder='Experience'
        value={formData.experience || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-32 outline-none focus:ring-2 focus:ring-black'
      />

      {/* EDUCATION */}

      <textarea
        name='education'
        placeholder='Education'
        value={formData.education || ''}
        onChange={handleChange}
        className='w-full border p-3 rounded-xl h-28 outline-none focus:ring-2 focus:ring-black'
      />

    </div>
  )
}

export default MinimalForm