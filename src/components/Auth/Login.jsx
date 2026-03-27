import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form className='flex flex-col items-center justify-center'>
            <input required className=' border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type="email" placeholder="Enter your Email" />
            <input required className='  border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 mt-3 rounded-full text-xl placeholder:text-gray-400' type="password" placeholder="Enter your Password" />
            <button className='mt-5 bg-emerald-600 border-none py-3 px-5 text-white rounded-full p-2'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
