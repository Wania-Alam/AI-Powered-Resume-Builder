import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-5 py-2 bg-white fixed w-full '>
      
      {/* BRANDING LOGO */}
      <Link to="/" className="flex items-center gap-1 group">
        <h1 className='text-3xl font-extrabold  font-logo bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition duration-300'>
          CV Forge
        </h1>
      </Link>

      {/* NAVIGATION LINKS */}
      <div className='flex items-center gap-6 text-gray-600 font-medium font-heading'>
        <Link to='/' className='hover:text-blue-600 transition-colors duration-200'>
          Home
        </Link>
        <Link to='/login' className='hover:text-blue-600 transition-colors duration-200'>
          Login
        </Link>
        <Link to='/register' className='bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm shadow-blue-100'>
          Register
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
