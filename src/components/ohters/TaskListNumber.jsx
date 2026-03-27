import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl bg-red-400 w-[45%] px-9 py-6'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-4xl font-medium'>New Task</h1>
      </div>
      <div className='rounded-xl bg-blue-400 w-[45%] px-9 py-6'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-4xl font-medium'>New Task</h1>
      </div>
      <div className='rounded-xl bg-green-400 w-[45%] px-9 py-6'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-4xl font-medium'>New Task</h1>
      </div>
      <div className='rounded-xl bg-yellow-400 w-[45%] px-9 py-6'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-4xl font-medium'>New Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumber
