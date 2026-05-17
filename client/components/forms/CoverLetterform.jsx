function CoverLetterForm({
  formData,
  setFormData
}) {

  return (

    <div className='space-y-5'>

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
        type='text'
        placeholder='Company'
        value={formData.company}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <textarea
        rows='10'
        placeholder='Letter Content'
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

export default CoverLetterForm