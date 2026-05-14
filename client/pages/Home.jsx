import Navbar from '../componenets/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <Navbar />

      <div className='min-h-screen bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white px-10'>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >

          <h1 className='text-6xl font-bold'>
            Build Professional AI Resumes
          </h1>

          <p className='mt-6 text-xl'>
            Create ATS-friendly resumes using AI.
          </p>

          <Link to='/register'>
            <button className='mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl hover:scale-105 transition'>
              Get Started
            </button>
          </Link>

        </motion.div>

      </div>

    </div>
  )
}

export default Home