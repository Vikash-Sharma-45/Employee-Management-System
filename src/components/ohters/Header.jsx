import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hi <br /> <span className='text-3xl font-semibold'>Vikash 👋</span></h1> 
      <button className='bg-red-600 text-lg font-medium text-white py-2 px-4 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
