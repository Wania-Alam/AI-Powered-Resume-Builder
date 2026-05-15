function ProfileModal({ user }) {

  return (

    <div className='bg-white p-8 rounded-3xl shadow-lg'>

      <img
        src={user.profileImage}
        alt='profile'
        className='w-32 h-32 rounded-full object-cover mx-auto'
      />

      <h2 className='text-3xl font-bold text-center mt-5'>
        {user.name}
      </h2>

      <p className='text-center text-gray-500 mt-3'>
        {user.bio}
      </p>

    </div>

  )
}

export default ProfileModal