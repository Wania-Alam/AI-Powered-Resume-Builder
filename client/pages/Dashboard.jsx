import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Dashboard() {

  return (
    <div className='min-h-screen bg-gray-100 p-10'>

      <div className='flex justify-between items-center'>

        <h1 className='text-4xl font-bold'>Dashboard</h1>

        <Link to='/create-resume'>
          <button className='bg-blue-600 text-white px-5 py-3 rounded-lg'>
            Create Resume
          </button>
        </Link>

      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>

        {[1, 2, 3].map((item) => (

          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className='bg-white p-6 rounded-2xl shadow-lg'
          >

            <h2 className='text-2xl font-bold'>
              Resume {item}
            </h2>

            <p className='mt-3 text-gray-500'>
              Frontend Developer Resume
            </p>

            <button className='mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg'>
              Edit Resume
            </button>

          </motion.div>

        ))}

      </div>

    </div>
  )
}

export default Dashboard