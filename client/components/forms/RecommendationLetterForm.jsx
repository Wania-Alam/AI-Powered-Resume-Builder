function RecommendationLetterForm({
  formData,
  setFormData
}) {

  return (

    <div className='space-y-5'>

      <input
        type='text'
        placeholder='Letter Title'
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
        placeholder='Recommended Person Name'
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
        placeholder='Recommender Name'
        value={formData.sender}
        onChange={(e) =>
          setFormData({
            ...formData,
            sender: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Designation'
        value={formData.designation}
        onChange={(e) =>
          setFormData({
            ...formData,
            designation: e.target.value
          })
        }
        className='w-full border p-4 rounded-xl'
      />

      <input
        type='text'
        placeholder='Organization'
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
        rows='4'
        placeholder='Skills & Strengths'
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
        placeholder='Recommendation Content'
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

export default RecommendationLetterForm