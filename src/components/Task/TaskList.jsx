import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto justify-start items-center gap-5 flex-nowrap h-[55%] w-full mt-10 py-5'>
        <div className='flex-shrink-0 h-full p-5 w-[400px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea quos officia eius, vel quod!</p>
        </div>
        <div className='flex-shrink-0 h-full p-5 w-[400px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea quos officia eius, vel quod!</p>
        </div>
        <div className='flex-shrink-0 h-full p-5 w-[400px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea quos officia eius, vel quod!</p>
        </div>
        <div className='flex-shrink-0 h-full p-5 w-[400px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea quos officia eius, vel quod!</p>
        </div>
        <div className='flex-shrink-0 h-full p-5 w-[400px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ea quos officia eius, vel quod!</p>
        </div>
      
    </div>
  )
}

export default TaskList
