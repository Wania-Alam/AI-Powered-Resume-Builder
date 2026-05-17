function JobApplicationForm({
  formData,
  setFormData
}) {

  return (

    <div className='space-y-5'>

      <input
        type='text'
        placeholder='Application Title'
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Full Name'
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Phone Number'
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Company Name'
        value={formData.company}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Job Position'
        value={formData.position}
        onChange={(e) =>
          setFormData({
            ...formData,
            position: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <textarea
        rows='5'
        placeholder='Experience'
        value={formData.experience}
        onChange={(e) =>
          setFormData({
            ...formData,
            experience: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <textarea
        rows='5'
        placeholder='Skills'
        value={formData.skills}
        onChange={(e) =>
          setFormData({
            ...formData,
            skills: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <textarea
        rows='10'
        placeholder='Application Content'
        value={formData.content}
        onChange={(e) =>
          setFormData({
            ...formData,
            content: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

    </div>
  )
}

export default JobApplicationForm