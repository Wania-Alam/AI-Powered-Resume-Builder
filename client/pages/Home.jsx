import Navbar from '../componenets/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaRobot,
  FaFileDownload,
  FaMagic,
  FaUserTie
} from 'react-icons/fa'

function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='bg-gray-50 overflow-hidden'>

      <Navbar />

      {/* HERO SECTION */}

      <section className='min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex items-center justify-center px-6'>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl'
        >

          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className='text-6xl font-bold leading-tight'
          >
            Build AI-Powered Professional Resumes
          </motion.h1>

          <p className='mt-6 text-xl text-gray-100'>
            Create ATS-friendly resumes instantly using AI
            and land your dream job faster.
          </p>

          <Link to='/register'>
            <button className='mt-10 px-8 py-4 bg-white text-blue-700 rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300'>
              Get Started
            </button>
          </Link>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}

      <section className='py-24 px-6 bg-white'>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'
        >

          <div>

            <h2 className='text-5xl font-bold text-gray-800'>
              About Our Platform
            </h2>

            <p className='mt-6 text-gray-600 leading-8 text-lg'>
              Our AI Resume Builder helps students and professionals
              generate beautiful, ATS-friendly resumes with the power
              of artificial intelligence. Save time, improve your
              resume quality, and stand out from the competition.
            </p>

            <button className='mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition'>
              Learn More
            </button>

          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5
            }}
            className='bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-3xl shadow-2xl text-white'
          >

            <h3 className='text-3xl font-bold'>
              Smart Resume Generation
            </h3>

            <p className='mt-5 text-lg leading-7'>
              AI-powered summaries, skills suggestions,
              professional templates, and instant PDF exports.
            </p>

          </motion.div>

        </motion.div>

      </section>

      {/* FEATURES SECTION */}

      <section className='py-24 bg-gray-100 px-6'>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center'
        >

          <h2 className='text-5xl font-bold text-gray-800'>
            Powerful Features
          </h2>

          <p className='mt-5 text-gray-600 text-lg'>
            Everything you need to create modern resumes
          </p>

        </motion.div>

        <div className='max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {[
            {
              icon: <FaRobot />,
              title: 'AI Generation',
              desc: 'Generate summaries using Gemini AI'
            },
            {
              icon: <FaMagic />,
              title: 'Modern Templates',
              desc: 'Elegant professional resume designs'
            },
            {
              icon: <FaFileDownload />,
              title: 'PDF Export',
              desc: 'Download resume instantly'
            },
            {
              icon: <FaUserTie />,
              title: 'ATS Friendly',
              desc: 'Optimized for hiring systems'
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition'
            >

              <div className='text-5xl text-blue-600'>
                {item.icon}
              </div>

              <h3 className='text-2xl font-bold mt-5'>
                {item.title}
              </h3>

              <p className='mt-4 text-gray-600'>
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* TESTIMONIAL SECTION */}

      <section className='py-24 bg-white px-6'>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center'
        >

          <h2 className='text-5xl font-bold text-gray-800'>
            What Users Say
          </h2>

        </motion.div>

        <div className='max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8'>

          {[
            'Amazing platform! Helped me create resume quickly.',
            'The AI summary generation is extremely useful.',
            'Beautiful templates and smooth experience.'
          ].map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='bg-gray-100 p-8 rounded-3xl shadow-lg'
            >

              <p className='text-gray-700 text-lg leading-7'>
                “{review}”
              </p>

              <h4 className='mt-6 font-bold text-blue-600'>
                User {index + 1}
              </h4>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA SECTION */}

      <section className='py-24 bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-center px-6'>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className='text-5xl font-bold'>
            Start Building Your Resume Today
          </h2>

          <p className='mt-6 text-xl'>
            Generate professional resumes with AI in minutes.
          </p>

          <Link to='/register'>
            <button className='mt-10 px-8 py-4 bg-white text-blue-700 rounded-2xl font-semibold hover:scale-105 transition'>
              Create Resume
            </button>
          </Link>

        </motion.div>

      </section>

      {/* FOOTER */}

      <footer className='bg-gray-900 text-white py-12 px-6'>

        <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10'>

          <div>

            <h2 className='text-3xl font-bold'>
              AI Resume Builder
            </h2>

            <p className='mt-4 text-gray-400'>
              Build modern resumes using AI-powered tools.
            </p>

          </div>

          <div>

            <h3 className='text-xl font-semibold'>
              Quick Links
            </h3>

            <ul className='mt-4 space-y-2 text-gray-400'>
              <li>Home</li>
              <li>Features</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>

          </div>

          <div>

            <h3 className='text-xl font-semibold'>
              Contact Us
            </h3>

            <p className='mt-4 text-gray-400'>
              support@airesume.com
            </p>

            <p className='text-gray-400'>
              +92 300 0000000
            </p>

          </div>

        </div>

        <div className='text-center text-gray-500 mt-10'>
          © 2026 AI Resume Builder. All rights reserved.
        </div>

      </footer>

    </div>
  )
}

export default Home