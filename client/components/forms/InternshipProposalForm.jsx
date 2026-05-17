function InternshipProposalForm({
  formData,
  setFormData
}) {

  return (

    <div className='space-y-5'>

      <input
        type='text'
        placeholder='Proposal Title'
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
        type='text'
        placeholder='University Name'
        value={formData.university}
        onChange={(e) =>
          setFormData({
            ...formData,
            university: e.target.value
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
        placeholder='Internship Role'
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
        rows='4'
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
        placeholder='Proposal Content'
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

export default InternshipProposalForm