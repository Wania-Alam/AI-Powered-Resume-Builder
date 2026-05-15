import { motion } from 'framer-motion'

function DocumentsSection() {

  return (

    <div>

      <h1 className='text-4xl font-bold text-gray-800'>
        Career Documents
      </h1>

      <p className='text-gray-500 mt-2'>
        Generate AI-powered career documents
      </p>

      <div className='grid md:grid-cols-2 gap-8 mt-10'>

        {[
          'Cover Letter',
          'Recommendation Letter',
          'Internship Proposal',
          'Job Application Email'
        ].map((doc, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className='bg-white p-8 rounded-3xl shadow-lg'
          >

            <h2 className='text-2xl font-bold'>
              {doc}
            </h2>

            <p className='mt-3 text-gray-500'>
              Generate professional {doc.toLowerCase()}
            </p>

            <button className='mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg'>
              Generate
            </button>

          </motion.div>

        ))}

      </div>

    </div>

  )
}

export default DocumentsSection