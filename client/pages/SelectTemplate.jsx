import { useNavigate } from 'react-router-dom'

function SelectTemplate() {
  const navigate = useNavigate()

  const chooseTemplate = (template) => {
    localStorage.setItem('template', template)
    navigate('/create-resume')
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex flex-col items-center justify-center p-10'>
      
      <h1 className='text-5xl font-bold text-center mb-12'>
        Choose Template
      </h1>

      <div className='grid md:grid-cols-3 gap-10 w-full max-w-6xl'>

        {/* MINIMAL */}
        <div className='bg-white p-5 rounded-3xl shadow-xl text-gray-800 flex flex-col justify-between '>
          <div className='flex flex-col items-center w-full'>
            <h2 className='text-3xl font-bold mb-4'>
              Minimal
            </h2>
            <ul className='text-gray-500 space-y-2 list-none text-sm md:text-base'>
              <li>• Clean, distraction-free layout</li>
              <li>• Fully optimized for ATS scanners</li>
              <li>• Perfect for tech & engineering roles</li>
              <li>• Ideal choice for recent freshers</li>
            </ul>
          </div>
          <button
            onClick={() => chooseTemplate('Minimal')}
            className='mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-full md:w-auto'
          >
            Choose
          </button>
        </div>

        {/* MODERN */}
        <div className='bg-white p-5 rounded-3xl shadow-xl text-gray-800 flex flex-col justify-between'>
          <div className='flex flex-col items-center w-full'>
            <h2 className='text-3xl font-bold mb-4'>
              Modern
            </h2>
            <ul className='text-gray-500 space-y-2 list-none text-sm md:text-base'>
              <li>• Dynamic two-column arrangement</li>
              <li>• Dedicated space for portfolio links</li>
              <li>• Includes personal branding profile</li>
              <li>• Tailored for creative & marketing roles</li>
            </ul>
          </div>
          <button
            onClick={() => chooseTemplate('Modern')}
            className='mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto'
          >
            Choose
          </button>
        </div>

        {/* PROFESSIONAL */}
        <div className='bg-white p-5 rounded-3xl shadow-xl text-gray-800 flex flex-col  justify-between '>
          <div className='flex flex-col items-center w-full'>
            <h2 className='text-3xl font-bold mb-4'>
              Professional
            </h2>
            <ul className='text-gray-500 space-y-2 list-none text-sm md:text-base'>
              <li>• Structured executive formatting</li>
              <li>• Built for multi-page work histories</li>
              <li>• Highlight certifications & awards</li>
              <li>• Designed for corporate & senior positions</li>
            </ul>
          </div>
          <button
            onClick={() => chooseTemplate('Professional')}
            className='mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors w-full md:w-auto'
          >
            Choose
          </button>
        </div>

      </div>
    </div>
  )
}

export default SelectTemplate
